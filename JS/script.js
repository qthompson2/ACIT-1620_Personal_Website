let counter = 0;
let userInput;
let courses = {1620:'ACIT', 1116:'COMM', 1515:'ACIT'};

do {
    if (counter === 0) {
        userInput = prompt('Enter a course number.');
    } else {
        userInput = prompt('Course number invalid!\nPlease enter a valid course number.');
    }
    counter += 1
} while (isNaN(Number(userInput)) || userInput < 1000);

if (courses[userInput] !== undefined) {
    alert(`${courses[userInput]}-${userInput} is on the schedule.`)
} else {
    alert(`${userInput} is not on the schedule.`)
}