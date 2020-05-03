const person = {
    name: "John",
    address: {
        country: "USA",
        city: "San Francisco"
    }
};

const updated = { ...person, name: "Bob" };
updated.address.city = "New York";
console.log(person);

// deep copy
const updated2 = {
    ...person,
    address: {
        ...person.address,
        city: "New York"
    },
    name: "Bob"
};
console.log(person);

/* array */

const numbers = [1, 2, 3];

// Adding
const index = numbers.indexOf(2);
const added = [
    ...numbers.slice(0, index),
    4,
    ...numbers.slice(index)
];

// Removing
const removed = numbers.filter(n => n !== 2);


// Updating
const updated = numbers.map(n => n === 2 ? 20 : n);