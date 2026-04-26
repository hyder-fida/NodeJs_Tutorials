console.log("notes page loaded...");

var age = 25;

const addNumber = (a, b) => {
    return a + b;
}

// exporting the variables and functions to be used in other files

module.exports = {
    age,
    addNumber,

}