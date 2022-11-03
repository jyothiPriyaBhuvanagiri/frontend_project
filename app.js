const express = require("express")
const bodyParser =require("body-parser")
const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
const mongoose =require("mongoose")
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/frontendproject");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "form.js");
});

const nameSchema = new mongoose.Schema({

    email:String,
    firstName: String,
    lastName: String,
    salutation:Number,
    street:Number,
    phone:Number

});
const User = mongoose.model("User", nameSchema);

app.post("/addname", (req, res) => {
    const myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

app.listen(3003, () => {
    console.log("Server listening on port " + 3003);
});
