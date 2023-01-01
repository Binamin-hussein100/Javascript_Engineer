# REST API USING EXPRESS JS AND POSTGRESQL

## SEPARATION OF CONCERNS

To achieve separation of concerns, its important to understand the different things neccesary for a successful API development. 

For one to successfully develop an API using nodejs(expressJs), One should look at, 
    * DATASTORAGE
    * Data Query
    * Contollers (Logic)
    * Routing

### CREATING A SERVER USING EXPRESS
* Install express
`npm install express`
* Server is created using expressjs require/ import express from express
`require('express) || Import express from 'express'`
* use `express()` to make different requests to the server.
* `express().listen(port)` to listen on a particular port

### DATASTORAGE
For this particular development, data is stored in a psql instance created in my local machine. Other options would include,
    * Cloud database
    * Json Server
    * Normal Javascript files (in form of an array of objects)

To communicate effectively with the database, i had to connect my local DB instance with my application. That was done in the db.js file.
* Install pg using NPM 
     `npm i pg`
* Create a db.js file and require pg
     `require('pg').Pool;`
* Create a new pool adding all requires items in an object,
```const pool = new Pool({
            user: "postgres",
            host: "localhost",
            database: "students",
            port: 5432,
            password:"bin"
        })
```
* Export the pool variable


### DATA QUERY

There are several different ways to query data from a database. The easiest way being the use of ORMS. ORMS includes Prisma, Mongoose and e.t.c. For this API I did not use ORMS, rather I used normal javascript with clear separations of concerns.

To make queries, I stored normal SQL queries in variables and exported them using `module.exports`

`const getStudents = "SELECT * FROM students"`

### CONTROLLERS

Inside the controllers is where we create different functions. This functions contain the queries we made plus the pool connection made to the local database. This allows for different types of data queries.
Eg:  To Query for all the students in the database, 

`pool.query(queries.getStudents)`

The code above has the pool variable imported from the db.js file and the the query imported from query.js file. Together they allow for data access from the database.

### ROUTES

To create routes, you need to import Router from express. 
and also import the controller functions.
using the `Router()` one can make different routes for different rontrollers.
`Router().get('/',getStudents)`
