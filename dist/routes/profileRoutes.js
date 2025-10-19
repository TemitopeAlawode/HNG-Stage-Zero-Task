"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Importing express
// Importing APIs handlers (Controllers)
const profileController_1 = require("../controllers/profileController");
// Initialize router
const router = express_1.default.Router();
router.get('/me', profileController_1.getUserProfileAndCatFact);
exports.default = router;
