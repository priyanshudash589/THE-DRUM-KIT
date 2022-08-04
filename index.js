
//we are adding event to the targeted attribute*/




document.querySelectorAll("button")[0].addEventListener("click", function(){
    var audio0 = new Audio('./sounds/tom-1.mp3')
    audio0.play()
});


// function handleClick(){
//     var audio0 = new Audio('./sounds/tom-1.mp3')

//     audio0.play();
// }




/*
the above code can also be written as :-

document.querrySelector("button").addEventListener("click", function(){
    alert("i got clicked");
})

here we dont need the name of the function and it decreases the lenght of the program. */






document.querySelectorAll("button")[1].addEventListener("click", function(){
    var audio1 = new Audio('./sounds/tom-2.mp3')
       audio1.play();
});

document.querySelectorAll("button")[2].addEventListener("click", function(){
    var audio2 = new Audio('./sounds/tom-3.mp3')
    audio2.play();
});

document.querySelectorAll("button")[3].addEventListener("click", function(){
    var audio3 = new Audio('./sounds/tom-4.mp3')
     audio3.play();
});

document.querySelectorAll("button")[4].addEventListener("click", function(){
    var audio4 = new Audio('./sounds/snare.mp3')
    audio4.play(); 
});

document.querySelectorAll("button")[5].addEventListener("click", function(){
    var audio5 = new Audio('./sounds/crash.mp3')
     audio5.play();
});

document.querySelectorAll("button")[6].addEventListener("click", function(){
    var audio6 = new Audio('./sounds/kick-bass.mp3')
     audio6.play();
});


//lets add sound to the buttons*/




        // else if (i==1)
        // {
        //     var audio1 = new Audio('./sounds/tom-2.mp3')
        //     audio1.play();
        // }

        // else if(i==2)
        // {
        //     var audio2 = new Audio('./sounds/tom-3.mp3')
        //     audio2.play();
        // }
        // else if(i==3)
        // {
        //     var audio3 = new Audio('./sounds/tom-4.mp3')
        //     audio3.play();
        // }
        // else if (i==4)
        // {
        //     var audio4 = new Audio('./sounds/snare.mp3')
        //     audio4.play();
        // }
        // else if (i==5)
        // {
        //     var audio5 = new Audio('./sounds/crash.mp3')
        //     audio5.play();
        // }
        // else
        // {
        //     var audio6 = new Audio('./sounds/kick-bass.mp3')
        //     audio6.play();
        // } 
        
    
  