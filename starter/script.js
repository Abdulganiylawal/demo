/*
let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("jonas");

let firstName = "lawal";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// variables name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

// Data types
/*
true;
let javascriptIsFun = true;
console.log(javascriptIsFun)

// console.log(typeof true)
 console.log(typeof javascriptIsFun)
// console.log(typeof 23)

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun)

let year;
console.log(year);
console.log(typeof year)

year = 1991;
console.log(year);
console.log(typeof year)

console.log(typeof null);
*/

// Let, Const, Var
/*
let age = 30;
age = 31;

const birthday = 1991;
// birthday = 1919

// const job; 

var job = "programmer";
job = "teacher";


lastName = "lawal";
console.log(lastName);
*/

// Basic operators
/*
let x = 5;
let y = 6;

console.log("x + y = ",x + y);
console.log('x = ', ++x);
console.log(x);
console.log('x = ', --x);
console.log(x ** y);

console.log(x==y);
console.log(x!=y);

console.log(2 ==='2')
const now = 2037
const ageJonas = now - 2002;
const ageSara  = now - 2018;
console.log(ageJonas, ageSara);
console.log(ageJonas)

let a = "lawal";
a +=  " was here";
console.log(a)

const firstName = "jonas";
const lastName = " you";
console.log(firstName + lastName);
//  comparison operator
console.log(ageJonas > ageSara);
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;
const now = 2037
const ageJonas = now - 2002;
const ageSara  = now - 2018;
console.log(now - 1991 > now - 2018);
    
let x,y;
x = y = 25 - 10 -5;
console.log(x,y)
const averageAge = (ageJonas + ageSara) / 2
console.log(ageJonas ,ageSara, averageAge)
*/

// Strings
/*
const firstName = "Abdul";
const job = "Teacher";
const birthYear = 2002;
const year = 2037;

const jonas =
  "i'm " + firstName + " , a " + (year - birthYear) + " years old " + job;
console.log(jonas);

const jonasNew = `i'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(jonasNew);
console.log(`just a regular string`);

console.log("string with \n lawal");
console.log(`string
multiple
line`);*/

// If else statement
/*
let number = prompt("Enter a number: ");
if (number > 0) {
  console.log("The number is positive");
}
console.log("The if statement is easy");
*/
/*1
11
number = prompt("Enter a number");
if (number > 2) {
  console.log("Number is positive");
} else {
  console.log("number is either negative or equal to");
}
console.log("the if else statement is easy");*/

/*
number = prompt("Enter a number");
if (number > 0) {
  console.log("number is positive");
} else if (number == 0) {
  console.log("number is 0");
} else {
  console.log("number is negative");
}

console.log("The if...else if...else statement is easy");
const age = 15;

if (age >= 18) {
  console.log("sarah  can start driving license🚗 ");
} else {
  const yearsLeft = 18 - age;
  console.log(`sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/* 
// Type conversion

// implicit conversion to string
// numeric string used with + gives string type
let result;

result = "3" + 2;
console.log(result); // "32"

result = "3" + true;
console.log(result); // "3true"

result = "3" + undefined;
console.log(result); // "3undefined"

result = "3" + null;
console.log(result); // "3null"

// numeric string used with - , / , * results number type

result;

result = "4" - "2";
console.log(result); // 2

result = "4" - 2;
console.log(result); // 2

result = "4" * 2;
console.log(result); // 8

result = "4" / 2;
console.log(result); // 2

// non-numeric string used with +, - , / , * results to NaN

result;

result = "hello" - "world";
console.log(result); // NaN

result = "4" - "hello";
console.log(result); // NaN

// if boolean is used, true is 1, false is 0

result;

result = "4" - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4

// null is 0 when used with number
result;

result = 4 + null;
console.log(result); // 4

result = 4 - null;
console.log(result); // 4

// Explicit conversion to string
result;

// string to number
result = Number("324");
console.log(result); // 324

result = Number("324e-1");
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0

//number to string
result;
result = String(324);
console.log(result); // "324"

result = String(2 + 4);
console.log(result); // "6"

//other data types to string
result = String(null);
console.log(result); // "null"

result = String(undefined);
console.log(result); // "undefined"

result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// using toString()
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"

result;
result = Boolean("");
console.log(result); // false

result = Boolean(0);
console.log(result); // false

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false

// All other values give true. For example,

result = Boolean(324);
console.log(result); // true

result = Boolean("hello");
console.log(result); // true

result = Boolean(" ");
console.log(result); // true

// Type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("jonas"));

console.log(String(23));

// Type coercion
console.log("i'm " + 23 + "years old");
console.log("23" - "10" - 3);
console.log("23" * 2);
console.log("23" > "18");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);
*/

// Falsy values
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log("don't spend it all");
} else {
  console.log("you should get a job");
}

let height = 123;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is undefined");
}
*/

// Equality operator
/*
const age = "18";
if (age === 18) console.log("You just became and adult (strict)");

if (age == 18) console.log("You just became and adult (loose)");

const favorite = Number(prompt("what's your favorite number"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("cool! 23 is an amazing number");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("number is not 23 or 7 or 9");
}

if (favorite !== 23) console.log("why not 23");
*/

// Boolean Logic
/*const hasDriversLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);*/

// if (hasDriversLicense && hasGoodVision) {
//   console.log("sarah is able to drive");
// } else {
//   console.log("someone else should drive....");
// }
/*
const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("sarah is able to drive");
} else {
  console.log("someone else should drive....");
}*/

// Switch statement
// program using switch statement
/*
let a = 2;

switch (a) {
  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break;
  default:
    a = "not found";
    break;
}
console.log(`The value is ${a}`);

// program using switch statement
a = 1;

switch (a) {
  case "1":
    a = 1;
    break;
  case 0:
    a = 1;
    break;
  case 1:
    a = "two";
    break;

  default:
    a = "not found";
    break;
}
console.log(`The value is ${a}`);

// program for a simple calculator
let result;

// take the operator input
const operator = prompt("Enter operator ( either +, -, * or / ): ");

// take the operand input
const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));

switch (operator) {
  case "+":
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;
  case "-":
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;
  case "*":
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;
  case "/":
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;

  default:
    console.log("Invalid operator");
    break;
}*/
/*
const day = "wednesday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("enjoy the weekend :D");
} else {
  console.log("Not a valid day");
}
*/

/*
const age = 15;
// age >= 18
//   ? console.log("i like to drink wine")
//   : console.log("i like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);

const money = 100 >= 0 ? "don't spend it all" : "you don't have any money";
console.log(money);

let height = 123 > 0 ? "YAY! Height is defined" : "Height is undefined";
console.log(height);
*/
