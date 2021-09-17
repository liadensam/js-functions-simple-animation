//I did not use the eventListener, but if you go to HTML code, there is this <html lang="en" onclick="jump()"> above the head, so the onclick runs the jump function when you click.

let character = document.getElementById("character"); //creating variables, so we can access the character from the document by its id
let block = document.getElementById("block"); //creating variables, so we can access the block from the document by its id
let counter=0; //set counter to 0 at the beginning

//here we are adding the animation with the class animate to the character
/*when you click, the animation runs, it jumps, but you cannot add the same class twice so that is why we need to remove the class once we are done running the animation. So it jumps when we click but is not stuck. We set the timmer so the interval of one animation is 300ms and then when it is done it removes the animation. Now ehen we jump it will jump and jump and jump, it will add the class over and over again, so we only want to add the clas if it has not already been added (when you are clicking it is just jumping, jumping, jumping) this condition added than: if(character.classList == "animate"){return}*/

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}


/*We need to also solve the problem with detecting when they hit each other. This function runs every 10ms and checks where you lost or not. At first we are getting the top position of the character. parseInt means we just want to get a number and the position is set up in pixels. Then we get the left position of the block. Then we create a condition when we if these condition are met, the character hit the block, you lose. When the game is over, we want to stop the animation of the block so there is none. We reset the counter to zero after the game is finished. Start the animation of the block again. If you are good and the conditions are not met, it adds points to the counter and it counts the score. We need to divide and round the number as to get the whole number.*/
const checkHit = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);