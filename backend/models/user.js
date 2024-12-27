import mongoose from "mongoose";
import bcrypt from "bcrypt"
const userScheme = mongoose.Schema({
  email: { type: String },
  password: { type: String },
});
const userModel = mongoose.model("User", userScheme);
const insertUser = async (email, password) => {
  const hashedPassword=await bcrypt.hash(password,10);
  let user = new userModel({
    email: email,
    password: hashedPassword,
  });
  await user.save();
  console.log("the user was added successfully");
};

const checkUser = async (email) => {
  const result = await userModel.find({ email: email });
  if (result.length != 0) {
    return true;
  } else {
    return false;
  }
};
const checkEmailAndPassword = async (email, password) => {
  const result = await userModel.findOne({ email: email });
  if (!result) {
    return false;
  }
  const isPasswordValid = await bcrypt.compare(password, result.password);
  return isPasswordValid;
};
export { insertUser, checkUser, checkEmailAndPassword};
