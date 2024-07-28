import { User } from "../model/User_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const saltRound = Number(process.env.SALTROUND);

// User Signin
export const User_Signin = async (req, res) => {
  const { user_name, user_email, user_mobile_no, user_password, user_address } =
    req.body;
  if (
    !user_name &&
    user_name.trim() === "" &&
    !user_email &&
    user_email.trim() === "" &&
    !user_password &&
    user_password.trim() === "" &&
    !user_address &&
    user_address.trim() === "" &&
    !user_mobile_no &&
    user_mobile_no === undefined
  ) {
    return res
      .status(422)
      .json({ error: "user has not provided signin data " });
  }
  const existing_user_by_email = await User.findOne({ user_email });
  console.log(existing_user_by_email);
  if (
    existing_user_by_email != null &&
    Object.keys(existing_user_by_email).length > 0
  ) {
    return res.status(422).json({
      message: "User by this email id is already  exists go for login",
    });
  } else {
    let user;
    try {
      console.log(saltRound);
      console.log(user_password);
      const hashed_Password = bcrypt.hashSync(user_password, saltRound);
      console.log(hashed_Password);
      user = new User({
        user_name,
        user_email,
        user_mobile_no,
        user_password: hashed_Password,
        user_address,
      });
      await user.save();
    } catch (err) {
      console.log({ Failed_to_Signin_user: err });
    }
    if (!user) {
      return res.status(500).json({ error: "failed to get new users data" });
    }
    return res.status(201).json({ message: "Successfully signin", user });
  }
};

// User Login
export const User_Login = async (req, res) => {
  const { user_email, user_password } = req.body;
  if (
    !user_email &&
    user_email.trim() === "" &&
    !user_password &&
    user_password.trim() === ""
  ) {
    return res.status(422).json({ error: "user has not provided login data " });
  }
  let existing_user;
  try {
    existing_user = await User.findOne({ user_email });
  } catch (err) {
    console.log({ Failed_to_get_user_data: err });
  }
  console.log(existing_user);
  const result = bcrypt.compareSync(user_password, existing_user.user_password);
  if (!result) {
    return res.status(422).json({ message: "Invalid password" });
  }
  const Token = jwt.sign(
    { id: existing_user._id },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" }
  );
  console.log(`Toeken: ${Token}`);
  return res.status(200).json({ user:{_id: existing_user._id}, token: Token });
};

// get All users
export const get_all_User = async (req, res) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log({ Failed_to_get_users: err });
  }
  if (!users) {
    return res.status(404).json({ error: "Users not found" });
  }
  return res.status(200).json({ users });
};
// Delete User
export const Delete_user = async (req, res, next) => {
  const id = req.params.id;
  if (!id && id.trim() === "") {
    return res.status(404).json({ message: " UserId not found " });
  }

  console.log(`id: ${id}`);

  let deleted_user;

  try {
    deleted_user = await User.findByIdAndDelete(id);
  } catch (err) {
    console.log({ Failed_to_delete_user_data: err });
  }

  if (!deleted_user) {
    return res
      .status(500)
      .json({ error: "Failed to delete due to server failure" });
  }
  return res.status(200).json({ message: "deleted Succesfully" });
};

// get user by id
export const get_User_by_id = async (req, res) => {
  const id = req.params.id;
  if (!id && id.trim() === "") {
    return res.status(404).json({ message: "User id not found" });
  }
  console.log(`id: ${id}`);

  let user;
  try {
    user = await User.findById(id);
  } catch (err) {
    console.log({ Failed_to_get_user_data_by_id: err });
  }
  if (!user) {
    return res
      .status(505)
      .json({ error: "Failed to fetch specific user data" });
  }
  return res.status(200).json({ user });
};
