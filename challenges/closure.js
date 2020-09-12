// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: Closure gives the ability to only reach out to the parent function and grab a variable to bring inside its block scope. That is why the nestedFunction was able to console.log(internal) because closure is happening there. 


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num){
  counter = 0;
  function sum(){
    for(let i = 0; i <= num; i++){
      counter += num - 2;
    }
  }
  sum();
}
summation(4);
console.log(counter);

