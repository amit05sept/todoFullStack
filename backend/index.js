
const express = require("express");
const connectDb = require("./Db");
const todoRouter = require("./routes/todoRoutes");
const app = express();

const port = 3000;

connectDb().then(() => {
  app.listen(port);
}).catch(err=>{
  console.log(err);  
});


app.use(express.json());

app.get("/", (req, res) => {
    // home page
  res.json({ msg: "home page" });
});

app.use("/todo",todoRouter);

app.use((err, req, res, next) => {
    console.log(err);
  res.send("invalid path");
});
