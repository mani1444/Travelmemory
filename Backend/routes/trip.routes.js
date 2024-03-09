const express = require('express')
const routes = express.Router()

const tripDetail = require('../controllers/trip.controller')

routes.post('/', tripDetail.tripAdditionController) // Add a new trip
routes.get('/', tripDetail.getTripDetailsController) // Get all trips
routes.get('/:id', tripDetail.getTripDetailsByIdController) // Get trip by ID

module.exports = routes;
