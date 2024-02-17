console.log('utility here');


function hideElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function showElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


// function getRandomAlphabet() {
//     // get a random alphabet
//     const alphabetString = 'abcdefghhijlmnopqrstuvwxyz';
//     const alphabets = lphabetString.split('');
//     // console.log(alphabet)
//     // get a index between 0-25
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
//     const alphabet =alphabetString [index];
//     return alphabet;
// }

function getRandomAlphabet() {
    // get a alphabet array creat or spilit
    const alphabetString = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //get a index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);
    const alphabet = alphabetString[index];
    // console.log(alphabet, index);
    return alphabet;
}

function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}