# HTML
- Introduction
1. HTML Stand for `Hyper Text Markup Language`
1. They creating the  `web page`
1. HTML elements tell the browser how to display the content

# STRUCTURE OF HTML
```
<html>
<head>
<title>Page title</title>
</head>
<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
</body>
</html>
```
#  Elements  HTML5

 1. Element is base use in html 
 ```
 h1, br, html, p, head, Title
```
# Semantic in Html Formatting Tage
1. Semantic HTML uses tags that tell you what the content is, not just how it should appear.
1. semantic ka matalab ham website mai kon sa contact kar na h tho use it
```
header
nav
main
section
article
footer
aside
```
```
<b> - Bold text
<strong> - Important text
<i> - Italic text
<em> - Emphasized text
<mark> - Marked text
<small> - Smaller text
<del> - Deleted text
<ins> - Inserted text
<sub> - Subscript text
<sup> - Superscript text
```
# why use image with alt
1. The <img> tag is used to show an image on a web page.
1. src = source (where the image is coming from)
1. alt = alternative text (a description of the image)
1. Agar img load nai hua tho alt tab show hota h

# Quotations
1. blockquote for big/long quotes
```
Used for longer quotes, like a paragraph from a book, article, or someone’s speech.
```
2 . q  for short/in-line quotes
```
1. Used for short quotes inside a sentence. It automatically adds quotation marks.

2. Q is a ""  eg= "sdnfjshdj" 
```
# Html Blocks
```
Tag	What             What it's for 
        
<div>	        A generic container (no meaning)
<p>	              Paragraph
<h1><h6>	      Headings
<ul> / <ol>  	  Lists
<li>	          List item
<section>	      Section of content
<header>, <footer> Page layout parts
```
# iframe
```
An iframe is an HTML tag that lets you show another web page inside your current web page.

You can use iframe to:-

Show a YouTube video
Embed a Google Map
Display another website or web page
Add online forms or tools
```

# Cast cading style sheet (css) 
```
CSS is the language we use to style an HTML document.

CSS describes how HTML elements should be displayed.

This tutorial will teach you CSS from basic to advanced.

It is used to style your HTML — like changing colors, fonts, sizes, spacing, and layout.
```
# hover
```
The :hover selector in CSS is used to change the style of an element when the mouse is over it.
```
# scale
```
scale is a function used with transform to make an element bigger or smaller.

1 = normal size
2 = 2 times bigger
0.5 = half the size
```
# skew
```
skew is a CSS function used with transform to tilt or slant an element — like stretching it diagonally.

Xdeg = how much to slant horizontally
Ydeg = how much to slant vertically
deg = degrees (like angles)
```

CSS animations let you make things move, change, or transform over time — without JavaScript!

# Gradients
Linear Gradients (goes down/up/left/right/diagonally)
```
Syntax
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);

CSS gradients let you display smooth transitions between two or more specified colors.
```
Radial Gradients (defined by their center)
```
Syntax
background-image: radial-gradient(shape size at position, start-color, ..., last-color);

The CSS radial-gradient() function creates a radial gradient.

A radial gradient is defined by its center.

To create a radial gradient you must also define at least two color stops.
```
Conic Gradients (rotated around a center point)
```
Syntax
background-image: conic-gradient([from angle] [at position,] color [degree], color [degree], ...);

A conic gradient is a gradient with color transitions rotated around a center point.

To create a conic gradient you must define at least two colors.
```
# position(static , relative , absolute , fixed , sticky)
```
1. he browser places the element normally, top to bottom.
You can't move it using top, left, right, or bottom.

2. he element stays in the flow, but you can move it a little.
It moves relative to its original spot.

3. Moves the element exactly where you say (top-left, etc.)
It’s removed from the normal flow.
It’s positioned inside the nearest parent that’s not static. 

4. Stays in the same place on the screen, even when you scroll.
Good for sticky headers, menus, buttons, etc.

5. Acts like relative, until you scroll — then it sticks.
Great for headers that stay at the top when scrolling.
```

# Javascript (JS)
`Define`:- javascript is a programming language used to make website interactive. it can update content,respond to user action and control multimedia without reloading the page.

JavaScript is the programming language of the web.

It can update and change both HTML and CSS.

It can calculate, manipulate and validate data.

# Data type

A data type defines what kind of value you are working with:
Is it a number? Text? True or false? Something else?

1. string =   text   =   "hello", 'hii'

1. number = Numbers (whole or decimal) = 42, 3.14

1. Boolean = True or false

1. Null = Empty value (on purpose) = null

1.  Undefined = No value assigned = undefined

1. Object = Collection of data = { name: "Ana", age: 25 }

1. Array = List of items = [1, 2, 3], ["a", "b"]
 
 ```
 js run 2 type

console.log(); = isma ek varable run that

console.log(); = isma many varable run that

eq= name , email.com , password
```
# loops and switch
`Define`:- Loops are used to run the same block of code multiple times until a certain condition is met.

`Define`:- Switch is used to perform different actions based on different conditions — like a cleaner alternative to many if...else if...else statements.

  Three Types of Loops
1. for loop  Runs a block of code a specific number of times.
```js
for (let i = 0; i < 5; i++) {
  console.log("Hello!");
}
// Output: Hello! (5 times)

```
 2. while loop – Runs a block of code while a condition is true.
 ```js
 let i = 0;
while (i < 5) {
  console.log("Hi");
  i++;
}
```
3. do...while loop – Similar to while, but it runs the code at least once before checking the condition.
```js
let i = 0;
do {
  console.log("Hey");
  i++;
} while (i < 5);
```
4. swich example:-
```js
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}
```

# How to take user input using prompt function
1. prompt isliya use hua h ki user sa input le sakte h
   promt srif browser pa run hota h.
1. and terminal pa run lar na h tho phela (npm init -y)  and (npm install prompt-sync)
1. agar prompt terminal pa run kar na h tho code ka phela line kar na padha ga
1. prompt string da raha h mujhe number chaiya tho use parseInt.
```js
const prompt=require ('prompt-sync') ();       let x=parseInt(prompt( 'Enter 1st number: ')); let y=parseInt(prompt('Enter 2nd number:'));
console. log (x+y) ;

```
# While , Do-While & for loop
 
1. The while loop repeatedly executes a block of code as long as a specified condition is true.
```js
while (condition) {
      // body of loop
      x++;
}
```
1. The while loop first evaluates the condition inside ( ).
2. If the condition evaluates to true, the code inside { } is executed.
3. Then, the condition is evaluated again.
4. This process continues as long as the condition evaluates to true.
5. If the condition evaluates to false, the loop stops.

# Array
1. first type of array declare multiple data store in array
1. second type of array declare 
1. thirdy type of array declare
```js
var cityname=["Pune", "Mumbai", "Delhi"];
document. write(cityname);


var cityname=new Array(); 
cityname [0]= "Pune" ;
cityname [1]= "Mumbai"; 
cityname [2]= "Delhi" ;
document write(cityname[0]);


var cityname=new Array("Pune", "Mumbai", "Delhi");
document.write(0)
 ```
 1. at = inbulid function hota h , 2 position pa konsa element h 
 ```js
 var cityname=["'Pune", "Mumbai", "Delhi", "Kolkata"];
let c=cityname. at (2) ; 
document.write(c);
```
1. indexOf = inbulid function hota h , ya delhi kitna index(number) pa.
1. lastindexOf = agar middle mai 1 aaya and last mai 1 h tho ya last value select karaga.
 ```js
 var cityname=["Pune", "Mumbai", "Delhi", "Kolkata"];

 let c=cityname. indexOf("Delhi");

 document write("Delhi is present at Position:"+c);



 var cityname=["Pune", "Mumbai", "Delhi", "Kolkata" , "Delhi";
 let c=cityname.lastIndexOf("Delhi");
document write("Delhi is present at Position:"+c)
```
1. pop() = means koi element ko last sa delete kar tha h
1. push() = means koi element ko add kar tha h 
1. shift() = means koi bhi first element ko delete kar tha h 
1. unshift() = means koi bhi first element mai add kar tha tha h
1. sort() = means alphpate ka form mai present kar tha tha h `a,b,c,d,` that `sort string ka liye proper ans karaga but number ka liye nai`
1. reverse() = means i form 1 to 10 then 10 to 1 `string and number both use`
1. filter() = 
1. ForEach() = means one by one form kar tha h 
      `for each return nai kar tha h value ko`.
1. reduce= ismai hamlog jaisa code h vasie bhi kar sakte h and `acc value = ((acc,cur)=>{},0)` ya acc value h.
```js
3.
var cityname=["Pune", "Mumbai", "Delhi", "Kolkata"];
document write (cityname+"<br›");
cityname. shift();
 document write (cityname+"<br›");

4.
var cityname=["Pune", "Mumbai", "Delhi", "Kolkata"];
document write (cityname+"<br›");
cityname. unshift(nagpur);
 document write (citynam e+"<br›");

5.
 var cityname=["Pune", "Mumbai", "Delhi", "Kolkata"];
 let c=cityname.sort();
document. write(c);

7.
var age=[10, 20,48,55,7];
let c=age. filter(function(value){return value>18;});
document. write(c);

const myNums = [1, 2, 3, 4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=> num>4)
console.log (newNums) ;


9.
const arr=[1,2,3,4,5,]
const intervalvalue=0;

const newarr=arr.reduce((accumulator,currentvalue)=> accumulator + currentvalue , intervalvalue )

console.log(newarr);

```
`agar {} mai use kar na h tho { return num>4} kar na padhaga`

# object
`Define`:-An object is a collection of data and action. `data which is called property and action which is called method.`

1. Hamlog object mai se value change kar sakte h.
1. Aur koi another person code ko change na kar paye tho use it. `object.freeze(varaible ka name)`
```js
let Usermy={
    name:"abhishek",
    age:16,
    email:"abhi123@gmal.com"
};
console.log(Usermy.name)
console.log(Usermy.age)

Usermy.name = "pal";
Usermy.age = 18;

object.freeze(Usermy)

console.log(Usermy)
```
# return function , arrow function (=>)
`Define`:-In JavaScript, the return statement is used inside a function to send a value back to where the function was called. It ends the function and gives back a result.

`Define`:- it is shorter way to function define.
 1. Three type of arrow function declare
```js
const addTwo = (numi, num2) => num1 + num2

const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (numi, num2) => ({username:
"hitesh"})
```
# HOF

`Define`:- Higher Order Functions Are The Functions Which Accept A Function In A Parameter Or Return A Function Or Both.

 1. map() — Change Each Item in an Array
1. It transforms every item in the array and returns a new array.
```js
let numbers = [1, 2, 3];

let doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6]
```
1. filter() — Pick Some Items
1. It selects items that match a condition and returns a new array.
```js
let numbers = [1, 2, 3, 4, 5];


let even = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(even); // [2, 4]
```
1. reduce() — Combine All Items into One
1. It takes all items and reduces them to one value.
```js
let numbers = [1, 2, 3, 4];

let total = numbers.reduce(function(sum, num) {
  return sum + num;
}, 0);

console.log(total); // 10
```
# Dom (Document Object Model)
`define`:-The DOM (Document Object Model) in JavaScript is a way to represent the structure of a web page. It turns the HTML into a tree of objects that JavaScript can interact with. You can use the DOM to change text, styles, and structure of the webpage dynamically.

1. document.getElementById()
1. .getElementByClassName()
1. .innerHTML
1. .textContent
1. .innerText
1. .querySelector() (h1, ul,li,) 
1. .querySelector(#id) and Same `.class` bhi kar sakta hu.
1. .querySelector('input[type="password"]')
1. any name[0].style.color='green'

`note:- NodeList aaya tho ya kar na ka [0] `

note:- Node nai h tho kasia kar na h
```
Array.from(any name)
const name=Array.from(any name)
any name.forEach()
```
# How to create a new element in Dom
```
1. 

const div = document.createElement('div')
console.log(div);
div.className = "main"
div.id = Math.round (Math.random () * 10 + 1)
div.setAttribute("title"
", "generated title")
div.style.backgroundColor = "green"
div.style.padding = "12px"
// div. innerText = "Chai aur code"

2. format div add kar na 

const addText = document.createTextNode ("Chai aur code")
div.appendChild (addText)
document, body.appendChild(div)
```
# Local Storage
Local Store is a urb storge object which are not not sent to server with each request.
This data server a full page refresh and even a full browers restart.
These are the methods provided by local Storage

Local Storage in JavaScript is a way to store small amounts of data directly in the user's browser.
1. Set Item (key, value) → Store Rey /value pair
2. get Item (key) → get the value by key
3. remove Item (key) → remove the Rey with its value
4. Clear () → delete everything
5. Key (index) - get the key on a given position
6. length - the number of stored items

# prototype in js
`Define`:-In JavaScript, a prototype is a built-in object that allows other objects to inherit properties and methods from it.
Every JavaScript object has a hidden link to another object called its prototype.
# promise
A Promise in JavaScript is an object that represents the result of an asynchronous operation — it can be in one of three states:
1. Pending: the operation is still running
1. Fulfilled: the operation completed successfully
1. Rejected: the operation failed

```jslet promise = new Promise((resolve, reject) => {
  let dataFetched = true;

  if (dataFetched) {
    resolve("Data fetched successfully!");
  } else {
    reject("Failed to fetch data.");
  }
});

promise
  .then((message) => console.log(message))   // runs when resolved
  .catch((error) => console.log(error));     // runs when rejected
```
# Async Await
async and await in JavaScript are used to make asynchronous code (like fetching data) easier to read and write.
1. async makes a function return a Promise.
1. await pauses the function until the Promise is done.
```js
// Function using async and await
async function getData() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("Data received ✅"), 2000);
  });

  let result = await promise; // waits until the promise resolves
  console.log(result);
}

getData();
```
 # Fetch
 The fetch() function in JavaScript is used to get data from a server or API.
It returns a Promise, which lets you handle the response using `.then() or async/await.`
```js
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data));2
```
# Import And Export
import and export in JavaScript are used to share code between files.
1. export sends (shares) a function, variable, or class from one file.
1. import brings that shared code into another file.
# try and catch
`Define`:-In JavaScript, try...catch is used to handle errors so your program doesn't crash.
Simple Explanation:
try: Write the code that might cause an error.
catch: If an error happens, this part runs and handles it.
```js
try {
  let result = 10 / 0;
  console.log(result);
  let name = undefined;
  console.log(name.length); // This will cause an error
} catch (error) {
  console.log("Something went wrong:", error.message);
}
```
The constructor method
The
Constructor  method is called automatically by
new,
so We can initalise the object there


Class Inheritance
Class inheriance is a way another
for one class to extend
class. This is done by using the extends
keyword

# Validation Form
`Define`:- Form Validation in JavaScript means checking if the user has filled out a form correctly before it is submitted.

```
html code
 <form action="#" onsubmit="return validateForm()">
 ```
 ```js
 function validateForm(){
  document.getElementById('userError').innerHTML=""; 
  document.getElementById('userError').innerHTML="";
  
  let username = document.getElementById('username');
  let password = document.getElementById('Password');
 
   
      if(username.value == ""){
        document.getElementById('userError').innerHTML ='user name is empty';
        return false;
      }  
      else if(username.value.length < 4){
        document.getElementById('userError').innerHTML='you must 4 character';
        return false;
      }

      if(!gender){
        document.getElementById('emailError').innerHTML='please select the gender'
        return false;
      }

       if{skills.length==0}{
        //
       }

       if(city=""){
        //
       }

      if(password.value == ""){
        document.getElementById('passError').innerHTML ='password name is empty';
        return false;
      }

    return true;
 }
 ```
 # Constructor 
 `Define`:-A constructor in JavaScript is a special function used to create and initialize objects. It sets the initial properties of the object when it's created using the new keyword. Constructors can be defined using a function or inside a class.

 ```js
 class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

console.log(person1.name); // Alice
console.log(person2.age);  // 30
```
# Inheritance
Inheritance in JavaScript means one class can use the features (like properties and methods) of another class. It helps you avoid repeating code by reusing what already exists. This is done using the `extends
`keyword in classes.
```js
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak(); // Inherited from Animal
d.bark();  // Dog's own method
```
# Encapsulation
Encapsulation in JavaScript means hiding the internal details of an object and only exposing what is necessary.

```js
class Person {
  #age; // private property

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }
}

const p = new Person("Alice", 25);
console.log(p.name);     // Alice (public)
console.log(p.getAge()); // 25 (accessed via method)
console.log(p.#age);     // ❌ Error: Private field
```

 
 # React 

# react template
 1. RAFCE

 # hooks in react 

```js
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
```

# Conditional Rendering
```js
function App(){
const [showbtn, setShowbtn] = useState(false)
  return(
    <>
     {showbt? <button>showbtn is true‹/button>:
          <button>showbtn is false‹/button>}
     {/* {showbtn && ‹button›showbtn is true‹/button>} */}  
     <button onClick={()=>setShowbtn(!showbtn)}>
               </button>
  )
}
```
# useState
```
1️⃣ useState
Definition:

useState is used to store and manage data (state) in a functional component.
When the state changes, the component re-renders.
Example use: counters, form input values, toggle buttons.

1️⃣ useState
परिभाषा:
useState का उपयोग किसी component के अंदर data (state) को store और manage करने के लिए किया जाता है।
जब state बदलती है, तो component दोबारा render होता है।

उदाहरण:
Counter की value, form का input, button ON/OFF करना।
```
# useEffect
```
2️⃣ useEffect
Definition:

useEffect is used to perform side effects in a component, like:
fetching data
updating the DOM
timers
subscriptions
It runs after the component renders.

2️⃣ useEffect
परिभाषा:
useEffect का उपयोग side effects के लिए किया जाता है, जैसे:

API से data लाना

DOM को update करना

Timer या interval लगाना

यह component render होने के बाद चलता है।
```
# useContext
```
3️⃣ useContext
Definition:

useContext is used to share data between components without passing props manually at every level (avoids prop drilling).
Example use: theme, user authentication data, language settings.

3️⃣ useContext
परिभाषा:
useContext का उपयोग data को एक component से दूसरे component तक पहुँचाने के लिए किया जाता है, बिना बार-बार props भेजे।

इससे prop drilling की समस्या खत्म होती है।

उदाहरण:
User login data, theme (dark/light), language।
```
# useRef
```
4️⃣ useRef
Definition:

useRef is used to store a mutable value that does not cause re-render when changed.

It is commonly used to access DOM elements directly.

Example use: focusing an input field, storing previous values.

4️⃣ useRef
परिभाषा:

useRef का उपयोग ऐसा data रखने के लिए किया जाता है जो बदलने पर component को re-render न करे।

यह सीधे DOM elements को access करने के लिए भी इस्तेमाल होता है।

उदाहरण:
Input box पर focus करना, previous value को store करना।
```