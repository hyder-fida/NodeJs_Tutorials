const express = require("express");
const router  = express.Router();
const Menu  = require("../models/Menu");

// Define a route to create a new menu item
router.post("/", async (req, res) => {
    try {
      const menuItem = new Menu(req.body);
      const savedMenuItem = await menuItem.save();
        console.log("New menu item created:", savedMenuItem);
        res.status(201).json(savedMenuItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }   
});

// Define a route to get all menu items 
router.get("/", async (req, res) => {
    try {
        const menuItems = await Menu.find(); 
        // console.log("Fetched menu items:", menuItems);
        res.status(200).json(menuItems);
    } catch (error) {   
        res.status(500).json({ error: error.message });
        console.error("Error fetching menu items:", error);
    }   
});


// Define a route to get a Menu item by taste
router.get("/:taste", async (req, res) => {
    const taste = req.params.taste;  // extract taste from URL parameters
    try {
        const menuItem = await Menu.findOne({ taste: taste });
        if (!menuItem) {
            return res.status(404).json({ error: "Menu item not found" });
        }
        console.log("Fetched menu item:", menuItem);
        res.status(200).json(menuItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.error("Error fetching menu item:", error);
    }
});

// Define a route to get persons by work type
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

// Define a route to update a menu item's information by ID

router.put("/:id", async (req, res) => {
    const menuItemId = req.params.id;  // extract menu item ID from URL parameters
    try {
        const updatedMenuItem = await Menu.findByIdAndUpdate
        (menuItemId, req.body, { new: true, runValidators: true });
        if (!updatedMenuItem) {
            return res.status(404).json({ error: "Menu item not found" });
        }
        console.log("Updated menu item:", updatedMenuItem);
        res.status(200).json(updatedMenuItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.error("Error updating menu item:", error);
    }
});

// Define a route to delete a menu item by ID
router.delete("/:id", async (req, res) => {
    const menuItemId = req.params.id;  
    try {
        const deletedMenuItem = await Menu.findByIdAndDelete(menuItemId);
        if (!deletedMenuItem) {
            return res.status(404).json({ error: "Menu item not found" });
        }
        console.log("Deleted menu item:", deletedMenuItem);
        res.status(200).json({ message: "Menu item deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.error("Error deleting menu item:", error);
    }
});

module.exports = router;
