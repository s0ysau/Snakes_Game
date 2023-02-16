require('dotenv').config()
const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')

const PORT = process.env.PORT || 8123

const app = express()

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico' )))
app.use(express.static(path.join(__dirname, 'public')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Looking for snakes in ${PORT}`)
})
