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
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error registering user: ", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default userController;
