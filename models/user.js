const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const a = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1/Nodemy')
        console.log('ket noi oke nhé')
    }  
    catch {() => console.log('ket noi thất bại')}  
}

a();

const UserSchema = new Schema({
  username: String,
  password: String,
});

 const userName = mongoose.model('users', UserSchema );

 module.exports = userName