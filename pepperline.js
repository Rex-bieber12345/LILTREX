function SimulateAns(){
//Riddle 1
const answerElement1 = document.querySelector(`.js-answer-input`);
const Answer1 = String(answerElement1.value);
const correctAnswer1 = `Staircase`;

if (Answer1 === correctAnswer1) {
alert('Your answer to riddle 1 is correct')
} else if (Answer1 !== correctAnswer1) {
alert('Your answer to riddle 1 is incorrect')
} 
document.querySelector(`.result`).innerHTML = `Your answer was <q>${Answer1}</q> , and the correct answer is ${correctAnswer1}.`;
answerElement1.value =``;


//Riddle 2
const answerElement2 = document.querySelector(`.js-answer-input-2`);
const Answer2 = String(answerElement2.value);
const correctAnswer2 = `Second`;

if (Answer2 === correctAnswer2) {
alert('Your answer to riddle 2 is correct')
} else if (Answer2 !== correctAnswer2) {
alert('Your answer to riddle 2 is incorrect')
} 
document.querySelector(`.result01`).innerHTML = `Your answer was <q>${Answer2}</q> , and the correct answer is ${correctAnswer2}.`;

answerElement2.value =``;



//Riddle 3
const answerElement3 = document.querySelector(`.js-answer-input-3`);
const Answer3 = String(answerElement3.value);
const correctAnswer3 = `Eleven`;

if (Answer3 === correctAnswer3) {
alert('Your answer to riddle 3 is correct')
} else if (Answer3 !== correctAnswer3) {
alert('Your answer to riddle 3 is incorrect')
} 
document.querySelector(`.result02`).innerHTML = `Your answer was <q>${Answer3}</q> , and the correct answer is ${correctAnswer3}.`;

answerElement3.value =``;


//Riddle 4
const answerElement4 = document.querySelector(`.js-answer-input-4`);
const Answer4 = String(answerElement4.value);
const correctAnswer4 = `Coin`;

if (Answer4 === correctAnswer4) {
alert('Your answer to riddle 4 is correct')
} else if (Answer4 !== correctAnswer4) {
alert('Your answer to riddle 4 is incorrect')
} 
document.querySelector(`.result03`).innerHTML = `Your answer was <q>${Answer4}</q> , and the correct answer is ${correctAnswer4}.`;

answerElement4.value =``;



//Riddle 5
const answerElement5 = document.querySelector(`.js-answer-input-5`);
const Answer5 = String(answerElement5.value);
const correctAnswer5 = `Age`;

if (Answer5 === correctAnswer5) {
alert('Your answer to riddle 5 is correct')
} else if (Answer5 !== correctAnswer5) {
alert('Your answer to riddle 5 is incorrect')
} 
document.querySelector(`.result04`).innerHTML = `Your answer was <q>${Answer5}</q> , and the correct answer is ${correctAnswer5}.`;

answerElement5.value =``;

//Riddle 6
const answerElement6 = document.querySelector(`.js-answer-input-6`);
const Answer6 = String(answerElement6.value);
const correctAnswer6 = `Eight`;
const correctAnswer6b = `8`;

if (Answer6 === correctAnswer6) {
alert('Your answer to riddle 6 is correct')
} else if (Answer6 === correctAnswer6b) {
alert(`Your answer to riddle 6 is correct`)
}else if (Answer6 !== correctAnswer6) {
alert('Your answer to riddle 6 is incorrect')
} else if(Answer6 !== correctAnswer6b){
alert('Your answer to riddle 6 is incorrect')
} 

document.querySelector(`.result05`).innerHTML = `Your answer was <q>${Answer6}</q> , and the correct answer is ${correctAnswer6}.`;
answerElement6.value =``;

//Riddle 7
const answerElement7 = document.querySelector(`.js-answer-input-7`);
const Answer7 = String(answerElement7.value);
const correctAnswer7 = `Thirty-five`;
const correctAnswer7b = `35`;

if (Answer7 === correctAnswer7) {
alert('Your answer to riddle 7 is correct')
} else if (Answer7 === correctAnswer7b) {
alert('Your answer to riddle 7 is correct')        
}
else if (Answer7 !== correctAnswer7) {
alert('Your answer to riddle 7 is incorrect')
}else if(Answer7 !== correctAnswer7b){
alert('Your answer to riddle 7 is incorrect')
} 
document.querySelector(`.result06`).innerHTML = `Your answer was <q>${Answer7}</q> , and the correct answer is ${correctAnswer7}.`;
answerElement7.value =``;

//Riddle 8
const answerElement8 = document.querySelector(`.js-answer-input-8`);
const Answer8 = String(answerElement8.value);
const correctAnswer8 = `Moses never had an ark`;

if (Answer8 === correctAnswer8) {
alert('Your answer to riddle 8 is correct')
} else if (Answer8 !== correctAnswer8) {
alert('Your answer to riddle 8 is incorrect')
} 
document.querySelector(`.result07`).innerHTML = `Your answer was <q>${Answer8}</q> , and the correct answer is ${correctAnswer8}.`;

answerElement8.value =``;


//Riddle 9
const answerElement9 = document.querySelector(`.js-answer-input-9`);
const Answer9 = String(answerElement9.value);
const correctAnswer9 = `Because he was bald`;

if (Answer9 === correctAnswer9) {
alert('Your answer to riddle 9 is correct')
} else if (Answer9 !== correctAnswer9) {
alert('Your answer to riddle 9 is incorrect')
} 
document.querySelector(`.result08`).innerHTML = `Your answer was <q>${Answer9}</q> , and the correct answer is ${correctAnswer9}.`;

answerElement9.value =``;


//Riddle 10
const answerElement10 = document.querySelector(`.js-answer-input-10`);
const Answer10 = String(answerElement10.value);
const correctAnswer10 = `The letter E`;
const correctAnswer10b = `The letter e`;

if (Answer10 === correctAnswer10) {
alert('Your answer to riddle 10 is correct')
} else if (Answer10 === correctAnswer10b) {
alert('Your answer to riddle 10 is correct')        
}
else if (Answer10 !== correctAnswer10b) {
alert('Your answer to riddle 10 is incorrect')      
}
else  if (Answer10 !== correctAnswer10) {
alert('Your answer to riddle 10 is incorrect')
} 
document.querySelector(`.result09`).innerHTML = `Your answer was <q>${Answer10}</q> , and the correct answer is ${correctAnswer10}.`;

answerElement10.value =``;
console.log(correctAnswer10 && correctAnswer10b|| correctAnswer10b && correctAnswer10)


document.querySelector(`.Answers`).style.display = "block"; 
document.querySelector(`.Simulator`).style.display = "none";

}

addEventListener('keydown', function (event) {
if (event.key === 'Enter') {
SimulateAns();
}
});
