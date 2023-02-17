require('dotenv').config()
const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')

const PORT = process.env.PORT || 8080

const app = express()

<<<<<<< HEAD
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico' )))
app.use(express.static(path.join(__dirname, 'public')))
=======
app.use(express.static(path.join(__dirname)))

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico' )))
app.use(express.static(path.join(__dirname, 'build')))
>>>>>>> parent of 769baa2 (works on local)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Looking for snakes in ${PORT}`)
})
