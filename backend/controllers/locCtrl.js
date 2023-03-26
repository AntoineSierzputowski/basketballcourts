const basketball_courts = require("../models/courts"); // importer le model

exports.getAllLocations = (req, res, next) => {
  basketball_courts
    .basketballCourts() // function avec la promise
    .then((courts) => {
      courts.sort((a, b) => parseFloat(b.level) - parseFloat(a.level)); // du mieux noté au moins bien noté
      res.status(200).json(courts);
    })
    .catch(() => {
      res.status(500).send(new Error("Database error!"));
    });
};

exports.locationUser = (req, res, next) => {
  if (req.body.location_input == 0) {
    return res.status(400).send(new Error("Bad req"));
  }

  //  console.log("Test: ", basketball_courts.array_courts());
  var level_user = req.body.location_input;
  const myArray = [];
  basketball_courts.array_courts().forEach((element) => {
    var dif_level = Math.abs(level_user - element.level);
    myArray.push(dif_level);
  });
  myArray.sort((a, b) => a - b);
  //console.log("array: ", myArray);
  res.status(201).json({
    a_test: "Test",
    body: req.body,
    data: req.body.location_input,
    array: myArray,
  });
};
exports.test = (req, res, next) => {
  const a = basketball_courts.array_courts();
  res.status(201).json({
    a,
  });
};

exports.court = (req, res, next) => {
  let objectId = req.originalUrl.substring(1);
  basketball_courts
    .findCourtById(objectId)
    .then((court) => {
      res.status(200).json(court);
      console.log("court: ", court);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
};
