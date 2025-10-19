// Importing express
import express from 'express';

// Importing dotenv to load env variables
import dotenv from 'dotenv';

// Loads .env file contents into process.env
dotenv.config();

// Initialize the Express application
const app = express();

// Middleware to parse incoming JSON requests (For communication using json in the server)
app.use(express.json());


// Importing Routes
import profileRoutes from './routes/profileRoutes';

// Routes
app.use('', profileRoutes);

// Export app
export default app;