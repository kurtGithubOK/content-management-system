const mysql = require('mysql2');

// Make db connection
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'cms_db'
    },
    console.log(`Connected to the cms_db database.`)
);

module.exports = {
    db: db
}