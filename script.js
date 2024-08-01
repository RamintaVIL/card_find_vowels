const word = document.querySelector('.inputText');
const btn = document.querySelector(".btn");
const result = document.querySelector(".results");

btn.addEventListener("click", countVowel)

function countVowel() {
    // susirandame input teksto reiksme su .value.
    let wordVal = word.value.toLowerCase();
    // reikia tikslaus skaiciaus, kiek yra, pradedame nuo 0.
    let vowelCount = 0;

    for (let i = 0; i < wordVal.length; i++) {
        const letter = wordVal[i];

        if (letter.match(/([a,e,o,u, ])/)) {
            vowelCount++;
        }
    }
    result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`
}



