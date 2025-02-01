const express = require('express');

const app = express();
app.use (express.json());
const {connectDB} = require('./config/db');
require("dotenv").config();


connectDB();

app.get('/', (req, res) => {
  res.send('Hello Wadncbhaesfkgedcyufbasorld');
});    



app.listen(process.env.PORT, () => {                 
  console.log(`Server is running on port ${process.env.PORT}`);
}); 