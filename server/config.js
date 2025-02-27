exports.PORT = process.env.PORT || 8080

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production' 
  ? process.env.CLIENT_ORIGIN
  : 'http://localhost:4200'

exports.DB_URL = process.env.NODE_ENV === 'production' 
  ? process.env.DB_URL 
  : 'mongodb://localhost:27017/simple-email-confirmation'