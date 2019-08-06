const mysql = require('mysql')

const conn = mysql.createConnection(
    {
        user: 'root',
        password: '!@ahmadsubhan24',
        host: 'localhost',
        database: 'ujianbackend',
        port : 3306
    }
)

module.exports = conn