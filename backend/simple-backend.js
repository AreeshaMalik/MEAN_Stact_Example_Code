// Connecting with MongoDB
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017";
const dbTab = "FastWheels";

// Establishing a connection 
const mongCl = new MongoClient(uri);
// console.log("mongCL:",mongCl);

const express = require('express');
const app = express();



var cors = require('cors');
app.use(cors());

// Adding the rating for cars randomly---------
function rating(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
}
// ------------------------------------------------

app.post('/AddVehi', function(req, res){
    console.log("Got a POST request for /Add:: name="+req.query.name+" model="+req.query.model);
    mongCl.connect(function (err, cli) {
        console.log("MongoDB Connected")
        const db = cli.db(dbTab);
        db.collection("Vehicles").insertOne({
        name: req.query.name,
        model: req.query.model,
        price: req.query.price,
        location: req.query.location,
        color: req.query.color,
        year: req.query.year,
        mileage: req.query.mileage,
        useremail: req.query.useremail,
        usercontact: req.query.usercontact,
        usercontacthrs: req.query.usercontacthrs,
        image: req.query.image,
        dateadded: req.query.dateadded,
        usercomment: req.query.usercomment,
        rating: rating(1,5)
    });
    res.send("Received data:: name="+req.query.name+" model="+req.query.model);
})
})

// app.post('/AddVehi', function(req, res){
//     console.log("Got a POST request for /Add:: image="+req.query.image+" name="+req.query.name);
//     mongCl.connect(function (err, cli) {
//         console.log("MongoDB Connected")
//         const db = cli.db(dbTab);
//         db.collection("Vehicles").insertOne({
//         // image: req.query.image,
//         name: req.query.name,
//         model: req.query.model,
//         // color: req.query.color,
//         // year: req.query.year,
//         // price: req.query.price,
//         // rating: rating(1,5),
//         // dateadded: req.query.dateadded,
//         // mileage: req.query.mileage,
//         // useremail: req.query.email,
//         // userlocartion: req.query.location,
//         // usercontact: req.query.phone,
//         // usercontacthrs: req.query.hours,
//         // usercomments: req.query.comments,
//     });
//     res.send("Received data:: image="+req.query.image+" model="+req.query.model);
// })
// })

app.get('/getVehicles', function(req, res){
    mongCl.connect(function (err, cli) {
        console.log("MongoDB Connected")
        const db = cli.db(dbTab);
    db.collection("Vehicles")
        .find()
        .toArray(function (err, rows) {
        if (err) throw err;
        console.log(rows);
        res.send(rows);
    });
    })
})

app.delete('/deleteVehicle', function (req, res) {
    console.log("DELETE REQ FOR "+ req.query.name)
    console.log("Got a DELETE request for /deleteVehicle");
    mongCl.connect(function (err, cli) {
    console.log("MongoDB Connected")
    const db = cli.db(dbTab);
    if (err){
        console.log("Error deleting!!")
    }else{
        console.log("here")
        db.collection("Vehicles").deleteOne({"name": req.query.name});
    }
    res.send('Response to DELETE request at /deleteVehicle');
})
})

// for updating the data
app.put('/update', function (req, res) {
    console.log("UPDATE REQ FOR "+ req.query.name)
    mongCl.connect(function (err, cli) {
    console.log("MongoDB Connected")
    const db = cli.db(dbTab);
    var myquery = { name: req.query.name };
    var updatedvals = { $set: {model: req.query.model, price: req.query.price,
                            location: req.query.location, color: req.query.color,
                            year: req.query.year, mileage: req.query.mileage,
                            useremail: req.query.useremail, usercontact: req.query.usercontact,
                            usercontacthrs: req.query.usercontacthrs,
                            image: req.query.image,
                            dateadded: req.query.dateadded,
                            usercomment: req.query.usercomment,
                            rating: rating(1,5)} };
    // if (err){
    //     console.log("Error Updating!!")
    // }else{
    //     console.log("here")
    db.collection("Vehicles").updateOne(myquery, updatedvals, function(err, res) {
        console.log("Update: Before IF")
        if (err) throw err;
        console.log("1 document updated");
        // db.close();
        });
    // }
    res.send('Response to UPDATE request at /update');
})
})

module.exports = app

app.listen(3000, () =>
    console.log('Listening on port 3000'));
