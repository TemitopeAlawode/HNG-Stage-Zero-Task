"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserProfileAndCatFact = void 0;
// Importing req and res from express
const axios_1 = __importDefault(require("axios"));
// ================================================
// @desc   Get User Profile
// @route  GET /me
// @access Public
// ================================================
const getUserProfileAndCatFact = async (req, res) => {
    try {
        // Fetch cat fact with timeout
        const catResponse = await axios_1.default.get('https://catfact.ninja/fact', { timeout: 5000 });
        const catFact = catResponse.data.fact || 'No cat fact available right now!!'; // Fallback if API fails
        // Get Current UTC time in ISO 8601 format
        const timestamp = new Date().toISOString();
        console.log(timestamp);
        // My personal information
        const user = {
            email: process.env.USER_EMAIL,
            name: process.env.USER_NAME,
            stack: process.env.USER_STACK
        };
        // Build response 
        const response = {
            status: 'success',
            user,
            timestamp,
            fact: catFact
        };
        res.status(200).json(response);
    }
    catch (error) {
        console.error(error);
        // Fetch status 503 if service is not available
        res.status(503).json({
            status: 'error',
            message: 'Service unavailable: Could not fetch cat fact',
            timestamp: new Date().toISOString()
        });
    }
};
exports.getUserProfileAndCatFact = getUserProfileAndCatFact;
