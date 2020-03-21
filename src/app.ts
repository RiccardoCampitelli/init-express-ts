import express, { Application } from "express";

const app: Application = express();

const exampleJson = {
  value: "test",
  arrayOfValues: ["one", "two", "three"]
};

app.get("/", (req, res) => {
  res.send(exampleJson);
});

app.listen(5000, () => console.log("server running"));
