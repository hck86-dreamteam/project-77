const express = require("express");
const UserController = require("./controllers/UserController");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", UserController.register);

app.listen(3000, () => console.log("EZ"));
