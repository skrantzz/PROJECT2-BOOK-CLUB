require('dotenv').config()

module.exports = {
  "development": {
    "username": "root",
    "password": "password",
    "database": "bookClubDB",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql",
    "define": {
      "timestamps": false
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.PROD_USERNAME,
    "password": process.env.PROD_PASSWORD,
    "database": process.env.PROD_DATABASE,
    "host": process.env.PROD_HOST,
    "dialect": "mysql",
    "define": {
      "timestamps": false
    }
  }
}
