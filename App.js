// let keyA = document.querySelector("#key-A")

window.addEventListener("keydown", function (e) {
    const audioElement = this.document.querySelector(`audio[data-code="${e.code}"]`);
    const key = this.document.querySelector(`.key[data-code="${e.code}"]`);
    //console.log(audioElement);
    //console.log(key);
    if(!audioElement) return; //function stops
    audioElement.currentTime = 0; //audio reset 0
    audioElement.play();
    key.classList.add("playing");
    //remove
});
 function removeTransition(e) {
    console.log(e);
 }

const keys = document.querySelectorAll(".key");
//console.log(keys);
keys.forEach(key => key.addEventListener("transitioned", removeTransition()))



