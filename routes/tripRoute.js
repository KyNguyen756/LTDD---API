const tripRouter = require("express").Router();
const tripController = require("../controllers/tripController");

tripRouter.get("/trips", tripController.getTrips);

tripRouter.post("/create", tripController.createTrip);

tripRouter.put("/update/:id", tripController.updateTrip);

tripRouter.delete("/delete/:id", );

module.exports = tripRouter;