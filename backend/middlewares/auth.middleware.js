import userModel from "../models/user.model";

const validateUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  // Check if email is in valid format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Check if password meets criteria (e.g., length)
  if (password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters long" });
  }

  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: "Email already exists" });
  }

  next();
};

const userMiddleware = {
  validateUser,
};

export default userMiddleware;
