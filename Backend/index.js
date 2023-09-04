const express = require('express');
const mongoose = require("mongoose");
const routes = require("./Routes/route");
const server = express();
const cors = require('cors');

server.use(cors());

//Body Parser
server.use(express.json()); 

//DB connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/trikl');
  console.log("db connected");
}

server.use("/trikl", routes.routes);


server.listen(8080,()=>{
    console.log("Server Started");
});