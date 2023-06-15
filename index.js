const connection = require('./connection');

const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); //body display json web front end(Hiển thị dữ liệu ra web)

//cấu hình fix cors cho phép truy cập
var cors = require('cors')
app.use(cors());

app.get('/secret', (req, res) => {
    const secret = Math.floor(Math.random() * 100)
    res.json({ secret })
});


//connection đại diện cho biến lấy dự liệu đến server
app.get('/student', (req, res) => {
    connection.query("SELECT * FROM student",(err, rows) => {
        if(err)
            throw err
        else {
            console.log(rows);
            //Trả về response data dữ liệu hiển thị lên web
            res.send(rows);
        }
    })
})

//query dữ liệu theo id 
app.get('/student/:id', (req, res) => {
    connection.query("SELECT * FROM student WHERE id=?",[req.params.id],(err, rows) => {
        if(err)
            throw err
        else {
            console.log(rows);
            //Trả về response data dữ liệu hiển thị lên web
            res.send(rows);
        }
    })
})

//delete theo id truyền vào
app.delete('/student/delete/:id', (req, res) => {
    connection.query("DELETE FROM student WHERE id=?",[req.params.id],(err, rows) => {
        if(err)
            throw err
        else {
            console.log(rows);
            //Trả về dòng text thông báo   
            res.send(`Xóa Id ${req.params.id} Thành Công`);
           
        }
    })
})

//create theo id truyền vào
app.post('/student/create', (req, res) => {
    var data = req.body; //lấy dữ liệu object từ requset body gửi lên
    var dataData = [data.name, data.email, data.phone, data.address]; //lấy dữ liệu data truy xuất đến trường con trong oject, để insert dữ liệu vào bảng
    connection.query("INSERT INTO student (name, email, phone, address) VALUES(?)",[dataData],(err, rows) => {
        if(err)
            throw err
        else {
            console.log(rows);
            //Trả về dòng text thông báo   
            res.send(`Thêm mới thành công`);
           
        }
    })
})




app.listen(3000, ()=> console.log("Server running port 3000"));


