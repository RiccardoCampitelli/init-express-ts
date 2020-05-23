import express, { Application } from "express";

const app: Application = express();

const port = 5000;

const exampleJson = {
  value: "test",
  arrayOfValues: ["one", "two", "three"]
};

app.get("/", (req, res) => {
  res.send(exampleJson);
});

app.listen(port, () => console.log(`listening on port: ${port}`));