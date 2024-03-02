function returnDay(num) {
    // Define an array to store the days of the week
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // Check if the number is within the valid range
    if (num >= 1 && num <= 7) {
        // Subtract 1 from the number to match the array index
        // Return the corresponding day of the week
        return daysOfWeek[num - 1];
    } else {
        // If the number is not within the valid range, return null
        return null;
    }
}

// Example usage:
console.log(returnDay(1)); // Output: "Monday"
console.log(returnDay(3)); // Output: "Wednesday"
console.log(returnDay(7)); // Output: "Sunday"
console.log(returnDay(0)); // Output: null
console.log(returnDay(8)); // Output: null
