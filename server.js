require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const app = express();
const connectDB = require('./config/connectDB')
const userRoutes = require('./routes/user.routes')
/* connecting to data base */

connectDB()
app.use(express.json());
/*connecting to server*/
const server = app.listen(process.env.PORT, function () {
  let port = process.env.PORT;
  console.log("Server listening on port:", port);
});

app.use('/api/user', userRoutes)