require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  USER_ID: process.env.USER_ID || "john_doe_17091999",
  EMAIL: process.env.EMAIL || "john@xyz.com",
  ROLL_NUMBER: process.env.ROLL_NUMBER || "ABCD123",
};