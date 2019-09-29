///////////////////////////////////////
// Lecture: Hoisting

// console.log(calculateAge(1995));

// // we can call a function before we declare it becuase of hoisting
// // it is saved as a variable before it is run/complied
// function calculateAge(year) {
//     return(2019 - year);
// }

// this does not work, becuase it's not a function declaration
// but a function expression
// 


// var retirement = function(year){
//     console.log(65 - calculateAge(year));
// }

// retirement(1995);

// // variables

// console.log(age); //thos is undefined
// // variables are set as undefined and functions as variables
// var age = 23;
// console.log(age);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(d);
// }




///////////////////////////////////////
// Lecture: The this keyword









