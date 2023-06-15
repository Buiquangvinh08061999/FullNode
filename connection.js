//Bước connect db
const mysql = require('mysql2')

var mysqlConnection1 = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'school'
})

var mysqlConnection2 = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'home'
})


function messConnect(err){
    if(err) {
        console.log("Err DB connec");
    }else {
        console.log("DB connec sucssess");
    }
}

mysqlConnection1.connect(messConnect)
mysqlConnection2.connect(messConnect)



//chuyền địa chỉ qua file sang index.js để khởi tạo, tạo bao nhiêu kết nối db từ các bảng khác nhau điều được
module.exports = {mysqlConnection1 , mysqlConnection2};
