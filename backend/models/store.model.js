import mongoose from "mongoose";

const storeSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    name: { type: String, required: true, unique: true },
    description: { type: String },
    avatarUrl: { type: String },
    avatarPublic: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

const storeModel = mongoose.model("Store", storeSchema);

export default storeModel;
