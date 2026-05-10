const express = require("express");
const router  = express.Router();
const person  = require("../models/Person");



// Define a route to create a new person
router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {
    try {
        const persons = await person.find();
        // console.log("Fetched persons:", persons);    
        res.status(200).json(persons);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.error("Error fetching persons:", error);
    }
});

// Define a route to get a person by workType
router.get("/:worktype", async (req, res) => {
    const workType = req.params.worktype;  // extract workType from URL parameters
    try {
     if(workType === "chef" || workType === "waiter" || workType === "manager"){
        const persons = await person.find({ work: workType });
        console.log(`Fetched persons with work type ${workType}:`, persons);
        res.status(200).json(persons);
     } else {
        res.status(400).json({ error: "Invalid work type. Valid types are: chef, waiter, manager." });
     }
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.error("Error fetching persons:", error);
    }
});

// Define a route to update a person's information by ID

router.put("/:id", async (req, res) => {
    const personId = req.params.id;  // extract person ID from URL parameters
    try {
        const updatedPerson = await person.findByIdAndUpdate(personId, req.body, { new: true, runValidators: true });
        if (!updatedPerson) {
            return res.status(404).json({ error: "Person not found" });
        }
        console.log("Updated person:", updatedPerson);
        res.status(200).json(updatedPerson);

        if(!updatedPerson){
            return res.status(404).json({ error: "Person not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.error("Error updating person:", error);
    }
});

// Define a route to delete a person by ID
router.delete("/:id", async (req, res) => {
    const personId = req.params.id; 
    try {
        const deletedPerson = await person.findByIdAndDelete(personId);
        if (!deletedPerson) {
            return res.status(404).json({ error: "Person not found" });
        }  
        console.log("Deleted person:", deletedPerson);
        res.status(200).json({ message: "Person deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.error("Error deleting person:", error);
    }
});

module.exports = router;