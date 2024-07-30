// console.log("Welcome to JavaScript")
// console.error("Something went wrong")
// console.warn("something went wrong")
// document.write("Hello.... i am from JavaScript")
 
// let addToCart=() =>{
//     alert("Product added to cart")
// }

// let message= prompt("write anything")
// console.log(message)





//! Functions

// function bookTicket(location){
//     console.log(`Ticket booked for ${location}...!`)
// }

// bookTicket("Manali")








//!default parameter


// function introduction(name="johndDoe", email="johndoe@gmail.com", phone=1234567890){

//     console.log(`My name is ${name}, my email id is ${email}, my phone number is ${phone}`)
// }

// introduction("Sumit", "sumit@gmail.com", 6207711748)
// introduction("xyz", "xyz@gmail.com", 6545215414)
// introduction()





//! syntax for arrow function

// let functionName =(parameter)=>{

     //function body
// }

// functionName(arguments)






// let func=(name)=>{
//     console.log("hello from arrow function", name)
// }

// func("sumit")










// let add=(a,b)=>{
//     console.log("additon of a and b is" , (a+b))
// }
// add(10,2)






// let add=(a,b)=>{
//     let output=a+b
//     return output
// }

// // add(20,40)
// console.log(add(20,50))












// let num1= prompt("enter num1")
// let num2= prompt("enter num2")

// // typecasting using Number()
// let a= Number(num1)

// // typecasting using parseInt()
// let b= parseInt(num2)

// console.log(a+b)








//! taking input from user using prompt and adding it using arrow function


// let num1 = parseInt(prompt("Enter num1"))
// let num2 = parseInt(prompt("Enter num2"))

// let add = (a,b) =>{
//     return a+b , "hello"
// }
// add(num1,num2)
// console.log(`additiom of ${num1} and ${num2} is =>`, add(num1,num2))









//! Higher order and callback function


// let a =(func)=>{
// func()

// }

// let anyFunc=()=>{
//     console.log("anyFunc Executed")
// }

// a(anyFunc)







// let hof=(cbf)=>{
//     cbf()
// }

// let cbf=()=>{
//     console.log("cbf executed")
// }

// hof(cbf)








// let operation=(task, num1, num2)=>{
//     task(num1, num2)

// }

// let add=(num1, num2)=>{
//    console.log(num1+num2)
// }
//  let sub=(num1, num2)=>{
//     console.log(num1-num2)
//  }

 
// let mul=(num1, num2)=>{
//     console.log(num1*num2)
//  }
//   let div=(num1, num2)=>{
//      console.log(num1/num2)
//   }

// operation(add, 10,20)
// operation(sub, 10,20)
// operation(mul, 10,20)
// operation(div, 10,20)
















// let greeting=(person, typeOfGreeting)=>{
//     person(typeOfGreeting)
// }

// let nani=(typeOfGreeting)=>{
//     console.log(`hello nani with my ${typeOfGreeting} greeting`)
// }

// let chacha=(typeOfGreeting)=>{
//     console.log(`hello chacha with my ${typeOfGreeting} greeting`)
// }
// let friend=(typeOfGreeting)=>{
//     console.log(`hello friend with my ${typeOfGreeting} greeting`) 
// }


// greeting(chacha,"Ram Ram")
// greeting(nani, "paay lagu...")
// greeting(friend,".....")








 //! Annonymous function || function assigned to a varialble is called as function as an expression

// let demo= function(){
//     console.log("demo function executed")
// }
// demo()





//! Named function

// function action(){
//     console.log("action")
// }
// action()
 





//! arrow function

// let func=()=>{
// console.log("arrow function")
// }
// func()










//! immediate Invoke function

// (()=>{
//     console.log("iife")
// })()









// let a=10;
// let func=()=>{
//     let m="m"
//     console.log("Hello")
// }
// console.log("xyz")
// func()






// let que="kaise ho"
// let call=(que)=>{
//     console.log(que)
//     return "badhiya tum kaise ho.."
// }
// let reply =call(que)
// console.log(reply)






// console.log(b)
// let a=10
// console.log(a)
// let b=20
// let func=(a,b)=>{
//     console.log(a,b)
// }











//! block scope(let and const are block scoped)

// let a="RRR"
// if(true){
//     console.log(a)
//     let b="Kantara"
//     const c="Pushpa"
//     var d="Kalki"
// }

// console.log(d)










//! Function Scope (var is function scoped)

// let a="Bahubali"
// let func=()=>{
//     let b="Pushpa"
//     const c="Mirzapur"
//     var d="Panchayat"
// }
// func()
// console.log(d)






// let func=()=>{
//     let func1=()=>{
//         console.log("hello")
//     }
//     func1()
// }
// func()





//! Javascript Currying

// let a=()=>{
//     console.log("a executed")
//     let b=()=>{
//         console.log("b executed")
//         let c=(value)=>{
//             console.log("c executed with value ===>", value)
//         }
//         return c
//     }
//     return b
// } 
// a()()(10)








//! Closure

// let a=()=>{
//     let val1=10
//     let b=()=>{
//         console.log(val1)
//     }
//     b()
// }
// a()









// let minku=()=>{
//     let bike="Splendor"
//     let mobile="Iphone"
//     let tinku=()=>{
//         console.log("the bike and mobile is===>",bike, mobile)
//     }
//     return tinku
// }

// let returnedFunc=minku()
// returnedFunc()













// let num = prompt("enter any number")
// if(num%2==0){
//     console.log(`${num} is an Even number`)
// }
// else{
//     console.log(`${num} is an Odd number`)
// }


















// let isHungry=true
// let isFishAvailable=false

// if(isHungry == true){
//     console.log("Cat is hungry")
//     if(isFishAvailable){
//         console.log("Cat eats Fish")
//     }
//     else{
//         console.log("Cat drinks Milk")
//     }
// }
// else{
//     console.log("Cat is not hungry")
// }














// let username ="sumit228"
// let password ="12345"

// let u = prompt("enter username")
// let p = prompt("enter password")

// if(username==u){
//     if(password==p){
//         console.log("Logged in Successfully")
//     }
//     else{
//         console.log("Wrong Password")
//     }
// }
// else{
//     console.log("Wrong username")
// }















// let username ="sumit228"
// let password ="12345"

// let u = prompt("enter username")
// let p = prompt("enter password")

// if(username==u && password==p){
//     console.log("Logged in Successfully")
// }
// else{
//     console.log("Wrong Credentials")
// }












// let username ="sumit228";
// let password ="12345";

// let u = prompt("enter username");
// let p = prompt("enter password");

// (username==u && password==p) ? (console.log("Logged in Succeessfully")) : (console.log("Wrong Credentials"));














// let isHungry = true;
// let isFishAvailable = true;

// isHungry ? console.log("Cat is Hungry") || isFishAvailable ? console.log("Cat eats Fish"):console.log("Cat drinks Milk") : console.log("Cat is not Hungry")













//! switch statement
// let takla= prompt("Enter your name")
// switch(takla){
//     case "Sushant" :
//          console.log("9876543210") ;
//          break;

//     case "Deepak" :
//          console.log("980243210") ;
//          break;

//     case "Vishal" :
//         console.log("987425210") ;
//         break;

//     case "Ashu" :
//         console.log("9876545898") ;
//         break;

//     case "Ajit" :
//         console.log("985463210") ;
//         break;

//         default: 
//         console.log("Tumhara number list m nhi h ")
// }














//! objects 

//!creating object with object literals
//? first way of creating object
// let obj ={
//     name: "sumit"
// }
// console.log(obj);
// obj.add ="Noida";
// console.log(obj);
// obj.name ="XYZ"; 
// console.log(obj);


//! creating object with new keyword
//?2nd way of creating object
// let objWithNewKeyword = new Object({
//     name: "Sumit"
// })
// console.log(objWithNewKeyword)
// objWithNewKeyword.add="Noida";
// console.log(objWithNewKeyword)






// let student1 ={
//     name: "Tinku",
//     add: "Noida",
//     mob: 9876543210
// }

// let student2 ={
//     name: "Tinku",
//     add: "Noida",
//     mob: 9876543210
// }

// let student3 ={
//     name: "Tinku",
//     add: "Noida",
//     mob: 9876543210
// }




//! creating object using constructor function
//?3rd way of creating object
// function Students (name, add, mob){
//    return{
//     name: name,
//     add : add,
//     mob : mob
//    }

// }
// let student1 = Students("tinku", "Noida", 9876543210)
// let student2 = Students("minku", "Noida", 9876543210)
// let student3 = Students("pinku", "Noida", 9876543210)
// let student4 = Students("rinku", "Noida", 9876543210)
// let student5 = Students("chinku", "Noida", 9876543210)
// console.log(student1, student2,student3,student4,student5)





//! creating object using class
//? 4th way of creating object 

// class Car{
//     constructor(name, brand, price){
//         this.name = name
//         this.brand = brand
//         this.price = price

//     }
// }
// let car1 = new Car("Mustang", "Ford", "1cr")
// let car2 = new Car("Fortuner", "Toyota", "0.5cr")
// let car3 = new Car("WagonR", "Maruti", "8L")
// console.log(car1,car2,car3)












//! delete the properties from an object

// let obj ={
//     name: "Tinku",
//     add: "Noida"
// }
// console.log(obj)
// delete obj.add
// console.log(obj)





//! we can create nested objects
// let country ={
//     name: "India",
//     state: {
//         name: "Uttar-pradesh",
//         district:{
//             name: "GautamBuddha Nagar",
//             city:{
//                 name:"Noida",
//                 sector:{
//                     name:"Sector 16",
//                 }
//             }
//         }
//     }
// }
// console.log(country.state.district.city.sector.name)






















// let a=10
// function test(){
//     console.log(this.a)
// }
// test();




// let obj={
//     a:10,
//     test: function(){
//         console.log(this)
//     }
// }
// obj.test()


//! this keyword inside arrow function wil always point towards window object
//! this keyword in global scope wil always point towards window object
//! this keyword will point towards current object within normal function




//!======================== CALL METHOD =================================
// let obj={
//     name: "tinku",
//     age:22,
//     add: "Noida",
// }

// function info(a,b){
//     console.log(`my name is ${this.name}`)
//     console.log(`my age is ${this.age}`)
//     console.log(`my address is ${this.add}`)
//     console.log(a+b);
// }
// info.call(obj,10,50)





//!==================== APPLY METHOD ========================================

// let obj={
//     name: "tinku",
//     age:22,
//     add: "Noida",
// }

// function info(a,b){
//     console.log(`my name is ${this.name}`)
//     console.log(`my age is ${this.age}`)
//     console.log(`my address is ${this.add}`)
//     console.log(a+b)
// }
// info.apply(obj,[10,20])










//!======================== BIND METHOD ================================

// let obj={
//     name: "tinku",
//     age:22,
//     add: "Noida",
// }

// function info(a,b){
//     console.log(`my name is ${this.name}`)
//     console.log(`my age is ${this.age}`)
//     console.log(`my address is ${this.add}`)
//     console.log(a+b)
// }
//  let returnedfunc = info.bind(obj,10,20);

// returnedfunc();













//! ============================= ARRAY ==========================================

// let demo = [10,20,30,40,"tinku", undefined, null, NaN, ()=>{},{} ,[20,50,40,[20,50,10,[10,70]]]]
// console.log(demo)


//! creating new array using array constructor and new keyword
// let arr = new Array(10,20,30,40)
// console.log(arr);




//!  how to add new element in an array in the last index 
//todo (using push method)
// let nums=[675,837,753,643,53,243,9,64];
// nums.push(100)
// console.log(nums)



//!  how to remove element from an array from the last index 
//todo (using pop method)
// let nums=[675,837,753,643,53,243,9,64];
// nums.pop()
// console.log(nums)



//!  how to add new element in an array in the first index 
//todo (using unshift method)
// let nums=[675,837,753,643,53,243,9,64];
// nums.unshift(500,20)
// console.log(nums)



//!  how to remove element from an array from the first index 
//todo (using shift method)
// let nums=[675,837,753,643,53,243,9,64];
// nums.shift()
// console.log(nums)



//! how to find index value of any array element
//todo (using indexOf)
// let nums=[675,837,753,643,53,243,9,64];
// let indexVal=nums.indexOf(53)
// console.log("index value of 53 is ==>",indexVal)



//! how to access array element if we have index value
// let nums=[675,837,753,643,53,243,9,64];
// console.log(nums[3]);



//! how to check whether the array element is included in an given array or not 
//todo includes()
// let nums=[675,837,753,643,53,243,9,64];
// let isIncluded = nums.includes(643)
// console.log(isIncluded)




//! if we try to access any index value which doesnt exist in an array, instead of getting error we will get undefined
// let nums=[675,837,753,643,53,243,9,64];
// console.log(nums[15])




//todo slice method
// let nums=[675,837,753,643,53,243,9,64];
// let slicedArray= nums.slice(1,4)
// console.log(slicedArray)
// console.log(nums)  //?slice method does not affect original array





//todo splice method
// let nums=[675,837,753,643,53,243,9,64];
// let splicedArray= nums.splice(0,2)
// console.log(splicedArray)
// console.log(nums) //? splice method will affects the original array





//! how to reverse the array element
//todo reverse method 
// let nums=[675,837,753,643,53,243,9,64];
// console.log("original number ==>",nums)
// let arr= nums.reverse();
// console.log("reversed number==>",arr)
// console.log(nums) //? reverse will affect the original array






//! how to convert object into array of entries
//todo Object.entries()
// let obj ={
//      name: "Tinku",
//      add: "Noida",
// }
// let arr = Object.entries(obj)
// console.log(arr);

// let newObj = Object.fromEntries(arr)
// console.log(newObj)







//! how to convert array of entries into an object 
//todo fromEntries method
// let arr= [
//      ["name", "tinku"],
//      ["add","Noida"]
// ]
// let obj =Object.fromEntries(arr)
// console.log(obj)






//todo sort method
// let nums=[675,837,753,643,53,243,9,64];
// let arr = nums.sort((a,b)=>{
// return b-a;
// })
// console.log(arr)
// console.log(nums)





//todo forEach method (HOF)
// let nums= [7,3,4,9,1,4,6,8];
// let a= nums.forEach((value, index, arr)=>{
// console.log(index + "," + (value+100),arr)
// })
// console.log(a) //? foreach will not return anything
// console.log(nums) //? foreach will not affect the original array








//todo for in
// let nums=[675,837,753,643,53,243,9,64];
// for(val in nums){
//      console.log(val)
// }



//todo for of
// let nums=[675,837,753,643,53,243,9,64];
// for(val of nums){
//      console.log(val)
// }






//todo map
// let nums=[675,837,753,643,53,243,9,64];
// let newArr=nums.map((val,i)=>{
//      return val+300
// })
// console.log(newArr)
// console.log(nums)






//todo fiter()
// let nums=[675,837,753,643,53,243,9,64];
// let newArr=[]
// for(let i=0; i<nums.length; i++){
//      if(nums[i]>=300){
//           newArr.push(nums[i])
//      }
// }
// console.log(newArr);





// let nums=[675,837,753,643,53,243,9,64];
// let filterArr=nums.filter((val)=>{
//      return val>300;

// })
// console.log(filterArr);






// let arr = [NaN, 10,10.10,10n,"hello"]
// let newArr=arr.filter((val)=>{
// return typeof val == "number";
// });
// console.log(newArr)







//todo reduce()

// let nums=[675,837,753,643,53,243,9,64];
// let sum=nums.reduce((accumulator,val,i, arr,)=>{
// return accumulator+= val;
// },1000)
// console.log(sum)


//todo to check if it is an array
// let arr=[];
// console.log(Array.isArray(arr));









//! destructuring 
//? with object
// let bagpack={
//      item1:"Torch",
//      item2:"Tiffin",
//      item3:"Rope",
//      item4:"Knife",
//      item5:"Water bottle",
//      item6:"1st aid box",
//      item7:()=>{
//           console.log("fishing");
//      }
// }
// let {item1,item2, item3,item4, item5, item6, item7}=bagpack;
// console.log(item2)
// console.log(bagpack.item1);
// item7();





//? with array
// let arr =["torch","water bottle","knife","rope",{menu1:"Ghewar",
//      menu2:"petha",
// }];
// let [a,b,c,d,{menu1,menu2}]=arr;
// console.log(a,d)
// console.log(menu1)




// let arr=[10,20,30,40,50];
// console.log(...arr);



// let obj ={
//      name:"Tinku",
//      age:23
// }
// console.log(...obj)



//? rest
// let arr=[10,20,30,40,50,{name:"tinku",age:20},()=>{
//      console.log("func executed");
// }];
// let [a,b,...c]=arr;
// console.log(c);
// let [f,g,h,i,j]=c;
// console.log(i);
// j();


//? spread
//todo  how to create deep copy using spread operator
// let arr=[10,20,30,40,50]
// let nums=[...arr];
// nums.push(60);
// console.log(nums)
// console.log(arr)



// let arr=[10,20,30,40,50]
// console.log(...arr)

// let func=(a,b,c,d,e)=>{
// console.log(d)
// }
// func(...arr);











// let obj={
//      name:"tinku"
// }
// console.log(obj.__proto__);


// console.log([].__proto__)
// console.log(Array.prototype)





// let obj1={
//      name:"tinku"
// }
// let obj2={
//      age:21
// }
// obj1.__proto__=obj2;
// console.log(obj1)
// console.log(obj1.age)







//! Date object

// let date =new Date()
// let key=date.getDay();

// switch(key){
//      case 0:
//           console.log("Sunday");
//           break;

//      case 1:
//           console.log("Monday");
//           break;  
     
//      case 2:
//           console.log("Tuesday");
//           break;
     
//      case 3:
//           console.log("Wednesday");
//           break;  

//      case 4:
//           console.log("Thursday");  
//           break;
          
//      case 5:
//           console.log("Friday");
//           break; 
          
//      case 5:
//           console.log("Saturday");
//           break; 
// }



// let date =new Date();
// let key = date.getDate();
// console.log(key)





// let date =new Date();
// let key = date.getMonth();
// console.log(key)




// let date =new Date();
// let key = date.getTime();
// console.log(key)




//! Math object

//? find absolute vale
// console.log(Math.abs(10.1000));


// console.log(Math.ceil(10.1))
// console.log(Math.floor(10.1))
// console.log(Math.round(10.4))

// console.log(Math.random());

// let arr=[10,20,30,50,90,50,40]
// console.log(Math.max(...arr))





//! setTimeout()
// let timer;
// const startBtn =document.getElementById("start");
// const stopBtn =document.getElementById("stop");
// startBtn.addEventListener("click",()=>{
//      timer = setTimeout(()=>{
//           document.body.style.cssText="background-color:black; color:white;";
//      },2000)
// })



// stopBtn.addEventListener("click",()=>{
// document.body.style.cssText="background-color:white; color:black;";
//      clearTimeout(timer)
// })






// const myLink= document.getElementById("myLink");
// myLink.addEventListener("click",function(event){
//      event.preventDefault();
//      const url = this.href;

//      const width =Math.floor(screen.width/2);
//      const height =Math.floor(screen.height/2);
//      const top= Math.floor((screen.height-height)/2)
//      const left =Math.floor((screen.width-width)/2)
//      window.open(url,'_blank',`width=${width}, height=${height}, top=${top}, left=${left}`)

// })



//! DOM (document object model)

// let heading = document.getElementsByTagName("h1");
// console.log(heading[0])
// heading[0].style.background="red"


//! query selector
// let heading = document.querySelector("#heading")
// let heading1 = document.querySelector(".heading")  //? targets single element
// let heading2 = document.querySelector("h1")






// let myDiv=document.querySelector("div")
// let section =document.querySelector("section")
// let main =document.querySelector("main")

// let heading = document.createElement("h1")
// let para =document.createElement("p")
// let heading2 =document.createElement("h2")


// console.log(heading);
// heading.innerText="I am heading inside div"
// para.innerText="I am Paragraph inside section"
// heading2.innerText="I am heading 2 inside main"

// myDiv.append(heading)
// section.append(para)
// main.append(heading2)










// let myDiv=document.querySelector("div")
// myDiv.setAttribute("id", "mainDiv")
// console.log(myDiv)






let myDiv=document.querySelector("div")
myDiv.innerHTML= `
<h1 id ="heading">I am heading </h1>
<p>I am Paragrapgh</p>
`
