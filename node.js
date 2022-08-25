const foods = ["one", "two","three"];
console.log('Exercise 1 Result: ', foods);
// Exercise 2: Add pizza and cheeseburger using push. Which adds them to the end.
foods.push("pizza", "cheeseburger");
console.log('Exercise 2 Result: ',foods);
// Exercise 3 Add the string 'taco' to the foods array so that 'taco' 
// is the first food in the array.
foods.unshift("taco")
console.log('Exercise 3 Result: ',foods);
//an uglier way to add items to the beginning of an array
foods.splice(0,0,"burritos");
console.log('Exercise 3 (ugly) Result: ',foods);
//   Exercise 4 - Access the string 'pizza' with bracket notation (based upon its known position) in the 
// foods array and assign to a variable named favFood.
// 	- You should end up with a variable called favorite food that is equal to 'pizza'
const favFood = foods[5];
console.log('Exercise 4 Result: ', favFood);
/* Exercise 5:
  - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
  - How do we add stuff to the middle of the array at a specific spot cant use push, 
  - cant use unshift */
foods.splice(6,0, "tofu");
console.log('Exercise 5 Result: ', foods);
/*
Exercise 6:
  - Remove the string 'pizza' in the foods array and replace it with the separate 
  - strings 'sushi' & 'cupcake'. Hmm tricky, think about what the end result should be.... 
  - yes Arthur talked about this in class. What is the intended result, pizza will be gone and instead, 
  - now sushi & cupcake will be in their instead*/
  let newFoods= ["sushi", "cupcake"];
  foods.splice(5,1,"sushi", "cupcake");
  console.log('Exercise 7 Result: ', foods);
/* Exercise 7:
  - Use the slice method on the foods array to create a new array containing 
  - 'sushi' & 'cupcake'. Assign the new array to a variable named yummy.
	- You should have a food array and a yummy array now. */
     //strting item index number, how many you want to slice off
     let yummy = foods.slice(5,-2);
     console.log('Exercise 7 Result: ', yummy);
/*
Exercise 8:
  - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
	- Easiest question yet don't overthink it trust me.
*/
const soyIdx = foods.indexOf("tofu");
console.log('Exercise 8 Result: ', soyIdx);
/* Exercise 9:
  - Assign to a variable named allFoods the result of joining the strings in the foods array such that 
  - the result is the following single string:
    'taco -> sushi -> cupcake -> tofu -> cheeseburger'
  - Easier than it sounds.... google it */
const allFoods = foods.join(" -> ");
console.log('Exercise 9 Result: ', allFoods);
/*
Exercise 10:
  - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array 
  includes the string 'soup'.
*/
const hasSoup = allFoods.includes("soup");
console.log('Exercise 10 Result: ', hasSoup);
/*
Exercise 11:
  - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
  - Hint: Initialize the odds variable to an empty array before the iteration.
*/
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];
nums.forEach(n => {
     if (n % 2!==0){
          odds.push(n);
     }
})
console.log('Exercise 11 Result: ', odds);
/*
Exercise 12:
    - Use the forEach method to iterate through the same nums array and add the number to 
      arrays named fizz, buzz and/or fizzbuzz based upon the following:
  	- Add to the fizz array if the number is evenly divisible by 3.
  	- Add to the buzz array if the number is evenly divisible by 5.
  	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
*/
// Complete Exercise 12 below...
const fizz = [];
const buzz = [];
const fizzbuzz = [];
nums.forEach(n => {
     if (n % 3 === 0 && n % 5 === 0){
          fizzbuzz.push(n)
     } else if (n % 5 === 0){
          buzz.push(n)     
     }  else if (n % 3=== 0){
          fizz.push(n)
     }
}) 
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);
/*
Exercise 13:
  - Given the below numArrays array of arrays (two-dimensional array), assign the last 
    nested array to a variable named numList.
  - Assume you don't know how many nested arrays numArrays contains.
*/
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
let numLast = '';
numLast = numArrays[numArrays.length-1];
console.log('Exercise 13 Result: ', numLast);
/*
Exercise 14:
  - Given the above numArrays array, access the number 66 and assign to a variable named num.
*/
//num = numArrays.includes('66');
num = numArrays[2][1];
console.log('Exercise 14 Result: ', num);
/*
Exercise 15:
  - Given the above numArrays array, use nested forEach methods to sum up all 
    the numbers contained within 
    numArrays and assign to a variable named total.
    - Hint: Be sure to declare and initialize the total variable before the iterations.
*/
// this doesn't work. let total = '';
total = 0;
numArrays.forEach(function(n){
     n.forEach(function(i){
          total +=i
     })
})
console.log('Exercise 15 Result: ', total);


