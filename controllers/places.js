const router = require("express").Router();

router.get("/", (req, res) => {
  let places = [
    {
      name: "Roney's Pizza",
      city: "Seattle",
      state: "WA",
      cuisines: "Pizza, Breadsticks",
      pic: "/images/tonysPizza.jpg",
    },
    {
      name: "Tony's Pizza",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Pizza, Breadsticks",
      pic: "/images/pablosPizza.jpg",
    },
  ];
  res.render("places/index", { places });
});

module.exports = router;
