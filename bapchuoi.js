const express = require('express');
const app = express();
const bodyPaser = require('body-parser')

const userName = require('./models/user.js') 
const router = require('./routers/accounts.js')

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));


app.get('/', (req, res, next) => {
    res.json(  'home'  )
})

app.post('/register', (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    userName.findOne({username: username})

    .then(data => {
        if (data) {
            res.json('user đã tồn tại')
        } else {
            return userName.create({
                username: username,
                password: password
            })          
        
        }
    })

    .then ((data) => {res.json('tao tk thanh cong')})

    .catch((err) => {
        res.json('tao tk that bai')
    }) 

})

app.post('/login', (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    userName.findOne({
        username: username,
        password: password
    })
    .then(data => {

       
        if (data) {
            res.json('đăng nhập thành công')
        } else {
            res.status(300).json('account ko đúng')
        }
    })

    .catch(err => {
        res.status(500).json('có lỗi bên sever')
    })
})

app.use('/api/accounts/', router)




// app.use('/', router)


app.listen(3000, () => {
  console.log(`ket noi oke`)
})