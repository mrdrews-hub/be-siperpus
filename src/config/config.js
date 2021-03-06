require('dotenv').config()

const config = {
  port: process.env.PORT || 3030,
  db: {
    name: process.env.DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST
  },
  jwt_secret: process.env.JWT_SECRET
}

module.exports = config
