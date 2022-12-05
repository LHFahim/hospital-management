const express = require('express');

const router = express.Router();


const { createService ,fetchService, updateServices, deleteServices} = require('../Controllers/services')

router.post('/createService', createService)
router.get('/fetchService', fetchService)
router.put('/updateServices/:id', updateServices)
router.delete('/deleteServices/:id', deleteServices)


module.exports = router;