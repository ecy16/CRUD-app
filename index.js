const express= require ('express');
//create an app and configure it to parse requests with JSON payloads.
const app = express ();
app.use(express.json());

//make a server that listens to a port for incoming requests
app.listen(3000,()=>{
console.log("server listening on port 3000");
})

//app.method(two parameters) endpoint,callback function
// This function has two parameters: the request object (which contains details like the HTTP method, headers, and request body) 
//and the response object (which defines the information that we want to send)

app.get('/status', (request, response)=>{

  const status = {
    "status":"running"
  }
  response.send(status);
});























































































































































// const express = require('express')
// const cors = require('cors')
// const fs = require('fs')

// const app = express()
// const bodyParser = require('body-parser')
// const { stringify } = require('querystring')

// const users = [
//   {
//     firstName: '',
//     lastName: '',
//     email: '',
//     county: '',
//   },
// ]


// var data = fs.readFileSync('db.json');
// var myObject = JSON.parse(data);

// const newUser = [
//   {
//     firstName: 'claire',
//     lastName: 'nyambu',
//     email: 'claire@gmail.com',
//     county: '40',
//   },
// ]

// myObject.push(newUser);

// //ading data to a json file
// var newUser2 = JSON.stringify(myObject);
// fs.writeFile('db.json', newUser2, err => {

//   if (err) throw err;

//   console.log();
// });

// app.use(cors())
// app.use(express.json())
// // const port = 3000

// app.use(bodyParser.urlencoded({ extended: false }))



// app.get('/users', (req, res) => {
//   res.json({ "users": users })
// })
// app.post('/users', (req, res) => {
//   console.log("body", req.body)

//   // store the req.body in a const named newUser
//   const newUser = (req.body)
//   // push newUser to the list of users
//   users.push(newUser)
//   // return message showing user added successfully
//   return res.json({message:'successful'})
// })
// app.put('/users',(req,res)=>{
//   return res.json({message:'update'})
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost`)
// })

