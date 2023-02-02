require('dotenv').config()
const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.static(path.join(__dirname)))


app.use("/main_menu.html", express.static(__dirname + '/main_menu/main_menu.html'))



app.listen(PORT, () => {
  console.log(`Looking for snakes in ${PORT}`)
})