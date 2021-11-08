let Myname:string = "Kaley"; //my name//
const states:number = 50; //number of states//
let total = 5 + 4; //result of 5 and 4//
function sayHello() {
    var myText = "Hello World!"
    alert(myText);
}

sayHello();

function checkAge(name:string, age:number) {
    
if (age<21){ alert("sorry " + name + ", you aren't old enough to view this page!"); }
}

checkAge("charles", 21);
    checkAge("abby", 27);
    checkAge("james", 18);
    checkAge("john", 17);



let veggies = ['Broccoli', 'Cabbage', 'Lettuce', 'Radish'];

for (let i=0; i < veggies.length; i++){
    console.log(veggies[i]);
}

let pet = {
    name: 'Simon',
    breed: 'Tabby',
}
    console.log(pet);

checkAge("martha", 22);
    checkAge("jacob", 25);
    checkAge("hunter", 23);
    checkAge("marry", 17);
    checkAge("margaret", 12);




let getLength = "Hello World";
let num = (getLength.length);
if (num % 2 ==0) {
    console.log("The world is nice and even!.");
}
else {
    console.log("The world is an odd place!.")
}

 function calcFinalScore(score:number, penalties:number){
     return score - penalties
 }   
 //calcFinalScore(5,2);
 //calcFinalScore(20,0)
 //console.log(calcFinalScore)