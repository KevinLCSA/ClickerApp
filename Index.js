let count = 0; // Initialize the count
const countEl = document.getElementById("count-el");
const savedCountsEl = document.getElementById("saved-counts"); // Reference to the saved counts list
let savedCounts = []; // Array to hold saved counts

// Function to increment the count
function increment() {
    count++;
    countEl.innerText = count; // Update the displayed count
}

// Function to save the current count
function save() {
    savedCounts.push(count); // Add the current count to the savedCounts array
    let savedCountString = savedCounts.join(" - "); // Join the saved counts with " - "
    savedCountsEl.innerText = savedCountString; // Display the saved counts in the list
}
