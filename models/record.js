const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    red: 'Category',
  },
  amount: {
    type: Number,
    require: true,
  }
})
module.exports = mongoose.model('Record', recordSchema)