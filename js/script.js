/**
 * 
 *     JSNACKS 1 & 2
 * 
 *  1. CREATE AN ARRAY OF OBJECTS, EACH OBJECTS HAS TO DESCRIBE A BICYCLE WITH NAME AND WEIGHT;
 *     PRINT ON CONSOLE THE BICYCLE WITH LESS WEIGHT.
 *  2. CREATE AN ARRAY OF TEAMS WITH NAME POINTS AND FOULS. GIVE 0 TO POINTS AND FOULS AND 
 *     GENERATE RANDOM NUMBERS.
 *     CREATE A NEW ARRAY WITH ONLY NAMES AND FOULS AND PRINT IT TO CONSOLE.
 * 
/**/


/**
 * 
 *  JSNACK 1
 * 
/**/

// ARRAY OF OBJECTS

const bicycles = [
    {
        name: 'Spark',
        weight: 7,
    },
    {
        name: 'Lightning',
        weight: 9,
    },
    {
        name: 'Arrow',
        weight: 6.5,
    },
];



// ASSUMING LIGHT BICYCLE WEIGHT = 0
let lightBicycle = 0;

for(let i = 0; i < bicycles.length; i++) {

    if(bicycles[i].weight < bicycles[lightBicycle].weight) {
        lightBicycle = i;
    }
    // DESTRUCTURING AND LOG OF ALL THE BICYCLES
    const {name, weight} = bicycles[i];
    console.log(name, weight);
}

// DESTRUCTURING AND LOG OF ONLY THE LIGHTER ONE
const { name, weight } = bicycles[lightBicycle];
console.log(bicycles[lightBicycle]);


/**
 * 
 *  JSNACK 2
 * 
/**/

// ARRAY OF TEAMS

const newTeams = [];
const teams = [
    {
        name: 'Roma',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Torino',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Bari',
        points: 0,
        fouls: 0,
    },
];


for(let i = 0; i < teams.length; i++) {

    let team = teams[i];
    
    team.points = getRandomNumbers(0, 50);
    team.fouls = getRandomNumbers(0, 50);
    // DESTRUCTURING AND PUSHING A NEW ARRAY OF ONLY TEAMS WITH NAMES AND FOULS
    const {name, fouls} = teams[i];
    newTeams.push({
        name,
        fouls,
    });
}

console.log(teams);

// NEW ARRAY WITH ONLY TEAMS WITH NAMES AND FOULS
console.log(newTeams);


/**
 * 
 *  FUNCTIONS
 * 
/**/

function getRandomNumbers (min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}

/**
 * 
 *  JSNACK 3
 *  1. CREATE AN ARRAY 
 *  2. CREATE A FUNCTION WHICH RETURNS WHAT IS BETWEEN TWO NUMBERS (ASK 
 *  THE USER TO INSERT THEM)
 *  
/**/

const people = ['Federico', 'Fabio', 'Roberta', 'Luca', 'Giuseppe', 'Lisa'];
const newPeople = [];

let min = parseInt( prompt('Please enter a Number between 0 and 5'));
// VALIDATION
while(isNaN(min) || min < 0 && min > people.length){
    min = parseInt(prompt('Invalid enter, please enter a Number between 0 and 5'));
};
let max = parseInt( prompt('Please enter a Number between ' + min + ' and 5'));
// VALIDATION
while(isNaN(max) || max < 0 && max > people.length && max < min){
    max = parseInt(prompt('Invalid enter, please enter a Number between ' + min + ' and 5'));
};

people.forEach((element, index) => {
    if (min <= index && max >= index) {
        newPeople.push(element);
    }
});
console.log(newPeople);

/**
 * 
 *  JSNACK 4
 *  1. CREATE AN ARRAY OF OBJECTS WITH THESE PROPERTIES: NAME, TYPE, COLOR
 *  2. CREATE A NEW ARRAY ADDING THE PROPERTY POSITION TO THE PREVIOUS OBJECTS
 * 
/**/

const objects = [
    {
        name: 'Poppy',
        type: 'shirt',
        color: 'red',
    },
    {
        name: 'Jumping',
        type: 'eyeglasses',
        color: 'black',
    },
    {
        name: 'CrissCross',
        type: 'bag',
        color: 'blue',
    },
    {
        name: 'Jenny',
        type: 'watch',
        color: 'pink',
    },
];

const newObjects = objects.map((element) => {
    const object = {
        ...element,
        position: getRandomNumbers(1, 10),
    };
    return object;
});

console.log(newObjects);


function getRandomNumbers (min, max) {
    return Math.floor( Math.random() * (max - min + 1)) + min;
}