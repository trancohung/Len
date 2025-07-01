import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, trim: true, required: true, select: false },
  role: { type: String, enum: ["Vendor", "Admin"], default: "Vendor" },
  createDate: { type: Date },
  endDate: { type: Date },
  active: { type: Boolean, default: true },
});

userSchema.pre("save", async function (next) {
  if (this.isNew) {
    const createAt = new Date();
    const expireAt = new Date(createAt);
    expireAt.setMonth(createAt.getMonth() + 6); // hết hạn sau 6 tháng

    this.createDate = createAt;
    this.endDate = expireAt;
  }

  // nếu password không được sửa đổi, không cần mã hóa
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
