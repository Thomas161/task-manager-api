const express = require("express");
require("./db/mongoose"); //make sure file runs
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

app.use(express.json()); //parse incoming JSON to object
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("listening on " + port);
});
