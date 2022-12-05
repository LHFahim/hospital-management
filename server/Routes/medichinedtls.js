const express = require('express');

const router = express.Router();


const { createMedichine, fetchMedichine, updateMedichine, deleteMedichine} = require('../Controllers/medichinedtls')

router.post('/createMedichine', createMedichine)
router.get('/fetchMedichine', fetchMedichine)
router.put('/updateMedichine/:id', updateMedichine)
router.delete('/deleteMedichine/:id', deleteMedichine)


module.exports = router;