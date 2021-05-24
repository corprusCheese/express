const mongoose = require('mongoose');

const { Schema } = mongoose;

const minPassword = 6; // min letters count in password

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId, // primary key in MongoDb
    name: {
        type: String,
        /*validate: {
            validator: function(v, cb) {
                User.find({name: v}, function(err,docs){
                    cb(docs.length == 0);
                });
            },
            message: "That name already exists"
        },*/
        required: 'name is required',
    },
    email: {
        type: String,
        /*validate: {
            validator: function (email) {
                var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return re.test(email)
            },
            message: "This is not email"
        },*/
        required: 'email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        /*validate: {
            validator: function (pass) {
                return pass.length >= minPassword
            },
            message: "At least " + minPassword + " letters needs to be provided"
        }*/
    },
    created: {
        type: Date,
        default: Date.now
    },
    role: {
        type: mongoose.Schema.Types.ObjectId, // связь 1 ко многим - N users to 1 role
        ref: "Role",
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;