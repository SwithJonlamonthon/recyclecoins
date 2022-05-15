const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 8080;///set env port (Public app)
const mysql = require('mysql');///for DB
const addresses = require('./public/config/config.js');///Server address


///Set server address
const pool = mysql.createPool(addresses)


///Set directory to file 
app.use('/public',express.static('public'))///for any file in public
//Set &amp; Call EJS
app.set('view engine','ejs')
///use in postman
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/// Main

app.get('/', (req, res) => {

    res.render('index'); 
    
})

app.get('/register/user',(req, res)=>{
    res.render('index')
})

app.post('/register/user', (req, res) => { 
    
    var name = req.body.username_register;
    var passr = req.body.password_register;
   
    pool.getConnection((err, connection) => {
        if (err) throw err
        connection.query(`INSERT INTO customer_db (User_NAME, User_PASSWORD, User_WALLET) VALUES ('${name}','${passr}',0);`,(err,result)=>{
            connection.release();
            if(err){
                console.log("bad")
                console.log(err)
            }
            else{
                console.log("good")
                res.redirect(301,'/')
                
            }
        })
    })
   
    
})



app.get('/auth/user',(req, res)=>{
    res.render('index')
})

app.post('/auth/user',(req, res) => {
    var user = req.body.username
    var pass = req.body.password
    console.log(user,pass)
    pool.getConnection((err, connection3) => {
        if (err) throw err
        connection3.query(`SELECT User_NAME,User_PASSWORD  FROM customer_db WHERE User_NAME = '${user}' AND User_PASSWORD = '${pass}';`,(err,result)=>{
            connection3.release();
            if(err){
                console.log("bad")
            }
            else{
                if(result.length == 0){
                    console.log("bad")
                }else{
                    res.redirect(301,`/:${user}`)
                }
            }
        })
    })
    
})


app.get("/:username",(req,res) =>{
    res.render('sell')
    var user = req.params.username
})






app.listen(port,'localhost',()=>{
    console.log("listening on port " + port);
});