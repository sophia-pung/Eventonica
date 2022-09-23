import express from 'express';
var router = express.Router()
import cors from 'cors';
const app = express();
app.use(cors());

let mockUsers = [
  { id: 1, name: 'MARLIN', email: 'marlin@gmail.com' },
  { id: 2, name: 'NEMO', email: 'nemo@gmail.com' },
  { id: 3, name: 'DORY', email: 'dory@gmail.com' }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.body, 'the body')
  res.json( { users: mockUsers });
});

export default router; 
