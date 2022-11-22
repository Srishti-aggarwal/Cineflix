  const mongoose = require("mongoose");

  const UserSchema = new mongoose.Schema(
      {
          username: { type: String, required: true,unique: true},
          email: { type: String},
          password: { type: String},
          profilePic: { type: String, default: ""},
          isAdmin: { type: Boolean,default: true}
      },
      { timestamps: true }
  );

  module.exports = mongoose.model("User",UserSchema);