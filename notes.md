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
while (conditidn) {
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



 var cityname=["Pune", "Mumbai", "Delhi", "Kolkata"
，"Delhi"］；
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
# arrow function (=>)
 1. Three type of arrow function declare
```js
const addTwo = (numi, num2) => num1 + num2

const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (numi, num2) => ({username:
"hitesh"})
```
# HOF
```
Higher Order Functions Are The Functions Which Accept A Function In A Parameter Or Return A Function Or Both.
```
WHAT ARE CONSTRUCTOR FUNCTIONS ?

A Function Which Whenever Invoked With "New" Keyword Returns
An Object, If We Use "This" Keyword Inside That Function, It Returns An Object With All Of The Properties And Methods Mentioned Inside That Function, Such Function Is Called
Constructor Function.



