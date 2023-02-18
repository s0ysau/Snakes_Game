const { Schema, model } = require('mongoose')

const highScoreSchema = new Schema ({
  gameMode: { type: String },
  name: { type: String },
  score: { type: Number }
}, {
  timestamps: true,
})

const HighScore = model('HighScore', highScoreSchema)

module.exports = HighScore 