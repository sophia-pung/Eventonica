import express from "express";
var router = express.Router();
import cors from "cors";
const app = express();
app.use(cors());

let mockUsers = [
  { id: 1, name: "MARLIN", email: "marlin@gmail.com" },
  { id: 2, name: "NEMO", email: "nemo@gmail.com" },
  { id: 3, name: "DORY", email: "dory@gmail.com" },
];

//updates my database on the response end
router.post("/", (req, res) => {
  const user = {
    //name is what you called it, body is the body of the page
    name: req.body.name,
    email: req.body.email,
  };
  console.log(user);
  //req.json(user);
  mockUsers.push(user);
  //return req.send(user);
  return res.redirect("/");
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log(req.body, "the body");
  res.json({ users: mockUsers });
});

export default router;
