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
    cateId: { 
      type: mongoose.SchemaType.ObjectId,
      required: true,
      ref: "categories",
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

export default productModel;
