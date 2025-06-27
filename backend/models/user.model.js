import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true, select: false },
    role: { type: String, enum: ["Vendor", "Admin"], default: "Vendor" },
    createDate: { type: Date },
    endDate: { type: Date },
    active: { type: Boolean, default: true },
  },
  { timestamp: false }
);

const userModel = mongoose.model("User", userSchema);

userSchema.pre("save", async function (next) {
  if (this.isNew) {
    const currentDate = new Date();
    this.createDate = currentDate;
    this.endDate = new Date(currentDate.setMonth(currentDate.getMonth() + 6)); // hết hạn sau 6 tháng
  }

  // nếu password không được sửa đổi, không cần mã hóa
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export default userModel;
