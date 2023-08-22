import mongoose, { Schema, model } from "mongoose";

const UserExperienceSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    startYear: { type: String },
    endYear: { type: String },
    jobRole: { type: String },
    jobType: { type: String },
    companyName : {type : String}
  },
  { timestamps: true }
);

const UserExperienceModel =
  mongoose.models.UserExperience || model("UserExperience", UserExperienceSchema);

export default UserExperienceModel;
