import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  phone: { type: String },
  about: { type: String },
  certifications: { type: String },
  skills: [{ type: String }],
});

const UserModel = mongoose.models.User || model("User", UserSchema);

export default UserModel;
