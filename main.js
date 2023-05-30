const wordsTextarea = document.querySelector(".word-counter-container .words");
const countBtn = document.querySelector(".word-counter-container .count-btn");
const wordCount = document.querySelector(
  ".word-counter-container .word-count span"
);

const countWords = () => {
  let words = wordsTextarea.value;
  let wordsTrimmed = words.replace(/\s+/g, " ").trim();
  const chars ={};
  
  let splitWords = wordsTrimmed.split(" ");
   console.log(splitWords);
  for (let word of splitWords)
 {
if (!chars[word])
{
chars[word]=1;
}else{
 chars[word]++;

}
console.log(chars);
 }
  let numberOfWords = splitWords.length;
  if (splitWords[0] == "") {
    numberOfWords = 0;
  }

  wordCount.innerHTML = numberOfWords;
  chars.innerHTML= chars;

};

countBtn.addEventListener("click", countWords );
