// when clicking on any crystal, the value of the crystal should be added to the previous result

// random number shown at top of page

// when a crystal is clicked, it will add a specific number of points to the score

// score is hidden

// when clicked, update player's score counter

// player wins if they match the random number

// player loses if they score above the random number

// game restarts on win or loss

// game reset means new target number + each of the four crystals has new hidden value

// show number of wins + losses

var targetNumber;
var wins = 0;
var losses = 0;
var previous = 0; 

// starts + restarts the game
var startRestart = function () {

// clears out values        
    $(".crystals").empty();

// image array    
    var images = [
        '../img/crystal_blue.png', 
        '../img/crystal_green.png', 
        '../img/crystal_orange.png', 
        '../img/crystal_red.png'];
    
// random number generated
// hoist from var random
    targetNumber = Math.floor(Math.random() * 101) + 19;
    
    console.log(targetNumber);

// random number display
    $("#targetNumber").html(targetNumber);    
    
// four separate crystals with random values
// to change number of crystals, modify the greater than value
    for (var i = 0; i < 4; i++){
        
// generating random number    
        var random =  Math.floor(Math.random() * 11) + 1;
        
        console.log(random);
        
// assigns random nunber each crystal + creats div for display        
        var crystal = $("<div>");
        
            crystal.attr({
                
            "class":'crystal',
                
            "numberRandom": random
        });
        
        // crystal.css({
        //     "background": ../img/crystal_blue.png
        // });

        $(".crystals").append(crystal);

            crystal.addClass('bg_' + i);
        
            console.log("check it");
    }
    
    $("#previous").html(previous);
}

// when page loads, this function runs
startRestart();


// clicking on crystal with set values
// this part was crummy - pass the DOM element + listen to '.crystal'
$(document).on('click', ".crystal", function (){
    
    var num = parseInt($(this).attr('numberRandom'));
    
// tracking the amount    
    previous += num;

// 
$("#previous").html(previous);    

// increases losses + resets previous    
    if(previous > targetNumber){
        
        losses++;
        
        $("#losses").html(losses); 
        
        alert("Busted!");
              
        previous = 0;
        
        startRestart();
    }
// increases wins + resets previous   
    else if(previous === targetNumber){
        
        wins++;
        
        $("#wins").html(wins);
        
        alert("Winner!");
        
        previous = 0;
        
        startRestart();
    }
    console.log(previous);
});
