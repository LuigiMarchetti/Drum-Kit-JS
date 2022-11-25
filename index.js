for (const element of document.querySelectorAll(".drum")) {

    element.addEventListener("click", () => {
        sound(element.innerHTML)
        buttonAnimation(element.innerHTML);
    })


    document.addEventListener("keydown", (e) =>{
    sound(e.key)
    buttonAnimation(e.key);
    })

}

function sound(key){
    let audio = null;
    switch (key) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3")
            audio.play();
            break;

        case "a":
            audio = new Audio("./sounds/tom-2.mp3")
            audio.play();
            break;

        case "s":
            audio = new Audio("./sounds/tom-3.mp3")
            audio.play();
            break;

        case "d":
            audio = new Audio("./sounds/tom-4.mp3")
            audio.play();
            break;

        case "j":
            audio = new Audio("./sounds/crash.mp3")
            audio.play();
            break;

        case "k":
            audio = new Audio("./sounds/kick-bass.mp3")
            audio.play();
            break;

        case "l":
            audio = new Audio("./sounds/snare.mp3")
            audio.play();
            break;
            
        default:
            console.log(key);

    }
}


function buttonAnimation(key){
    let activebutton = document.querySelector("." + key);
    activebutton.classList.add("pressed");
    setTimeout(() => {
        activebutton.classList.remove("pressed");
    }, 200);
}