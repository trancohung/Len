import userModel from "../models/user.model.js";

const userController = {
  getAll: async (req, res) => {
    try {
      res.send("User");
    } catch (error) {
      console.error("Error fetching users: ", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default userController;
