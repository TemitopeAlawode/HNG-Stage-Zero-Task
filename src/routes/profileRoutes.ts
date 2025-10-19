import express from 'express';  // Importing express

// Importing APIs handlers (Controllers)
import { getUserProfileAndCatFact } from '../controllers/profileController';

// Initialize router
const router = express.Router();

router.get('/me', getUserProfileAndCatFact);

export default router;