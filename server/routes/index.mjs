import express from 'express';
var router = express.Router()
import cors from 'cors';
const app = express();
app.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("index")
  res.render('index', { title: 'Our express app is working properly' });
});

export default router;

