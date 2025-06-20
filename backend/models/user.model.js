import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["Vendor", "Admin"], default: "Vendor" },
    createDate: { type: Date },
    endDate: { type: Date },
    active: { type: Boolean, default: true },
  },
  { timestamp: false }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
