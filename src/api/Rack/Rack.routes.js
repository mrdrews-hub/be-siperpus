const router = require('express').Router()
const RackController = require('./Rack.controller')

router.get('/', RackController.getRack)
router.get('/find/:id', RackController.getRackDetail)
router.post('/create', RackController.createRack)
router.put('/edit/:id', RackController.updateRack)
router.delete('/delete/:id', RackController.deleteRack)

module.exports = router
