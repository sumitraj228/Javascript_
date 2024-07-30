//! 1. Write a program to find square and cube of a given number.

// let square=(a)=>{
//     return a*a
// }

// let cube=(a)=>{
//     return a*a*a
// }

// console.log(square(5))
// console.log(cube(5))












//! 2. Write a program to check if a given year is a leap year or not.

// let leapYear=(year)=>{
//     if(year%100===0 ? year%400===0 : year%4===0){
//         console.log(`${year} is a leap year`)
//     }
//     else{
//         console.log(`${year} is not a leap year`)
//     }
// }
// leapYear(2024);















//! 3. Write a program to calculate the sum of the first 100 natural numbers.

// let sum=()=>{
//     let add=0
//     for(let i=1; i<=100; i++){
//         add+=i
//     }
//     return add
// }
// console.log(sum())















//! 4. Write a program to check if a given number is even or odd.

// let number=(num)=>{
//     if(num%2===0){
//         console.log(`${num} is even number`)
//     }
//     else{
//         console.log(`${num} is an odd number`)
//     }
// }
// number(6)


















//! 5. Write a program to print the sum of all even numbers from 1 to any given number.

// let evenSum=(num)=>{
//     for(let i=1; i<=num; i++){
//         if(i%2===0){
//         console.log(i)
//     }
// }
// }
// evenSum(15)
















//!  6. Write a program to print the sum of all odd numbers from 1 to any given number.

// let oddSum=(num)=>{
//     for(let i=1; i<=num; i++){
//         if(i%2!==0){
//             console.log(i)
//         }
//     }
// }
// oddSum(15)














//! 7. Write a program to count the number of digits in a given number 

// let countDigit=(num)=>{
//     let count=0
//     while(num>0){
//         num=Math.floor(num/10)
//         count++
//     }
//     return count
// }
// console.log(countDigit(8543654464552))

















//! 8. Write a program to calculate the sum of the digits of a given number.

// let digitSum=(num)=>{
//     let sum=0
//     while(num>0){
//         sum= sum+(num%10)
//         num=Math.floor(num/10)
//     }
//     return sum
// }
// console.log(digitSum(5465))
















//! 9. Write a program to print the multiplication table of a given number.

// let table=(num)=>{
//     for(let i=1; i<=10; i++){
//         console.log( num ,`*`, i, `=`, num*i)
//     }
// }
// table(19)

















//! 10. Write a program to reverse a given number. For example, if the input is 12345, the output should be 54321.

// let reverseNumber=(num)=>{
//     let d=0
//     while(num>0){
//         d=(d*10)+(num%10)
//         num=Math.floor(num/10)
//     }
//     return d
// }

// console.log(reverseNumber(654631))




















//!  11. Write a program that prints the numbers from 1 to 100. But for multiples of three,
//  print 'Fizz' instead of the number, and for multiples of five, print 'Buzz.' 
//  For numbers that are multiples of both three and five, print 'FizzBuzz.'


// let multiple=()=>{
//     for(let i=1; i<=100; i++){

//         if((i%3===0 && i%5===0)){
//             console.log("FizzBuzz")
//         }
//         else if(i%3===0){
//             console.log("Fizz")
//         }
//         else if(i%5===0){
//             console.log("Buzz")
//         }   
//         else{
//             console.log(i)
//         }
//     }
// }
// multiple()


















//! 12. Write a program to calculate the power of a number without using the Math.pow() function.

// let pow=(n,p)=>{
//     if(p==1){
//         return n
//     }
//     return n*(pow(n,p-1))
// }
// console.log(pow(4,3))
















//! 13. Write a program to check if a given number is prime or not.

// let prime=(num)=>{
//     let count=0
//     for(let i=1; i<=num; i++){
//         if(num%i===0){
//             count++
//         }
//     }
//     if(count>2){
//         console.log(`${num} is not a Prime number`)
//     }
//     else{
//         console.log(`${num} is a Prime number`)
//     }
// }
// prime(7)


















//! 14. Write a program to find and print all the prime numbers within 1-100.


// let primeNumber=(num)=>{
//         let count=0
//         for(let i=1; i<=num; i++){
//             if(num%i===0){
//                 count++
//             }
//         }
//         if(count>2){
//             return false
//         }
//         else{
//             return true
//         }
//     }

// let prime=()=>{
//     for(let i=2; i<=100; i++){
//         if(primeNumber(i)){
//             console.log(i)
//         }
//     }
// }
// prime()




















//! 15. Write a program to calculate the factorial of a given number.

// let factorial=(num)=>{
//     let ans=1;
//     if(num==1){
//         return ans;
//     }
//     else if(num>1){
//         for(let i=num; i>=1; i--){
//             ans= ans*i
//         }
//         return ans;
//     }

//     else{
//         console.log("Enter a positive number")
//     }
// }

// console.log(factorial(9))
























//! 16. Write a program to print the Fibonacci series up to a given number.

// let fibonacci=(num)=>{
//     let n1=0
//     let n2=1
//     let n3
//     console.log("Fibonacci series: ")

//     for(let i=1; i<=num; i++){
//         console.log(n1)
//         n3=n1+n2
//         n1=n2
//         n2=n3       
//     }
// }
// fibonacci(10)





















//! 17. Write a program to calculate the sum of the first 20 Fibonacci numbers.

// let fibonacci=(num)=>{
//         let n1=0
//         let n2=1
//         let n3
//         let sum=0

//         for(let i=1; i<=num; i++){
//            sum=sum+n1
//             n3=n1+n2
//             n1=n2
//             n2=n3       
//         }
//         return sum
//     }
//     console.log(fibonacci(20))




















//! 18. Write a program to check if a given number is a perfect number.

// let perfect=(num)=>{
//     let sum=0;
//     let n=num/2;
//     for(let i=1; i<=n; i++){
//         if(num%i===0){
//             sum=sum+i
//         }
//     }

//     if(sum==num){
//         console.log(`${num} is a perfect number`)
//     }

//     else{
//         console.log(`${num} is not a perfect number`)
//     }

// }
// perfect(25)





















//! 19. Write a program to check if a given number is an Armstrong number.

// let armstrong=(num)=>{
// let sum=0;
// n=num
// while(num>0){
//     d= num%10;
//     sum=sum+(d*d*d)
//     num=Math.floor(num/10)
// }
// if(sum===n){
//     console.log(`${n} is an armstrong number`)
// }
// else{
//     console.log(`${n} is not an armstrong number`)
// }
// }
// armstrong(123)


















//! 20. Write a program to check if a given number is a strong number.

// let factorial=(num)=>{
//         let ans=1;
//         if(num==1){
//             return ans;
//         }
//         else if(num>1){
//             for(let i=num; i>=1; i--){
//                 ans= ans*i
//             }
//             return ans;
//         }
// }

// let strong=(num)=>{
//     let sum=0;
//     let n=num;
//     let d=0;
//     while(num>0){
//         d=num%10
//         sum=sum+ factorial(d);
//         num= Math.floor(num/10)
//     }
//     if(n===sum){
//         console.log(`${n} is a strong number`)
//     }
//     else{
//         console.log(`${n} is not a strong number`)
//     }

// }
// strong(40585)
























//! 21. Write a program to check a number whose last digit is 7.

// let num=45725;
// if(num%10===7){
//     console.log("Yes the number last digit is 7")
// }
// else{
//     console.log("No the number last digit is not 7")
// }

















//! 22. Print the number which ends with 7 or is divided by 7.

// let printNum=(num)=>{
//     if(num%7==0 && num%10==7){
//         console.log(`${num} is divisible by 7 and its last digit is also 7`)
//     }
//     else{
//         console.log(`${num} is not divible by 7 or its last digit is not 7`)
//     }
// }
// printNum(77)




















//! 23. Print numbers up to 500 that are divided by 7 and end with 7.

// let printNum=(num)=>{
//         if(num%7==0 && num%10==7){
//             document.write(num + " ")
//         }
//     }

//     for(let i=1; i<=500; i++){
//              printNum(i)
//     }
    



















//! 24. Write a program to print the factors of a number and also print the number of factors of that number.

let factor=(num)=>{
    let count=0;
    for(let i=1; i<=num; i++){
     if(num%i===0){
      console.log(i);
        count++;
    }
   }
   console.log(`total number of Factors of ${num} is ${count}`)
}

factor(52)