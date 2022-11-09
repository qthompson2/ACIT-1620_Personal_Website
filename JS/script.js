let counter = 0;
let userInput;
let courses = [1620, 1116, 1515];

do {
    if (counter === 0) {
        userInput = prompt('Enter a course number.');
    } else {
        userInput = prompt('Course number invalid!\nPlease enter a valid course number.');
    }
    counter += 1
} while (isNaN(Number(userInput)) || userInput < 1000);