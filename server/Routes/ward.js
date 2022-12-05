const express = require('express');

const router = express.Router()


const {createWard, fetchWard, updateWard, deleteWard} = require('../Controllers/ward');

router.post('/createWard', createWard);
router.get('/fetchWard', fetchWard);
router.put('/updateWard/:id', updateWard)
router.delete('/deleteWard/:id', deleteWard)

module.exports = router;