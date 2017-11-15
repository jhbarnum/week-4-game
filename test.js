


var characters = {
    han: {
        name: 'HanSolo',
        health: 120,
        attack: 8,
        enemyAttackBack: 8
    }, 
    darth: {
        name: 'DarthVader',
        health: 100,
        attack: 14,
        enemyAttackBack: 5
    }, 
    kylo: {
        name: 'KyloRen',
        health: 150,
        attack: 8,
        enemyAttackBack: 20
    }, 
    emperor: {
        name: 'theEmperor',
        health: 180,
        attack: 7,
        enemyAttackBack: 20
    }
};
console.log(characters.emperor.name);
// variable to store the chosen character
var hero = {};
// will store the opponent
var defender = {};

var defenderObj = {};
var heroHealth;
var defenderHealth;
var heroAttack;
var defenderAttack;
var heroImg;
var defenderImg;
var heropic = true;

//function hanHero() {
	//	$("#han").removeClass(".charimg").addClass(".hero");
	//	$("#hero").append("<img id='han' src='assets/images/hansolo.jpg'/>");
	//	$("#kylo").removeClass(".charimg").addClass(".enemiesAvail");
	//	$(".enemiesAvail").append("<img id='kylo' src='assets/images/kyloren.jpg'/>"); 
	//	$("#darth").removeClass(".charimg").addClass(".enemiesAvail");
	//	$(".enemiesAvail").append("<img id='darth' src='assets/images/darthvader.jpg'/>"); 
	//	$("#emporer").removeClass(".charimg").addClass(".enemiesAvail");
	//	$(".enemiesAvail").append("<img id='emperor' src='assets/images/theemperor.jpg'/>"); 
	//	}
$(document).ready(function() {
function hanHeroClick() {
	var hanHeroButton = $("<img id='han' src='assets/images/hansolo.jpg'/>");
	hanHeroButton.addClass(".hero");
	$("#hero").append(hanHeroButton);
}
function darthHeroClick() {
	var darthHeroButton = $("<img id='han' src='assets/images/darthvader.jpg'/>");
	hanHeroButton.addClass(".hero");
	$("#hero").append(hanHeroButton);
}
function hanDefenderClick() {
	var hanDefenderButton = $("<img id='han' src='assets/images/hansolo.jpg'/>");
	$("#defender").append(hanHeroButton);
}



if (heropic == true){

	$("#han").on("click", function() {
		hanHeroClick();
		$(".charimg").hide();

	});
	
	$("#darth").on("click", function() {
		darthHeroClick();
		$(".charimg").hide();

	});
	$("#han").on("click", function() {
		hanDefenderClick();
		

	});



	// $("#darth").on("click", function() {
	// 	$("#darth").removeClass(".charimg").addClass(".hero");
	// 	$("#hero").append("<img id='darth' src='assets/images/darthvader.jpg'/>");
	// 	$(".charimg").hide();
	// 	$("#kylo").removeClass(".charimg").addClass(".enemiesAvail");
	// 	$(".enemiesAvail").append("<img id='kylo' src='assets/images/kyloren.jpg'/>"); 
	// 	$("#han").removeClass(".charimg").addClass(".enemiesAvail");
	// 	$(".enemiesAvail").append("<img id='han' src='assets/images/hansolo.jpg'/>"); 
	// 	$("#emporer").removeClass(".charimg").addClass(".enemiesAvail");
	// 	$(".enemiesAvail").append("<img id='emperor' src='assets/images/theemperor.jpg'/>"); 
		
		
	// });
	$("#kylo").on("click", function() {
		$("#kylo").removeClass(".charimg").addClass(".hero");
		$("#hero").append("<img id='kylo' src='assets/images/kyloren.jpg'/>");
		$(".charimg").hide();
		$("#han").removeClass(".charimg").addClass(".enemiesAvail");
		$(".enemiesAvail").append("<img id='han' src='assets/images/hansolo.jpg'/>"); 
		$("#darth").removeClass(".charimg").addClass(".enemiesAvail");
		$(".enemiesAvail").append("<img id='darth' src='assets/images/darthvader.jpg'/>"); 
		$("#emporer").removeClass(".charimg").addClass(".enemiesAvail");
		$(".enemiesAvail").append("<img id='emperor' src='assets/images/theemperor.jpg'/>"); 
		
	});
	$("#emporer").on("click", function() {
		$("#han").removeClass(".charimg").addClass(".hero");
		$("#hero").append("<img id='emperor' src='assets/images/theemperor.jpg'/>");
		$(".charimg").hide();
		$("#kylo").removeClass(".charimg").addClass(".enemiesAvail");
		$(".enemiesAvail").append("<img id='kylo' src='assets/images/kyloren.jpg'/>"); 
		$("#darth").removeClass(".charimg").addClass(".enemiesAvail");
		$(".enemiesAvail").append("<img id='darth' src='assets/images/darthvader.jpg'/>"); 
		$("#han").removeClass(".charimg").addClass(".enemiesAvail");
		$(".enemiesAvail").append("<img id='han' src='assets/images/hansolo.jpg'/>"); 
		heropic = false;
	});
		
		console.log(heropic)
	}
else {
	$("#han").on("click", function() {
		//$("#han").removeClass(".enemiesAvail").addClass(".defender");
		$("#defender").append("<img id='han' src='assets/images/hansolo.jpg'/>");
	});
}
});



//function createDefenderList() {
 // $(".charimg").removeClass("charimg").addClass(".enemiesAvail");
 // $(".enemiesAvail").append($(".defenderImg"));

		//$("#hero").append("<img id='han' src='assets/images/hansolo.jpg'/>");
		//for (var i = 0; i < characters.length; i++) {
		//	var enemy1 = defenderObj[i];
			
		 
	//	$(".enemiesAvail").append("<img id='darth''kylo' assets/images/darthvader.jpg"); 
	//	$(".enemiesAvail").append("<img id='kylo' assets/images/kyloren.jpg");
	//	$(".enemiesAvail").append("<img id='han' src='assets/images/theemperor.jpg'/>");
	//	});
		 //puts the image into the hero div after click
      
	//$(".charimg#darth").on("click", function() {
	//	$("#hero").append("<img id='han' src='assets/images/darthvader.jpg'/>"); 
	//	$(".charimg").hide(); //puts the image into the hero div after click
    //  });
	//$(".charimg#kylo").on("click", function() {
	//	$("#hero").append("<img id='han' src='assets/images/kyloren.jpg'/>"); 
	//	$(".charimg").hide(); //puts the image into the hero div after click
    //  });
	//$(".charimg#emporer").on("click", function() {
	//	$("#hero").append("<img id='han' src='assets/images/theemperor.jpg'/>"); 
	//	$(".charimg").hide(); //puts the image into the hero div after click
    //  });

//}); 

//console.log(characters.theEmoporer.imageUrl)
    
//select a hero, all others are moved to the 'enemies' list


//cick Attack to begin fighting. Each hit removes health from your player and enemy.

//if your player's health points hit 0, you lose.

//if the enemy's health points hit 0 first, you play next enemy until there are no more.
