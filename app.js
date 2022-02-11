/*
npm install express
npm install cookie-parser
npm install mongoose
npm install cors

git init
git config --local user.name "gedcet"
git config --local user.email "gediminas.cet@gmail.com"
git config --local push.default current
echo node_modules/>.gitignore
git remote add origin https://github.com/gedcet/backend.git
git remote -v

git add *
git commit -m "initial commit"
git push
*/

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";

import controller_api_v1_items_create from "./api/v1/controllers/controller_api_v1_items_create.js";
import controller_api_v1_users_create from "./api/v1/controllers/controller_api_v1_users_create.js";
import controller_api_v1_login from "./api/v1/controllers/controller_api_v1_users_login.js";
import middleware_cookies from "./middlewares/middleware_cookies.js";
import middleware_request_cout from "./middlewares/middleware_request_cout.js";
import model_user from "./models/model_user.js";
import model_item from "./models/model_item.js";

//db

//                                      mongodb://username:password@127.0.0.1:port/db_name
const result1 = await mongoose.connect("mongodb://127.0.0.1:27000/db1");

// users

const result2 = await model_user.remove({});

const result3 = await model_user.create({ name: "vardenis", password: "pavardenis", role: "administrator" });

// items

const result4 = await model_item.remove({});

const result5 = await model_item.create({ name: "item1", type: "type1", price: 10.0, count: 3, created_by: "vardenis" });

const result6 = await model_item.create({ name: "item2", type: "type1", price: 20.0, count: 4, created_by: "vardenis" });

//

const app = express();

//middleware
app.use(express.static("./public"));
app.use(cors({ origin: "*" }));
app.use(cookieParser());
app.use(express.json());

//app.use(middleware_cookies);
app.use(middleware_request_cout);

//endpoints

app.post("/api/v1/users", controller_api_v1_users_create);
app.post("/api/v1/login", controller_api_v1_login);
app.post("/api/v1/items", controller_api_v1_items_create);

app.listen(80, "127.0.0.1");