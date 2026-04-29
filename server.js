const express = require("express");
const app = express();
const db = require("./db");

const person = require("./models/Person");

const menu = require("./models/Menu");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body will be parsed as JSON




app.get("/", (req, res) => {
     res.send("Hii how can i server you...?")
})


// Define a route to create a new person
app.post("/person", async (req, res) => {
    try {
        const newPerson = new person(req.body);
        const savedPerson = await newPerson.save();
        console.log("New person created:", savedPerson);
        res.status(201).json(savedPerson);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Define a route to get all persons
app.get("/person", async (req, res) => {
    try {
        const persons = await person.find();
        console.log("Fetched persons:", persons);    
        res.status(200).json(persons);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.error("Error fetching persons:", error);
    }
});

app.listen(3000,()=>{
        console.log("server is running on port 3000");
});

// Define a route to create a new menu item
app.post("/menu", async (req, res) => {
    try {
      const menuItem = new menu(req.body);
      const savedMenuItem = await menuItem.save();
        console.log("New menu item created:", savedMenuItem);
        res.status(201).json(savedMenuItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }   
});

// Define a route to get all menu items 
app.get("/menu", async (req, res) => {
    try {
        const menuItems = await menu.find(); 
        console.log("Fetched menu items:", menuItems);
        res.status(200).json(menuItems);
    } catch (error) {   
        res.status(500).json({ error: error.message });
        console.error("Error fetching menu items:", error);
    }   
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
