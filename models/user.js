import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  pic: { type: String },
});

const UserModel = model("User", UserSchema);

export default UserModel
