const express = require('express');

const router = express.Router();


const { createRoom, fetchRoom , updateRooms, deleteRooms} = require('../Controllers/room')

router.post('/createRoom', createRoom)
router.get('/fetchRoom', fetchRoom)
router.put('/updateRooms/:id', updateRooms)
router.delete('/deleteRooms/:id', deleteRooms)


module.exports = router;