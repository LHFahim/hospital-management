const mongoose = require('mongoose')

const medichineSchema = new mongoose.Schema({
    productID: String,
    productName: String,
    supplierID: String,
    categoryID: String,
    unitprice: String,
    unitsInStoct: String
    
}, {
    timestamps: true
})

module.exports = mongoose.model('Medichine', medichineSchema)