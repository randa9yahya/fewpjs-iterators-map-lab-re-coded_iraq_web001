const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }
const titleCased = tutorials.map(function(title){
return title.charAt(0).toUpperCase() + title.slice(1);
})



const titleCased = () => {
  return tutorials.map((ele) => {
    return ele
      .split(" ")
      .map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1))
      .join(" ");
  });
};

console.log(titleCased());
