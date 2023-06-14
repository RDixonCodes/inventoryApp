const mongoose = require('mongoose');

module.exports = (db_name) => {
    mongoose.connect("mongodb://localhost/inventory", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('Ready to take inventory'))
    .catch(err => console.log('Something went wrong..', err));
}