'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.addEventListener(
  'click',
  ()=>{
    const userName = userNameInput.value;
    if(userName.length===0){
      return;
    }
    resultDivision.innerText='';
    const heading= document.createElement('h3');
    heading.innerText='診断結果';
    resultDivision.appendChild(heading);

    const paragraph= document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText= result;
    resultDivision.appendChild(paragraph);
  });

const answers = [
  '###userName###に向いている職業は勇者です。最大の武器は勇気です。',
  '###userName###に向いている職業は戦士です。最大の武器は腕力です。',
  '###userName###に向いている職業は魔法使いです。最大の武器は魔術です。',
  '###userName###に向いている職業は賢者です。最大の武器は知恵です。',
  '###userName###に向いている職業は商人です。最大の武器は道具に関する知識です。',
  '###userName###に向いている職業は武闘家です。最大の武器は己の拳です。'

];

function assessment(userName){
  let sumOfCharCode = 0;
  for(let i = 0; i< userName.length; i++){
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }
  const index = sumOfCharCode % answers.length;
  let result = answers[index];
  result = result.replaceAll('###userName###', userName);
  return result;
}

console.log(assessment('太郎'));