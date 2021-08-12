"use strict";

// No.	0	1	2	3	4
// 0	100	90	98	88	65
// 1	50	45	99	85	77
// 2	47	88	95	80	67
// 3	61	57	100	80	65
// 4	24	90	94	75	65
// 평균	45.5	81.25	97.2	81.6	67.8
// 학점	F	B	A	B	D

let scores = [[0,100,90,98,65],
[50,45,99,85,77],
[47,88,95,80,67],
[61,57,100,80,65],
[24,90,94,75,65]];

function solution(scores){
  let answer = '';
  let length = scores.length;

  for(let i=0; i<length; i++){
    let arr = [];
    let max = 0;
    let min = 100;
    for(let j=0; j<length; j++){
      arr.push(scores[j][i]);
      if(scores[j][i] > max) max = scores[j][i];
      if(scores[j][i] < min) min = scores[j][i];
    }

    let countMax = arr.filter(element=> max===element).length;
    let countMin = arr.filter(element=> min===element).length;

    if(scores[i][i] === max && countMax === 1) arr.splice(i, 1);
    else if(scores[i][i] === min && countMin === 1) arr.splice(i, 1);

    let mean = arr.reduce((a,b)=>a+b, 0) / arr.length;

    if(mean >= 90) answer += "A";
    else if(mean >= 80 && mean < 90) answer += "B";
    else if(mean >= 70 && mean < 80) answer += "C";
    else if(mean >= 60 && mean < 70) answer += "D";
    else answer += "F";
  }
  
  return answer;
}


console.log(solution(scores));
