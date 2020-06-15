document.getElementById("countButton").onclick = function() {  
    // your code will go here ...  
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();  
// // This changes all the letter to lower case.  
    typedText = typedText.replace(/[^a-z'\s]+/g, "");  
    words = typedText.split(/\s/);
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
for (let i = 0; i < words.length; i++) {
    currentWord = words [i]
    console.log(currentWord)

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
}


for (let word in wordCounts) {  
    const span = document.createElement("span");  
    let br = document.createElement("br"); 
    const wordContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", "); 
    
    span.appendChild(wordContent); 
    // br.appendChild(wordContent) ;
    document.getElementById("wordsDiv").appendChild(span);  
    document.getElementById("wordsDiv").appendChild(br);
}
}
