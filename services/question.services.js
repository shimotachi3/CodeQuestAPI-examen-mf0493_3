const Questions = require('../models/question.model');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { createPrompt } = require("../utils/aiPrompt");

// Function to generate a multiple-choice question using the AI model
const getQuestionsFromAI = async (topic) => {
    const prompt = createPrompt(topic);
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    try {
        const response = await model.generateContent(prompt);
        const generatedText = response.response.text();
        const jsonStart = generatedText.indexOf('{');
        const jsonEnd = generatedText.lastIndexOf('}') + 1;
        return JSON.parse(generatedText.slice(jsonStart, jsonEnd));
    } catch (error) {
        console.error("Error generating the question:", error.response ? error.response.data : error.message);
        throw error;
    }
};

const insertQuestion = async (q) => {
    try {
        await Questions.create(q);
    } catch {
        throw new Error('We could not create the question.');
    }
};

// Function to generate a specified number of questions based on a given topic
const generateQuestions = async (topic, amount) => {
    if (topic.length < 2 || topic.length > 140) {
        throw new Error("Topic must be at least 2 characters and not exceed 140 characters.");
    }

    const questions = [];
    for (let i = 0; i < amount; i++) {
        const quizData = await getQuestionsFromAI(topic);
        questions.push({
            ...quizData,
            status: "pending",
        });
    }

    await Questions.insertMany(questions);
    return questions;
};

// Function to retrieve random questions from the DB, with optional filters (like difficulty)
const getRandomQuestionsDB = async (amount, filter = {}) => {
    console.log(" getRandomQuestionsDB ~ amount:", amount, "filter:", filter);

    if (typeof amount !== "number" || isNaN(amount) || amount < 0) {
        throw new Error("Amount must be a positive number.");
    }

    try {
        // Combine status condition and additional filters (difficulty, etc.)
        const matchCondition = { status: { $ne: 'pending' }, ...filter };

        const questions = await Questions.aggregate([
            { $match: matchCondition },
            { $sample: { size: amount } },
        ]);

        return questions;
    } catch (error) {
        console.error("Error fetching random questions:", error);
        throw new Error("Error fetching random questions from the database.");
    }
};

module.exports = {
    getRandomQuestionsDB,
    getQuestionsFromAI,
    generateQuestions,
    insertQuestion
};
