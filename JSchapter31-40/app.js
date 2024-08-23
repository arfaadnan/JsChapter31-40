// .....................Chapter31.......................
// Q#1
// var  dObj = new Date();
// Q#2
// var rightNow = new Date();
// var dStr = rightNow.toString();
// //  Q#3
// var d = new Date();
// var theDay = d.getDay();
// // Q#4
// var d = ["sun","mon","tue","wed","thur","fri","sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = d[theDay];
// alert("Today is " + theDay[d] + " (Index: " + nameOfToday+ ")");

// // Q#5

// var d = new Date();
// var year =d.getfullyear();
// var month = d.getMonth();
// var date = d.getDate();
// var day = d.getDay();
// var hours = d.getHours();
// var minutes = d.getMinutes();
// var seconds = d.getSeconds();
// var miiliSeconds = d.getMilliSeconds();
// var timeZoneOffset = d.timeZoneOffset();

// Q#06
// var later = new Date(2020,11,31);
// Q#7
// var dateobj = new Date(1992,1,2);
// Q#8
// alert (new Date().getTime()-newDate(1992,1,2).getTime());
// Q#9
// var date = new Date();
// date.setFullYear(2025);
// date.setFullYear(2025,11,2);

// Q#10
// function chnageDateToJnauary(changeDate){
//     date .setMonth(0);
//     return date;
// }
// var myDate= new Date(2025,11,3);
// var updatedDate=chnageDateToJnauary(myDate);
// console.log(updatedDate);
// Q#11
// function setDayOfWeek(date,targetDay){
//     var currentDay = date.getDay()
//     var daysToAdjust = (targetDay-currentDay+7)%7
//     date .setDate(date.getDay()+daysToAdjust)
//     return date

// }
// // Q#12
// function changeMinutes(date){
//     var newMinutes = parseInt(prompt("enter the value of minutes btw (0-59)"),10);
//     if(NaN (newMinutes ) || newMinutes <0 || newMinutes>59){
//         alert( "invalid input plz enter correct input btw 0-59")
//         return;
//     }
//     date.setMinutes(newMinutes);
//     return date;

// }


// var myDate = new Date();
// var updatedDate = changeMinutes(myDate)
// console.log(updatedDate);
// Q#13
// function addHoursToTime(hours , addhours){
//     var date = new Date(time)
//     date.sethours(date.getHours()+ addhours)
//     return date;
// }
// var originalTime = "2024-08-23T10:00:00";
// var addhours = 5;
// var newTime = addHoursToTime(originalTime , addhours);
// // console.log (newTime)

// // Q#14
// function calculateAge(birthdate){
//     var today = new Date();
//     var birthdate = new Date(birthdate);
//     var age = today.getFullYear()- birthdate. getFullYear();
//     var monthDiff = today.getMonth()-birthdate.getMonth();
//     if (monthDiff < 0 ||(monthDiff===0 && today.getDate() < birthdate.getDate()))
//         {age--;
//         }

// return age;}
// var birthdate = "1997-11-28";
// var age = calculateAge(birthdate);
// console.log("your age is"+" "+ age)

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<chapter # 35-37>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Q#1
// function greetUser(){
//     alert("Hello world");
// }
// // greetUser()

// Q#2
// function askName( firstName,lastName){
//     var userName= firstName +" "+ lastName;
//     alert("hello" +" "+ userName +" "+ "Good Morning")
// }
// var firstName = prompt("enter your firstName");
// var lastName = prompt("enter your lastName");
// askName(firstName,lastName)

// Q#3
// function userInput(firstuser , seconduser){
// return(firstuser,seconduser)
// }
// var firstuser = prompt("enter first user");
// var seconduser= prompt("enter second user")
// console.log(firstuser+" "+seconduser)
// Q#4
// function calculate(num1,opr,num2){
//     if(opr==="+"){
//         return(num1+num2)

//     }else if (opr==="-"){
//         return(num1-num2)
//     }else if (opr==="*"){
//         return(num1*num2)
//     }

// }
// var num1 = +prompt("enter num1")
// var operator = prompt("enter opr")
// var num2 = +prompt("enter num2")
// var result = calculate(num1,operator,num2)
// console.log(result)
// Q#5
// function square(number){
//     return number*number
// }
// var result = square(9)
// console.log(result)
// Q#6
// function factorial(number){
//     if (number===5||number===0){
//         return 5;
//     }else{
//         return number*factorial(-1)
//     }
// }
// var result= factorial(3)
// console.log(result)

// Q#7
// function countAndDisplay(start,end){
//     for (var i = 0; i<=end; i++)
//     {
//         document.write( i +"<br>")
//     }
// }
// var start = +prompt("enter first number")
// var end = +prompt("enter end number")
// countAndDisplay(start,end)

// Q#8
// function calculateHypotenous(base,perpendicular){
//     function calculateSquare(number){
//         return(number*number)
//     }
//     var baseSquare = calculateSquare(base);
//     var basePerpendicular = calculateSquare(perpendicular);
//     var hypotenousSquare= baseSquare+perpendicular;
//     var hypotenous = Math.sqrt(hypotenousSquare);
//     return(hypotenous)
// }
// var base = +prompt("enter base")
// var perpendicular=+prompt("enter perpendicular");
// var hypotenous=calculateHypotenous(base,perpendicular);
// console.log(hypotenous)

// Q#9
// function calculateHeightandWidth(width,height){
//     return width*height
// }
// var width = +prompt("enter width")
// var height = +prompt("enter height")
// var result = width*height;
// console.log(result)
// Q#10
// function calculateAverage(number)
// {
//     if(number.length===0)return 0
//     var sum = number.reduce((accumalator , currentValue )=>accumalator+currentValue,0)
//     var average = sum/number.length;
//     return average

// }
// var arr=[10,20,30,40,50,60,70,80]
// var average=calculateAverage(arr)
// console.log(average)
// Q#11
// function addNumbers(a,b){
//     return a+b
// }
// var result = addNumbers(7,9)
// console.log(result)

// Q#12
// function letterCount(word){
//     var count = {}
//     word=word.toLowerCase();
//     for (var char of word){
//         if (char >= "a" && char<="z")
//             count[char]= count[char]?count[char]+1:1;
//     }
//     return count
// }
// var word = "world";
// var result = letterCount(word);
// console.log(result)
// Q#13
// function setYearInDate(date,year){
// var newDate = new Date(date)
// newDate.setFullYear(year);
// return newDate

// }
// var originalDate = "2024-11-5"
// var updatedDate = setYearInDate(originalDate,2030)
// console.log(updatedDate)
// Q#14
// function calculateAge(dateOfBirth){
//     var today = new Date()
//     var birthdate = new Date(dateOfBirth);
//     var age = today.getFullYear() - birthdate.getFullYear();
//     var monthDiff = today.getMonth() - birthdate.getFullYear();
//     if (monthDiff < 0 ||(monthDiff===0 && today.getDate() < birthdate.getDate())){
//         age--
//     } 
//     return age
// }
// var birthDate = 1998-11-5;
// var age = calculateAge(birthDate);
// console.log(age)

// Q#15
// function isWordInArray(word,array){
//     word=word.toLowerCase()
//     return array.includes(word)
// }
// var arr =['zaid','haris','raza','abubakar','hassan','hussain','fatima'];
// var arrCheck = ["fatima"]
// var result = isWordInArray(arrCheck,arr)
// console.log(result)



// Q#16

// function repeatletter (letter){
//     return letter.repeat(10)
// }
// var letter = "a"
// var repeat = repeatletter(letter)
// console.log(repeat)

// Q#17
// function reverserr(arr){
//     return arr.reverse()
// }
// var arr = ["1","2","3","4","5"]
// var reverserr = reverserr(arr.slice())
// console.log(reverserr)


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,chapter #38,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// Q#1
// function localVariabledemonstrate(){
//     var localVariable="i am a local variable"
//     console.log(localVariable)
// }
// localVariabledemonstrate()
// Q#2
// var globalvariable = "i am a global variable"
// function globalVariableDemonstrate(){
// console.log(globalvariable)
// }
// globalVariableDemonstrate()

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,chapter#39-40,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// Q#1
// function performAction(value){
//     switch (value){
//         case "apple":
//         console.log("you choose an apple")
//         break;
//         case "banana":
//         console.log("you choose an banana")
//         break;
//         case "grape":
//         console.log("you choose an grape")
//         break;
//         case "pomegranate":
//         console.log("you choose an pomegranate")
//         break;
//         case "orange":
//         console.log("you choose an orange")
//         break;
//         case "mango":
//         console.log("you choose an mango")
//         break;
//         case "strawbeery":
//         console.log("you choose an starwbeery")
//         break;
//         default:
//         console.log("you chhose default")
//         break;



//     }
// }
// performAction(mango);
// performAction(orange);

// // Q#2
// function checkCity (cityName){
//     switch(cityName.toLowerCase()){
//         case 'new york':
//             alert('You are in New York!');
//             break;
//             case 'peshawar':
//             alert('You are in pesahwar!');
//             break;
//             case 'karachi':
//             alert('You are in karachi!');
//             break;
//             case 'sukkar':
//             alert('You are in sukkar!');
//             break;
//             case 'hyderabad':
//             alert('You are in hyderabad!');
//             break;
//             case 'quetta':
//             alert('You are in quetta!');
//             break;
//             case 'larkana':
//             alert('You are in larkana!');
//             break;
//             default:
//             alert('City not recognized. Please try again.');
//             break;

//     }
// }

// var userCity = prompt("enter city name");
// checkCity(userCity)

// ,,,,,,,,,,,,,,,,,,,,,,,the end ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,



































