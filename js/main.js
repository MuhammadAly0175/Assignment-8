//--------------------------------------------------------------------------

// Question Num.1: Write a program that allow to user enter number then print it

/*

var userNumber = prompt('Enter number to print:');

console.log(userNumber);

*/

//--------------------------------------------------------------------------

// Question Num.2: Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

/*

var userNumber = Number(prompt('Enter a number that can be divided by 3 AND 4'));

if (userNumber % 3 === 0 && userNumber % 4 === 0) {
    console.log("yes");
} else {
    console.log("no");
};

*/

//--------------------------------------------------------------------------

// Question Num.3: Write a program that allows the user to insert 2 integers then print the max

/*

var userNumber1 = Number(prompt('Enter the first number:'));

var userNumber2 = Number(prompt('Enter the second number:'));

if (userNumber1 > userNumber2) { console.log(userNumber1); }
else if (userNumber1 < userNumber2) { console.log(userNumber2); }
else if (userNumber1 == userNumber2) { console.log("Numbers are equal"); };

*/

//--------------------------------------------------------------------------

// Question Num.4: Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

/*

var userNumber = Number(prompt("Enter a number and know if it's a negative or a positive number:"));

if (userNumber > 0) { console.log("Positive"); }
else if (userNumber < 0) { console.log("Negative"); }
else if (userNumber === 0) { console.log("Neutral"); };

*/

//--------------------------------------------------------------------------

// Question Num.5: Write a program that take 3 integers from user then print the max element and the min element.

/*

var userNumber1 = Number(prompt('Enter 1st number:'));
var userNumber2 = Number(prompt('Enter 2nd number:'));
var userNumber3 = Number(prompt('Enter 3rd number:'));
var maxElement;
var minElement;

if (userNumber1 > userNumber2 && userNumber1 > userNumber3) { maxElement = userNumber1; }
else if (userNumber2 > userNumber1 && userNumber2 > userNumber3) { maxElement = userNumber2; }
else if (userNumber3 > userNumber1 && userNumber3 > userNumber2) { maxElement = userNumber3; }

if (userNumber1 < userNumber2 && userNumber1 < userNumber3) { minElement = userNumber1; }
else if (userNumber2 < userNumber1 && userNumber2 < userNumber3) { minElement = userNumber2; }
else if (userNumber3 < userNumber1 && userNumber3 < userNumber2) { minElement = userNumber3; }

console.log("Max Element = " + maxElement);
console.log("Min Element = " + minElement);

*/

//--------------------------------------------------------------------------

// Question Num.6: Write a program that allows the user to insert integer number then check If a number is oven or odd

/*

var userNumber = Number(prompt("Enter a number to know if it's even or odd"));

if (userNumber % 2 === 0) { console.log("Even"); }
else { console.log("Odd"); };

*/

//--------------------------------------------------------------------------

// Question Num.8: Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

/*

var userLetter = prompt("Enter a letter to know if it's a vowel or not:");
if (userLetter === 'a' || userLetter === 'A' ||
    userLetter === 'e' || userLetter === 'E' ||
    userLetter === 'i' || userLetter === 'I' ||
    userLetter === 'o' || userLetter === 'O' ||
    userLetter === 'u' || userLetter === 'U') { console.log("Vowel"); }
else { console.log("Consonant"); }

*/

//--------------------------------------------------------------------------

// Question Num.9: Write a program that allows user to insert integer then print all numbers between 1 to that’s number

/*

var userNumber = Number(prompt('Enter a number to count from 0 to it'));

for (var i = 1; i < userNumber + 1; i++) { console.log(i); };

*/

//--------------------------------------------------------------------------

// Question Num.10: Write a program that allows user to insert integer then print a multiplication table up to 12.

/*

var userNumber = Number(prompt('Enter a number to multiply up to 12'));

for(i = 1 ; i < 13 ; i++) {
    console.log(userNumber * i);
};

*/

//--------------------------------------------------------------------------

// Question Num.11: Write a program that allows to user to insert number then print all even numbers between 1 to this number

/*

var userNumber = Number(prompt('Enter a number to print all even numbers between 1 and it'));
for (i = 1; i < userNumber + 1; i++) {
    if (i % 2 === 0) { console.log(i); }
}

*/

//--------------------------------------------------------------------------

// Question Num.12: Write a program that take two integers then print the power

/*

var userNumber1 = Number(prompt('Enter the 1st number:'));
var userNumber2 = Number(prompt('Enter the 2nd number:'));

console.log(userNumber1 ** userNumber2);

*/

//--------------------------------------------------------------------------

// Question Num.12: Write a program to enter marks of five subjects and calculate total, average and percentage.

/*

var userNumber1 = Number(prompt('Enter the 1st mark:'));
var userNumber2 = Number(prompt('Enter the 2nd mark:'));
var userNumber3 = Number(prompt('Enter the 3rd mark:'));
var userNumber4 = Number(prompt('Enter the 4th mark:'));
var userNumber5 = Number(prompt('Enter the 5th mark:'));

console.log("Total Marks: " + (userNumber1 + userNumber2 + userNumber3 + userNumber4 + userNumber5));

console.log("Average Mark: " + (userNumber1 + userNumber2 + userNumber3 + userNumber4 + userNumber5) / 5);

console.log("Percentage: " + ((userNumber1 + userNumber2 + userNumber3 + userNumber4 + userNumber5) / 500 * 100) + "%");

*/

//--------------------------------------------------------------------------

// Question Num.13 Write a program to input month number and print number of days in that month.

/*

var userNumber = Number(prompt('Choose a month by choosing a number between 1-12:'));

if (userNumber === 4 || userNumber === 5 || userNumber === 9 || userNumber === 11) { console.log(30); }
else if (userNumber === 2) { console.log(28); }
else { console.log(31); }

*/

//--------------------------------------------------------------------------

// Question Num.14 Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade

/*

var userNumber1 = Number(prompt('Enter physics mark:'));
var userNumber2 = Number(prompt('Enter chemistry mark:'));
var userNumber3 = Number(prompt('Enter biology mark:'));
var userNumber4 = Number(prompt('Enter mathematics mark:'));
var userNumber5 = Number(prompt('Enter copmuter mark:'));

var grade = (userNumber1 + userNumber2 + userNumber3 + userNumber4 + userNumber5) / 500 * 100

if (grade >= 90) { console.log("A"); }
else if (grade >= 80) { console.log("B"); }
else if (grade >= 70) { console.log("C"); }
else if (grade >= 60) { console.log("D"); }
else if (grade >= 40) { console.log("E"); }
else if (grade < 40) { console.log("F"); }

*/

//--------------------------------------------------------------------------

// Question Num.15: Write a program to print total number of days in month

/*

var userNumber = Number(prompt('Choose a month by choosing a number between 1-12:'));

switch (userNumber) {
    case 4:
        console.log(30);
        break;
    case 5:
        console.log(30);
        break;
    case 9:
        console.log(30);
        break;
    case 11:
        console.log(30);
        break;
    case 2:
        console.log(28);
        break;
    default:
        console.log(31);

}

*/

//--------------------------------------------------------------------------

// Question Num.16: Write a program to check whether an alphabet is vowel or consonant

/*

var userLetter = prompt("Enter a letter to know if it's a vowel or not:");
switch (userLetter) {
    case 'a':
        console.log("Vowel");
        break;
    case 'A':
        console.log("Vowel");
        break;
    case 'e':
        console.log("Vowel");
        break;
    case 'E':
        console.log("Vowel");
        break;
    case 'i':
        console.log("Vowel");
        break;
    case 'I':
        console.log("Vowel");
        break;
    case 'o':
        console.log("Vowel");
        break;
    case 'O':
        console.log("Vowel");
        break;
    case 'u':
        console.log("Vowel");
        break;
    case 'U':
        console.log("Vowel");
        break;
    default:
        console.log("Consonant")
}

*/

//--------------------------------------------------------------------------

// Question Num.17 Write a program to find maximum between two numbers

/*

var userNumber1 = Number(prompt('Enter the first number:'));
var userNumber2 = Number(prompt('Enter the second number:'));

switch (true) {
    case (userNumber1 > userNumber2):
        console.log(userNumber1);
        break;
    case (userNumber1 < userNumber2):
        console.log(userNumber2);
        break;
    case (userNumber1 === userNumber2):
        console.log("Numbers are equal")
        break;
}

*/

//--------------------------------------------------------------------------

// Question Num.18

/*

var userNumber = Number(prompt("Enter a number to check if it's even or odd:"));

switch (true) {
    case (userNumber % 2 === 0):
        console.log('Even');
        break;
    default:
        console.log('Odd');
}

*/

//--------------------------------------------------------------------------

// Question Num.19: Write a program to check whether a number is positive or negative or zero

/*

var userNumber = Number(prompt("Enter a number to check if it's positive or negative or zero:"));

switch (true) {
    case (userNumber > 0):
        console.log('Positive');
        break;
    case (userNumber < 0):
        console.log('Negative');
        break;
    default:
        console.log('Zero')
}

*/

//--------------------------------------------------------------------------

// Question Num.20 Write a program to create Simple Calculator

/*

var operator = prompt("Enter the operator you want (* - + /):");
var userNumber1 = Number(prompt("Enter the 1st number:"));
var userNumber2 = Number(prompt("Enter the 2nd number"));

switch (true) {
    case (operator === '*'):
        console.log("result = " + (userNumber1 * userNumber2));
        break;
    case (operator === '+'):
        console.log("result = " + (userNumber1 + userNumber2));
        break;
    case (operator === '/'):
        console.log("result = " + (userNumber1 / userNumber2));
        break;
    case (operator === '-'):
        console.log("result = " + (userNumber1 - userNumber2));
        break;
}

*/