var Myname = "Kaley"; //my name//
var states = 50; //number of states//
var total = 5 + 4; //result of 5 and 4//
function sayHello() {
    var myText = "Hello World!";
    alert(myText);
}
sayHello();
function checkAge(name, age) {
    if (age < 21) {
        alert("sorry " + name + ", you aren't old enough to view this page!");
    }
}
checkAge("charles", 21);
checkAge("abby", 27);
checkAge("james", 18);
checkAge("john", 17);
checkAge();
var veggies = ['Broccoli', 'Cabbage', 'Lettuce', 'Radish'];
for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}
var pet = {
    name: 'Simon',
    breed: 'Tabby'
};
console.log(pet);
checkAge("martha", 22);
checkAge("jacob", 25);
checkAge("hunter", 23);
checkAge("marry", 17);
checkAge("margaret", 12);
checkAge();
var getLength = "Hello World";
var Number = (getLength.length);
if (Number % 2 == 0) {
    console.log("The world is nice and even!.");
}
else {
    console.log("The world is an odd place!.");
}
function calcFinalScore(score, penalties) {
    return score - penalties;
}
//calcFinalScore(5,2);
//calcFinalScore(20,0)
//console.log(calcFinalScore)
