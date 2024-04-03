import express from "express";
import { getUsersForSidebar } from "../controllers/user.controller.js"; // Importing the getUsersForSidebar function
import protectRoute from "../middleware/protectRoute.js"; // Importing the protectRoute middleware

const router = express.Router(); // Creating an instance of Express Router

// Defining a GET route to handle requests for fetching users for the sidebar
router.get("/", protectRoute, getUsersForSidebar);

export default router; // Exporting the router
