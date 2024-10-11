import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>I am a software engineer.</p>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Conatct Me</h1><p>You can reach me at: 123-456-7890</p>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
