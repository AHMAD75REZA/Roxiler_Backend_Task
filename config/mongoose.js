const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/Roxiler_development').then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/Roxiler_development', { useNewUrlParser: true, useUnifiedTopology: true });


 const db = mongoose.connection;
// db.once('open', function () {
//     console.log('conneted to database:: MongoDB');
// });

module.exports = db;