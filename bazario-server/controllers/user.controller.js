//import mongoose from "mongoose";
import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import Crypto from "crypto";

const { scryptSync, randomBytes } = Crypto;

//Post : createUser
export const signup = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, gender, dob, password, contact, address } = req.body;

  try {
    console.log("Received data:", req.body);

    const userExist = await User.findOne({ email });
    if (userExist) {
      console.log("User already exists");
      return res.status(400).json({ message: "User already exists" });
    }
    const salt = randomBytes(8).toString("hex");

    const hashedPassword = scryptSync(password, salt, 64).toString("hex");
    const user = await User.create({
      uid: Math.floor(100000 + Math.random() * 900000),
      firstName : firstName,
      lastName : lastName,
      email : email,
      address: address,
      gender : gender,
      dob: dob,
      password: hashedPassword,
      contact: contact,
    });
    res.status(201).json({ result: user });
  } catch (err) {
    console.error("Error details:", err);
    res.status(500).json({ message: "Something went wrong.." });
  }
});

