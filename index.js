const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
require('dotenv').config()
const app = express()

app.use(cors())

const connection = mysql.createConnection(process.env.JAWSDB_URL)

app.get('/',(req, res) => {
    console.log('Hello world')
    res.send('Hello World!!!!')
})

app.get('/attractions',(req,res)=> {
    connection.query(
        'SELECT * FROM attractions',
        function(err, results, fields) {
            res.send(results)
        }
    )
})


app.get('/users',(req,res)=> {
    connection.query(
        'SELECT * FROM users',
        function(err, results, fields) {
            res.send(results)
        }
    )
})


app.listen(process.env.PORT || 3000)
