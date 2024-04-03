import User from '../models/user_model.js'; // Import your User model

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id; // Corrected "req.use" to "req.user"
        const filterUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        return res.status(200).json(filterUsers);
    } catch (error) {
        console.error("Error in getUsersForSidebar controller: ", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
};
