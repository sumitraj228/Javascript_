//!================================== #JavaScript Notes# ================================================


//!======================================= #History ===================================================
// 1.	JavaScript was first created by Brendan Eich in just 10 days in May 1995 while he was working at Netscape Communications Corporation.
// 2.	The initial release was called Mocha and later renamed to LiveScript, and finally JavaScript.
// 3.	Initially, JavaScript was designed to be a lightweight scripting language for adding interactivity to web pages.
// 4.	At the time, web pages were mostly static and lacked interactivity, and the only way to add dynamic content to a web page was to use a server-side programming language like PHP or Perl.
// 5.	However, this approach had limitations and was not well-suited to creating responsive, interactive user interfaces.
// 6.	The idea behind JavaScript was to create a scripting language that could be executed on the client-side (in the user's web browser) and could be used to add interactivity to web pages.
// 7.	This allowed web developers to create more engaging and interactive websites, without having to rely on server-side programming languages.
// 8.	Its popularity grew rapidly as it was one of the few languages that could be executed directly in web browsers, without the need for additional plugins or software.
// 9.	In 1996, Microsoft released JScript as a competitor to JavaScript, which was their own implementation of the language for their Internet Explorer browser.
// 10.	However, JScript was very similar to JavaScript, and the two languages were largely interchangeable.
// 11.	Over time, JavaScript has evolved and grown to become a full-fledged programming language, capable of creating complex applications on both the client and server-side.
// 12.	The development of JavaScript has been heavily influenced by a number of factors, including the emergence of new web technologies, changes in programming paradigms, and the rise of new development frameworks and libraries.
// 13.	Today, JavaScript is one of the most widely used programming languages in the world, powering many of the most popular websites and web applications.
// 14.	It continues to evolve and adapt to the changing needs of the web, with new features and capabilities being added on a regular basis.

	

//!============================================= #Introduction ================================================
// 1. Javascript is scripting and programming language.
// 2. It is purely object based language.This means that variables, functions, and even primitive data types like numbers and strings are object,everything is object in javascript.
// 3. It is dynamically typed language , it means type of value stored in memory block is checked at runtime because of this nature we can store any type of value in variable.
// 4. It is object oriented programming language , it means we can create our own object. (It is not purely object oriented programming language)
// 5. It is interepreted language
// 6. It is synchronous language , it has single threaded architecture. Instructions get executed line by line.
// 7. It is single call stack
// 8. Mainly introduced to instruct the browser
// 9. Js helps to provide behavior and functionality to webpage and helps to develop dynamic webpage
// 10. Every browser have js engine to run js code. Therefore browser become environment to run js code.
// 11. To run Js code outside browser we just need Javascript runtime environment (Node).
// 12. Js is used to add functionality to website.




//!======================================== #Javascript Runtime Environment =========================================
// 1. JavaScript Runtime Enviroment provides the enviroment where we can run our JavaScript code.
// 2. Two javascript runtime enviroments are :
// I. Browser
// II. Node.js




//! #Browser
// 1. A browser is a software application that is used to access and view information on the World Wide Web (WWW).
// 2. It allows users to interact with web pages, view multimedia content, and surf the internet.
// 3. The Browser acts as a JavaScript runtime environment because it includes a JavaScript engine that interprets and executes JavaScript code

//todo #JavaScript Engine
// 1. A JavaScript engine is a computer program that executes JavaScript code.
// 2. It is a core component of web browsers, server-side JavaScript platforms, and other JavaScript-based environments.


//todo #Some Popular JavaScript Engines Include:
// 1. V8 (fastest Js engine): developed by Google, used in Google Chrome and Node.js
// 2. SpiderMonkey : developed by Mozilla, used in Firefox
// 3. JavaScriptCore : developed by Apple, used in Safari
// 4. Chakra : developed by Microsoft, used in Microsoft Edge and Internet Explorer (legacy)



//! #Node.Js
// 1. The main reason of javascript popularity.
// 2. Node.js is a software application that executes JavaScript code. It is not a framework or a library.
// 3. It allows developers to run JavaScript code outside of a web browser, such as on a server or command-line interface.
// 4. Node.js uses the V8 JavaScript engine, which is also used in Google Chrome.
// 5. It is built on top of an event-driven, non-blocking I/O model, which allows it to handle large numbers of simultaneous connections without blocking the execution of other code.
// 6. This makes it well-suited for building scalable, high-performance applications that can handle a large amount of traffic.
// 7. Because after introduction of Nodejs, we were able to run javascript anywhere like in web servers, as command-line tools, desktop applications, and even IoT (Internet of Things) devices













//!========================================== Features of JavaScript ===================================================

//? 1. **Scripting Language**:
//    - **What it means**: JavaScript is used to write small programs that automate tasks in web pages.
//    - **Why we call it that**: It helps make web pages interactive. For example, it can change text when you click a button or show a pop-up message.

//? 2. **High-Level Language**:
//    - **What it means**: JavaScript is easy for humans to read and write.
//    - **Why we call it that**: You don’t need to know the details of how the computer works to use JavaScript. It uses simple commands and is close to human language, making it accessible for beginners.

//? 3. **Interpreted Language**:
//    - **What it means**: JavaScript code runs directly in the web browser without needing to be converted into another form first. It has interpretor which runs the code line by line.
//    - **Why we call it that**: You can see the results of your code immediately in the browser. This makes it easy to test and fix your code quickly.

//? 4. **Synchronous Language**:
//    - **What it means**: JavaScript runs commands one after another, in order.
//    - **Why we call it that**: When you write JavaScript code, it does each task step by step, making it easier to understand what’s happening in your program.

//? 5. **Object-Based Language**:
//    - **What it means**: JavaScript uses objects to store and organize data and functions. 
//    - **Why we call it that**: In javaScript most of the things are are internally objects. Objects help keep related code together. For example, you can have an object for a car that includes properties like color and methods like drive.

//? 6. **Object-Oriented Language**:
//    - **What it means**: JavaScript supports creating complex structures using classes and objects.
//    - **Why we call it that**:We can create our own objects using classes in javascript.

//? 7. **Loosely Typed Language**:
//    - **What it means**: In JavaScript, you don’t have to specify what type of data (like a number or text) a variable holds. Also we don’t need to follow the syntax very strictly eg. No need to write semicolons. 
//    - **Why we call it that**: This makes writing code faster and easier because you don’t have to worry about declaring data types and don’t need to strictly follow the syntax. You can just start using variables right away.

//? 8. **Dynamically Typed Language**:
//    - **What it means**: The type of data a variable holds can change as your program runs.
//    - **Why we call it that**: You can have a variable that starts as a number and then later hold a string (text) without any extra work. This flexibility makes JavaScript powerful for writing dynamic programs.

//? 9. **Single-Threaded Language**:
//    - **What it means**: JavaScript can only do one thing at a time.
//    - **Why we call it that**: This simplicity makes it easier to write and understand JavaScript code. Even though it does one task at a time, JavaScript can handle many tasks quickly by using techniques like callbacks and promises.




//! #Token
// 1. It is the smallest unit of programming language.
// 2. We have 5 types of operators,punctuators,keywords ,identifiers , literals.
//! #Operators
// In JavaScript, operators are used to perform operations on variables and values. Here are the main types of operators in JavaScript, along with examples and brief descriptions:

//todo ### 1. *Arithmetic Operators*
// Arithmetic operators are used to perform arithmetic calculations.

// - + (Addition): Adds two values.
//   javascript
//   let sum = 5 + 3; // sum is 8
  
// - - (Subtraction): Subtracts the second value from the first.
//   javascript
//   let difference = 10 - 4; // difference is 6
  
// - * (Multiplication): Multiplies two values.
//   javascript
//   let product = 6 * 7; // product is 42
  
// - / (Division): Divides the first value by the second.
//   javascript
//   let quotient = 20 / 5; // quotient is 4
  
// - % (Modulus): Returns the remainder of a division.
//   javascript
//   let remainder = 10 % 3; // remainder is 1
  
// - ** (Exponentiation): Raises the first value to the power of the second.
//   javascript
//   let power = 2 ** 3; // power is 8
  

//todo ### 2. *Assignment Operators*
// Assignment operators are used to assign values to variables.

// - =: Assigns a value to a variable.
//   javascript
//   let x = 10;
  
// - +=: Adds and assigns the result.
//   javascript
//   x += 5; // x is now 15
  
// - -=: Subtracts and assigns the result.
//   javascript
//   x -= 3; // x is now 12
  
// - *=: Multiplies and assigns the result.
//   javascript
//   x *= 2; // x is now 24
  
// - /=: Divides and assigns the result.
//   javascript
//   x /= 4; // x is now 6
  
// - %=: Takes modulus and assigns the result.
//   javascript
//   x %= 5; // x is now 1
  
// - **=: Raises to power and assigns the result.
//   javascript
//   x **= 3; // x is now 1
  

//todo ### 3. *Comparison Operators*
// Comparison operators are used to compare two values.

// - == (Equal to): Checks if two values are equal.
//   javascript
//   5 == '5'; // true
  
// - === (Strict equal to): Checks if two values are equal and of the same type.
//   javascript
//   5 === '5'; // false
  
// - != (Not equal to): Checks if two values are not equal.
//   javascript
//   5 != '5'; // false
  
// - !== (Strict not equal to): Checks if two values are not equal and/or not of the same type.
//   javascript
//   5 !== '5'; // true
  
// - > (Greater than): Checks if the left value is greater than the right.
//   javascript
//   10 > 5; // true
  
// - < (Less than): Checks if the left value is less than the right.
//   javascript
//   10 < 5; // false
  
// - >= (Greater than or equal to): Checks if the left value is greater than or equal to the right.
//   javascript
//   10 >= 10; // true
  
// - <= (Less than or equal to): Checks if the left value is less than or equal to the right.
//   javascript
//   10 <= 5; // false
  

//todo ### 4. *Logical Operators*
// Logical operators are used to combine multiple boolean expressions.

// - && (Logical AND): Returns true if both operands are true.
//   javascript
//   true && false; // false
  
// - || (Logical OR): Returns true if at least one operand is true.
//   javascript
//   true || false; // true
  
// - ! (Logical NOT): Inverts the boolean value.
//   javascript
//_  !true; // false
  

//todo ### 5. *Bitwise Operators*
// Bitwise operators are used to perform bit-level operations.

// - & (AND): Returns a 1 in each bit position for which the corresponding bits of both operands are 1.
//   javascript
//   5 & 1; // 1 (0101 & 0001)
  
// - | (OR): Returns a 1 in each bit position for which the corresponding bits of either or both operands are 1.
//   javascript
//   5 | 1; // 5 (0101 | 0001)
  
// - ^ (XOR): Returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1.
//   javascript
//   5 ^ 1; // 4 (0101 ^ 0001)
  
// - ~ (NOT): Inverts the bits of its operand.
//   javascript
//   ~5; // -6 (not 0101)
  
// - << (Left shift): Shifts bits to the left by the specified number of positions.
//   javascript
//   5 << 1; // 10 (0101 << 1)
  
// - >> (Sign-propagating right shift): Shifts bits to the right, preserving the sign.
//   javascript
//   5 >> 1; // 2 (0101 >> 1)
  
// - >>> (Zero-fill right shift): Shifts bits to the right, filling with zeros.
//   javascript
//   5 >>> 1; // 2 (0101 >>> 1)
  

//todo ### 6. *String Operators*
// String operators are used to manipulate strings.

// - + (Concatenation): Joins two or more strings.
//   javascript
//   let greeting = 'Hello' + ' ' + 'World'; // "Hello World"
  
// - +=: Appends the right operand to the left operand.
//   javascript
//   let text = 'Hello';
//   text += ' World'; // "Hello World"
  

//todo ### 7. *Conditional (Ternary) Operator*
// The ternary operator is a shorthand for an if-else statement.

// - condition ? expr1 : expr2: Returns expr1 if the condition is true, otherwise returns expr2.
//   javascript
//   let result = (5 > 3) ? 'Greater' : 'Lesser'; // "Greater"
  

//todo ### 8. *Type Operators*
// Type operators are used to determine the type of a variable or value.

// - typeof: Returns the type of a variable or expression.
//   javascript
//   typeof 42; // "number"
  
// - instanceof: Tests whether an object is an instance of a particular class or constructor.
//   javascript
//   let arr = [];
//   arr instanceof Array; // true

// These operators are essential for performing various operations in JavaScript, from simple arithmetic to complex logical expressions.



//! #Punctuators
// 1. These are symbols used to group, separate, or punctuate code.
// 2. Examples include parentheses (), curly braces {}, square brackets [], commas ,, semicolons ;, and the period . (used to access object properties).
//! #Keywords
// 1. These are reserved words that have a special meaning in the language.
// 2. Examples like if, else, for, while, function, and return,etc.
//! #Identifiers
// 1. These are user given names to variables, functions, and other objects in the code.
// 2. Identifier name can not start with number.
// 3. Identifier name should not be a keyword
// 4. If Identifier is of multiple word, instead of using space, we have to use underscore.
// 5. identifier name should not have special character but can start with underscore(_) and dollar($).





//! #Literals
// 1. These are values used in our program like number(2),string('hello world') , etc.
// #Types Of Literals / Datatypes
// 1. Primitive
// 2. Non-Primitive
//todo #Primitive Literals
// 1. In JavaScript, a primitive data type is a data type that represents a single value.
// 2. JavaScript treats primitive values as immutable values, means that their value cannot be changed. Instead, when you perform an operation that appears to modify a primitive value, you are actually creating a new object with new value and assigning it to a variable. Here , variable will hold the reference of latest object with new value and the previous object with it's value will garbage collected.
// 3. We have 8 primitive types of literals -number , bigint , boolean , nan , undefined , null , symbol , string..
// #Primitive Datatypes
// 1. Number
// 1. This data type represents a numeric value. It can store both integers and floating-point values.
// 2. It's range is from -253-1 to 2 53-1 .
// 2. BigInt
// 1. It is used to represent integers that are larger than the Number data type
// 2. It's range is more than -253-1 and more than 253-1 .
// 3. To represent the given integer as bigint , we have to suffix 'n' after the integer.
// Example : 10 is number type and 10n is bigint type.
// 3. Boolean
// 1. This datatype represents a logical entity and can only have two values: true or false.
// 4. Null
// 1. This datatype represents a null or empty value.
// 2. It is used to mark the memory block empty intentionally.
// 5. Undefined
// 1. This datatype represents an uninitialized value.
// 2. When memory block is unintialized , js engine implicitly initialize that memory block with 'undefined' in variable phase.
// 3. For variable declared with 'var' it will initialize it in variable phase
// 4. For variable declared with 'let' and 'const' it will not initialize it in variable phase.
// 6. NaN
// 1. It stands for 'not a number'.
// 2. It represents computational error.
// 3. When js engine is not able compute result it returns 'NaN'.
// 4. Example : "Hello" + 1 = Hello1 and "Hello" - 1 = NaN
// In first case , js engine concatnated the string with number.
// In second case , js engine is able to compute anything because we can not subtract 1 from "Hello" string therefore it returns NaN.
// 7. Symbol
// 1. It represents a unique identifier.
// 2. We have Symbol function which is used to generate unique idenitifiers in our program.
// 8. String
// 1. It represents collection of characters.
// 2. We have two types of strings :- single line and multi line string.
// 3. Single line string :
// - It is enclosed by single quotes (' ') and double quotes (" ") .
// - It doesnot allow line breaks and whitespaces.
// 4. Multi line string :
// - It is enclosed by backticks (` `).
// - It allow line breaks and whitespaces.
// - It is also called as template string.
// - Template strings allow us to insert variables and expressions directly in the string using ` ${ variable_name } ` notation.

//todo #Non-Primitive Literals
// 1. In JavaScript, a non primitive data type is a data type that represents multi value.
// 2. JavaScript treats non-primitive values as mutable values, means that their value can be changed. When we try to update a value , new object is not created . Here value is changed in the same memory block.
// 3. Non-primitive datatype : object ,array , etc





















//! #Var
// 1. Variable declared with var goes to global scope.
// 2. We can redeclare variable with same name in same scope.
// 3. We can update the value of variable.
// 4. We can declare variable without initialization.
// 5. Variable declared with var , can be hoisted.
// 6. Variable declared inside block , will go to global scope.
// 7. Variable declared inside function , will not go to global scope. It will be accessible inside function only.


//! #Let
// 1. Variable declared with let is block scoped.
// 2. We cannot redeclare variable with same name in same scope.
// 3. We can update the value of variable.
// 4. We can declare variable using let without initialization. But js engine will keep that memory block uninitialized (empty) untill js engine reads declaration statement in execution phase.
// 5. Because let variable is uninitialized (empty) in variable phase , it belongs to Temporal Dead Zone.
// 6. The variable declared using let does not belongs to global scope , we cannot access them with the help of window variable.
// 7. The variable declared using let is hoisted and belongs to temporal deadzone. Therefore it cannot be used before initialization (because at that moment it is uninitialized - TDZ) .
// 8. Variable declared inside function will be accessible inside function only.


//! #Const
// 1. Variable declared with const is block scope.
// 2. We cannot redeclare variable with same name in same scope.
// 3. The value of variable can not be modified.
// 4. We can not declare const without initialization.
// 5. The variable declared using const is hoisted and belongs to temporal deadzone. Therefore it cannot be used before initialization (because at that moment it is uninitialized - TDZ) .
// 6. The variable declared using const inside block ,does not belongs to global scope we cannot use them with the help of window.
// 7. Variable declared inside function will be accessible inside function only.





















//!    #Global Execution Context
// 1. When we give JS code to the browser, JS Engine will allocate (create) a global memory block for the execution of JavaScript code, called Global Execution Context.
// 2. Here, we have a window variable which have reference of Global Execution Context.

//todo #Window Variable
// 1. Window variable or window object -> everything is object in js.
// 2. Window is a global variable which store the reference of Global Execution Context
// 3. Window object is also known as Global Object because it is available anywhere in the program.
// 4. Window object have pre-defined state and behaviour.
// 5. Variable declared with var always goes to global scope and can be accessible by window object.
// 6. Any variable created in global scope will be addes in Window object implicitly by JS Engine.

//! #JavaScript Code Run In Two Phases
// 1. Variable phase
// 2. Execution phase
//? #Variable Phase
// 1. In variable phase, JS Engine will check the complete JS Code and it will search for variable declaration statement.
// 2. If variable is declared then JS Engine allocate (provide) memory for them.
// 3. Variable declared with var will be initialized storing "undefined" at the time of memory block creation.
// Variable declared with let and const will remain uninitialized (empty) at the time of memory block creation.
//? #Execution Phase
// 1.	 In Execution phase, JS Engine will execute the instruction line-by-line.















//!====================================== #Functions ==========================================
// 1. Function is object.
// 2. Function is a block of instruction which is used to perform a specific task.
// 3. A function get executed only when it is called.
// 4. The main advantage of function is we can achieve code reusability.
// 5. To call a function we need its reference and ().
// 6. Name of function is variable which holds the reference of function object.
// 7. Creating a function using function keyword supports function hoisting.
// 8. Therefore we can also call a function before function declaration.
// 9. When we try to log function name the entire function defination is printed.
// 10. The scope within function block is known as local scope.
// 11. Any member with local scope cannot be used outside the function block.
// 12. A parameter of function will have local scope.
// 13. Variable written inside function even using var have local scope.
// 14. Inside a function we can use the members of global scope.
// 15. In javascript 'this' is a property of every function.(every function will have 'this' Keyword except arrow function)


//todo #Parameter
// 1. The variables declared in the function defination is known as parameters.
// 2. The parameters have local scope (can be used only inside function body).
// 3. Parameters are used to hold the values passed by caller (or calling statement).
//todo #Arguments
// 1. The values passed in the method call statement is known as arguments.
// 2. Note : An argument can be a literal, variable or an expression which gives a results.
//todo #Return Keyword
// 1. It is a keyword used as control transfer statement in a function.
// 2. Return will stop the execution of the function and transfer control along with data to the caller.


//! #Ways To Create Functions
//todo 1. Function declaration statement : Create using function keyword

// 1. 
// Syntax :
// function func_variable(parameters) {    
//   //statements
// }
// func_variable()  

// 2. 
// Example : Create a function 'greet' which should print a message "Good Morning" when it is called.

// function func_variable(parameters) {    
//   //statements
// }
// func_variable()  




// 3. 
// Function can be Hoisted.

// //Here, we are accessing function before it's declaration statement.

// greet();
// function greet() {
//   console.log("Good Morning");
// }
// output : Good Morning


// 4. Function does not belongs to temporal dead zone.



//todo 2. Function as expression / expression function
// 1. Function which is passed to an variable as a value is called as first class function.
// 2. Function can not be Hoisted because it is object is created in execution phase.
// 3. Function does not belongs to temporal dead zone



// #Functional Programming
// 1. Functional Programming is a programming technique where we pass a function along with a value to another function.
// 2. In this approach, we generate Generic Function. Here function task is not predefined. It perform multiple task not only single task
// 3. The Function which accept another function as a parameter or return a function is known as 'Higher Order Function'.
// 4. The Function which is passed to another function or the function which is returned by another function is known as 'Callback Function'.



//todo 3. Immediate Invoke Function (IIF)
// 1. when a function is called as soon as it's object is created is known as Immediate Invoke Function.
// 2. We have to write the function inside the paranthesis to group it. [using Group operator -> (function code) ].
// 3. The function is not visible(available) outside the scope.
// 4. After grouping it, we have to use paranthesis to call this function.
// 5. Immediate Invoke Function execute only once.

//todo 4. Arrow Function
// 1. The main function of arrow function is to reduce the function syntax.
// 2. Arrow Function is introduced in ES6.
// 3. If we have only single parameter, it is not necessary to use paranthesis for paramenter.
// 4. If function have single statement, then block (curly braces) is optional.
// 5. It does not have its own 'this' property.
// 6. Implicit return :- If there is only one statement and If block is not created then JS Engine will return that statement automatically.
// 7. Explicit return :- If block is created and function is not returning any value, JS Engine will return undefined. To return a value Explicitly from block, we have to use return keyword.If block is created then we have to use return keyword to return value otherwise JS Engine will return undefined.

//todo 5. Higher Order Function
// 1. The Function which accept another function as a parameter or return a function is known as 'Higher Order Function'.

//todo 6. Callback Function
// 1. The Function which is passed to another function or the function which is returned by another function is known as 'Callback Function'.



//todo #Nested Function
// 1. The function inside another function is called as nested function.
// 2. 
// Example :

// function outer(){
//       function inner(){
//       }
// }
// 3. The outer function is known as parent and the inner function is known as child.
// 4. The inner function is local to outer function, it cannot be accessed from outside.
// 5. 
// To use inner function outside, the outer function must return the reference of inner function.

// function outer(){
//       function inner(){
//       }
// }

// We can now call inner function from outside as follows:

// 1st Way:


// let fun=outer();
// fun();   // -----> inner() is called

// 2nd Way:

// outer()();   // -----> inner() is called
























//! ======================================== Hoisting =================================================
// Hoisting in JavaScript means that variable and function declarations are moved to the top of their scope before the code runs. This allows you to use them before they are actually declared in your code.



//todo  Variable Hoisting

// 1. **var**
//    - Variables declared with `var` are moved to the top of their function scope.
//    - They start as `undefined` until the line of code where they are assigned a value.

//    ```javascript
//    console.log(x); // undefined
//    var x = 5;
//    console.log(x); // 5
//    ```

// 2. **let** and **const**
//    - Variables declared with `let` and `const` are also moved to the top of their block scope.
//    - They are not initialized until the code reaches their declaration.
//    - Using them before they are declared gives a `ReferenceError`.

//    ```javascript
//    console.log(y); // ReferenceError: Cannot access 'y' before initialization
//    let y = 10;
//    console.log(y); // 10

//    console.log(z); // ReferenceError: Cannot access 'z' before initialization
//    const z = 15;
//    console.log(z); // 15
//    ```





//todo #### Function Hoisting

// 1. **Function Declarations**
//    - Function declarations are moved to the top of their scope.
//    - You can call these functions before they are declared in the code.

//    ```javascript
//    console.log(sum(2, 3)); // 5
//    function sum(a, b) {
//      return a + b;
//    }
//    ```

// 2. **Function Expressions**
//    - Function expressions (functions assigned to variables) are not fully hoisted.
//    - Only the variable declaration is hoisted, not the function itself.

//    ```javascript
//    console.log(multiply); // undefined
//    var multiply = function (a, b) {
//      return a * b;
//    };
//    ```

//    ```javascript
//    console.log(divide); // ReferenceError: Cannot access 'divide' before initialization
//    let divide = function (a, b) {
//      return a / b;
//    };
//    ```

// ### Key Points
// - **`var` variables**: Moved to the top of the function scope, start as `undefined`.
// - **`let` and `const` variables**: Moved to the top of the block scope, not initialized until declared.
// - **Function declarations**: Fully moved to the top, can be used before they appear in the code.
// - **Function expressions**: Only the variable part is moved, not the function assignment.







//! ======================================== Temporal Dead Zone ======================================================
// The Temporal Dead Zone (TDZ) is the time span between variable declaration and its initialization. During this time, the variable declared with let and const cannot be used.

// #### Example of TDZ

// ```javascript
// console.log(a); // Error: Cannot access 'a' before initialization
// let a = 10;
// console.log(a); // 10
// ```

// Here, `a` cannot be used before the line `let a = 10;`.

// #### Key Points

// 1. **Variables with `let` and `const`**:
//    - These variables are in the TDZ from the start of the block until they are declared.
//    - Trying to use them before the declaration gives an error.

// 2. **Purpose of TDZ**:
//    - The TDZ helps catch mistakes by not allowing the use of variables before they are properly declared.

// #### Simple Example

// ```javascript
// function example() {
//   console.log(b); // Error: Cannot access 'b' before initialization
//   let b = 20;
//   console.log(b); // 20
// }

// example();
// ```

// In this function, `b` is in the TDZ until `let b = 20;` is executed.

// #### Comparison with `var`

// ```javascript
// function exampleVar() {
//   console.log(c); // undefined (no TDZ for `var`)
//   var c = 30;
//   console.log(c); // 30
// }

// exampleVar();
// ```

// For variables declared with `var`, there is no TDZ. They are hoisted to the top and initialized as `undefined`.

// ### Summary
// - **TDZ**: Time when `let` or `const` variables can't be used.
// - **Error**: Using these variables before they are declared gives an error.
// - **Why**: This helps find mistakes in the code.





//!============================================= Closure ===============================================================
// A closure is a feature in JavaScript where a function remembers and can access variables from outside its own scope, even after the outer function has finished executing.

// Example of a Closure
// function outerFunction() {
//   let outerVariable = 'I am outside!';
  
//   function innerFunction() {
//     console.log(outerVariable); // This is a closure
//   }
  
//   return innerFunction;
// }

// const closureFunction = outerFunction();
// closureFunction(); // Logs: 'I am outside!'
// ```

// Here, `innerFunction` remembers `outerVariable` from `outerFunction` even after `outerFunction` has finished running. This is a closure.

// Key Points

// 1. Function Inside a Function :
//    - A closure is created when a function is defined inside another function, and the inner function accesses variables from the outer function.

// 2. Remembering Variables:
//    - The inner function "remembers" the variables from the outer function's scope even after the outer function has finished running.

// 3. Practical Use :
//    - Closures are useful for creating private variables and functions.

// Simple Example


// function createCounter() {
//   let count = 0;
  
//   return function() {
//     count += 1;
//     console.log(count);
//   };
// }

// const counter = createCounter();
// counter(); // Logs: 1
// counter(); // Logs: 2
// counter(); // Logs: 3
// ```

// In this example, the inner function increments and logs the `count` variable each time it is called. The `count` variable is remembered between calls because of the closure.

// Summary
// - Closure : A function that remembers and can use variables from outside its own scope.
// - How : Defined inside another function, accessing the outer function's variables.
// - Use : Useful for maintaining state or creating private variables and functions.































//! #Object
// 1. An Object is a block of memory which has state(variable) , behaviour(methods) and where we can store heterogenous data.
// 2. An object is a collection of key-value pairs that can contain various data types, such as numbers, strings, arrays, functions, and other objects.
// 3. In one object we can have multiple key value pair and it should be separated by ',' comma.
// 4. We can access value of object using (.) Operator or square bracket [] , object reference and key_name.

// #Object Key (Property)
// 1. Object key (property) will be automatically converted into string by js engine.
// 2. If keys name are in Number , js engine will convert them into string and arrange them in ascending order.
// 3. To write space separated key names , we have to enclose key name with double quotes.
// 4. If we want to give computed or user defined property then we have to use square brackets and variable name.
// 5. 
// If key-name is same as variable name which hold the value , instead of writing two times we can write varaiable name only once.







//! #What Is JSON?
// 1. JSON stands for javascript object notation.
// 2. It is data only format to represent values and objects.
// 3. It is used to transfer data between applications through apis.
// 4. JSON keys must be strings enclosed in double quotes.
// 5. It supports six data types: object, array, string, number, boolean, and null.
// 6. It supports nested structures, allowing objects and arrays to be nested within each other.
// #JSON Methods
// 1. JSON.stringify(value)
// - JSON.stringify() is a method that converts a JavaScript object or value into a JSON string.
// - Returns JSON.
// - It does not support : function properties,symbolic keys and values and Properties that store undefined.
// 2. JSON.parse(value)
// - JSON.parse() is a method that converts JSON string into JavaScript object or value.
// - Returns plain javascript object.





















//! #method like call apply and bind
// 1. Call , Apply and Bind methods are used to store the object reference in 'this' keyword of function.
// 2. When function's 'this' have reference of object, then we can access states and behaviours of that object.
// 3. 
// For practice we will use these objects as reference.

// let human1 = {
//   name: "Chombi",
//   age: 20,
// };

// let human2 = {
//   name: "Dinga",
//   age: 19,
// };

// let human3 = {
//   name: "Nimbi",
//   age: 18,
// };


// Below function we will use to access object's properties by using call, apply and bind methods.

// function detailsAll(a, b, c) {
//   console.log("Name : " + http://this.name);
//   console.log("Age : " + this.age);
//   console.log("value of a : " + a);
//   console.log("value of b : " + b);
//   console.log("value of c : " + c);
// }


//todo #Call
// 1. Call method accepts object reference as first argument And accepts 'n' number of arguments.
// 2. Here, arguments are passed to the function's parameter list.
// 3. It will call the function Immediately.
// 4. 
// Example : Print name , age of object human1 and print function arguments.

// http://detailsAll.call(human1, 10,20,30);
 
// Output - 
// Name : Chombi 
// Age : 20 
// value of a : 10 
// value of b : 20
// value of c : 30 


//todo #Apply
// 1. Apply method accepts of 2 arguments where object reference is first argument and 2nd argument is the array of arguments.
// 2. Here arguments are passed to the function's parameters list.
// 3. It will call the function immediately
// 4. 
// Example : Print name , age of object human2 and print function arguments.

// detailsAll.apply(human2,[11,22,33]);
 
// Output - 
// Name : Dinga 
// Age : 19 
// value of a : 11 
// value of b : 22
// value of c : 33 




//todo #Bind
// 1. Bind method accepts object reference as 1st argument and excepts 'n' number of arguments.
// 2. Here 'n' number of arguments are passed to the function's parameter list.
// 3. It will not call the function immediately.
// 4. It returns a new function in which 'this' Keyword is pointing to the object reference we have passed.
// 5. To execute the function we need function reference and parenthesis
// 6. 
// Example : Print name , age of object human3 and print function arguments.

// let func = detailsAll.bind(human3, 77,88,99);
// func();
 
// Output - 
// Name : Nimbi 
// Age : 18 
// value of a : 77
// value of b : 88
// value of c : 99 



//! #Constructor Function
// 1. A function which is used to create an object is known as constructor function.
// 2. A constructor function behaves like blueprint or template for object , and there is no need to write code again and again
// 3. It helps us to create multiple objects of same type.
// 4. Syntax : function identifier (parameter,...){ }
// 5. If the function is designed to use as a constructor than name of function should be upper camel case.
// 6. The list of parameter provided to the function will be treated as keys/properties of the object.
// 7. The argument pass when function is called will be value of object.
// 8. We can copy the values into the keys of the object from parameter using this keyword.
// 9. We can create a object using the constructor function with the help of new keyword.
// 10. To create constructor function we will not use arrow function because they does not have 'this' keyword .
// 11. Synatx : let variable = new function_name(arguments)
// 12. 
// Example :

// function Car(model,color,engine) {
// this.model = model;
// this.color = color;
// this.engine = engine;
// }

// let car1 = new Car(1021,"red","V8");
// console.log(car1);
// // { model:1021,color:"red",engine:"V8" }


//! #This Keyword
// 1. It is a keyword.
// 2. It is a variable , which holds the reference.
// 3. In GEC it holds the address of window object.
// 4. It is a local variable of every function in js, and holds the address of window object. Except in Arrow function (for arrow function is stores undefined).
// 5. Inside object methods, 'this' holds the reference of current object(not in arrow function).
// This keyword notes
// ### Global Context
// In javascript this keyword refers to the object that executes the current function.
// In the global execution context (outside of any function), `this` refers to the global object. In a web browser, this is usually the `window` object.

// ```javascript
// console.log(this); // In a browser, this will log the window object
// ```

// ### Function Context
// Inside a regular function, `this` refers to the window object.

// ```javascript
// function showThis() {
//     console.log(this); // window (global object)
// }

// showThis(); 
// ```

// ### Object Method
// When a function is called as a method of an object, `this` refers to the object the method is called on.

// ```javascript
// const person = {
//     name: 'Prasad',
//     greet: function() {
//         console.log(http://this.name); // Logs 'Prasad'
//     }
// };

// person.greet(); 
// ```

// ### Constructor Function
// When a function is used as a constructor with the `new` keyword, `this` refers to the newly created object.

// ```javascript
// function Person(name) {
//     http://this.name = name;
// }

// const bob = new Person('Bob');
// console.log(http://bob.name); // Logs 'Bob'
// ```

// ### Arrow Functions
// Arrow functions do not have their own `this`. Instead, they inherit `this` from the surrounding lexical context.

// ```javascript
// const person = {
//     name: 'Alice',
//     greet: () => {
//         console.log(http://this.name);
//     }
// };

// person.greet(); // Logs undefined because `this` is inherited from the global context
// ```

// ### Event Handlers
// In an event handler, `this` refers to the element that received the event.

// ```javascript
// document.getElementById('myButton').addEventListener('click', function() {
//     console.log(this); // Logs the button element
// });
// ```

// ### `call`, `apply`, and `bind` Methods
// You can explicitly set `this` using `call`, `apply`, and `bind`.

// - **`call`**: Calls a function with a given `this` value and arguments.

// ```javascript
// function greet() {
//     console.log(http://this.name);
// }

// const person = { name: 'Alice' };
// http://greet.call(person); // Logs 'Alice'
// ```

// - **`apply`**: Calls a function with a given `this` value and an array of arguments.

// ```javascript
// function greet(greeting) {
//     console.log(greeting + ', ' + http://this.name);
// }

// const person = { name: 'Alice' };
// greet.apply(person, ['Hello']); // Logs 'Hello, Alice'
// ```

// - **`bind`**: Returns a new function, with a given `this` value.

// ```javascript
// function greet() {
//     console.log(http://this.name);
// }

// const person = { name: 'Alice' };
// const boundGreet = greet.bind(person);
// boundGreet(); // Logs 'Alice'
// ```

// ### Summary
// - **Global context**: `this` is the global object (`window` in browsers).
// - **Function context**: `this` is the global object in non-strict mode, `undefined` in strict mode.
// - **Object method**: `this` is the object the method is called on.
// - **Constructor function**: `this` is the new object being created.
// - **Arrow functions**: `this` is inherited from the surrounding lexical context.
// - **Event handlers**: `this` is the element that received the event.
// - **`call`, `apply`, `bind`**: Methods to explicitly set `this`.









//!=============================================== important =================================================

        // method name      isReturning        is modifying original array                     Use
                    
        // forEach             no                        no
        // Map                 yes                       no
        // filter              yes                       no 
        // reduce              yes                       no
        // for in              no                        no
        // for of              no                        no
        // sort                yes                       yes

       



 //! selectors
 
//   document.getElementById("");
//   document.getElementsByClassName("");
//   document.getElementsByTagName("");
//   document.querySelector("");
//   document.querySelectorAll("");