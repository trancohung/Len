import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    storeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "stores",
    },
    name: { type: String, required: true },
    description: { type: String },
    images: [{ type: String }],
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

export default productModel;
