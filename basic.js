document.getElementById("countButton").onclick = function() {  
    // your code will go here ...  
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();  
// // This changes all the letter to lower case.  
    typedText = typedText.replace(/[^a-z'\s]+/g, "");  
// This gets rid of all the characters except letters, spaces, and apostrophes. 

let letterCounts = {};
for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];

    if (letterCounts[currentLetter] === undefined) {
        letterCounts[currentLetter] = 1;  
    } else {  
        letterCounts[currentLetter]++;  
    }
  
}

let wordCounts = {};
for (let i = 0; i < typedText; i++) {
    currentWord = typedText;

    if (wordCounts[currentWord] === undefined) {
        wordCounts[currentWord] = 1;  
    } else {  
        wordCounts[currentWord]++;  
    }
   
}





for (let letter in letterCounts) {  
    const span = document.createElement("span");  
    const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");  
    span.appendChild(textContent);  
    document.getElementById("lettersDiv").appendChild(span);  
    words = typedText.split(/\s/);
}

for (let word in wordCounts) {  
    const span = document.createElement("span");  
    const wordContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", ");  
    span.appendChild(wordContent);  
    document.getElementById("wordsDiv").appendChild(span);  
    words = typedText.split(/\s/);
}

}
