const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

//新增
router.get('/new', (req, res) => {
  Category.find()
    .lean()
    .sort({ _id: 'asc' })
    .then((categoryList) => { res.render('new', { categoryList }) })
    .catch((error) => console.log(error))
})

router.post('/', (req, res) => {
  const { name, date, category, amount } = req.body
  Record.create({ name, date, category, amount })
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

//編輯
router.get('/:id/edit', async (req, res) => {
  const id = req.params.id
  const categoryList = await Category.find().sort({ _id: 'asc' }).lean()
  return Record.findById(id)
    .lean()
    .then((record) => res.render('edit', { record, categoryList }))
    .catch((error) => console.log(error))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, date, category, amount } = req.body
  return Record.findById(id)
    .then((record) => {
      record.name = name
      record.date = date
      record.category = category
      record.amount = amount
      return record.save()
    })
    .then(() => { res.redirect('/') })
    .catch((error) => console.log(error))
})

//刪除
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => { res.redirect('/') })
    .catch((error) => console.log(error))
})

module.exports = router