// Basic 1
// • Create a variable x as an empty array []. Log this array to your console.

let x = [];
console.log(x);

// • Use .push() to add three strings to your array: 'coding', 'dojo', 'rocks'.

x.push("coding", "dojo", "rocks");

// • Use .pop() to remove the final element of your array.
x.pop();

// • Log the final value of x, what is it?
console.log(x[x.length - 1]);
// dojo

// Basic 2
// • Create a const called y, and store an empty array there. Log this to your console.

const y = [];
console.log(y);

// • Use .push() to add the number 88 to array y.
y.push(88);
y.push(91);
y.push("hello");
console.log(y);

// • What happened?

// Basic 3
// • Create a variable z that contains the array [9, 10, 6, 5, -1, 20, 13, 2].

var z = [9, 10, 6, 5, -1, 20, 13, 2];

// • Print every element to the console.
for(let i = 0; i < z.length; i++) {
    console.log(z[i]);
}

console.log("========================");

// • Now print every element except the final number.
for(let i = 0; i < z.length - 1; i++) {
    console.log(z[i]);
}

console.log("========================");


// Basic 4
// • Create a variable names and store the array ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']

var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];

// • Print the length of all names to the console.
for(let i = 0; i < names.length; i++) {
    console.log(names[i].length);
}

console.log("========================");

// • Now modify your code so only names with a length of 5 print.

for(let i = 0; i < names.length; i++) {
    if(names[i].length === 5) {
        console.log(names[i]);
    }
}

// Basic 5
// • Create a function yell that takes one parameter called string.

function yell(string) {
    return string.toUpperCase()
}

// • Make yell return that string in all uppercase.

console.log(yell("hello"));
console.log(yell("greetings"));

// • Where could you look to find out more about uppercasing strings in JavaScript?

// Google