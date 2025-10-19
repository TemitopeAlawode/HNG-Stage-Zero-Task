// Importing req and res from express
import axios from 'axios';
import { Request, Response } from 'express'

// ================================================
// @desc   Get User Profile
// @route  GET /me
// @access Public
// ================================================
export const getUserProfileAndCatFact = async (req: Request, res: Response) => {
    try {
        // Fetch cat fact with timeout
        const catResponse = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });
        const catFact = catResponse.data.fact || 'No cat fact available right now!!'; // Fallback if API fails

        // Get Current UTC time in ISO 8601 format
        const timestamp = new Date().toISOString();
        console.log(timestamp);

        // My personal information
        const user = {
            email: process.env.USER_EMAIL,
            name: process.env.USER_NAME,
            stack: process.env.USER_STACK
        }

        // Build response 
        const response = {
            status: 'success',
            user,
            timestamp,
            fact: catFact
        }


        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        // Fetch status 503 if service is not available
        res.status(503).json({
            status: 'error',
            message: 'Service unavailable: Could not fetch cat fact',
            timestamp: new Date().toISOString()
        });

    }
}