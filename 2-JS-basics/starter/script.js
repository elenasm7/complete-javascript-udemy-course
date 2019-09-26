/***********************************
 * loops and iterations
 */

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

var elena = ['Elena', 'Morais', 1995, 'Data Scientist', false];

// for (var i = 0; i < elena.length; i++){
//     console.log(elena[i]);
// }

//while loop
// var i = 0;
// while (i < elena.length) {
//     console.log(elena[i]);
//     i++;
// }

//continue and break
// for (var i = 0; i < elena.length;i++){
//     if (typeof elena[i] !== 'string') continue;
//     console.log(elena[i]);
// }

// for (var i = 0; i < elena.length;i++){
//     if (typeof elena[i] !== 'string') break;
//     console.log(elena[i]);
// }

for (var i = elena.length - 1; i >= 0;i--){
    // if (typeof elena[i] !== 'string') continue;
    console.log(elena[i]);
}





// var firstName = 'Elena';

 
// console.log(firstName);

// var lastName = 'Morais';
// var age = 24;
// var fullAge = true;
// console.log(fullAge);

/***********************************
 * the Ternary Operator and Switch Statements
 */

//  var firstName = 'Elena';
//  var age = 24;

//  age >= 18 ? console.log(firstName + ' drinks beer.')
//  : console.log(firstName + ' drinks juice.');

//  var drink = age >= 18 ? 'beer' : 'juice'
//  console.log(drink)

 /***************************************
  * Coding challenge 4
  */
//  var john = {
//      fullName : 'John Smith',
//      mass : 170,
//      height: 69,
//      calcBMI: function(){
//          this.BMI = (703*this.mass)/(this.height**2);
//          console.log(this.BMI);
//      }
//  }

//  var mark = {
//     fullName : 'Mark Kelly',
//     mass : 170,
//     height: 69,
//     calcBMI: function(){
//         this.BMI = (703*this.mass)/(this.height**2);
//         console.log(this.BMI);
//     }
// }

// mark.calcBMI()
// john.calcBMI()

// function whosBigger(person1,person2){
//     if (person1.BMI > person2.BMI){
//         console.log(person1.fullName + ' has a higher BMI of '+ 
//         person1.BMI);
//     }
//     else if (person1.BMI < person2.BMI) {
//         console.log(person2.fullName + ' has a higher BMI of '+ 
//         person2.BMI);
//     }
//     else {
//         console.log(person1.fullName+' and '+person2.fullName + ' have the same BMI of: '+person2.BMI);
//     }
// }

// whosBigger(mark,john);