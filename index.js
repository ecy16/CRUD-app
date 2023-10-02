const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
const bodyParser = require('body-parser')
const { stringify } = require('querystring')

const users = [
  {
    firstName: '',
    lastName: '',
    email: '',
    county: '',
  },
]


var data = fs.readFileSync('db.json');

var myObject = JSON.parse(data);

//check if myObject is an array
if (!Array.isArray(myObject)) {
  myObject = Array.from(myObject);

}
const newUser = [
  {
    firstName: 'claire',
    lastName: 'nyambu',
    email: 'claire@gmail.com',
    county: '40',
  },
]
myObject.push(newUser);

//ading data to a json file
var newUser2 = JSON.stringify(myObject);

fs.writeFile('db.json', newUser2, err => {

  if (err) throw err;

  console.log();
});

app.use(cors())
app.use(express.json())
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))


app.get('/users', (req, res) => {
  res.json({ "users": users })
})
app.post('/users', (req, res) => {
  console.log("body", req.body)

  // store the req.body in a const named newUser
  const newUser = (req.body)
  // push newUser to the list of users
  users.push(newUser)
  // return message showing user added successfully
  return res.json({message:'successful'})
})
app.put('/users',(req,res)=>{
  return res.json({message:'update'})
})
app.patch('/users',(req,res)=>{
  return res.json(newUser)
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost`)
})

