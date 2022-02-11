import mongoose from "mongoose";

const schema_user = new mongoose.Schema({
    name: { type: String, minlength: 3, maxlength: 12, unique: true },
    password: { type: String, minlength: 8, maxlength: 16 },
    role: { type: String, enum: ["user", "administrator"] },
    cookie: { type: String },
    cookie_exp_timestamp: { type: Number },
});

//collection name will be user + s = users
const model_user = mongoose.model("user", schema_user);

export default model_user;