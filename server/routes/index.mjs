import express from 'express';
var router = express.Router()
import cors from 'cors';
import bodyParser from "body-parser";
const app = express();
app.use(cors());
app.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("index")
  res.render('index', { title: 'Our express app is working properly' });
});

export default router;

