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

