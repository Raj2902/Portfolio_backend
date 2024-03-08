const express = require("express");

const connect = require("./database_conn/conn");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3001;

const helloWorldRouter = require("./routes/helloWorld"); // Import the routes
const sendMailRouter = require("./routes/sendMail"); // Import the routes

// Use middleware here (e.g., body-parser for parsing request body data)

var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api", helloWorldRouter); // Mount the router at a specific path (optional)
app.use("/api/mail", sendMailRouter);

app.post("/check", (req, res) => {
  res.send("yes its working");
});

app
  .listen(port, (error) => {
    console.log(`Server listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error starting server:", err);
  });
