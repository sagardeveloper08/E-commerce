const mongoose = require('mongoose');


const connectDatabase = () => {

    mongoose.connect('mongodb://localhost:27017/Shop', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("DB connected");
        })
        .catch((err) => {
            console.log("DB not connceted", err);
        })
}

module.exports = connectDatabase