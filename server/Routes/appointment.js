const express = require('express');

const router = express.Router();


const { createAppointment, fetchAppointment, updateAppointment, deleteAppointment } = require('../Controllers/appointment')

router.post('/createAppointment', createAppointment);
router.get('/fetchAppointment', fetchAppointment);
router.put('/updateAppointment/:id', updateAppointment);
router.delete('/deleteAppointment/:id', deleteAppointment);


module.exports = router;