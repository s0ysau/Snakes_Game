require('dotenv').config()
const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.static(path.join(__direname)));


app.get('/', (req, res) => {
  res.sendFile(path.join(__filename + '/main_menu/main_menu.html'))
})

app.get('/first_game', express.static(__dirname + '/first_game/index.html'))

app.get('/nokia', express.static(__dirname + '/nokia.nokia.html'))

app.listen(PORT, () => {
  console.log(`Looking for snakes in ${PORT}`)
})