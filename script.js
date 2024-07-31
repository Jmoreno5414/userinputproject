let adlib = document.getElementsByClassName("adlib");
var adliblength = adlib.length;
let titleinput = document.getElementById("title_input");
let noun = document.getElementById("noun");
let verb = document.getElementById("verb");
let adjective = document.getElementById("adjective");
let submitBtn = document.getElementById("submit_button");
let maintitle = document.getElementById("main_title");
let finishedsent = document.getElementById("story_result");
let storycomplete = document.getElementById("story_result");


function newtitle() {
    let title = titleinput.value;
    let titleshown = title;
    maintitle.textContent = titleshown;
}
function sentence(event) {
    event.preventDefault(); 
    
    let nouninput = noun.value;
    let verbinput = verb.value; 
    let adjectiveinput = adjective.value;

    let story = "Last night I ate a " + nouninput + " and today I just had " + verbinput + ". What a " + adjectiveinput + " day!";
    
    storycomplete.textContent = story;
    
    for (i = 0; i < adliblength; i++) {
        adlib[i].style.display = "none";
    }
    submitBtn.style.display = "none";
}

titleinput.addEventListener("input", newtitle);


submitBtn.addEventListener("click", sentence);
