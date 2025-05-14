const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://127.0.0.1/argentBankDB' // changed localhost to 127.0.0.1

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true}) // added useUnifiedTopology: true (not needed)
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}