// DOM manipulation 
/* DOM tree structure:- node,element,text,comment.
document 
 |-- div    (element Node)       
 ├── "Hello" (Text Node)
 ├── <!-- This is a comment --> (Comment Node)
 └── "World" (Text Node)
*/

// important points for DOM manipulation
/*html se element select krna
text badalna
html badalna
html badalna
css badalna
attribute 
event listeners
*/



// Document selector
/*
// 1) selection by id_name
// let abcd = document.getElementById("abcd");
// console.log(abcd);
// console.dir(abcd); 


// 2) selection by class_name
// let bcde = document.getElementsByClassName("abcd");
// console.log(abcd);
// console.dir(bcde);


// 3) selection by querySelector
// let cdef = document.querySelector("h1");
// console.log(cdef);
// console.dir(cdef);



// 3) selection by querySelectorAll
// let cdef = document.querySelectorAll("h1");
// console.log(cdef);
// console.dir(cdef);
// agar querySelectorAll use kroge toh array jaisa structure milega.
*/



// text/content access: innerText,textContent,innerHTML
/*// innerHTML works with HTML, innerText works with visible text, and textContent works with raw text.


// | Feature              | innerHTML | innerText | textContent |
// | -------------------- | --------- | --------- | ----------- |
// | Returns HTML         | ✅ Yes     | ❌ No      | ❌ No        |
// | Returns visible text | ❌ No      | ✅ Yes     | ✅ Yes       |
// | Includes hidden text | ❌ No      | ❌ No      | ✅ Yes       |
// | Affected by CSS      | ❌ No      | ✅ Yes     | ❌ No        |
// | Performance          | Medium    | Slow      | 🚀 Fast     |
// | Security risk        | ⚠️ Yes    | ✅ Safe    | ✅ Safe      |



// let h1 = document.querySelector("h1");
// h1.textContent = "Hello Bhai! How are u ?"
// console.dir(h1);


// let h1 = document.querySelector("h1");
// h1.innerText = "Hello Bhai! How are u ?"
// console.dir(h1);


// let h1 = document.querySelector("h1");
// h1.innerHTML = "Hello <b>Bhai!</b> How are u ?"
// // console.dir(h1);
// console.log(h1.innerHTML);

*/



// Attribute manipulation:getAttribute,setAttribute,removeAttribute.
/*// Attribute :- An attribute is extra information written inside an HTML tag that defines or controls the element’s behavior or properties.



// eg:- <h1 id="title" class="heading" style="color:red">Hello</h1> 
// id → attribute
// class → attribute
// style → attribute



// Attribute manipulation means: Getting, setting, changing, or removing HTML attributes using JavaScript.



// getAttribute() 👉 Read an attribute value.
// let h1 = document.querySelector("h1");
// console.log(h1.getAttribute("id"));
// output:- title

// getAttribute() looks only at HTML attributes
// If the attribute is missing, browser returns null
// JS does not crash


// setAttribute() 👉 Add or update an attribute
// h1.setAttribute("class", "main-heading");
// HTML becomes: <h1 id="title" class="main-heading">Hello</h1>

// let a = document.querySelector("a");
// a.setAttribute("href","https://www.google.com");


// removeAttribute() 👉 Remove an attribute
// let h1 = document.querySelector("h1");
// h1.removeAttribute("style");


// hasAttribute() 👉 Check if attribute exists
// let h1 = document.querySelector("h1");
// h1.hasAttribute("id"); // true if present.


// setAttribute
// let img = document.querySelector("img");
// img.setAttribute("src","https://media.istockphoto.com/id/1310488699/photo/abstract-technological-background-in-vibrant-colors-with-blur.jpg?s=612x612&w=0&k=20&c=GfLOTpzM7GeA4W3m52jtehDTPU4yq2mHo3qNPFd3CKk=");
*/




// Dynamic DOM manipulation:- createElement,appendChild,removeChild,prepend.
/*
// create element
// append/prepend kro jaha bhi element chahiye waha.

// let h1 = document.createElement("h1");
// h1.textContent="hello ji kaise ho";
// document.body.append(h1);// script ke baad create krta hai
// console.log(h1);

// let h2 = document.createElement("h2");
// h2.textContent="hello ji sb badhiya";
// document.body.prepend(h2);//script ke pahele create hota hai.
// let h3 = document.querySelector("h2");
// h3.style.color="red";
// h3.classList.add("hulu");//to add the class

// h3.classList.remove("hulu");//to remove the class.

// h3.classList.toggle("hulu");//agar class lgi ho toh hatta deta hai aur agar hati ho toh lga deta hai.
// console.dir(h3); // JS view


// console.log(h2);// HTML view
*/




//Events and Events Handling.

/*//addEventListener and removeEventListener.
// Events :- mtlb hota hai kuch action hua.
// Events listener ka mtlb hota hai apne koi action ka reaction diya.



//process:-
// 1)select the element first.
//  2)add eventlistener using (element.addEventListener("event name",functio({ kya kaam krna hai. })


let p = document.querySelector("p");

//click krne pe P ka color green ho jaiega.
p.addEventListener("click",function(){
    p.style.color="green";
})

//double click pe color yellow ho jaiega.
function dblclick(){
    p.style.color="yellow";
} //we can add eventlistener like this also, but we remove eventlistener like this(by creating function).

p.addEventListener("dblclick",dblclick)

p.removeEventListener("dblclick",dblclick);
*/



// Common Events(id:- common event): click,input,mouseover,submit,keyup and etc.
/*//input event.
// let inp = document.querySelector("input");

// inp.addEventListener("input",function(text){
//     console.log(text.data);
// })


// inp.addEventListener("input",function(text){
//     if(text.data !== null){
//         console.log(text.data);
//     }
//     else{
//         return;
//     }
// })


//change event tb chalta hai jab apka koi input select ya text area mein koi change hojaaye.

// let text = document.querySelector("#deviceselection");
// let sel = document.querySelector("select");

// sel.addEventListener("change",function(device){
//     console.log(device.target.value);// to print the value of selection
// })

// sel.addEventListener("change",function(device){
//     text.textContent = `${device.target.value} Device Selected`;
// })


// | Event    | Has `event.data`?        | Correct property     |
// | -------- | -----------------------  | -------------------- |
// | `input`  | ✅ Yes (last typed char) | `event.data`         |
// | `change` | ❌ No                    | `event.target.value` |



// keydown(id:- keydown)

// let h1 = document.querySelector("h1")

// window.addEventListener("keydown",function(dets){
//     if(dets.key === " "){
//         h1.textContent = "Spc";
//     }
//     else{
//         h1.textContent= dets.key;
//     }
// });



// another click(id:- click task)
// let btn = document.querySelector("#btn");
// let fileinp = document.querySelector("#fileinp");

// btn.addEventListener("click",function(){
//     fileinp.click();
// })

// fileinp.addEventListener("change",function(dets){
//     console.log(dets.target.files[0].name);
//     btn.textContent= `${dets.target?.files[0].name}`;
// })




// id:- form submit 
// let form = document.querySelector("form");
// let input = document.querySelectorAll("input");

// form.addEventListener("submit",function(dets){
//     dets.preventDefault();
//     for(let i =0;i<=3;i++){
//         console.log(input[i].value);
//     }
// })


// mouse over and out
// let abcd = document.querySelector("#ab-cd");
// abcd.addEventListener("mouseover",function(){
//     abcd.style.backgroundColor ="yellow";
// })

// abcd.addEventListener("mouseout",function(){
//     abcd.style.backgroundColor ="red";
// })



// mousemove
// window.addEventListener("mousemove",function(dets){
//     console.log(dets);
// })


// mousemove
// let abcd = document.querySelector("#ab-cd");

// window.addEventListener("mousemove",function(dets){
//     abcd.style.top = dets.clientY + "px";
//     abcd.style.left = dets.clientX + "px";
// })

// let abcd = document.querySelector("#ab-cd");

// abcd.addEventListener("click",function(dets){
//     console.log(dets);
// })
*/


/*// event bubbling :- jispe event aayega agar uspar listener nhi hua to humara event uske parent pe listener dhundhega aur  aisa krte-krte upar ki taraf move krega.
// in simple meaning in to out.

// document.querySelector("#nav").addEventListener("click",function(){
//     alert("clicked");
// });


// let ul = document.querySelector("ul");

// ul.addEventListener("click",function(dets){
//     dets.target.classList.toggle("lt");
// })
*/


/*// event capturing 
// jb bhi aap click krte ho ya koi event raise krte ho to aapka jo event flow do phases mein chalta hai.

// phase 1 : event top level element se neeche ki taraf aayega.
// phase 2 : event raised element se parent ki taraf jaayega

// aur hamesha pahle phase 1 hoti hai incase of both bubbling and capturing but vo by default off rhti hai, agar usey on kr de to pahele phase 1 ka answer milega

// pahele capture phase chalega phir bubbling phase chalega.

// document.querySelector("#nav").addEventListener("click",function(){
//     alert("clicked");
// },true );
*/



/*// Practice set

// let inp = document.querySelector("input");
// let span = document.querySelector("span");

// inp.addEventListener("input",function(){
//     let left = 20 - inp.value.length;

//     if(left<0){
//         span.textContent = left;
//         span.style.color = "red";
//     }
//     else{
//         span.textContent = left;
//         span.style.color = "white";
//     }
// })
*/



// Forms and form validation
/*// let nm = document.querySelector("#name");
// let form = document.querySelector("form");


// form.addEventListener("submit",function(dets){
//     dets.preventDefault();

//     if(nm.value.length <= 2){
//         document.querySelector("#hide").style.display="initial";
//     }
//     else{
//         document.querySelector("#hide").style.display="none";
//     }
// })


// Regex
// form.addEventListener("submit",function(dets){
//     dets.preventDefault();


// })
*/


// email and password validator
/*// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let form = document.querySelector("form");

// form.addEventListener("submit",function(dets){
//     dets.preventDefault();

//     document.querySelector("#emailerror").textContent = "";
//     document.querySelector("#passerror").textContent = "";


//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     let emailans = emailRegex.test(email.value);
//     let passwordans = passwordRegex.test(password.value);

//     if(!emailans){
//         document.querySelector("#emailerror").style.display = "initial";
//         document.querySelector("#emailerror").textContent = "Email is incorrect";
//     }
//     else{
//         document.querySelector("#emailerror").style.display = "none";
//     }

//     if(!passwordans){
//         document.querySelector("#passerror").style.display = "initial";
//         document.querySelector("#passerror").textContent = "Password is invalid";
//     }
//     else{
//         document.querySelector("#passerror").style.display = "none";
//     }

// })
*/





// Timers and intervals

// set timeout bs ek baar chalta hai

// setTimeout(function(){
//     console.log("Hello");
// },5000)


// set interval ek fixed interval ke baad chalta hai in repeatative manner.

// setInterval(function(){
//     console.log("Hello");
// },5000)



/*// set timeout

// let tm = setTimeout(function(){
//     console.log("Hello");
// },5000)

// clearTimeout(tm); // it clears the timeout.
// clearInterval(tm); //it clears the interval.
*/


/*// counter from 10 to 1.

// let count = 10;
// let interval = setInterval(function(){
//     if(count > 0){
//         console.log(count);
//         count--;
//     }
//     else{
//         clearInterval(interval);
//     }
// },1000)*/


/*// task:- Downloading stimulation:-
// let count = 0;
// let progress = document.querySelector(".progress-bar");
// let percent = document.querySelector(".percentage");
// let start = document.querySelector(".download-btn");
// // let click = true;

// start.addEventListener("click",function(){
//     start.textContent = "Downloading started...";
//     setInterval( function(){
//     if(count < 100){
//         count++;
//         progress.style.width = `${count}%`;
//         percent.textContent = `${count}%`;
//     }
//     else {
//         start.textContent = "Downloaded!";
//     }
//     },30)
    
// })



// hide h2 after a fixed interval/
// setInterval(function (){
//     document.querySelector("#hide").style.display = "none";

// },3000);
*/




// local storage, session storage and Cookies.

// local storage:-> aapke browser ke andar data store karna jo ki browser band hone par bhi delete nahi hoga.

//Session Storage:-> ye aapka data temporarily store karta hai, matlab ki tab band hote data delete ho jata hai.

// Cookies:-> ye bhi data store karta hai and aapka data browser ke cookies naam ki property mein save hota hai and ye cookie concept kam data ya light data ke liye hota hai.

// CRUD Operation in Storage(local,Session and Cookies)
// Data Store kaise kre:-> setItem() :-> agar item nhi ho toh setItem new item bna deta hai aur agar h toh wow update kr deta hai.
// Data fetch kaise kre:-> getItem()
// Data update kaise kre:-> setItem()
// Data remove kaise kre:-> removeItem()

// CRUD in local Storage.

// localStorage.setItem("name","Diwakar"); //Create
// let value = localStorage.getItem("name"); //Read
// localStorage.setItem("name","Diwakar Modi"); //Update
// localStorage.removeItem("name"); //Delete

// JSON.Stringify:-> it change the data(array,object) into string 
// localStorage.setItem("friends",JSON.stringify(["akash","harsh","amit"]));

// JSON.parse() :-> it change the stringified array to its original form.
// JSON.parse('["akash","harsh","amit"]');
// let ls =JSON.parse(localStorage.getItem("friends"));
// console.log(ls);


// CRUD in Session Storage.
// same as local Storage bs we have to use seesion in place of local. and clear to delete data.


//Cookies 
/* 
1) browser mein chhota data store krne ke liye cookies ka istemal hota hai.
2) cookies ~ 4kb.
3) localstorage, sessionstorage ~ 5mb.
4) cookies mein jo bhi data stpre karoge wo data page reload par automatically server par jaayega.

// cookies
// document.cookie = "Name = Diwakar"; //creating cookie.

// we can edit cookies using edit this cookie in the crome extension.
*/
