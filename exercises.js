function octalToDecimal(stringNum) {
  let result = 0;
  let count = stringNum.length-1;
  for(let i =0; i< stringNum.length; i++){
    result+= stringNum[i] * (Math.pow(8,count))
    count--
  }
  return result
}

function anagram(word, arrOfWords) {
  return arrOfWords.filter(el => el.split('').sort().join('') === word.split('').sort().join(''));
}

function triangle(a, b, c) {
  return (a === b || b === c || a * b * c === 0) ? "invalid" :  (a===90 || b===90||c==90) ? "right" : a<=90 && b<=90 && c<=90 ? "acute" : a>=90 || b>=90||c>=90 ? "obtuse" : "what is a triangle";
}

function fridayThe13ths(year) {
  let counter = 0;
  for (let i = 1; i <= 12; i++) {
    let day = new Date(i + "/13/" + year);
    if (day.getDay() === 5) {
      counter++;
    }
  }
  return counter;

}

module.exports = {
  octalToDecimal,
  anagram,
  triangle,
  fridayThe13ths,
};
