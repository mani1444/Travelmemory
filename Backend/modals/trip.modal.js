const db = require('../conn');
const mongoose = require('../conn').mongoose;

const tripSchema = mongoose.Schema({
    tripName: {
        type: mongoose.Schema.Types.String,
        required: true,
        minlength: 1,
        maxlength: 50,
    },
    startDateofJourney: {
        type: String,
        required: true,
    },
    endDateJourney: {
        type: String,
        required: true,
    },
    nameHotels: {
        type: String,
    },
    placeVisted: {
        type: String,
    },
    totalcost: {
        type: Number,
    },
    tripType: {
        type: String,
        enum: ['backpacking', 'leisure', 'business'],
    },
    experience: {
        type: String,
    },
    image: {
        type: String,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    createdat: {
        type: Date,
        default: Date.now(),
    },
});

const Trip = mongoose.model('tripdetails', tripSchema);
module.exports = { Trip };
