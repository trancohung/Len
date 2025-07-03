import userModel from "../models/user.model.js";

const userController = {
  // Method to handle user login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ error: "Email and password are required" });
      }
      const user = await userModel.findOne({ email }).select("+password");
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      res.status(200).json({
        message: "Login successful",
        user: { email: user.email, role: user.role },
      });
    } catch (error) {
      console.error("Error logging in user: ", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  register: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ error: "Email and password are required" });
      }
      const existingUser = await userModel.find({ email });
      if (existingUser.length > 0) {
        return res.status(400).json({ message: "Email already exists" });
      }
      const newUser = await userModel.create({
        email,
        password,
      });
      if (!newUser) {
        return res.status(400).json({ message: "Failed to create user" });
      }
      res.status(201).json({
        message: "User registered successfully",
        newUser,
      });
    } catch (error) {
      console.error("Error registering user: ", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getUserProfile: async (req, res) => {
    try {
      const userId = req.user._id;
      const user = await userModel.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error("Error fetching user profile: ", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default userController;
