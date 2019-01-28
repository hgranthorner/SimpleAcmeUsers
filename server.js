const express = require('express')
const morgan = require('morgan')
const homePage = require('./views/homePage')
const userPage = require('./views/userPage')
const individualPage = require('./views/individualPage')
const userData = require('./userData')

const app = express()

app.use(express.static('views'))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  const html = homePage()
  res.send(html)
})

app.get('/users', (req, res) => {
  const html = userPage()
  res.send(html)
})

app.get('/users/:id', (req, res) => {
  const id = req.params.id
  const user = userData.find(employee => employee.id == id)
  const html = individualPage(user.name)
  res.send(html)
})

const PORT = 1337
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`)
})
