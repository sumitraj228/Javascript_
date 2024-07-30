
// todo TASK-1 ====>  Based on functions in javascript 

//! 1. **Define and call a Function**

// function sayHello(){
//     console.log("Hello world!")
// }
// sayHello()









//! 2. *Function with Parameters*

// let greet=(name)=>{
//     console.log(`Hello ${name}`)
// }

// greet("Alice")









//! 3. *Function that Returns a Value*

// let add=(a,b)=>{
//     return a+b
// }
// console.log(add(3,5))









//! 4. *Function with Default Parameter*

// let  greetWithDefault=(name="Guest")=>{
//     console.log(`Hello ${name}`)
// }

// greetWithDefault()
// greetWithDefault("Bob")










//! 5. *Arrow Function*

// let subtract=(a,b)=>{
//     return a-b
// }
 
// console.log(subtract(10,3))









//! 6. *Function that Uses Another Function*

// let applyOperation=(func,num1,num2)=>{
//     console.log(func(num1, num2))
// }

// let divide=(num1, num2)=>{
//     return num1/num2
// }

// applyOperation(divide, 20,4)
























//todo TASK-2 =====> Based on functions 


//! 1. **Greeting Function**:-

//! Write a function `greetPerson` that takes a `name` as an argument and returns a whimsical greeting message like "Greetings,
//! oh magnificent [name]! May your day be as splendid as a unicorn dance party."

// let greetPerson=(name)=>{
//    console.log(`"Greetings, Oh magnificent ${name} May your day be as splendid as a unicorn dance party."`)
// }
// greetPerson("Sumit")














//! 2. **Sum Function**:-

//! Write a function `sumNumbers` that takes two numbers `num1` and `num2` as arguments and returns their sum,
//! accompanied by a message like "You've just summoned the Sum Wizard who declares that [num1] + [num2] = [sum]."

// let sumNumbers=(num1, num2)=>{
//     let sum =num1+num2;
//     console.log(`You've just summoned the Sum Wizard who declares that ${num1} + ${num2} = ${sum}`);

// }
// sumNumbers(5,28)



















//! 3. **Welcome Message**:-

//! Write a function `welcomeNewMember` that takes `name` and `age` as arguments and returns a playful welcome message, such as
//! "Welcome aboard, Captain [name]! At the sprightly age of [age], you're about to embark on an adventure full of code quests and pixelated dragons.


// let welcomeNewMember=(name, age)=>{
//     return `Welcome aboard, Captain ${name}  At the sprightly age of ${age}, you're about to embark on an adventure full of code quests and pixelated dragons`

// }
// console.log(welcomeNewMember("Sumit", 21))


















//! 4. **Square Function**:-

//! Write a function `calculateSquare` that takes a `number` as an argument and returns its square, adding a magical touch with a message like
//! "Abracadabra! Behold the square of [number]: [square]. Prepare to be dazzled by the mathematical prowess of our enchanted calculator."



// let calculateSquare=(number)=>{
//     let square=number*number;
//     return `"Abracadabra! Behold the square of ${number} = ${square}. Prepare to be dazzled by the mathematical prowess of our enchanted calculator."`

// }
// console.log(calculateSquare(8))

















//! 5. **Check Even or Odd**:-

//! Write a function `checkEvenOrOdd` that takes a `number` as an argument and returns a delightful message indicating whether the number is
//! even or odd For instance, "Zigzagging through the numerical realm, we find that [number] is an [even/odd] adventurer on this quirky journey."


// let checkEvenOrOdd=(num)=>{
//     let check=""
//     if(num%2===0){
//        check="Even"
//     }
//     else{
//         check="Odd"
//     }

//     return `Zigzagging through the numerical realm, we find that ${num} is an ${check} adventurer on this quirky journey.`
// }

// console.log(checkEvenOrOdd(44))

















//! 6. **Convert Minutes to Seconds**:-

//! Write a function `convertMinutesToSeconds` that takes `minutes` as an argument and converts it to seconds, exclaiming with joy like
//! "Voila! [minutes] minutes have magically transformed into [seconds] seconds, just like flipping pancakes in a time-traveling kitchen."

// let convertMinutesToSeconds=(minutes)=>{
//     let seconds=minutes*60;
//     console.log(`Voila! ${minutes} minutes have magically transformed into ${seconds} seconds, just like flipping pancakes in a time-traveling kitchen.`)
// }

// convertMinutesToSeconds(42)


















//! 7. **Simple Interest Calculator**:-

//! Write a function `calculateSimpleInterest` that takes `principal`, `rate`, and `time` as arguments and calculates the simple interest,
//! presenting the result with a playful message such as "Channeling the financial wizards, we predict that a principal of [principal] coins,
//! under an enchanting interest rate of [rate]%, will yield an interest treasure of [interest] coins!"

// let calculateSimpleInterest=(p,r,t)=>{
//     let si= (p*r*t)/100
//     console.log(`Channeling the financial wizards, we predict that a principal of ${p} coins, under an enchanting interest rate of ${r}%, will yield an interest treasure of ${si} coins!`)
// }

// calculateSimpleInterest(4500,9,2)

















//! 8. **Temperature Converter**:-

//! Write a function `convertCelsiusToFahrenheit` that takes `temperature` in Celsius as an argument and converts it to Fahrenheit,
//! describing the transformation with a whimsical twist like "The alchemical conversion of [temperature] degrees Celsius into Fahrenheit 
//! unveils [convertedTemperature] degrees Fahrenheit. Watch as Celsius and Fahrenheit dance a merry jig of temperature whimsy!"!

// let convertCelsiusToFahrenheit=(t)=>{
//     let Fahrenheit= (9/5)*t + 32;
//     console.log(`The alchemical conversion of ${t} degrees Celsius into Fahrenheit unveils ${Fahrenheit} degrees Fahrenheit. 
//     Watch as Celsius and Fahrenheit dance a merry jig of temperature whimsy!"`)
// }
// convertCelsiusToFahrenheit(37)



















//! 9. **Check Vowel or Consonant**:-

//! Write a function `identifyVowelOrConsonant` that takes a single character `letter` (a string of length 1) as an argument
//! and determines whether it's a vowel or a consonant. Provide a light-hearted message like "Behold, the mystical character [letter]!
//! Is it a rare vowel twinkling in the linguistic constellation, or a robust consonant marching in the symphony of letters?"

// let identifyVowelOrConsonant=(s)=>{
//     if(s=="A"||s=="a" ||s=="E" ||s=="e" || s=="I"||s=="i" ||s=="O" ||s=="o" || s=="U"||s=="u"){
//         console.log(`Behold, the mystical character ${s}! is a rare vowel twinkling in the linguistic constellation`)
//     }
//     else{
//         console.log(`Behold, the mystical character ${s}! is a robust consonant marching in the symphony of letters`)
//     }
// }
// identifyVowelOrConsonant("b")




























//todo TASK-3 =====> Based on functions 



//! 1. **Function Declaration**:
//!     **Description**: Define a function `sayHello` that logs `"Hello, World!"` to the console.
//!     **Steps**:
//!               Declare a function named `sayHello`.
//!               Inside the function body, use `console.log()` to output `"Hello, World!"`.


// let sayHello=()=>{
//     console.log("Hello, World!")
// }
// sayHello()













//! 2. **Function Expression**:
//!     **Description**: Declare a function expression `double` that doubles a given number `x`.
//!     **Steps**:
//!               Declare a variable `double` and assign it a function expression that accepts a parameter `x`.
//!               Inside the function expression, return `x` multiplied by `2`.

// let double=(x)=>{
//     return x*2;
// }
// console.log(double(5))















//! 3. **Arrow Function**:
//!     **Description**: Convert the function `multiply` to an arrow function that multiplies two numbers `x` and `y`.
//!     **Steps**:
//!               Convert the function `multiply` to an arrow function format.
//!               Use the arrow function to multiply `x` and `y` and return the result


// let multiply=(x,y)=>{
//     return x*y;
// }
// console.log(multiply(5,36))















//! 4. **Default Parameters**:
//!     **Description**: Define a function `greet` that logs `"Hello, [name]!"`. Provide a default value `"Guest"` for `name`.
//!     **Steps**:
//!               Define a function `greet` that accepts a parameter `name` with a default value `"Guest"`.
//!               Use `console.log()` to greet the `name` with `"Hello, [name]!"`.

// let greet=(name="Guest")=>{
//     console.log(`Hello, ${name}`)
// }
// greet("Sumit")














//! 5. **Higher-Order Function**:
//!     **Description**: Create a function `operate` that takes two numbers and a callback function. Implement the callback function to perform an operation (e.g., add, subtract) on the two numbers.
//!     **Steps**:
//!               Define a function `operate` that accepts two numbers `a` and `b`, and a callback function `callback`.
//!               Inside `operate`, invoke `callback` with `a` and `b` as arguments to perform an operation.
//!               Example usage: `operate(5, 3, add); // Output: 8`

// let operate=(callback,a,b)=>{
//     callback(a,b)
// }

//     let sum=(a,b)=>{
//         console.log(a+b)
//     }
   
//    let mul=(a,b)=>{
//     console.log(a*b)
//    }

// operate(sum,2,5);
// operate(mul,5,7);
















//! 6. **Anonymous Function**:
//!    - **Description**: Use an anonymous function as a callback in `setTimeout` to log `"Delayed message"` after `2000` milliseconds.
//!    - **Steps**:
//!                Use `setTimeout()` with an anonymous function as the first argument.
//!                Inside the anonymous function, use `console.log()` to output `"Delayed message"`.

// setTimeout(()=>{
//     console.log("Delayed")
// },2000)

















//! 7. **Recursive Function**:
//!    - **Description**: Write a recursive function `factorial` to calculate the factorial of a number `n`.
//!    - **Steps**:
//!      - Define a function `factorial` that takes a number `n`.
//!      - Use recursion to multiply `n` by `factorial(n-1)` until `n` reaches `1`.
//!      - Example usage: `factorial(5); // Output: 120`

// let factorial=(n)=>{
//     if(n===1){
//         return n;
//     }
//     else{
//         return n *(factorial(n-1))
//     }
// }

// console.log(factorial(8))















//! 8. **Function Scope**:
//!    - **Description**: Declare a variable inside a function and try accessing it outside the function. Log the results to observe function scope.
//!    - **Steps**:
//!      - Declare a function that defines a variable `innerVar` inside its scope.
//!      - Attempt to access `innerVar` outside the function scope and observe if it is accessible.

// let func1=()=>{
//     let a=10;
// }

// console.log(a)















//! 9. **Immediately Invoked Function Expression (IIFE)**:
//!    - **Description**: Create an IIFE that logs `"IIFE Executed"` immediately upon declaration.
//!    - **Steps**:
//!      - Define an IIFE using `(function(){ ... })()` syntax.
//!      - Inside the IIFE, use `console.log()` to output `"IIFE Executed"` immediately.

// (()=>{
//     console.log("IIFE Executed")

// })()
















//! 10. **Callback Function**:
//!     - **Description**: Define a function `processData` that takes an array and a callback function. Use the callback function to process each element of the array (e.g., log each element).
//!     - **Steps**:
//!       - Define a function `processData` that accepts an array `data` and a callback function `callback`.
//!       - Iterate through each element of `data` and apply `callback` to each element.
//!       - Example usage: `processData([1, 2, 3], console.log); // Output: Logs each element`

// let processData=(data,  callback)=>{
//     for(let i=0; i<data.length; i++){
//         callback(data[i]);
//     }
// }

// processData([1,5,7,6], console.log)















//! 11. **Currying**:
//!     - **Description**: Implement a curried function `multiplyCurry` that takes two numbers as arguments in separate function calls to multiply them.
//!     - **Steps**:
//!       - Define a function `multiplyCurry` that takes a number `a` and returns a function `multiplyByA` that takes another number `b`.
//!       - Inside `multiplyByA`, multiply `a` by `b` and return the result.
//!       - Example usage: `multiplyCurry(5)(3); // Output: 15`

// let multiplyCurry=(a)=>{

//    return  multiplyByA=(b)=>{
//         return a*b;
//     }
   
// }
// console.log(multiplyCurry(7)(3))















//! 12. **Generator Function**:
//!     - **Description**: Create a generator function `countdown` that yields numbers from `5` to `1` in sequence.
//!     - **Steps**:
//!       - Define a generator function `countdown` using `function*`.
//!       - Use `yield` to sequentially return values from `5` to `1`.
//!       - Example usage: `for (let num of countdown()) { console.log(num); } // Output: 5, 4, 3, 2, 1`

// let countdown=(count)=>{
//     for(let i=count; i>=1; i--){
//         console.log(i)
//     }
// }
// countdown(8)



















//! 13. **Function Composition**:
//!     - **Description**: Write two functions `add5` and `multiplyBy10`. Use function composition to create a new function `add5AndMultiplyBy10` that first adds `5` to a number and then multiplies it by `10`.
//!     - **Steps**:
//!       - Define functions `add5` that adds `5` to a number and `multiplyBy10` that multiplies a number by `10`.
//!       - Implement `add5AndMultiplyBy10` by composing `add5` and `multiplyBy10`.
//!       - Example usage: `add5AndMultiplyBy10(3); // Output: 80`

// let add5=(n)=>{
//     return n+5;
// }

// let multiplyBy10=(n)=>{
//     return n*10;
// }

// let add5AndMultiplyBy10=(num)=>{
    
//     return multiplyBy10(add5(num));
// }

// console.log(add5AndMultiplyBy10(7))











//! 14. **Memoization**:
//!     - **Description**: Implement memoization for a recursive Fibonacci function to improve performance by caching previously computed results.
//!     - **Steps**:
//!       - Define a function `fibonacci` that uses memoization to store previously computed Fibonacci numbers in an object.
//!       - Use recursion to calculate Fibonacci numbers and cache results in the memoization object.
//!       - Example usage: `fibonacci(7); // Output: 13`











//! 15. **Error Handling in Functions**:
//!     - **Description**: Create a function `divide` that handles errors for division by zero using `try` and `catch`.
//!     - **Steps**:
//!       - Define a function `divide` that takes two numbers `a` and `b`.
//!       - Use `try` and `catch` to handle the division by zero error.
//!       - Example usage: `divide(10, 0); // Output: Error: Division by zero`
















//! 16. **Partial Application**:
//!     - **Description**: Define a function `createGreeting` that takes a `greeting` string and returns a function `greet` which takes a `name` and logs the greeting.
//!     - **Steps**:
//!       - Define `createGreeting` that takes a `greeting` string and returns a function `greet` that logs the combined greeting.
//!       - Example usage: `let sayHi = createGreeting("Hi"); sayHi("Alice"); // Output: "Hi, Alice"`












//! 17. **Closures**:
//!     - **Description**: Create a closure with a function `counter` that maintains and increments a count every time it is called.
//!     - **Steps**:
//!       - Define a function `counter` that initializes a variable `count` and returns an inner function.
//!       - Inside the inner function, increment `count` and return its value.
//!       - Example usage: `let increment = counter(); console.log(increment()); // Output: 1`













//! 18. **Passing Functions as Arguments**:
//!     - **Description**: Implement a function `applyOperation` that takes two numbers and a function (e.g., add, subtract) as arguments to perform the operation.
//!     - **Steps**:
//!       - Define `applyOperation` that takes two numbers `a` and `b`, and a function `operation`.
//!       - Use `operation` to perform operations (e.g., add, subtract) on `a` and `b`.
//!       - Example usage: `applyOperation(5, 3, add); // Output: 8`

















//! 19. **Returning Functions from Functions**:
//!     - **Description**: Define a function `createMultiplier` that takes a number `multiplier` and returns a function `multiplyByMultiplier` which multiplies a given number by `multiplier`.
//!     - **Steps**:
//!       - Define `createMultiplier` that takes a `multiplier` and returns a function `multiplyByMultiplier`.
//!       - Use `multiplyByMultiplier` to multiply a number by `multiplier`.
//!       - Example usage: `let multiplyBy5 = createMultiplier(5); multiplyBy5(3); // Output: 15`


















//! 20. **Function Decorators**:
//!     - **Description**: Create a function decorator `withLogging` that wraps another function to log its arguments and result before and after execution.
//!     - **Steps**:
//!       - Define `withLogging` that takes a function `func` and returns a new function.
//!       - Inside the new function, log arguments before calling `func` and log the result after.
//!       - Example usage: `let loggedAdd = withLogging(add); loggedAdd(2, 3); // Output: "Arguments: 2, 3", "Result: 5"`

























//todo TASK-4 =====> Based on conditional statements 

//! 1. **Simple If Statement**:

//!  - **Description**: Use an `if` statement to check if a number `age` is greater than `18`. Log `"Adult"` if true, otherwise log `"Minor"`.
//!    - **Steps**:
//!      - Declare a variable `age` with a numeric value.
//!      - Use an `if` statement to check if `age` is greater than `18`.
//!      - Inside the `if` block, use `console.log()` to output `"Adult"`.
//!      - Use an `else` block to log `"Minor"` if the condition is false.

// let age=19
// if(age>18){
//     console.log("Adult")
// }
// else{
//     console.log("Mibnor")
// }















//! 2. **If-Else Statement**:
//!    - **Description**: Use an `if-else` statement to check if a variable `temperature` is greater than `25`. Log `"Warm"` if true, otherwise log `"Cool"`.
//!    - **Steps**:
//!      - Declare a variable `temperature` with a numeric value.
//!      - Use an `if-else` statement to check if `temperature` is greater than `25`.
//!      - Inside the `if` block, use `console.log()` to output `"Warm"`.
//!      - Inside the `else` block, log `"Cool"` if the condition is false.

// let temperature=37;
// if(temperature>25){
//     console.log("Warm")
// }
// else{
//     console.log("Cool")
// }














//! 3. **Nested If Statements**:
//!    - **Description**: Use nested `if` statements to check the validity of `username` and `password`. Log `"Login Successful"` if both are correct, otherwise log appropriate error messages.
//!    - **Steps**:
//!      - Declare variables `username` and `password` with string values.
//!      - Use nested `if` statements to check if `username` and `password` match expected values.
//!      - Log `"Login Successful"` if both conditions are true.
//!      - Log error messages for incorrect username or password.

// let username=prompt("Enter Username")
// let password=prompt("Enter Password")

// if(username=="Sumit228"){
//     if(password==="12345"){
//         console.log("Login Successful")
//     }
//     else{
//         console.log("incorrect password")
//     }

// }
// else{
//     console.log("incorrect username")
// }







//! 4. **If-Else If-Else Statement**:
//!    - **Description**: Use an `if-else if-else` statement to check the day of the week and log appropriate messages (`"Weekend"` for `Saturday` and `Sunday`, `"Weekday"` otherwise).
//!    - **Steps**:
//!      - Declare a variable `day` with a string value representing a day of the week.
//!      - Use an `if-else if-else` statement to check conditions for `Saturday` and `Sunday`.
//!      - Log `"Weekend"` for these days.
//!      - Log `"Weekday"` for other days using the `else` block.

// let day= prompt("Enter day")
// if(day==="Saturday" || day==="Sunday"){
//     console.log("Weekend")
// }
// else{
//     console.log("Weekday")
// }












//! 5. **Switch Statement**:
//!    - **Description**: Use a `switch` statement to log `"Weekend"` for `Saturday` and `Sunday`, `"Weekday"` for `Monday` to `Friday`, and `"Invalid Day"` for other inputs.
//!    - **Steps**:
//!      - Declare a variable `day` with a string value representing a day of the week.
//!      - Use a `switch` statement with cases for `Saturday` and `Sunday` to log `"Weekend"`.
//!      - Use cases for `Monday` to `Friday` to log `"Weekday"`.
//!      - Use a `default` case to log `"Invalid Day"` for other inputs.

// let day=prompt("Enter Day")
// switch(day){
//     case"Saturday":
//     console.log("Weekend");
//     break;
    
//     case"Sunday":
//     console.log("Weekend");
//     break;

//     case"Monday":
//     console.log("Weekdays");
//     break;

//     case"Tuesday":
//     console.log("Weekdays");
//     break;

//     case"Wednesday":
//     console.log("Weekdays");
//     break;

//     case"Thursday":
//     console.log("Weekdays");
//     break;

//     case"Friday":
//     console.log("Weekdays");
//     break;

//     default:
//         console.log("Invalid day");

// }












//! 6. **Ternary Operator**:
//!    - **Description**: Use the ternary operator (`condition ? exprIfTrue : exprIfFalse`) to determine if a number `x` is even or odd. Log `"Even"` if true, otherwise log `"Odd"`.
//!    - **Steps**:
//!      - Declare a variable `x` with a numeric value.
//!      - Use the ternary operator to check if `x` is even or odd (`x % 2 === 0`).
//!      - Log `"Even"` if true, otherwise log `"Odd"`.

// let x=8;
// (x%2===0?console.log("Even"):console.log("Odd"))













//! 7. **Multiple Conditions with Logical Operators**:
//!    - **Description**: Use logical operators (`&&`, `||`, `!`) to combine and negate boolean expressions. Log the results for different combinations of conditions.
//!    - **Steps**:
//!      - Declare boolean variables `a` and `b`.
//!      - Use logical operators to create compound expressions (e.g., `a && b`, `a || b`, `!a`).
//!      - Log the results of each expression to observe how logical operators behave.

// let a=true;
// let b=false;
// console.log("a && b==>",a&&b)
// console.log("a && a==>",a&&a)
// console.log("b && b==>",b&&b)

// console.log("a || b==>",a||b)
// console.log("a || a==>",a||a)
// console.log("b || b==>",b||b)

// console.log("!a==>",!a)
// console.log("!b==>",!b)






//! 8. **Nested Ternary Operators**:
//!    - **Description**: Use nested ternary operators to check multiple conditions and determine a message based on `temperature`. Log `"Hot"` for `temperature > 30`, `"Moderate"` for `temperature > 20`, and `"Cold"` otherwise.
//!    - **Steps**:
//!      - Declare a variable `temperature` with a numeric value.
//!      - Use nested ternary operators to check if `temperature` falls into different ranges (`temperature > 30`, `temperature > 20`).
//!      - Log appropriate messages (`"Hot"`, `"Moderate"`, `"Cold"`) based on the conditions.

// let temperature= 15;
// let message=temperature>30?"hot":temperature>20?"moderate":"cold"
// console.log(message)





//! 9. **Short Circuit Evaluation**:
//!    - **Description**: Use short circuit evaluation (`&&` and `||`) to avoid errors by checking if properties exist before accessing them in an object.
//!    - **Steps**:
//!      - Define an object `user` with optional properties.
//!      - Use short circuit evaluation (`&&`) to check if properties exist before accessing them.
//!      - Log `"Property exists"` if the property exists, otherwise handle the absence gracefully.

//  const user={
//     name:"sumit",
//     age:"21",
//     gender:"male"
//  }

//  console.log(user.age || user.gender?"property exists":"Property does not exist")
//  console.log(user.age && user.occupation?"property exists":"Property does not exist")








//! 10. **Early Return with If Statement**:
//!     - **Description**: Implement a function `isValidName` that checks if a `name` is valid (not empty or `null`). Return `true` if valid, otherwise `false`.
//!     - **Steps**:
//!       - Define a function `isValidName` that accepts a `name` parameter.
//!       - Use an `if` statement to check if `name` is not `null`, `undefined`, or an empty string.
//!       - Return `true` if the condition is true, otherwise return `false`.

// let isValidName=(name)=>{
//     if(name==null || name===""){
//         return false;
//     }
// return true;
// }

// console.log(isValidName("sumit"))








//! 11. **Guard Clause with If Statement**:
//!     - **Description**: Implement a function `calculateBonus` that calculates a bonus based on `sales`. If `sales` is less than or equal to `0`, return `0`. Otherwise, calculate the bonus based on a percentage of `sales`.
//!     - **Steps**:
//!       - Define a function `calculateBonus` that accepts a `sales` parameter.
//!       - Use an `if` statement as a guard clause to return `0` if `sales` is less than or equal to `0`.
//!       - Calculate and return the bonus based on a percentage of `sales` if the guard clause is not met.

// let calculateBonus=(sales)=>{
//     if(sales<=0){
//         return 0
//     }
//     return sales*0.10;

// }
// console.log(calculateBonus(45000))








//! 12. **Chained Ternary Operators**:
//!     - **Description**: Use chained ternary operators to determine the grade based on a `score`. Log `"A"` for `score >= 90`, `"B"` for `score >= 80`, `"C"` for `score >= 70`, `"D"` for `score >= 60`, and `"F"` otherwise.
//!     - **Steps**:
//!       - Declare a variable `score` with a numeric value.
//!       - Use chained ternary operators to check different ranges (`score >= 90`, `score >= 80`, etc.).
//!       - Log appropriate grades (`"A"`, `"B"`, `"C"`, `"D"`, `"F"`) based on the `score`.

// let score=95;
// console.log(score>=90?"A":score>=80?"B":score>=70?"C":score>=60?"D":"F")













//! 13. **Switch Statement with Break**:
//!     - **Description**: Use a `switch` statement with `break` to check the day of the week and log messages for each day (`"Monday"`, `"Tuesday"`, `"Wednesday"`, `"Thursday"`, `"Friday"`, `"Saturday"`, `"Sunday"`).
//!     - **Steps**:
//!       - Declare a variable `day` with a string value representing a day of the week.
//!       - Use a `switch` statement with cases for each day of the week.
//!       - Log appropriate messages (`"Monday"`, `"Tuesday"`, etc.) for each case using `break`.

// let day=8;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
    
//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thursday");
//         break;
    
//     case 5:
//         console.log("Friday");
//         break;

//      case 6:
//         console.log("Saturday");
//         break;
     
//     case 7:
//         console.log("Sunday");
//         break;

//      default:
//         console.log("Inavlid day")       
// }













//! 14. **Switch Statement without Break**:
//!     - **Description**: Use a `switch` statement without `break` to log messages for multiple cases of a variable `fruit` (`"Apple"`, `"Orange"`, `"Banana"`). Log `"Unknown Fruit"` for other values.
//!     - **Steps**:
//!       - Declare a variable `fruit` with a string value representing a fruit.
//!       - Use a `switch` statement with cases for `"Apple"`, `"Orange"`, `"Banana"`.
//!       - Log appropriate messages for each case and `"Unknown Fruit"` for other values without using `break`.

// let fruit="Grapes";
// switch(fruit){
//     case "Apple":
//     case "Orange":
//     case "Banana":
//         console.log("This is a fruit");
//      default:
//         console.log("Unknown Fruit")      
// }










//! 15. **Default Case in Switch Statement**:
//!     - **Description**: Use a `switch` statement with a default case to log messages for different `paymentMethods` (`"Credit Card"`, `"Debit Card"`, `"Cash"`, `"PayPal"`). Log `"Invalid Payment Method"` for other values.
//!     - **Steps**:
//!       - Declare a variable `paymentMethod` with a string value representing a payment method.
//!       - Use a `switch` statement with cases for `"Credit Card"`, `"Debit Card"`, `"Cash"`, `"PayPal"`.
//!       - Use a `default` case to log `"Invalid Payment Method"` for other values.

// let paymentMethods="Credit Card";
// switch(paymentMethods){
//     case "Credit Card":
//     case "Debit Card":
//     case "Cash":
//     case "PayPal":
//         console.log("Valid Payment method");
//         break;     
//     default:
//         console.log("Invalid Payment Method")      
// }












//! 16. **Switch Statement with Fallthrough**:
//!     - **Description**: Use a `switch` statement with fallthrough to log messages for a variable `month` (`"January"`, `"February"`, `"March"`). Log `"Quarter 1"` for the first three months and `"Other Months"` for others.
//!     - **Steps**:
//!       - Declare a variable `month` with a string value representing a month.
//!       - Use a `switch` statement with cases for `"January"`, `"February"`, `"March"`.
//!       - Use fallthrough to log `"Quarter 1"` for these months and `"Other Months"` for other values.

// let month="January";
// switch(month){
//     case "January":
//     case "February":
//     case "March":
//         console.log("Quarter 1")
//         break;
//         default:
//             console.log("Other Months")
// }










//! 17. **Using Logical Operators in If Statement**:
//!     - **Description**: Use logical operators (`&&`, `||`, `!`) to combine conditions in an `if` statement. Log messages based on the result of multiple conditions.
//!     - **Steps**:
//!       - Declare boolean variables `isLogged` and `isAdmin`.
//!       - Use logical operators (`&&`, `||`, `!`) to combine conditions (`isLogged && isAdmin`, `!isLogged`, etc.).
//!       - Log appropriate messages based on the result of each combined condition.

// let isLogged=true;
// let isAdmin=false;
// if(isLogged && isAdmin){
//     console.log("Logged-in as Admin")
// }
// else if(isLogged || isAdmin){
//     console.log("Logged-in")
// }
// else if(!isLogged && !isAdmin){
//     console.log("Not logged in as admin")
// }
// else if(!isAdmin || !isLogged){
//     console.log("Not an admin and not logged in")
// }
// else{
//     console.log("Inavlid")
// }









//! 18. **Multiple Conditions with If-Else Statements**:
//!     - **Description**: Use `if-else` statements to check multiple conditions (`a`, `b`, `c`). Log messages for different combinations of conditions.
//!     - **Steps**:
//!       - Declare boolean variables `a`, `b`, and `c`.
//!       - Use `if-else` statements to check combinations of conditions (`a && b`, `a || b && c`, etc.).
//!       - Log appropriate messages for each combination of conditions.
// let a = true;
// let b = false;
// let c = true;

// if (a && b && c) {
//   console.log("All conditions are true");
// } else if (a && b) {
//   console.log("a and b are true, but c is false");
// } else if (a && c) {
//   console.log("a and c are true, but b is false");
// } else if (b && c) {
//   console.log("b and c are true, but a is false");
// } else if (a || b || c) {
//   console.log("At least one condition is true");
// } else {
//   console.log("All conditions are false");
// }












//! 19. **Nested If-Else Statements with Ternary Operator**:
//!     - **Description**: Use nested `if-else` statements and the ternary operator to determine eligibility for a discount based on `age` and `isStudent`. Log messages based on the eligibility.
//!     - **Steps**:
//!       - Declare variables `age` (numeric) and `isStudent` (boolean).
//!       - Use nested `if-else` statements to check `age` and `isStudent` conditions.
//!       - Use the ternary operator to log messages for eligible and ineligible customers based on the conditions.

// let age=29;
// let isStudent =false;

// if(18>=age>=25){
// isStudent?console.log("you are student and your age is also eligible for discount"):console.log("you are not student but your age is eligible for discount")
// }
// else{
//     isStudent?console.log("you are student but your age is not eligible for discount"):console.log("you are not student and your age is also not eligible for discount")
// }










//! 20. **Combining Ternary Operator with If-Else Statement**:
//!     - **Description**: Combine the ternary operator and `if-else` statement to determine a message based on `score`. Log `"Pass"` for `score >= 60`, `"Fail"` otherwise.
//!     - **Steps**:
//!       - Declare a variable `score` with a numeric value.
//!       - Use the ternary operator inside an `if-else` statement to check if `score >= 60`.
//!       - Log `"Pass"` if true, otherwise log `"Fail"`.

// let score = 89;
// if(score>=60){
//   console.log(score>=80?"Pass with good marks":"Pass")
// }
// else{
//     console.log("Fail")
// }












//todo TASK-5 ====> Based on Loops
//! 1. **Print numbers from 1 to 10 using a `for` loop:**
//!    Write a JavaScript program that uses a `for` loop to sequentially print numbers from 1 to 10. Each number should be displayed on a new line.

// for(let i=1; i<=10; i++){
//     console.log(i)
// }








//! 2. **Print even numbers between 1 to 20 using a `for` loop:**
//!    Create a JavaScript program that iterates through numbers from 1 to 20 using a `for` loop and prints only the even numbers. Each even number should be displayed on a new line.

// for(let i=1; i<=20; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }








//! 3. **Print multiples of 3 from 3 to 30 using a `for` loop:**
//!    Develop a JavaScript program that prints multiples of 3 in the range from 3 to 30 using a `for` loop. Each multiple should be printed on a new line.

// for(let i=1; i<=10; i++){
//     console.log(3*i)
// }








//! 4. **Calculate the sum of numbers from 1 to 50 using a `for` loop:**
//!    Write a JavaScript program that calculates the sum of all integers from 1 to 50 using a `for` loop. Print the total sum once the loop completes.

// let sum=0;
// for(let i=1; i<=50; i++){
//     sum=sum+i;
// }
// console.log(sum)










//! 5. **Print numbers in reverse order from 10 to 1 using a `for` loop:**
//!    Implement a JavaScript program that uses a `for` loop to print numbers in descending order from 10 to 1. Each number should appear on a new line.

// for(let i=10; i>=1; i--){
//     console.log(i)
// }











//! 6. **Print the Fibonacci sequence up to the 10th term using a `for` loop:**
//!    Create a JavaScript program that generates and prints the first 10 terms of the Fibonacci sequence using a `for` loop. Each term should be displayed on a new line.

// let num1=0, num2=1, num3;
// console.log(1);
//  for(let i=1; i<=10; i++){
//     num3=num1+num2;
//     num1= num2;
//     num2=num3;
//     console.log(num3);
//  }













//! 7. **Print the factorial of a number using a `for` loop:**
//!    Develop a JavaScript program that calculates the factorial of a given number using a `for` loop. Print the factorial value once computed.

// let n= 5;
// let fact=1;
// for(let i=1; i<=n; i++){
//     fact=fact*i;

// }
// console.log(fact)












//! 8. **Print numbers from 1 to 100 using a `while` loop:**
//!    Write a JavaScript program that uses a `while` loop to print numbers from 1 to 100. Each number should be displayed on a new line.

// let i=1;
// while(i<=100){
//     console.log(i);
//     i++;
// }













//! 9. **Print even numbers between 1 to 20 using a `while` loop:**
//!    Create a JavaScript program that iterates through numbers from 1 to 20 using a `while` loop and prints only the even numbers. Each even number should be displayed on a new line.

// let i=1;
// while(i<=20){
//     if(i%2==0){
//         console.log(i);
//     }
//     i++;
// }















//! 10. **Calculate the sum of numbers from 1 to 50 using a `while` loop:**
//!     Write a JavaScript program to calculate the sum of all integers from 1 to 50 using a `while` loop. Display the total sum once the loop completes.

// let sum=0, i=1;
// while(i<=50){
//     sum= sum+i;
//     i++;
// }
// console.log(sum);














//! 11. **Print numbers in reverse order from 10 to 1 using a `while` loop:**
//!     Implement a JavaScript program that uses a `while` loop to print numbers in descending order from 10 to 1. Each number should appear on a new line.

// let i=10;
// while(i>=1){
//     console.log(i);
//     i--;
// }












//! 12. **Print numbers from 1 to 100 using a `do...while` loop:**
//!     Develop a JavaScript program that prints numbers from 1 to 100 using a `do...while` loop. Each number should be displayed on a new line.

// let i=1;
// do{
// console.log(i);
// i++;
// }
// while(i<=100);















//! 13. **Print multiples of 5 from 5 to 50 using a `do...while` loop:**
//!     Create a JavaScript program that prints multiples of 5 in the range from 5 to 50 using a `do...while` loop. Each multiple should be printed on a new line.

// let i=1;
// do{
//     console.log(5*i);
//     i++;
// }
// while(i<=10);

















//! 14. **Print numbers from 1 to 10 using a `for...of` loop (ES6):**
//!     Write a JavaScript program that uses a `for...of` loop to sequentially print numbers from 1 to 10. Each number should be displayed on a new line.

// let nums=[1,2,3,4,5,6,7,8,9,10];
// for(let n of nums){
//     console.log(n);
// }













//! 15. **Print numbers in reverse order from 10 to 1 using a `for...of` loop (ES6):**
//!     Implement a JavaScript program that uses a `for...of` loop to print numbers in descending order from 10 to 1. Each number should appear on a new line.

// let nums=[10,9,8,7,6,5,4,3,2,1];
// for(let n of nums){
//     console.log(n);
// }












//! 16. **Generate and print the ASCII values of characters from 'A' to 'Z' using a `for` loop:**
//!     Develop a JavaScript program that iterates through characters from 'A' to 'Z' using a `for` loop and prints their corresponding ASCII values. Display each ASCII value on a new line.

// for(let char='A'; char<='Z'; char++){
//     console.log(`Character: ${char} ASCII value: ${char.charCodeAt(0)}`)
// }














//! 17. **Check if a number is a perfect square using a `for` loop:**
//!     Write a JavaScript program that checks if a given number is a perfect square using a `for` loop. If the number is a perfect square, print a message indicating so; otherwise, print another message.
















//! 18. **Generate a random number between 1 and 10 and print it using a `while` loop:**
//!     Create a JavaScript program that generates a random integer between 1 and 10 using `Math.random()` and prints it using a `while` loop. Ensure the generated number is displayed.
















//! 19. **Print numbers from 1 to 100, but skip multiples of 7 using a `for` loop:**
//!     Develop a JavaScript program that prints numbers from 1 to 100 using a `for` loop. Skip printing any number that is a multiple of 7. Each non-skipped number should be displayed on a new line.

// for(let i=1; i<=100; i++){
//     if(i%7==0){

//     }
//     else{
//         console.log(i);
//     }
    
// }











//! 20. **Calculate the sum of digits of a number using a `while` loop:**




































//todo TASK-6 ====> Based on Objects
//! 1. **Check if a property exists in an object using `hasOwnProperty`:**
//!    Write a JavaScript program that checks if a specific property exists in an object using the `hasOwnProperty` method. Print a message indicating whether the property exists or not.






//! 2. **Access and print nested properties of an object:**
//!    Create a JavaScript program that accesses and prints nested properties of an object. Ensure to handle cases where nested properties might be undefined to avoid errors.






//! 3. **Update the value of a property in an object:**
//!    Develop a JavaScript program that updates the value of a specific property in an object using assignment (`=`). Print the object before and after the update to verify the change.






//! 4. **Add a new property to an object:**
//!    Implement a JavaScript program that adds a new property with a value to an object using assignment (`=`). Print the object before and after adding the new property to confirm the addition.






//! 5. **Delete a property from an object using `delete` keyword:**
//!    Write a JavaScript program that deletes a specific property from an object using the `delete` keyword. Print the object before and after deleting the property to ensure the removal.






//! 6. **Check if an object is empty using `Object.keys`:**
//!    Create a JavaScript program that checks if an object is empty (i.e., contains no properties) using the `Object.keys` method. Print a message indicating whether the object is empty or not.





//! 7. **Clone an object using `Object.assign`:**
//!    Develop a JavaScript program that clones (creates a shallow copy of) an existing object using the `Object.assign` method. Print both the original and cloned objects to verify they are separate entities.






//! 8. **Merge two objects into a new object using `Object.assign`:**
//!    Write a JavaScript program that merges two objects into a new object using the `Object.assign` method. Print the merged object containing properties from both objects.





//! 9. **Check if two objects have the same properties and values using a custom function:**
//!    Implement a JavaScript program that compares two objects to check if they have exactly the same properties and corresponding values. Use a custom function to perform deep equality comparison. Print a message indicating whether they are identical or not.





//! 10. **Convert object keys into an array using `Object.keys`:**
//!     Create a JavaScript program that extracts all keys of an object using the `Object.keys` method and stores them in an array. Print the array of keys to verify the extraction.








//todo TASK-7 ====>


//!     1. *Log Each Element*
//!    - Given an array of numbers, use forEach to log each number to the console. This will help you understand how forEach iterates over each element in the array.
//!    - Example array: [1, 2, 3, 4, 5]
//!    - Expected output:  
//!      1
//!      2
//!      3
//!      4
//!      5
     
// let nums =[1,2,3,4,5];
// nums.forEach((a)=>{
//     console.log(a);

// })











//! 2. *Sum of Elements*
//!    - Calculate the sum of all elements in an array using forEach. Initialize a variable to store the sum and add each element to this variable within the forEach loop. Log the final sum.
//!    - Example array: [10, 20, 30, 40, 50]
//!    - Expected output: 150

// let sum=0;
// let nums =[10,20,30,40,50];
// nums.forEach((a) => {
//     sum =sum+a;
// });
// console.log(sum)





//! 3. *Multiply Each Element*
//!    - Multiply each element in an array by 2 and log the result for each element. This demonstrates how you can apply a transformation to each element in the array.
//!    - Example array: [5, 10, 15, 20]
//!    - Expected output: 
//!      10
//!      20
//!      30
//!      40
  
// let nums=[5,10,15,20]
// nums.forEach((a)=>{
// console.log(a*2)
// })











//! 4. *Create a New Array*
//!    - Use forEach to create a new array where each element is the square of the original element. Log the new array to see the transformed elements.
//!    - Example array: [2, 4, 6, 8]
//!    - Expected output: [4, 16, 36, 64]

// let nums= [2,4,6,8]
// let arr=[];
// nums.forEach((a)=>{
// arr.push(a*a)
// })
// console.log(arr)










//! 5. *Log Element with Index*
//!    - Use forEach to log each element along with its index in the array. This will help you understand how to access the index within the forEach loop.
//!    - Example array: [100, 200, 300, 400]
//!    - Expected output:  
//!      Index: 0, Value: 100
//!      Index: 1, Value: 200
//!      Index: 2, Value: 300
//!      Index: 3, Value: 400
   
// let nums=[100,200,300,400]
// nums.forEach((value, index)=>{
// console.log(`Index: ${index}, value: ${value}`)
// })










//! 6. *Filter Even Numbers*
//!    - Use forEach to create a new array containing only even numbers from the original array. Log the new array to verify that it only contains even numbers.
//!    - Example array: [1, 2, 3, 4, 5, 6, 7, 8]
//!    - Expected output: [2, 4, 6, 8]

// let arr=[];
// nums=[1,2,3,4,5,6,7,8];
// nums.forEach((a)=> {
//     if(a%2===0){
//         arr.push(a)
//     }
// });
// console.log(arr)










//! 7. *Count Occurrences of a Value*
//!    - Use forEach to count the number of times a specific value appears in an array. Log the count at the end. This task will help you practice using conditional statements within a forEach loop.
//!    - Example array: [1, 1, 2, 3, 1, 4, 1, 5]
//!    - Value to count: 1
//!    - Expected output: 4

// let count=0;
// let nums=[1,1,2,3,1,4,1,5];
// nums.forEach((a)=>{
//     if(a===1){
//         count++;
//     }
// })
// console.log(count)











//! 8.*Log Object Properties*
//!     - Use forEach to log each property and value of objects in an array. This task will help you understand how to iterate over arrays of objects and access their properties.
//!     - Example array: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]
//!     - Expected output:    
//!       Name: Alice, Age: 25
//!       Name: Bob, Age: 30
//!       Name: Charlie, Age: 35

//   let arr=[{name: "ALice", age: 25},{name: "Bob", age: 30},{name: "Charlie", age: 35}]
//   arr.forEach((a)=>{
//     console.log(`name: ${a.name}, age: ${a.age}`)
//   })