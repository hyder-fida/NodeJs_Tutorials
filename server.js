const express = require("express");
const app = express();
const db = require("./db");


const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body will be parsed as JSON

app.get("/", (req, res) => {
     res.send("Hii how can i server you...?")
})

// Importing route handlers
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuRoutes");


// Use the imported routes
app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);




app.listen(3000,()=>{
        console.log("server is running on port 3000");
});










//app.get("/chicken", (req, res) => {
//      res.send("Serving chicken in 10 minutes ...")
// })

// app.get("/customizedMenu", (req, res) => {

//     const customizedMenu = {
//         chicken: "Spicy Chicken",
//         beef: "Grilled Beef",
//         vegetarian: "Veggie Delight",
//         isGst: false,
//     }
//      res.send(customizedMenu);
// });

// app.post("/order", (req, res) => {
//      res.send("Your order has been placed successfully...");
//      console.log("Order received at " + new Date().toLocaleString());
// });





































// var fs = require("fs");

// var os = require("os");

// var notes = require("./notes.js");

// var _ = require("lodash");

// console.log("server is running...");


// // CALLBACK FUNCTION EXAMPLE

// // function callback() {
// //     console.log("callback function is called...");
// // }

// // function mainFunction(callback) {
// //     console.log("main function is called...");
// //     callback();
// // };

// // mainFunction(callback);

// // BUILT-IN MODULES EXAMPLE

// // var user = os.userInfo();
// // console.log(user);
// // console.log(user.username);

// // fs.appendFile("greeting.txt", "Hello " + user.username + "!\n", ()=> {});

// // console.log(os)


// // CUSTOM MODULES EXAMPLE

// // console.log(notes.age);

// // console.log(notes.addNumber(5+notes.age, 10));


// // LODASH MODULE EXAMPLE

// const data = [1, 2, 1,3,1,5,5,6, "hello", "hello"];    

// const filter = _.uniq(data);

// console.log(filter);


// let name = "Hyder fida";

// console.log(_.isString(name));
