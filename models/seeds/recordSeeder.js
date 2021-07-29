const Record = require('../record')
const db = require('../../config/mongoose')

const recordList = require('./record.json')

db.once('open', () => {
  console.log('mondobd connected!')
  Record.create(recordList)
    .then(() => {
      console.log('recordSeed done')
      return db.close()
    })
})