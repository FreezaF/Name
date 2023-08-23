const prompt = require('prompt-sync')();
const fs = require('fs');

// Check if the user's name is stored in browser storage
function checkNameInStorage() {
    try {
        const storedName = fs.readFileSync('user_name.txt', 'utf-8');
        return storedName;
    } catch (error) {
        return null;
    }
}

// Save the user's name to browser storage
function saveNameToStorage(name) {
    fs.writeFileSync('user_name.txt', name, 'utf-8');
}

// Main program
function main() {
    const storedName = checkNameInStorage();
    
    if (storedName) {
        console.log(`Your name is ${storedName}.`);
    } else {
        const name = prompt("Please enter your name: ");
        saveNameToStorage(name);
    }
}

main();
