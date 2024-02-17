console.log('game connected')

// function play(){
//     const homeSection=document.getElementById('home-section');
//     homeSection.classList.add('hidden');
//     console.log(homeSection)

//     const playGround=document.getElementById('playground');
//     playGround.classList.remove('hidden');
//     console.log(playGround)
// }

function continueGame() {
    const alphabet = getRandomAlphabet();
    console.log('your alpahbet', alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    // set background color
    setBackgroundColor(alphabet);
}

function play() {
    hideElement('home-section');
    showElement('playground');
    continueGame()

}