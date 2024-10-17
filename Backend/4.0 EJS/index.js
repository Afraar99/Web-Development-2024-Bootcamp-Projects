import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {

    const today = new Date();
    const currentDay = today.getDay();

    let type = "a weekday";
    let adv = "its a good day to start something new";

    if (currentDay === 0 || currentDay === 6) {
        type = "a weekend";
        adv = "its a good day to relax";
    }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
