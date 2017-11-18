

// set object of possible characters

   var han = {
        name: 'HanSolo',
        id: '#han',
        health: 120,
        attack: 8,
        enemyAttackBack: 8
    } 
    var darth = {
        name: 'DarthVader',
        id: '#darth',
        health: 100,
        attack: 14,
        enemyAttackBack: 5
    }
    var kylo = {
        name: 'KyloRen',
        id: 'kylo',
        health: 150,
        attack: 8,
        enemyAttackBack: 20
    }
    var emperor = {
        name: 'theEmperor',
        id: 'emperor',
        health: 180,
        attack: 7,
        enemyAttackBack: 20
    }


// variable to store the chosen character
var hero = {};
// will store the opponent
var defender = {};


var defenderObj = {};
var winCount = 0;
var heroAttack;
var defenderAttack;
var heroImg;
var defenderImg;
var yourCharSelected = false;
var yourDefSelected = false;

//sets han as hero and places all others in the defender's box
function hanHeroClick() {
	var hanHeroButton = $("#han");
	hanHeroButton.addClass(".hero");
	$("#hero").append(hanHeroButton);
	yourCharSelected = true;
	console.log("#han");
	//changes start here
	var darthDefenderBtn = $("#darth");
	darthDefenderBtn.addClass(".op");
	$("#avail").append(darthDefenderBtn);
	//
	var kyloDefenderBtn = $("#kylo");
	kyloDefenderBtn.addClass(".op");
	$("#avail").append(kyloDefenderBtn);
	//
	var emperorDefenderBtn = $("#emperor");
	emperorDefenderBtn.addClass(".op");
	$("#avail").append(emperorDefenderBtn);
	//document.getElementById('hero').innerHTML = hero.name;
}
//sets darth as hero and places all others in the defender's box
function darthHeroClick() {
	
	var darthHeroButton = $("#darth");
	darthHeroButton.addClass(".hero");
	$("#hero").append(darthHeroButton);
	//
	var kyloDefenderBtn = $("#kylo");
	kyloDefenderBtn.addClass(".op");
	$("#avail").append(kyloDefenderBtn);
	//
	var emperorDefenderBtn = $("#emperor");
	emperorDefenderBtn.addClass(".op");
	$("#avail").append(emperorDefenderBtn);
	//
	var hanDefenderButton = $("#han");
	hanDefenderButton.addClass(".op");
	$("#avail").append(hanDefenderButton);
	
}
//sets kylo as hero and places all others in the defender's box
function kyloHeroClick() {
	var kyloHeroButton = $("kylo");
	kyloHeroButton.addClass(".hero");
	$("#hero").append(kyloHeroButton);
	//
	var darthDefenderBtn = $("#darth");
	darthDefenderBtn.addClass(".op");
	$("#avail").append(darthDefenderBtn);
	//
	var emperorDefenderBtn = $("#emperor");
	emperorDefenderBtn.addClass(".op");
	$("#avail").append(emperorDefenderBtn);
	//
	var hanDefenderButton = $("#han");
	hanDefenderButton.addClass(".op");
	$("#avail").append(hanDefenderButton);
}
//sets emperor as hero and places all others in the defender's box
function emperorHeroClick() {
	var emperorHeroButton = $("#emperor");
	emperorHeroButton.addClass(".hero");
	$("#hero").append(emperorHeroButton);
	//
	var darthDefenderBtn = $("#darth");
	darthDefenderBtn.addClass(".op");
	$("#avail").append(darthDefenderBtn);
	//
	var kyloDefenderBtn = $("#kylo");
	kyloDefenderBtn.addClass(".op");
	$("#avail").append(kyloDefenderBtn);
	//
	var hanDefenderButton = $("#han");
	hanDefenderButton.addClass(".op");
	$("#avail").append(hanDefenderButton);
}

// sets han as defender 
function hanDefenderClick() {
	var hanDefenderBtn = $("#han");
	$("#defender").append(hanDefenderBtn);
}
// set darth as defender
function darthDefenderClick() {
	var darthDefenderBtn = $("#darth");
	$("#defender").append(darthDefenderBtn);
}
// set kylo as defender
function kyloDefenderClick() {
	var kyloDefenderBtn = $("#kylo");
	$("#defender").append(kyloDefenderBtn);
}
// set emperor as defender
function emperorDefenderClick() {
	var emperorDefenderBtn = $("#emperor");
	$("#defender").append(emperorDefenderBtn);
}

//makes sure the page is loaded before page functions
$(document).ready(function() {



	


// sets darth as the hero, or defender depending on the order of clicks
	$("#darth").on("click", function() {
		if (yourCharSelected == false) {
		darthHeroClick();
		hero = darth;
		yourCharSelected = true;
	} else if (yourDefSelected == false && hero != darth) {

		darthDefenderClick();
		defender = darth;
		yourDefSelected = true;
	}	
	});	
	
// sets han as the hero, or defender depending on the order of clicks
	$("#han").on("click", function() {	
		if (yourCharSelected == false) {
			//console.log(yourCharSelected);
			//console.log(han);
			hanHeroClick();
			hero = han;
			//yourCharSelected = true;
		} else if (yourDefSelected == false && hero != han){

			hanDefenderClick();
			defender = han;
			yourDefSelected = true;
		}
	});
// sets kylo as the hero, or defender depending on the order of clicks
	$("#kylo").on("click", function() {	
		if (yourCharSelected == false) {
			kyloHeroClick();
			hero = kylo;
			yourCharSelected = true;
		} else if (yourDefSelected == false && hero != kylo){
			kyloDefenderClick();
			defender = kylo;
			yourDefSelected = true;
		}
	});
// sets emperor as the hero, or defender depending on the order of clicks															//on click (as long as hero !== to onclick item)
	$("#emperor").on("click", function() {	
		if (yourCharSelected == false) {
			emperorHeroClick();
			hero = emperor;
			yourCharSelected = true;
		} else if (yourDefSelected == false && hero != emperor){
			emperorDefenderClick();
			defender = emperor;
			yourDefSelected = true;
		}
	});

// begins the attack.
	$("#attack").on("click", function() {	
		if (hero.health > 1) {
// reduces fighters health points each attack click
		defender.health = defender.health - hero.attack;
		hero.health = hero.health - defender.attack;
// increases the hero attack by 6 each attack
		hero.attack = hero.attack+6;
// displays health data
		$('#herohealth').html(hero.health)
		$('#defenderhealth').html(defender.health)
		document.getElementById('action').innerHTML = "You attacked " + defender.name + " for " + hero.attack + " points";
		document.getElementById('actionBack').innerHTML = defender.name + " hit back for " + defender.attack + " points";
		} else {
			//ends game if your health drops below 0
			alert('game over');
		}
	
		
	// allows you to pick a new defender to fight unless you have beat them all
		if (defender.health < 0 && winCount < 3) {
			yourDefSelected = false;
			winCount++;
		if (winCount == 1 || winCount == 2){
			alert("pick another opponent")
		}
		// you beat them all!!!! YOU WIN!!!!!
		if (winCount == 3) {
			alert('You Win!')
			 location.reload();
		}
	
	}
	
	});


});
	

