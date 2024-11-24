const Trip = require("../models/tripModel");

const tripController = {

    getTrips: async (req, res) => {
        try {
            const Trips = await Trip.find();
            res.status(200).json(Trips);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    createTrip: async (req, res) => {
        try {
            const newTrip = new Trip(req.body);
            const savedTrip = await newTrip.save();
            res.status(201).json(savedTrip);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    updateTrip: async (req, res) => {
        try {
            const { id } = req.params;
            const Update = req.body;
            const updatedTrip = await Trip.findByIdAndUpdate(id, Update, { new: true });
            if (!updatedTrip) {
                return res.status(404).json({ message: 'Trip not found!' });
            }
            res.status(200).json(updatedTrip);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteTrip: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedTrip = await Trip.findByIdAndDelete(id); 
            if (!deletedTrip) {
                return res.status(404).json({ message: 'Trip not found!' });
            }
            res.status(200).json({ message: 'Trip deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = tripController;