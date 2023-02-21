import mongoose from './connection.js'

// const demonSchema = new mongoose.Schema({
//   name: String,
//   inherits: String,
//   lvl: Number,
//   race: String,
//   resists: {
//     type: String,
//     match: /^[-nrs]{8}$/,
//   },
//   skills: {
//     type: Map,
//     of: { type: Number },
//   },
//   stats: [Number],
// })

const demonSchema = new mongoose.Schema({
  demon: {
    inherits: String,
    lvl: Number,
    race: String,
    resists: {
      type: String,
    },
    skills: {
      type: Map,
      of: { type: Number },
    },
    stats: [Number],
  },
})

export default mongoose.model('Demons', demonSchema)
