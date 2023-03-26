const express = require("express");
const router = express.Router();
const locationsCtrl = require("../controllers/locCtrl");

router.get("/all_courts", locationsCtrl.getAllLocations);
router.post("/userlocation", locationsCtrl.locationUser);
router.get("/test", locationsCtrl.test);
router.get("/:id", locationsCtrl.court);
module.exports = router;
