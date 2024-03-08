const tripModal = require('../Modals/trip.model')

async function tripAdditionController(req, res) {
    console.log(req, body)
    try {
        let tripDetail = tripDetail.Trip({
            tripname: req.body.tripname,
            startDateofJourney: req.body.startDateofJourney,
            nameofHotels: req.body.nameofHotels,
            placeVisted: req.body.placeVisted,
            totalcost: req.body.tripModal,
            tripType: req.body.tripType, //[backpacking, leisure, business]
            experience: experience,
            image: req.body.image,
            shortDescription: req.body.shortDescription,
            featured: boolean.featured,
        })
        await tripDetail.save(res.send('Trip added Succesfully')

        )
    } catch (error) {
        console.log('ERROR')
        res.send('SOMETHING WENT WROGE')
    }
} 

module.exports = { tripAdditionController }