const mongoose = require("mongoose");
function connection(){
    mongoose
    .connect('mongodb://localhost/my_database', {

    }).then((success)=>{
        console.log('DB connected successfully.')
    })
    .catch((e) => console.log(e));
}

module.exports = connection;