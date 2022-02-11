import mongoose from "mongoose";

const schema_item = new mongoose.Schema({
    name: { type: String },
    type: { type: String },
    price: { type: Number },
    count: { type: Number },
    created_by: { type: String }
});

//collection name will be item + s = items
const model_item = mongoose.model("item", schema_item);

export default model_item;