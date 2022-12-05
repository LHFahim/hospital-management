const express = require('express');

const router = express.Router();


const { createDoctor, fetchDoctor, updateDoctor, deleteDoctor } = require('../Controllers/doctor')

router.post('/createDoctor', createDoctor);
router.get('/fetchDoctor', fetchDoctor);
router.put('/updateDoctor/:id', updateDoctor);
router.delete('/deleteDoctor/:id', deleteDoctor);


module.exports = router;