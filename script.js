 // var let const
//Declaration and initlization


// let dulha = "lab";
// let duhlan = "laby";

// window.dulha = "lab";
// window.dulhan = "laby";


// var a= 12;


//scope(global, block,functional) 

//redeclaration and reassignment
/* redeclaration is possible with only var but reassignment is only possible with let */


//@@@Temporal dead zone:- You cannot use a let or const variable before it is declared.
// TDZ is the time where a let or const variable exists in scope but cannot be accessed until it is initialized.
// var ❌ no TDZ, Because we can access/use (var a) before declaration and initilization although it gives undefined value but no error.
// let & const ✅ TDZ ,it gives error 

// console.log(a);

// let a = 12;

// var a =12;



//### Hoisting impact per type
/* hoisting -> ek variable ko jb js mein banaate hai to wo variable do hisso mein toot jaata hia and uska declare part upar chla jaata hai and uska  initialization part neeche rhe jaata hai. that is why we can access var even before declaration of var.

Hoisting is JavaScript’s behavior where variable and function declarations are moved to the top of their scope during the compilation phase (before execution).

hoisting is not an actual physical movement of code, it’s a conceptual process

eg:- console.log(a);
     var a = 10;

     @#  Internally, JS treats it like:-

     var a;        // declaration is hoisted
     console.log(a);
     a = 10;       // initialization stays in place

*/

/*var -> hoist -> value = undefined
let -> hoist -> value = no value .gives reference 
const -> hoist -> value = no value .gives reference console.error();*/

/*console.log(a);

var a = 12;*/

// Object.freez:-Object.freeze() is a static method in JavaScript that freezes an object, making it immutable. This means that once an object is frozen.              New properties cannot be added: Attempts to add new properties to the object will fail silently in non-strict mode and throw an error in strict mode.Existing properties cannot be removed: Deleting existing properties will also fail.Existing property values cannot be changed: The values of existing properties cannot be reassigned.



//@# section 2. 
// ### Data types 
/*primitive :- a data type which doesnt have bracket.
aisi saari values jinko copy krne pr tumhe real copy mil jaie. 
eg:-String, null ka mtlb hai aapne jaan boojh kr koi value nhi di, infuture koi value present ho skti hai.

references:- a data type which have brackets.
inko copy krne pr real copy nhi milega but reference milega parent ka.
eg:- Array,object, function 'respective to:- [], {}, () */

//BigInt :- Number.MAX_SAFE_INTEGER.
// window.a = 9007199254740991n;




//###Dynamic typing :- js mein static typing nhi hai and yaha pr hai dynamic typing jiska mtlb hai aap data ko chnage kr skte ho kyukii yaha par dynamic data types hai. eg:- let a =12 and here we can change the value of a i.e a = true.


// typeof quirks( eg:- typeof null === 'object')

/*let x = 10;
let y = 20;

if(x > 5 && y < 25){
    console.log("A");
}else{
    console.log("B")
}*/


// operators
/* let loggedIn = true;
let hastoken = false;
let access = loggedIn && hastoken ? "Allow" : "Deny";
console.log(access); */


 
/*function getval(Val){
    if(Val<25) return"D";
    else if(Val<50) return"C";
    else if(Val<75) return"B";
    else return"A";


}

console.log(getval(12));
 */



/*function getGrade(score){
    if(score>=90 && score<=100) return"A+";
    else if(score>=80 && score<=89) return"A";
    else if(score>=70 && score<=79) return"B";
    else if(score>=60 && score<=69) return"C";
    else if(score>=33 && score<=59) return"D";
    else if(score>=0 && score<=32)return"fail";
    else return"Invalid score";
}

console.log(getGrade(32));
*/

//@@   






// @#$ NEW start (14-11-2025)

//var, let, const   
//declaration and initialization.

// var a = 12;

//problem:- window mein add hota hai.
//function scoped hota hai.
//aap firse declare kr skte ho same name se and error nhi aayega.


//@#
// let a=1;
// let 1=2;
//we can't declare a twice in let.


// const is used for the constant value that never changes.

// let dulha = "lab";
// let dulhan = "laby";

// var a =12;b


/*function getGrade(marks){
    if(marks < 33) return "fail";
    else if(marks < 59) return "2nd";
    else return "1st";
}

console.log(getGrade(9));
*/
 

// Rock-Paper scissor game.
/*function rps(user,computer){
    if(user === computer) return "draw";

    if(user === "scissors" && computer === "paper") return "user";
    if(user === "rock" && computer === "scissor") return "user";
    if(user === "paper" && computer === "rock") return "user";

    return "computer";


}

console.log(rps("rock", "paper"));
*/

//@# repeat krne ko loop kahte hai
// for, while, do-while, forin, forof, foreach

// for(start; end; change)

/*for(let i =1;i<=100;i++){
    console.log(i);
}
*/



/*start
while(end){
    //code
    ChannelMergerNode;
}
*/

/*
let i = 1;
while(i < 32){

    console.log(i);
    i++;
}
*/


//@# do-while loop
/*
let i = 12;
do{
    console.log(i);
    i++;
}
while(i<2)
*/


//math.floor() :-- gives the perfect number by removing the decimal and Math.floor() is a built-in JavaScript method that rounds a number down to the nearest integer (towards −∞).
// math.ceil():- Math.ceil() rounds a number up to the nearest integer (towards +∞).

//@# break,continue

//@#Questions

// (1)
/*
for(let i=1;i<11;i++){
    console.log(i);

}
*/

/*
let i=1;
while(i<16){
    if(i%2 === 1){
        console.log(i);
    }
    i++;
}
*/



//@#$ Functions
//what,why and how 

//agar code likh diya to wo turant chal jaata hai

/*
function dance(){

    console.log("dance");
    console.log("dance");
    console.log("dance");
    console.log("dance");
    console.log("dance");
    console.log("dance");

}

dance();
*/


/*
function lolo(){ //function declaration
    console.log("Happy New Year");
}

lolo();
*/


/*
let fun = function(){ // function expression:-variable me functions ko save krna function exp kehlata hai.
    console.log("HEYYYYYYYY");
};

fun();//this is th name of the function and i have created it using let variable.
*/


//@#$ fat arrow fun

/*
let fnc = () => {
    console.log("heyheyheyhey");
};
fnc();
*/


//parameterized function:-function jisme kuch parameter/value pass hote ya kiye jate hai.

/*
function dance(v1){
    console.log(`${v1} naach rha hai`);
}

dance("prem");
dance("pawan");
dance("premsagar");
dance("monu");
dance("ravi");
*/ 

// parameter :- variables which accept values.
// Arguments :- the real value of the parameter.


// jab argument kai saare ho to humein utne hi parameter banane padenge, issey bachne ke liye,hum ( rest ya spread ... ) operator ka use krte hai,
// agar ( ... ) operator function ke parameter me use ho toh to woh rest operator kehlata hai and agar wo arrays and object mein lge toh wo spread operator khelata hai.

/*
// use of rest operator
function abcd(...val){
    console.log(val);
}

abcd(1,2,3,4,5,6,7,8,9,10);
*/



/*
// use of spread operator
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];

console.log(newNumbers); //output:- [1, 2, 3, 4, 5]
*/



// default parameterized function
/*
function add(v1=0,v2=0  ){
    console.log(v1 + v2)
}

add(5,6);
*/ 


//@# Return matlab jaha se aaye ho wahi daal denge

/*
function abcd(){
    return 12;
}

let val = abcd();
console.log(val);
*/

/*
function abcd(v){
    return 12 + v;
}

let val = abcd(23);
console.log(val);
*/



//@#$ First class function -> functions ko values ki tarah treat kr sakte ho.

/*
function abcd(val){
    val();
}

abcd(function () {
    console.log("Hey")
})
*/


// Higher order function:- HOF wo function hota hai jo ki return kre function ya fir accept kre ek fun apne parameter MediaDeviceInfo.

// 1) HOF
/*function abcd(val){
    console.log(12);
}

abcd(function () {
    
})
*/

// 2)

/*
function abcd(){
    return function (){
        console.log("HEYYYYY");
    };
}


abcd() ();
*/



//pure vs impure functions

//Pure:- aisa fnc jo ki bahar ki value ko naa badle wo hai pure fnc.

/*
let a = 12;
function abcd(){
    console.log("HEYYYY");
}

abcd();
*/

//Impure:- aisa fnc jo ki bahar ki value ko badal de wo hai impure fnc.

/*
let a = 12;
function abcd(){
    a++;
    console.log(a);
}

abcd();
*/

//closures scoping-> ek fnc jo return kre ek aur fnc aur return hone wala fnc hamesha use karega parent fnc ka koi variable

/*
function abcd(){
    let a = 12;
    return function(){
        console.log(a);
    }
}
*/


//@# Lexical scoping:- Scope of the physical position of a variable.

/*
function abcd() {
    let a =12;
    function defg(){
        let b =13;
        function ghij(){
            let c =14;
        }
    }
}
*/


//@# IIFE – Immediately Invoked Function Expression:- ek function jo turant chalega, isse call krne ki jarurat nhi hoti hai,ye Pahele se call hua rheta hai

/*
(function(){
    console.log("Heyyyyy");
})(); */ // it is immediately invoked:- means function is called immediately.




//@# function hoisting :- function ko bnane se pahele call krna.  ye sirf function statement/declaration me kaam krta hai .
//hoisting function expression me kaaam nhi krta hai

// 1) function statement .
/*
abcd();

function abcd(){
    console.log("Hurrrah");
}
*/

// 2) function expression
/*
abcd();


let abcd = function(){
    console.log("Heyyy");
}
*/

// the above code will give an error of reference variable,we cant do hoisting in the function expression.



//Practice


/*
let multi = (a,b) => {
    return a*b;
};

console.log(multi(2,3));
*/


//use rest parameter to accept any number of scores and return the total.

/*
function getScore(...scores){
    console.log(scores);
}

getScore(10,12,14,18);
*/



//Use of forEach loop.
// use rest parameter to accept any no of scores and return the total.
/*
function getscore(...scores){
    let total = 0;

    scores.forEach(function (val) {
        total = total + val;
    });

    return total;
}

console.log(getscore(10,12,14,18));
*/

// another method of the above question
/* function getscore(...score){
    let total = 0;

    for(let i=0;i<score.length;i++){
        total += score[i];
    }
    return total;
}

console.log(getscore(10,14,34,23,13,93));*/


//early return function
/*
function checkage(age){
    if(age < 18) return "too young";
    return "Allowed";
}

console.log(checkage(12));
*/



//@# what does it mean when we say function are first-class citizens?
// when it is so, function is treated as variable and arguments.

// Pass a function into another function and execute it inside.

/*function abcd(val) {
    val();
}

abcd(function () {
    console.log("hey");
});
*/

// closure function:- ek aisa function jo return kre ek aur function aur returning function use kre outer function ka variable.

/*function abcd(){
    let val = 1;
    return function (){
        console.log(val);
    }
}*/


//@# calculate discount using closure property.

/*
function dicountcalculator(discount){

    return function (price){
        return price - price * (discount / 100);
    };
}

let discounter = dicountcalculator(25);
console.log(discounter(400));
*/
  
//@###@ Explanation of the above code.
// Yeh function discountCalculator ek outer function hai
// Jo ek discount percentage leta hai, jaise 10 ya 25.
//
// Jab aap discountCalculator(25) call karte ho,
// tab outer function chal kar ek inner function return karta hai.
// Inner function ek price leta hai aur usi discount se final price calculate karta hai.

// JavaScript me closure hota hai: 
// Matlab, jab function ke andar ek aur function banate ho
// aur woh andar wala function outer function ke variables ya parameter ko access kar sakta hai,
// toh usko closure kehte hai.

// Jaise yahan 'discount' outer function me hai,
// lekin jab inner function return ho gaya aur use baad me kahin bhi call karo,
// fir bhi 'discount' ki value yaad rehti hai (yeh closure ki wajah se hota hai).
// Toh jab aap discounter(400) call karte ho,
// tab inner function price 400 leke, discount 25 apply karke result nikal leta hai.

// Flow:
// 1. Pehle let discounter = discountCalculator(25); likha, toh outer function chala aur discount ko 25 fix kar diya.
// 2. Fir discounter variable me inner function aa gaya, jo hamesha discount 25 yaad rakhega.
// 3. Jab console.log(discounter(400)); likha, tab 400 rupees par 25% discount lag gaya aur 300 print ho gaya.

// Closure se fayda yeh hota hai ki, 
// aapke function ke variables safely save ho jate hai aur aap unko kisi bhi future call me use kar sakte hai -- even jab original function khatam ho gaya.
// Yeh interview me bhi bohot poocha jata hai!


//@# Visual of the above code

// discounter variable ke andar woh function aata hai jo discountCalculator return karta hai
// discounter(400) likhne pe sirf andar waala function (with price = 400) call hota hai
// Aur woh discount ki fix value pehle hi closure se yaad rakhta hai, yahin pe magic hota hai: closure!



/*
function counter(){
    let count = 0;
    return function (){
        count++;
        return count;
    }
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
*/


// different btw HOF and Closure
//Hof :- It is function returning function, Ek HOF woh function hota hai jo ya to kisi doosre function ko argument ke form mein leta hai, ya fir ek function return karta hai

/*@# EG:-
 // HOF jo function ko accept karta hai
function processData(data, callback) {
  // callback ek function hai!
  callback(data);
}
// HOF jo function return karta hai
function add(x) {
  return function(y) {
    return x + y;
  }
}
*/




//Closure :- It is function returning function,but returning function will use some variable of the outer function. Closure ek concept hai jismein ek function, apne outer function ke variables/parameters ko yaad rakhta hai, chahe outer function execute ho chuka ho.

/* EG:-
function outer() {
  let secret = 42;
  return function inner() {
    // Yeh inner function 'secret' ko yaad rakhta hai - this is closure!
    return secret;
  }
}
let getSecret = outer();
getSecret(); // 42 
*/


//@#$ Array Start


/*
let arr = [45,60,25,90];
arr.some(function(val){
    if(val < 35){
        console.log(val);
    }
});
*/



// @#$ Array coder army

/*
let marks = [100,30,80,50,90]
console.log(marks);
console.log(marks.length);
*/

// let arr = [100,20,"Deepak",true];
// console.log(arr[3]); 

// console.log(typeof arr);

/*
arr[1] = 50;
console.log(arr[1]);
*/



//push an element:- insert an element at the end.

// arr.push(90);
// arr.push("Strike");

// console.log(arr);





//pop:- delete element from end.
/*
arr.pop();
console.log(arr);
*/

//starting me element ko add kr skte h,delete the element at the first place.
/*
arr.unshift(10);
arr.unshift(false);
console.log(arr);
*/

//starting se delete bhi kr skta hu
/*
arr.shift();
console.log(arr); 
*/



// Iteration in array
// let arr = [10,30,50,90,11];

/*
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
*/

/*
for(let num of arr){
    console.log(num);
}
*/


// Slice and splice operation 

// const brr = [10,30,50,70,80];
// const brr2 = brr.slice(2,4);
// console.log(brr2);
// console.log(brr);


// console.log(brr.splice(1,4));
// console.log(brr);


// const brr3 = brr.splice(1,3,"Deepak",19);
// console.log(brr);




/*
const arr = [10,30,50,90,11];
const arr2 = ["diwakar",11,true];
const arr4 = [90,4,false];
*/

/*
arr.push(arr2);
console.log(arr);
*/

/*
const arr3 = arr.concat(arr2);
console.log(arr3);
*/

// const arr3 = [arr,arr2,arr4];
// console.log(arr3);

//Spread operator

/*
const arr3 = [...arr,...arr2,...arr4];
console.log(arr3); 
*/



// type conversion
/*
const names = ["Alice","Bob","Charlie"];
console.log(names.toString());
*/


//join operator
/*
const names = ["Alice","Bob","Charlie"];
console.log(names.join("-"));
*/
//join bhi same kaam krta hai (array ko string me change krta) lakin ye btata hai ki join kaise krna hai (do elements ke beech kya ayega).




//Simple searching

// const names = ["Alice","Bob","Charlie","Bob"];
// console.log(names.indexOf("Bob"));
//indexof("Bob"):- ye elements ka index return krta hai jo first time appear hua hai.agar element present nhi hua toh -1 return krega.

// console.log(names.lastIndexOf("Bob"));
//It gives the last index of the elements.

// console.log(names.includes("Bob"));
//It tells us whether the element is present or not.






// Sorting 

// const names = ["alice","Rohit","Bob","Mohit","Charlie","Bob"];
// names.sort();
//sorting of the alphabet is based on the ascii table.
// console.log(names);


// Reverse

// const names = ["Alice","Rohit","Bob","Mohit","Charlie"];
// names.reverse();
//reversing of the alphabet is based on the ascii table.
// console.log(names);


// sorting a number 

// const num = [101,90,12,65,87];
// num.sort((a,b) => a-b);
// sorting of a number is also based on the ascii table.
// console.log(num);


// num.sort((a,b) => a-b);

/*
a-b :- isse ascending order me sort hota hai.
b-a :- isse descending order me sort hota hai.
-ve:- pehle a aayega fr b aayega
+ve:- pehle b aayega fr a aayega.
*/

// console.log(num);



// const arr = [10,30,50,[40,90,[60,19,99],11],80];


// console.log(arr[3][2][1]);

/*
const a = arr.flat();
console.log(a);
*/

/*
const b = a.flat();
console.log(b);
*/


/*
const c = arr.flat(Infinity);
console.log(c);
*/

//In JS array is not an actual array, it behaves like an object.



// Object

/*let obj = {
    name:"Diwakar Modi",
    age: 26,
    khaana : "daal chawal",
};

let aa = "name"; */

// console.log(obj.name); //method to access an object.

// console.log(obj["age"]); // another method to access an object.

// console.log(obj[aa]); // we can access name using this method also.


// nested object ya deep access object.

/*let user = {          // object literal
  name: "Harsh",
  address: {            // nested object
    city: "Bhopal",
    pin: 462001,
    location: {         // deeply nested object
      lat: 23.2,
      lng: 77.4
    }
  }
};
 
console.log(user.address.location.lat); //deep access.
*/







// @#@ loop in object

//for-in loop

// let obj = {
//     name:"Diwakar",
//     age: 24,
//     email: "test@test.com",
//     address:{
//         city:"noida",
//         state:"uttar pradesh",
//     },
// };

// for(let key in obj){
    // console.log(key); //accessing keys of the obj.

    // console.log(key,obj[key]); //accessing keys and values of the obj.

// }

// console.log(Object.keys(obj)); // put all the keys of obj in array


// console.log(Object.entries(obj)); //put all the keys and values of obj in array and than put whole element in a single array (  like:- [ [ 'name', 'Diwakar' ], [ 'age', 24 ], [ 'email', 'test@test.com' ] ])


/*
// Copying of an object

// let obj2 = {...obj}; // but copying like this is an problem i.e this copy the reference of the obj,not real copy of an obj. Real copy can be done by deep clone.

// console.log(obj2);
*/


/* // Deep clone:-create a completely new object, including all nested objects, so that changing the copy does NOT affect the original.

let obj3 = JSON.parse(JSON.stringify(obj));//1) method



//2nd method:- most efficient method
let obj4 = structuredClone(obj);
obj4.address.city = "Indore";

console.log(obj.address.city);
*/


/* 
// Optional chaining

// obj?.address?.city // if the items is present in obj than access it or else leave it. but it does'nt give an error.
*/





 






