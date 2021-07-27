const mongoose = require('mongoose')
const Schema = mongoose.Schema
const expenseSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  icon: {
    type: String,
  },
  record: {
    type: Schema.Types.ObjectId,
    ref: 'Record',
  },
})

module.exports = mongoose.model('Category', categorySchema)