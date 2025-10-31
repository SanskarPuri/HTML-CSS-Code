// let myAge=18;
// let humanDogRatio=7;
// let myDogAge=myAge*humanDogRatio;
// console.log(myDogAge);
let count=0;
let countEl=document.getElementById("count-el");
console.log(countEl);
function increment(){
    count=count+1;
    countEl.innerText=count;
}
function save(){
    console.log(count);
}
// let student={name: "Sanskar", age:18, isPass: true, cgpa: 7.8};
// for(let key in student){
//     console.log("key=", key, "value=",student[key]);
// }
// let output=`The cgpa of ${student.name} is ${student.cgpa}`;
// console.log(output);

//Print all even numbers from 0 to 100
// let counter=0;
// for(let i=0; i<=100; i++){
//     if(i%2==0){
//         console.log("Even number from 0 to 100 is=",i);
//         counter++;
//     }
// }
// console.log(counter);

//Guess the gamenumber
// let gameNum = 25;
// let userNum = prompt("Guess the game number (from 0 to 50): ");

// while (gameNum != userNum) {
//     console.log("Try Again!");
//     userNum = prompt("Guess the game number: ");
// }

// console.log("Congratulations, you guessed the right number!");
// let str="My name is Anthony Gonsalves.";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// str.charAt, str.replace(oldVal, newVal,) str.concat(str1), str.slice(from, end)

// generate input name to user name atart with@  by the length of name.
// let fullname=prompt("Enter your full name: ");
// let userName="@" + fullname + fullname.length;
// console.log("Your userName generated is: ",userName);