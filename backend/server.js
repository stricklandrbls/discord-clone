// Middleware Imports
const express = require("express");
const http = require("http");
const cors = require('cors');
const mongoose = require("mongoose");

// User defined imports
const authRoutes = require("./routes/auth");
const testRoutes = require("./routes/test");

require("dotenv").config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

// Register Defined Routes
app.use("/api/auth", authRoutes);
app.use("/test", testRoutes);
const server = http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})
// mongoose.connect(process.env.MONGO_URI)
// .then(()=>{
//     server.listen(PORT, () => {
//         console.log(`Server is listening on: ${PORT}`);
//     });
// })
// .catch((err) => {
//     console.log("Server not started: ", err);
// })
