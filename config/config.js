
module.exports  = {
  "development": {
    "username": "postgres",
    "password": 12345,
    "database": "rest-api",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.DB,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  }
}

