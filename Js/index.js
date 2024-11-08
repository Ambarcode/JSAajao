//Javascript improves the user experience of the web page by converting it from a static page into an interactive one


//OR

//Javascript add behavior to a web pages
//converting static website to an interactive one

// console.log("Hello World");
// var naam='Ambar Kansal';
// console.log(naam);
                     
/*

*************Data Types in Javascript*****************

Six data types that are primitive
1. undefined : typeof instance ==="undefined"
2. Boolean : typeof instance ==="boolean"
3. Number : typeof instance ==="number"
4. String : typeof instance ==="string"
5. Bigint : typeof instance ==="bigint"
6. Symbol : typeof instance ==="symbol"


*/ 
//string
var myName ="Ambar";
//console.log(typeof(myName));

//number
var myAge=26;
//console.log(typeof(myAge));

var iAmAmbar=true;
//console.log(typeof(iAmAmbar));

//undefined -(Data type which is not defined)
console.log(typeof(ambar)); //here ambar is not defined

console.log(10+ "20"); //number + string ==> string
console.log(4-"5"); //bug 
console.log("Java "+ "Script");
console.log(" "+0);
console.log("ambar"-"kansal"); //Not a number
console.log(true +true); // In js 1 represents true
console.log(false-false+true);
console.log(false-true+true);


//Interview Question

//---------------ques-1 : null vs undefined--------------------


//null
var iAmUseless=null;
console.log(iAmUseless); //does not hold a significance


//undefined
var iAmStandBy;
console.log(iAmStandBy); //undefined is both data type and value

//type of null and undefined
//null is useless , how it's type is an object

console.log(typeof(null));

//type is undefined 
console.log(typeof(undefined));


//ques 2: ----------------What is Nan?-----------------------

//Nan is the property of the global object
//In other words , it is a variable in global scope
//The initials value of Nan is Not a number


var myPhoneNumber=919197934;
var myName="Ambar Kansal";

console.log(isNaN(myPhoneNumber));
console.log(isNaN(myName));

//what is the use of isNaN---> used to check whether the input is a Number or not

//to check whether the given input is a valid number type


//ques 3: ---------------Is NaN===NaN?--------------------

console.log(NaN===NaN);
console.log(Number.NaN===NaN);
console.log(isNaN(NaN));
console.log(Number.isNaN(NaN));
console.log(typeof(NaN));



/*
********* Expressions and Operators *****************
*/ 

console.log(5+20); //so 5+20 is an operator

//now , what is 3**3 
//It is a power operator
console.log(3**3);


//swap two numbers , without using third variable
var a=10;
var b=20;

a=a+b;
b=a-b;
a=a-b;

//now we'll look into functions 

var x=30 // It creates var as a global variable and attached it with the global object(Window)
//however in case of let , it is not attached with the window object . so it is a good practise.
m=90  //It also attach with window object
let n=90 // It does not attach with the window object 
function sum(a, b){  //remember var is not allowed in the parameter
    var total=a+b;
    console.log(x);
    console.log(m)
    console.log(n)
    s=90;
    return total
}


console.log(sum(10,20))
console.log(s)
// variable of var ke through access kra gya toh usko nearest function tk access kr skte ho
//without var , it will always be global


//we can also do 
function sum(a, b){
    return total=a+b;
}


//we can also create an anonymous function

var ans=function(a,b){
    return a+b;
}

//Now we'll see how to call an anonymous function

ans(10,20);  //we can't be able to invoke it like this
console.log(ans(10,20));


//************WELCOME TO ECMASCRIPT**********************

//Now It's time for modern javascript

//ES6 or Ecmascript 2015

//Let vs const vs var



var myName="Ambar Kansal";
console.log(myName);

myName="Ambar ji";
console.log(myName);


let myName="Ambar Kansal";
console.log(myName);

myName="Ambar ji";
console.log(myName);

const myName="Ambar Kansal";
console.log(myName);

myName="Ambar ji";
console.log(myName);


//As we can see in the case of const we'll not be able to change the value in future or after it has be initialised

//difference 2:- var -> function scope
            //let and const -> Block scope

//lets understand the scoping of all the three using an example

 function myInfo(){
    //var scoping
    var firstName="Ambar";
    console.log(firstName);

    if(true){
        var lastName="Kansal"

        console.log('Inner -'+ firstName);
        console.log('Inner -'+ lastName);
    }
    console.log(lastName)
 }

  myInfo();
  //as we can see due to function scoping , we can use var anywhere inside the function


  function myInfo(){
    //let scoping
    let firstName="Ambar";
    console.log(firstName);

    if(true){
        let lastName="Kansal"

        console.log('Inner -'+ firstName);
        console.log('Inner -'+ lastName);
    }
    console.log(lastName)
 }

 myInfo();
 //it will generate an error , as the scope of let is the block in which it is defined


 /**********Template literals(Template String)**************/ 

 //now lets understand it through an exapmle

 //for example we have to print the table of 10
  for(let num=1; num<=10;num++){
    let myNum=10;
    console.log(myNum +' * '+ num + " = "+ myNum*num);
  }

  //however in addition to es6 , we can write into much simpler way

  for(let num=1; num<=10;num++){
    let myNum=10;
    console.log(`${myNum} * ${num} = ${myNum*num}`);
  }

  /************** Default Parameters ****************/
  //what if we pass only one argument to the function having multiple parameters
  
  function mul(a, b){
    return a*b;
  }

  console.log(mul(10));

//It will give NaN as output

//that's why we use default parameters
function mul(a, b=10){
    return a*b;
  }

  console.log(mul(10,20));

/*********** FAT ARROR FUNCTION  */

//Note: we can't invoke the function before it is defined in this case

ans(10,20);

const ans=(a,b)=>{
    return a+b;
}


//we have to define it first , then invoking will occur
const ans=(a,b)=>{
    return a+b;
}

console.log(ans(10,20));


//we can also this
const ans=(a,b)=>{
    return (a=10)+(b=20);
}

console.log(ans());


//in case we have a single statement , we can so something like

const ans=()=> (a=10)+(b=20)   //we don't need to write return and curly brackets in case of single statement
console.log(ans());


// ***************** Arrays ************** 
 
   //we can store data of same or multiple types in an array
   
   //In javascript we have an Array class and arrays are the prototype of this class

   var myName=['Ambar', 90, 'Keerti'];
  //  console.log(myName[1]);
  //  console.log(myName.length);
   
   //Now we'll see for in vs for of loop
  //After ecma script , we have for in and for of loop to 

  var myName=['ambar' , 'akki' , 'ayush' ,'ankit'];
  for(let elem in myName){
    console.log(myName[elem]);
  }


  //as we can see in this case(for in) , it is printing indices 
  
  //But in case of for of loop , it will print elements, not indices
  var myName=['Ambar', 90, 'Keerti'];
  for(let elem of myName){
    console.log(elem)
  }

    // *****************Array.prototype.forEach()****************
  //we can also use Array.prototype.forEach() loop
  //we have to use call back function
  var myName=['Ambar', 90, 'Keerti'];
  // myName.forEach(function(element , index, array){
  //   console.log(`${element} ${index} ${array}\n`);
  // });

  myName.forEach((elem , index , array)=>{
    console.log(`${elem} ${index} ${array}\n`)
  })

  // Now a point to remember , in case of var , we can declare it multiple times , but it is true in case of let and const

  let newArr234=["Keerta" ,"Ram","Ak"];
  newArr234.forEach((elem , ind , arr)=>{
      console.log(`${elem}   ${ind} ${arr}`)
  }    
  )
  //now we'll see how to do the same using fat arrow function
  var myName=['Ambar', 90, 'Keerti'];
  myName.forEach((element, index , array)=>{
    console.log(`${element} index ${index} ${array}`);
  })

  // *****************Array.prototype.indexOf****************
  //return the first occurrence of the element in the array
  
  // parameter ~ element , fromIndex , toIndex
     var myName=['Ambar', 90, 'Keerti'];
     console.log(myName.indexOf('Keerti'));

// *****************Array.prototype.lastIndexOf****************
  //return the last occurrence of the element in the array(Backward Search)
  
  // parameter ~ element , fromIndex , toIndex
  var myName=['Ambar', 90, 'Keerti','Keerti'];
  console.log(myName.lastIndexOf('Keerti'));

  // *****************Array.prototype.includes****************
  //return the presence of the element in the array(Backward Search)
  
  // parameter ~ element , fromIndex , toIndex
  var myName=['Ambar', 90, 'Keerti','Keerti'];
  console.log(myName.includes('Keerti'));

  // ****************Array.prototypes.find **********************
  //arr.find(callback(element[,index[,array]])[,thisArg])
  //return the first occurrence of the found element
  //otherwise return undefined

  var prices=[2333,4500,500,100,3,456];

  const findNew=prices.find((currVal)=>{
    return currVal>500;
  })

  console.log(findNew);

  var myName=['Ambar', 90, 'Keerti','Keerti'];

  let dhundo=myName.find((param)=>{
        return param.length>=5
  }
  )
  
console.log(dhundo)


  //If element not found it will return undefined

   // ****************Array.prototypes.findIndex **********************
  //arr.findIndex(callback(element[,index[,array]])[,thisArg])
  //return the found element index in the array , if the following element satisfies the provided condition
  //otherwise return undefined

  var prices=[2333,4500,500,100,3,456];

  const find=prices.findIndex((currVal)=>{
    return currVal>8800;
  })

  console.log(find);

  //If element not found , it will return -1


  //Now we'll see the filter method
  // -----------------Array.prototype.filter()************************

  //Returns a new array containing all the elements of the calling
  //Array for which the provided filtering condition return true

  const price=[200,232,780,456,900];

  //price >700

  const ans=price.filter(prices=> {return prices>700;})
  console.log(ans);



//-----------Sorting An array
//returns the sorted array , default value is ascending , build upon converting the elements into string, then comparing their sequences of UTF-16 code unit window

const month=["Jan", "March", "December","June"];
console.log(month.sort());
console.log(month.sort(function(a, b) { //descending order
  return b.localeCompare(a);
}));

let thisArray=[3,4,5,6,78,44,5,6,77];
var maheena =['Jan', 'March','April','June','July'];
console.log(maheena.sort((a,b)=>{
   return b.localeCompare(a)
}))



//if numbers are sorted as string then 25 is greater than 100 as 2 is bigger than 1 , because of this sort method will produce incorrect result

const num=[10,10000,1,4,5,3456];
console.log(num.sort()); 
console.log(num.sort((a,b)=>a-b)); // to sort numerically




//--------------------Array.prototype.push()--------------------
//To add an element into array and return the new length of the array
//const 
const arr1234=[10,20,40];
var ans=arr1234.push(30);
console.log(arr1234);
console.log(ans);

//Now what if we have to add in the beginning  of the array
//-------------Array.prototype.unshift()-----------------

const newArr1234=[2,3,4,5];
newArr.unshift(1); //it will add 1 in the beginning of the array
console.log(newArr1234);



//-------------Array.prototype.pop()-------------------
//Remove the last element of the array and return the length
var nums=[0,1,2,3,4]
var cnt=nums.pop();

console.log(nums);
console.log(cnt);


//------------Array.prototype.shift()----------------------
//The shift method removes the first element from the array and returns the removed element


var nums=[1,2,3,4,5];
var ans=nums.shift();
console.log(ans);
console.log(nums);

//--------------Now we'll see Baap of all method********************
// ***************Array.prototype.splice()**************************
//Function: 
/*
Add or removes element from the array

1. Add dec at the end of the array
2. What is the return value of the splice method
3. update March to march
4. Delete June from an array

*/
var maheena =['Jan', 'March','April','June','July'];
const newMonth12=maheena.splice(4,0,"December");
console.log(newMonth12)
console.log(maheena);
var maheena =['Jan', 'March','April','June','July'];
//to add in end
const newMonth=maheena.splice(maheena.length, 0 , "December");
console.log(maheena);

//so what is the return value
//it will pass an empty array in case we are not delete anything and if we are deleting , it will store the deleted element in array and fill it in array and return it


//lets look into another example:


//Now how to update

var maheena =['Jan', 'March','April','June','July'];
const newMaheena=maheena.splice(1, 1, "march")
console.log(maheena);

//but we don't know the index  of value we want to delete , so we have to use a method which will return the index of value we want to return
const indexOfMonth=maheena.indexOf('March');

if(indexOfMonth!=-1){
  const updateMonth=maheena.splice(indexOfMonth, 1, 'march');
}
else{
  console.log("No Such data found");
}


//Now let's see MAP , REDUCE AND FILTER
//*********************** Array.prototype.map()**************************

//Returns a new array containing the results of calling a function on every element in this array

//let newArray=arr.map(callback(currentValue[,index[,array]]){
  //return element of new array, after executing something
  //}[, thisArg]);
  

  //map original array ko nhi chedta , new array return krta h jisme true or false hote h
  
  const array1=[1,4,9,16,25];
  //num>9

  let newAr99r=array1.map((currElem, index , array1)=>{
     return currElem>9;
  });

  console.log(newArr99);
  console.log(array1);


  const array2=[1,4,9,16,25];
  //num>9

  let newArr1=array2.filter((currElem, index , array1)=>{
     return currElem>9;
  });

  console.log(newArr1);
  console.log(array2);

  //As u can see map will return answer in form of boolean array whereas filter return the original element , and map is used to perform some operation on the array and filer is used in case where we have to apply some condition
  //Map is specially used for chaining

  //Another example

  const arr999=[6,5,4,3,2];

  let newArr=arr999.map((currElem , index , arr)=>{
    return `Index no = ${index} and the value ${currElem} belong to ${arr} `
  });

  

  console.log(newArr);


  //Interview Question=> What is the difference between map and foreach function

  //1. The first difference is the returning value, forEach() returns undefined whereas map() returns a new array with the transformed elements

  //2. Ability to chain with other methods: We can attach reduce(), sort(), filter() and so on after performing a map() method on a array
  //That's something we can't do with forEach() because , it returns an undefined

  
  //Program to return square root of an array
  let arr321=[25,36,49,64,81];

  let arrSqr=arr321.map((currElem)=> Math.sqrt(currElem));

  console.log(arrSqr);


  //Program : we have to multiply every element with 2 and return only those element which are greater than 10
//Now let's use the chaining method

let arr4=[25,36,49,64,81];
let arr2=arr4.map((currElem)=>{
  return 2*currElem;
}).filter((currElem)=> currElem>10);

var arr=[25,36,49,64,81];
let arr3=arr.map((elem)=>{
  return elem*3
})
console.log(arr3)
//

console.log(arr2);


//Now we'll see the reduce method
// flatten an array , means convert a 3D and 2D array into 1d array

//The Reduce method executes a reducer function (that you provide) on each element of the array, resulting in single output value

//The Reducer function takes four arguments
// 1. Accumulator
// 2.Current Value 
// 3. Current Index
// 4. Source Array


//Simply we use it , to get a single value as a result (It's widely used)
  let arr12345=[5,6,2];
  let sum=arr12345.reduce((accumulator, element , index , array)=>{
      accumulator+=element;
      return accumulator;
  })

  //Remember reduce method m index 1 se start hota h(Hint: debug it.)
console.log(sum)

//We can also provide a initial value
let arr123=[5,6,2];
let sum=arr123.reduce((accumulator, element , index , array)=>{
    accumulator+=element;
    return accumulator;
}, 7)

console.log(sum)

//Now we'll see how to convert 2d , 3d array into  1d array

var arr=[
  ['ak1', 'ak2'],
  ['ak3','ak4'],
  ['ak5','ak6']
]

var result=arr.reduce((acc, elem)=>{
  return acc.concat(elem)
})

console.log(result)


//however we can't perform this:

var arr=[
  ['ak1', 'ak2'],
  ['ak3','ak4'],
  ['ak5',['ak6','ak7']]
]

var result=arr.reduce((acc, elem)=>{
  return acc.concat(elem)
})

console.log(result)


/** **********STRINGS IN JAVASCRIPT********************** */
// You can use simple and double quotes
// Strings can be created as primitives
// from string literals , or as objects , using the String() constructor


let myName="Ambar Kansal"
let myCompanyName='Oracle'

let newName=new String("Ambar Kansal")
console.log(myName)
console.log(myCompanyName)
console.log(newName)


//Now let's check whether we know switch in js or not
// var ans='happy'

// switch(ans){
//   case 'bad' :  
//    console.log('Go baby')
//    break
//   case 'happy' :
//      console.log('Yeah Baby') 
//      break
//   case 'very Bad' : 
//   console.log('Do not come again baby')
//   break
//   default : console.log('You are not my baby')
// }


//Escape Character
let anySentence="We are the so-called \"Vikings\" from the north.";
console.log(anySentence)

//If you don't want to mess , simply use the alternative quotes

let anySentence1='We are the so called "Vikings" from the north';


//Finding a String in a String
//String.prototype.indexOf()
//Find the occurrence of specified text in a String
const myBioData="Hey I am Ak form LordVinGalaxy"
console.log(myBioData.indexOf('Ak'))
console.log(myBioData.indexOf("Ak",10))


//String.prototype.lastIndexOf()

const myBioData3="Hey I am Ak form LordVinGalaxy"
console.log(myBioData3.lastIndexOf('a', 7))


//Searching for a String in a String
//The search() Method searches a string for a specified value and returns the position of the match

const myBioData4="Hey Can U please find the word String in this String"
console.log(myBioData4.search('String'))

//The Search method cannot take the Second start position as an argument

//**********Extracting String Parts*************** */
//They are 3 methods for extracting a part of String

//slice(start , end)
//substring(start ,end)
//substr(start , length)

//The Slice() method
//Slice extract the part of a string and returns the extracted part in a new String
//Takes two parameter: start position , end position(end not included)
  
var str ='Apple , Banana , Kiwi'
console.log(str.slice(0,5))
console.log(str.slice(5)) // It will start from 5 and goes till end

//Now we'll see if we pass negative value in end
console.log(str.slice(0, -2)) // It will go till end and does not take last two param
console.log(str.slice(-2,-8)) //It will not work
//Ques: Display only 280 Characters of a String just like used in twitter
let myTweets='The ancient forest, shrouded in mystery and bathed in the golden light of the setting sun, was a place where time seemed to stand still, where every leaf and stone held secrets untold, and where the very air seemed to whisper stories of forgotten eras, of heroes and villains, of love and loss, and of battles fought and won long before the birth of the modern world, a world now driven by technology and progress, a world that had almost forgotten the simple joys of nature, the quiet peace of a forest glade, the soothing sound of a babbling brook, and the sight of a deer grazing peacefully in the dappled sunlight, untroubled by the cares and worries that plagued the human mind, a mind forever seeking more, forever striving for better, never satisfied with what is, always dreaming of what could be, and in this relentless pursuit, often missing the beauty of the present, the magic of the moment, the joy of simply being, a joy that the inhabitants of the ancient forest understood well, for they lived in harmony with their surroundings, taking only what they needed, giving back in return, respecting the delicate balance of life and death, growth and decay, a balance that was the very essence of the forest, the reason for its enduring strength, its timeless beauty, and its endless capacity for renewal, a renewal that was evident in the vibrant green of the leaves, the colorful blooms of the wildflowers, the playful antics of the squirrels and rabbits, and the majestic flight of the eagles and hawks that soared high above the treetops, their keen eyes ever watchful, their sharp talons ready to strike, their powerful wings carrying them effortlessly through the sky, a sky that was a deep, clear blue, dotted with fluffy white clouds, clouds that cast fleeting shadows on the forest floor, shadows that danced and shifted with the movement of the trees, trees that had stood for centuries, witnessing the passage of time, the changing of the seasons, the rise and fall of civilizations, trees that had seen it all, and yet remained, steadfast and strong, a testament to the resilience of nature, a reminder of the enduring power of life, a power that was evident in every aspect of the forest, from the smallest blade of grass to the tallest oak, from the tiniest insect to the largest predator, a power that was both awe-inspiring and humbling, a power that was, ultimately, the true magic of the ancient forest.'
console.log(myTweets.slice(0, 280))


//**********The substring() method************
//The only difference between substring and slice is that it does not accept negative indexes
//If we give negative value , the character will be counted from the 0th position

var str='Apple , banana , kiwi'
console.log(str.substring(0,5))
console.log(str.substring(8,-3)); // it'll ignore -3 and starts from 0 to 8


//************The substr() method */
//substr() is similar to slice()

//The difference is that second parameter specifies the length of the extracted part and it also does not accept negative value

var str='Apple , banana , kiwi'
console.log(str.substr(1,7))

//agr humme picche se data extract krna h , then it is best
console.log(str.substr(-4))



//*************Replacing String Content()**************** */
// String.prototype.replace(searchFor, replaceWith)
//Replaces a specified value with other value in a String

let myBioData5=`I am Ak the boss boss`

let replaceData=myBioData5.replace('boss' , 'Super')
console.log(replaceData)

//It replace the first occurrence
//however it does not modify the original String

//Points to remember
//1. The replace() method does not change the String , it is called on .It returns a new String
//2. By default the replace method replaces only the first match
//3. By default the replace method is case sensitive.
//Writing BOSS (with upper case) will not work



//Extracting String Characters
//There are 3 methods for extracting String Characters:

//charAt(position)
//charCodeAt(position)
//Property access [ ]


//*******The CharAt() method */
//returns a character at specified position

let nameExample='Ambar';
console.log(nameExample.charAt(0))

//**********The charCodeAt() method */
//The charCodeAt() method returns the unicode of the character at a specified index in a String
//The method returns a UTF-16 code
//(an integer between 0 and 65535)
//It has 88 bit code units
var str="Hello World";
console.log(str.charCodeAt(0))

//returns Nan if not provided a number value



//**********Property Access */
//EcmaScript 5 (2009) allows property access[ ] on Strings

var str="Hello World"
console.log(str[8])  //we can access like an array


//************The Concat() method */
//To concat two strings

let fname='Ambar '
let lname='Kansal'

let fullName=fname.concat(lname)
console.log(fullName)

//we can also do like
console.log(fname.concat(" ",lname))


//**************String.trim()*************888
//The trim method removes whiteSpaces from both the part of the String

var str="              Hello World!            " 
console.log(str.trim())  //only from starting and end


//Converting String into array
//***********A String can be converted into an Array with the help of Split() method   */
// Split method()

var txt='a , b , c , d, e , f , g'
console.log(txt.split(','))
console.log(txt.split(" ")) 


//*************Date and Time in JS******************8888

//Javascript date objects represent a single moment in time in a platform -independent format.
//Date objects contain a number that represents milliseconds since 1 january 1970 UTC


//Creating Date Objects
//There are 4 ways to create a new Date object

// new Date()
// new Date(year , month , day , hours , minutes , seconds , milliseconds)
// //it takes 7 arguments

// new Date(milliseconds)
// //we cannot avoid month selection

// new Date(date string)




//new Date()
//Date objects are created with the new Date() constructor


let currDate=new Date()
console.log(currDate)


// console.log(new Date());

//Now we'll see what .toLocaleString() does
console.log(new Date().toLocaleString)












