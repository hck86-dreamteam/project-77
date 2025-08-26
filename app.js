const express = require("express");
const UserController = require("./controllers/UserController");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res, next) => {
  UserController.login(req, res, next);
});

app.listen(3000, () => console.log("EZ"));
