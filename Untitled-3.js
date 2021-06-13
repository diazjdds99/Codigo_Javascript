<script>
    document.write("hello word!");
</script>;

<script> 
    document.write("<h1>zhello word!</h1>");
</script> 

console.log("hello from console!")

var x = 10;

var x = 100;
document.white(x);

var x = 100;
console.log(x);

x = 42;
console.log(x);

var x = 100;
document.write(x);

// This is a single line comment 
alert("This is a alert box!");

/* This code 
   creates an 
   alert box */
   alert("This is a alert box!");

var num = 42; // A number without decimals 

Var price = 55.55; // A number with
decimals
document.write(price);

var name = 'John';
var text = "My name is John Smith";

var text = "My name is 'John' ";

var sayhello = 'Hello world! \'I am a 
Javascript programmer.\' '; 
document.write(sayHello);

var isActive = true; 
var isHoliday = false;

var x = 10 + 5;
document.write(x);

var x = 10;
var Y = x + 5 + 22 + 45 + 6548;
document.write(y);

var x = 10 * 5;
document.write(x);

var x = 100 / 5;
document.write(x);

var myVariable = 26 % 6;

var num = 10;
// num == 8 will return False

(4> 2) (10<15)

variable = (condition) ? value1: value2 

Var isAdult = (age < 18) ? " too young":
"old enough";

var mystring1 = "I am learning ";
var mystring2 = "JavaScript with sololearn";
document.write(mystring1 + mystring2);

function main() {
    var distance = parseInt(readLine(), 10);
    //your code goes here
    const speed = 40
    const time = distance/speed
    const timeInMinutes = time * 60
    console.log(timeInMinutes)
}

if (condition) {
    statements
 }

 var Mynum1 = 7;
 var mynum2 = 10;
 if (mynum1 < mynum2) {
     alert("javaScrip is easy to learn.");
 }

 var Mynum1 = 7;
 var mynum2 = 10;
 if (mynum1 < mynum2) {
     alert("javaScrip is easy to learn.");
 }

 if (expression) {
    // executed if condition is true
 }
 else {
    // executed if condition is false
 }

 var mynum1 = 7;
 var mynum2 = 10;
 if (mynum1 < mynum2) {
     alert("This is my first codition");
 }
 else {
     alert("this is my second condition");
 }

 var course = 1;
 if (course == 1) {
     document.write("<h1>Html tutorial</h1>");
 } else if (course == 2) {
     document.write("<h1>css tutorial</h1>");
 } else {
     document.write("<h1>JavaScript tutorial</h1>");
 }

 var course = 3;
 if (course == 1) {
     document.write("<h1>Html tutorial</h1>");
 } else if (course == 2) {
     document.write("<h1>css tutorial</h1>");
 } else {
     document.write("<h1>JavaScript tutorial</h1>");
 }

 switch (expression) {
    case n1: 
       statements
       break;
    case n2: 
       statements
       break;
    default: 
       statements
  }

var day = 2;
switch (day) {
    case 1: 
    document.write("monday");
    break;
    case 2:
    document.write("Tuesday");
    break;
    case 3:
    document.write("wednesday");
    break;
    default:
    document.write("Another day");
}

var color ="yellow";
switch(color) {
    case "blue":
        document.write("this is blue.");
        break;
        case "red":
        document.write("this is red.");
        break;
    case "green":
        document.write("this is green.")
        break;
    case "orange":
        document.write("this is orange.")
        break;
    default:
        document.write("color not found.");
}

for (statement 1; statement 2; statement 3) {
    code block to be executed
 }

 for (i=i; i<=5 i++) {
     document.write(i + "<br />");
 }

 var i = 1;
 for (; i<=5; i++) {
     document.write(i + "<br />");
 }

 for (i=1, text=""; i<=5; i++) {
     text = i;
     document.write(i + "<br />");
 }

 var i = 0;
 for (; i < 10;) {
     document.write(i);
 }

 while (condition) {    
    code block
 }

 var i=0;
 while (i<=10) {
     document.write(i + "<br />");
     i++;
 }

 do {
    code block
 }
 while (condition);

 var i=20;
 do {
     document.write(i + "<br />");
     i++;
 }
 while(i<=25);

 for (i = 0; i <= 10; i++) {
     if (i == 5) {
        break;
     }
     document.write(i + "<br />"):
 }

 for (i = 0; i <= 10; i++) {
     if (i == 5) {
         continue;
     }
     document.write(i + "<br />");
 }

 function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here
    var day = 0;
    var total = 0;
    while(total<depth){
        day = day + 1;
        total = total + 7;
        if(total >= depth){
            console.log(day);
            break;
        }
        total = total - 2;
    }
}

function name() {    
    //code to be executed
  }
  JS
  
function myFuntion() {
    alert("calling a function!");
}
myFunction();

function myfuntion() {
    alert("alert box!");
}

myfunction();
//"alert box!"

// some other code 

myfuncion();
//"alert box!"

functionName(param1, param2, param3) {
    // some code
 }

function sayhello(name) {
    alert("hi, " + name);
}

sayhello("david");

function sayhello(name) {
    alert("hi, " + name);
}

sayhello("david");
sayhello("sarah");
sayhello("john");

function myFunc(x, y) {
    // some code
 }

 function sayHello(name, age) {
    document.write( name + " is " + age + " years old.");
  }

  function sayHello(name, age) {
    document.write( name + " is " + age + " years old.");
  }

  sayhello("john", 20);

  function my function(a,b) {
      return a * b;
  }

  var x = myfunction(5,6);
  // return value will end up in x

function addnumbers(a, b) {
    var c = a+b;
    return c;
}
document.write( addnumbers(40, 2) );

alert("do you really want to leave this page?");

alert("hello\nhow are you?");

var user = prompt("please enter ypur name");
alert(user);

var result = confirm ("do you really wnat to leave this page?");
if (result == true) {
    alert("thanks for visiting");
}
else {
    alert("thanks for staying with us");
}

function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
    
    console.log(convert(amount, rate));
    }
function convert(amount,rate){
	return amount * rate 
}

var person = {
    name: "John", age: 31, 
    favColor: "green", height: 183
   };

   objectName.propertyName
   //or
   objectName['propertyName']

var person = {
    name: "john", age: 31,
    favcolor: "green" , height: 183
};
var x = person.age;
var y = person['age']

var course = {name: "JS", lessons: 41};
document.write(course.name.length);

objectName.methodName()

document.write("this is some text");

var person = {
    name: "John", age: 42, favColor: "green"
    };

function person(name, age, color) {
        this.name = name;
        this.age = age;
        this.favColor = color;
}

var p1 = new person("john", 42, "green");
var px = new person("amy", 21, "red");

document.write(p1.age); // outputs 42
document.write(p2.name); // outputs "amy"

function person (name, age) {
   this.name = name;
   this.age = age;
}
var john = new person("john", 25);
var james = new person("james", 21);

var John = {name: "John", age: 25};
var James = {name: "James", age: 21};

var John = {
    name: "John",
    age: 25
  };
  var James = {
    name: "James",
    age: 21
  };

document.write(john.age);

methodName = function() { code lines }

objectName.methodName()

function person(name, age) {
    this.name = name;
    this.age = age;
    this.changename = function (name) {
        this.name = name;
    }
}

var p = new person("david", 21);
p.changename("john");
// now p.name equals to"john"

function person(name, age) {
    this.name= name;  
    this.age = age;
    this.yearOfBirth = bornYear;
  }
  function bornYear() {
    return 2016 - this.age;
  }

function person(name, age) {
    this.name= name;
    this.age = age;
    this.year0fbirth = bornyear;
}
function bornyear() {
    return 2016 - this.age;
}

var p = new person("A", 22);
document.write(p.year0fbirth());

function Contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function (){
        var x = this.name
        var y = this.number 
        console.log(x+": "+y)
    }
 }                 

var a = new Contact("David", 12345);
var b = new Contact("Amy", 987654321)
a.print();
b.print();

var course1 ="HTML"; 
var course2 ="CSS"; 
var course3 ="JS"; 

var courses = new Array("HTML", "CSS", "JS"); 

var courses = new Array("HTML", "CSS", "JS"); 
var course = courses[0]; // HTML
courses[1] = "C++"; //Changes the second element 

var courses = new Array("html", "css","JS");
document.write(courses)[10];

var courses = new Array(3);
courses[0] = "Html";
courses[1] = "css";
courses[2] = "JS";

var courses = new Array();
courses[0] = "Html";
courses[1] = "css";
courses[2] = "JS";
courses[3] = "C++";

var courses = ["HTML", "CSS", "JS"];

Var courses = ["HTML", "CSS", "JS"];
document.write(courses.length);

var c1 = ["HTML", "CSS"];
var c1 = ["JS", "C++"];
Var courses = c1.concat(c2);

var person = []; //emty array
person["name"] = ["John"];
person["age"] = 46;
document.write(person["age"]);

document.write(math.PI);

var number = math.sqrt(4);
document.write(number);

var n = prompt("enter a number", "");
var answer = Math.sqrt(n);
alert("the square root of" + n + "is" + answer);

function myalert() {
    alert("hi");
}
setinvernal(myalert, 3000);

var d = new Date();
//d stores the current date and time

new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000); 

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);

var d = new Data();
var hours = d.getHours();
//hours is equal to the current hour

function printtime() {
    var d = new date();
    var hours = d.gerhours();
    var mins = d.germinutes();
    var secs = d.gerseconds();
    document.body.innerHTML = HOURS+":"+MINS+":"+secs;
}
Setinterval(printime, 1000);

function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here
    for(var i=0;i<=prices.length-1;i++){
        prices[i]=prices[i]+increase;
    }
    console.log(prices);
}

document.body.innerHTML = "Some text";

//finds element by id
document.getElementById(id) 

//finds elements by class name
document.getElementsByClassName(name) 

//finds elements by tag name
document.getElementsByTagName(name)

var elem = document.getElementById("demo");
elem.innerHTML = "Hello World!";
JS

var arr =  document.getElementsByClassName("demo");
//accessing the second element
arr[1].innerHTML = "Hi";

var node = document.createTextNode("Some new text");

var t = setInterval(move, 500);

// starting position
var pos = 0; 
//our box element
var box = document.getElementById("box");

function move() {
  pos += 1;
  box.style.left = pos+"px"; //px = pixels
}

var t = setInterval(move, 10);

function move() {
    if(pos >= 150) {
      clearInterval(t);
    }
    else {
      pos += 1;
      box.style.left = pos+"px";
    }
  }

  var pos = 0;
  //our box element
  var box = document.getElementById("box");
  var t = setInterval(move, 10);

  function move () {
      if(pos >= 150) {
          clearInterval(t);
      }
      else {
          pos += 1;
          box.style.left = pos+"px";
      }
  }
  var x = document.getElementById("demo");
  x.onclick = function () {
      document.body.innerHTML = Date();
  }

  window.onload ​= function() {

    ​//some code
  }

  element.addEventListener(event, function, useCapture);

  element.addEventListener("click", myFunction);
element.addEventListener("mouseover", myFunction);

function myFunction() {
  alert("Hello World!");
}

element.removeEventListener("mouseover", myFunction);

addEventListener(event, function, useCapture)

//Capturing propagation
elem1.addEventListener("click", myFunction, true); 

//Bubbling propagation
elem2.addEventListener("click", myFunction, false);

var images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
 ];
 JS

 var images = [
     "http://wwww.sololern.com/uploads/slider/1.jpg",
     "http://wwww.sololern.com/uploads/slider/2.jpg",
     "http://wwww.sololern.com/uploads/slider/3.jpg",
 ];
 var num= 0;

 function next() {
     var slider =
     document.getElementById("slider");
     num++;
     if(num >= images.length) {
         num = 0;
     }
     slider.src = images[num];
 }

 function prev() {
     var slider =
     document.getElementById("Slider");
     num--;
     if(num < 0) {
         num = images.length-1;
     }
     slider.src = images[num];
 }

 function validate() { 
     var n1 =
     document.getElementById("num1");
     var n1 =
     document.getElementById("num2");
     if(n1.value != "" n2.value != "") {
         if(n1.value == n2.value) {
             return true;
         }
     }
     alert("the values should be equal and not blank");
     return false;
 }

 var a = 10;
const b = 'hello';
let c = true;

if ( true) {
    let name = "jack";
}
alert(name); //generates an error

function vartest() { 
    var x = 1;
    if (true) {
        var x = 2; // same variable 
        console.log(x); //2
    }
    console.log(x); // 2
}

function lestest() {
    lef x = 1;
    if (true) {
   lef x = 2; // different variable
   console.log(x); //2
} 
console.log(x); //1
}

for (let i = 0; i < 3; i++) {
    document.write(i);
}

const a = "hello";
a = "bye" ;

let name = "david";
let msg = "welcome" + name +"!";
console.log(msg);

let name = "david";
let msg = "welcome ${name}!";
console.log(msg);

let a = 8;
let b = 34;
let msg = "the sum is ${a+b}";
console.log(msg);

let arr = [1, 2, 3];
for (lef k = 0; K < arr.length; k++) {
    console.log8arr[k]);
}

let obj = {a: 1, b: 2, c: 3};
for (lef v in obj) {
    console.log(v);
}

lef list = ["x", "y", "z"];
for (let val of list) {
    console.log(val);
}

for(lef ch of "hello") {
    console.log(ch);
}

function add (x, y)
 {
     var sum = x+Y;
     console.log(sum);
 }

 const add = (x, y) => {
     lef sum = x + y;
     console.log(sum);
 }

 const greet = x => " welcome" + x;

 const x () => alert("hi");

 var arr = [2, 3, 7, 8];

 arr.forEach(function(el) {
     console.log(el * 2);
 });

 const arr = [2, 3, 7, 8];

 arr.forEach(v => {
     console.log(v * 2);
 });

 function test(a, b = 3, c = 42) {
     return a + b + c;
 }
 console.log(test(5)); //50

 const test = (a, b = 3, c = 42) => {
    return a + b + c;
  }
  console.log(test(5)); //50 

  let tree = {
      height: 10,
      color: "green",
      grow() {
          this.height += 2;
      }
  };
  tree.grow();
  console.log(tree.heighr); //12

  let athlete = {
      height,
      health
  };

  var a = { x: 1, x: 2, x: 3, x: 4};

  let prop = "name";
  let id = "1234";
  let mobile = "08923";

  let user = {
      [prop]: "jack",
      ["user_${id]"]: "${mobile}"
  };

  var i = 0;
  var a = {
      ["foo" + ++i]: i,
      ["foo" + ++i]: i,
      ["foo" + ++i]: i
  };

  var param = " size";
  var config = {
      [param]: 12,
      ["mobile" +
    param.charAt(0).touppertcase() +
param.slice(1)]: 4
  };
  console.group(config.mobilesize);

  let person = {
      name: "jack",
      age: 18,
      sex: "male"
  };
  let student = {
      neme: "bob",
      age: 20,
      xp: "2"
  };
let newstudent = object.assingn({},
    person, student);

let person = {
    name: "jack",
    age:18
};

let newperson = person; // newperson references person
newperson.name = "bob";

console.log(person.name); // bob
console.log(nameperson.name); // bob

let person = {
    name: "jack",
    age: 18
};

let newperson = object.assign({},person);
newperson.name = "bob";

console.log(person.name); // Jack
console.log(newperson.name); //bob

let person = {
    name: "jack",
    age: 18
};

let newperson = object.assign({}, person,
    {name: "bob"});

let arr= ["1", "2", "3"];
let [one, two, whree] = arr;

console.log(one); //1
console.log(two); //2
console.log(three); //3

let a = () => {
    return [1, 3, 2];
};

let [one, , two] = a();

let a, b, c = 4, d = 8;
[a, b = 6] = [2]; // a = 2, b = 6

[c, d] = [d, c]; // c = 8, d = 4

lef obj = {h:100, s: true};
let {h, s} = obj;

console.log(h); // 100
console.log(s); // true

let a, b ;
({a, b} = {a: "hello ", b: "jack"});

console.log(a + b); // hello jack

let {a, b} = {a: "heññp ", b: "jack"};
console.log(a + b);
    
var o = {h: 42, s: true};
var {h: foo, s: bar} = 0;

//console.log(h); // error
console.log(foo); // 42

var obj = {id: 42, name: "jack"};

let {id = 10, age = 20} = obj;

console.log(id); //42
console.log(age); // 20

function containsall(arr) {
    for (let k = 1; k < arguments.length;
        k++) {
            let num = arguments[k];
            if ( arr.index0f(num) === -1) {
                return false;
            }
        }
        return true;
}
let x = [2, 4, 6, 7];
console.log(containsall(x, 2, 4, 7));
console.log(containsall(x, 6, 4, 9));

function containsall(arr, ...nums) {
    for (let num of nums) {
        if (arr.index0f(num) === -1) {
            return false;
        }
    }
    return true;
} 

function myfunction(w, x, y, z) {
    console.log(w + x + y + z);
}
var args = [1, 2, 3];
myfunction.apply(null, args.concat(4));

const myfunction = ( w, x, y, z) => {
    console.log(w + x + y + z);
};
let args = [1, 2, 3];
myfunction(...args, 4);

var datefields = [1970, 0, 1]; // 1 jam 1970
var date = new date(...datefields);
console.log(date);

var arr = ["one", "two", "five"];

arr.splice(2, 0, "three");
arr.splice(3, 0, "four");
console.log(arr);

let newarr = ["three", "four"];
let arr = ["one", "two" , ...newarr,"five"];
console.log(arr);

const obj1 = { foo: "bar", x: 42};
const obj2 = { foo: "baz", x: 5};

const cloned0bj = {...obj1}; // { foo:
"bar", x: 42} 
const merged0bj = {...obj1, ...obj2}; //
{ foo: "baz", x: 42, y: 5 }

const obj1 = { foo: "bar" , x: 42};
const obj1 = { foo: "baz" , x: 5};
const merge = (...objects) =>
({...bojects});

let merged0bj = merge(obj1, obj2);
// { 0: {foo: "bar , x: 42"}, 1: { foo:"baz, t: 5"}}

let marged0bj2 = merge({}, obj1, obj2);
    // { 0: {}, 1: { foo: "bar , x: 42"}, 2: { foo: "baz, y: 5"})

    class Rectangle {
        constructor(height, width) {
          this.height = height;
          this.width = width;
        }
      }

const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3);

var square = class rectangle {
    constrctor(height, width) {
        this.height = height;
        this.width = width;
   }
};

var square = class {
    constructor(heigth, width) {
        this.height = height;
        this.width = width;
    }
};

class rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.calcarea();
    }
    calcarea() {
        return this.height * this.width;
    }
}
const square = new rectangle(5, 5);
console.log(squeare.area); // 25

class rectangle {
    constructor(x, y) {
        this.x= x;
        this.y= y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return math.hypot(dx, dy);
    }
}
const p1 = new point(7, 2);
const p2 = new point(3, 8);

console.log(point.distance(p1, p2));

class animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " makes a noise,");
    }
}
class dog extends animal {
    speak() {
        console.log(this.name + " barks.");
    }
}

let dog = new dog("rex");
dog.speak();

class animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + "makes a noise.");
    }
}
}

class dog extends animal {
    speak() {
        super.speak(); //super
        console.log(this.name + "barks.");
    }
}

let map = new map([["k1", "v1"], ["k2","v2"]]);

console.log(map.size); // 2

let map = new map(); 

map.set("k1", "v1").set("k2", "v2");

console.log(mag.get("k1")); // v1

console.log(map.has("k2")); // true

for ( let kv of map.entries())
console.log(kv[0] + ":" + kv[1]);

let set = new set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

console.log(set.size); //5

let set = new set();

set.add(5).add(9).add(59).add(9);

console.log(set.values())

for(let v of set.values())
console.log(v);

setTimeout(function() {
    console.log("work 1");
    settimeout(function() {
        console.log("work 2");
    }, 1000);
}, 1000);
console.log("end");

new Promise(function(resolve, reject) {
    // Work
    if (success)
        resolve(result);
    else
        reject(Error("failure"));
}); 

function asyncFunc(Work) {
    return new Promise(function(resolve, reject) {
        if (work === "")
        reject(Error("Nothing"));
        setTimeout(function() {
            resolve(work);
        }, 1000);
    });
}

asyncFunc("work 1") // Task 1
.then(function(result) {
    console.log(result);
    return asyncFunc ("work 2"); // Task 2
}, function(error) {
    console.log(error);
})
.then (function(result) {
    console.log(error);
})
.then(function(result){
console.log(result);
}, function(error) {
    console.log(error);
});
console.log("End");

let myiterable0bj = {
    [symbol.iterator] : function* () {
        yield 1; yield 2; yield 3;
...
console.log([...myiterable0bj]);

function* idMarker() {
    let index = 0;
    while (index < 5)
    yield index++;
}

var gen =idMarker();
console.log(gen.next ().value);

const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
        const my_obj = {
            [Symbol.itearator]: function*() {
                for(let index of arr) {
                    yield '${index}';
        }
    }
};
  const all = [...my_obj]
            .map(i => parseInt(i, 10))
            .map(Math.sqrt)
            .filter((i) => i <5)
            .reduce((i, d) => i + d);
            console.log(all);
  
            // lib/math.js
export ​let sum = (x, y) => { return x + y; }

export ​let pi = 3.14


// app.j

import * ​as math from "lib/mat
"
console.log(`2p = + ${math.sum(math.pi, math.pi)


[4, 5, 1, 8, 2, 0].find(x => x >3);
[4, 5, 1, 8, 2, 0].findIndex(x => x >3);

console.log(Array(3 + 1). join("foo")); // foofoofoo
console.log("foo",repeat(3)); // foofoofoo

"sololearn".indexOf("Solo") ===0; // true
"sololearn".indexOf("Solo") === (4 - "Solo".length);
// true
"sololearn".indexOf("lole") !== -1; // true
"sololearn".indexOf("olo", 1) !== -1; //true
"sololearn".includes("olo", 2) !== -1;  // false

"sololearn".starsWitch("Solo", 0); // true
"sololearn".starsWitch("Solo", 4); // true
"sololearn".includes("lole"); // true
"sololearn".includes("olo", 1); // true
"sololearn".includes("olo", 2); // false

class Add {
    constructor(...words) {
        this.words = words;
    }
    //your code goes here
    print(){
        var y ="";
        for (x of this.words) {
          if(x == ","){
            x = "";
          }
          else{
            y += "$" + x;
          }
        }
  
        y = y + "$";
        console.log(y);
    }
  }
  
  var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
  var y = new Add("this", "is", "awesome");