import mongoose, { Schema, model } from "mongoose";

const UserEducationSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    university: { type: String },
    degree: { type: String },
    year: { type: String },
    desc: { type: String },
  },
  { timestamps: true }
);

const UserEducationModel =
  mongoose.models.UserEducation || model("UserEducation", UserEducationSchema);

export default UserEducationModel;
