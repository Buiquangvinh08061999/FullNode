//Bước connect db
const mysql = require('mysql2')

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'school'
})

function messConnect(err){
    if(err) {
        console.log("Err DB connec");
    }else {
        console.log("DB connec sucssess");
    }
}

mysqlConnection.connect(messConnect)

//chuyền địa chỉ qua file sang index.js để khởi tạo
module.exports = mysqlConnection;