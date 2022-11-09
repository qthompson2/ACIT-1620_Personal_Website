let counter = 0;
let index;
let userInput;
const courseList = [
    {
        'code':'ACIT 1620',
        'name':'Fundemental Web Technologies',
    },
    {
        'code':'ACIT 1515',
        'name':'Scripting for IT',
    },
    {
        'code':'COMM 1116',
        'name':'Business Communications',
    },
]

do {
    if (counter === 0) {
        userInput = prompt('Enter a course number.');
    } else {
        userInput = prompt('Course number invalid!\nPlease enter a valid course number.');
    }
    counter += 1
} while (isNaN(Number(userInput)) || userInput < 1000);

for (let c = 0; c < courseList.length / 2; c += 1) {
    if (courseList[c]['code'].indexOf(userInput) > -1) {
        alert(`${courseList[c]['code']} - ${courseList[c]['name']} is on the list.`);
        index = c
    }
}

if (index === undefined) {
    courseList.push({
        'code':userInput,
        'name':null,
    })
    console.log(`Course ${userInput} added successfully.`)
}