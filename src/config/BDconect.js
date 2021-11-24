const connectMysql  = require('mysql');

module.exports = () => {
    return connectMysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'db_tienda'
    })
}