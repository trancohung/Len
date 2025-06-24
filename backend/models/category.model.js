import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamp: false }
);

const categoryModel = mongoose.model("Category", categorySchema);

export default categoryModel;