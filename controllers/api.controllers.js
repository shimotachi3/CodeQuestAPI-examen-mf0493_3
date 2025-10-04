const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");
const { generateQuestions, getRandomQuestionsDB } = require('../services/question.services');

/**
 * Get random questions from the service.
 *
 * Example:
 *   /api/v1/questions/random?amount=5&difficulty=hard -> there are no hard questions in the data base
 */
const getRandomQuestions = async (req, res) => {
	try {
		let { amount, difficulty } = req.query;
		amount = parseInt(amount, 10);

		// Validation of amount
		if (isNaN(amount) || amount < 1) {
			amount = 10;
		} else if (amount > 30) {
			amount = 30;
		}

		// Normalize difficulty if provided
		if (typeof difficulty === "string") {
			difficulty = difficulty.trim().toLowerCase();
		} else {
			difficulty = null;
		}

		// Optional validation of difficulty
		const validDifficulties = ["easy", "medium", "hard"];
		if (difficulty && !validDifficulties.includes(difficulty)) {
			return res.status(400).json({
				message: `Invalid difficulty. Allowed values: ${validDifficulties.join(", ")}.`,
			});
		}

		// Build filter for database query
		const filter = {};
		if (difficulty) filter.difficulty = difficulty;

		const randomQuestion = await getRandomQuestionsDB(amount, filter);

		res.status(200).json({
			message: "Random questions delivered successfully",
			results: randomQuestion,
		});
	} catch (error) {
		console.error("Error fetching random questions:", error);
		res.status(500).json({
			message: "Error fetching random questions",
		});
	}
};

// Controller function to handle requests for generating AI-based questions
const getAiQuestions = async (req, res) => {
	const topic = req.query.topic || "Frontend and Backend programming";
	const amount = Math.min(Math.max(parseInt(req.query.amount) || 1, 1), 10);
	try {
		const questions = await generateQuestions(topic, amount);
		return res.status(200).json({
			message: "Random questions delivered successfully.",
			results: questions,
		});
	} catch (error) {
		console.error(
			"Error generating the questions:",
			error.response ? error.response.data : error.message
		);
		return res.status(400).json({
			message: error.message || "An error occurred while generating the questions.",
		});
	}
};

module.exports = {
	getRandomQuestions,
	getAiQuestions
};
