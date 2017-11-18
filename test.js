



//    var han = {
//         name: 'HanSolo',
//         id: '#han',
//         health: 120,
//         attack: 8,
//         enemyAttackBack: 8
//     } 
//     var darth = {
//         name: 'DarthVader',
//         id: '#darth',
//         health: 100,
//         attack: 14,
//         enemyAttackBack: 5
//     }
//     var kylo = {
//         name: 'KyloRen',
//         id: 'kylo',
//         health: 150,
//         attack: 8,
//         enemyAttackBack: 20
//     }
//     var emperor = {
//         name: 'theEmperor',
//         id: 'emperor',
//         health: 180,
//         attack: 7,
//         enemyAttackBack: 20
//     }


// // variable to store the chosen character
// var hero = {};
// // will store the opponent
// var defender = {};


// var defenderObj = {};
// var winCount = 0;
// var heroAttack;
// var defenderAttack;
// var heroImg;
// var defenderImg;
// var yourCharSelected = false;
// var yourDefSelected = false;


// function hanHeroClick() {
// 	var hanHeroButton = $("#han");
// 	hanHeroButton.addClass(".hero");
// 	$("#hero").append(hanHeroButton);
// 	yourCharSelected = true;
// 	console.log("#han");
// 	//changes start here
// 	var darthDefenderBtn = $("#darth");
// 	darthDefenderBtn.addClass(".op");
// 	$("#avail").append(darthDefenderBtn);
// 	//
// 	var kyloDefenderBtn = $("#kylo");
// 	kyloDefenderBtn.addClass(".op");
// 	$("#avail").append(kyloDefenderBtn);
// 	//
// 	var emperorDefenderBtn = $("#emperor");
// 	emperorDefenderBtn.addClass(".op");
// 	$("#avail").append(emperorDefenderBtn);
// 	//document.getElementById('hero').innerHTML = hero.name;
// }
// function darthHeroClick() {
	
// 	var darthHeroButton = $("#darth");
// 	darthHeroButton.addClass(".hero");
// 	$("#hero").append(darthHeroButton);
// 	//
// 	var kyloDefenderBtn = $("#kylo");
// 	kyloDefenderBtn.addClass(".op");
// 	$("#avail").append(kyloDefenderBtn);
// 	//
// 	var emperorDefenderBtn = $("#emperor");
// 	emperorDefenderBtn.addClass(".op");
// 	$("#avail").append(emperorDefenderBtn);
// 	//
// 	var hanDefenderButton = $("#han");
// 	hanDefenderButton.addClass(".op");
// 	$("#avail").append(hanDefenderButton);
	
// }
// function kyloHeroClick() {
// 	var kyloHeroButton = $("kylo");
// 	kyloHeroButton.addClass(".hero");
// 	$("#hero").append(kyloHeroButton);
// 	//
// 	var darthDefenderBtn = $("#darth");
// 	darthDefenderBtn.addClass(".op");
// 	$("#avail").append(darthDefenderBtn);
// 	//
// 	var emperorDefenderBtn = $("#emperor");
// 	emperorDefenderBtn.addClass(".op");
// 	$("#avail").append(emperorDefenderBtn);
// 	//
// 	var hanDefenderButton = $("#han");
// 	hanDefenderButton.addClass(".op");
// 	$("#avail").append(hanDefenderButton);
// }
// function emperorHeroClick() {
// 	var emperorHeroButton = $("#emperor");
// 	emperorHeroButton.addClass(".hero");
// 	$("#hero").append(emperorHeroButton);
// 	//
// 	var darthDefenderBtn = $("#darth");
// 	darthDefenderBtn.addClass(".op");
// 	$("#avail").append(darthDefenderBtn);
// 	//
// 	var kyloDefenderBtn = $("#kylo");
// 	kyloDefenderBtn.addClass(".op");
// 	$("#avail").append(kyloDefenderBtn);
// 	//
// 	var hanDefenderButton = $("#han");
// 	hanDefenderButton.addClass(".op");
// 	$("#avail").append(hanDefenderButton);
// }


// function hanDefenderClick() {
// 	var hanDefenderBtn = $("#han");
// 	$("#defender").append(hanDefenderBtn);
// }
// function darthDefenderClick() {
// 	var darthDefenderBtn = $("#darth");
// 	$("#defender").append(darthDefenderBtn);
// }
// function kyloDefenderClick() {
// 	var kyloDefenderBtn = $("#kylo");
// 	$("#defender").append(kyloDefenderBtn);
// }
// function emperorDefenderClick() {
// 	var emperorDefenderBtn = $("#emperor");
// 	$("#defender").append(emperorDefenderBtn);
// }


// $(document).ready(function() {



	



// 	$("#darth").on("click", function() {
// 		if (yourCharSelected == false) {
// 		darthHeroClick();
// 		hero = darth;
// 		yourCharSelected = true;
// 	} else if (yourDefSelected == false && hero != darth) {

// 		darthDefenderClick();
// 		defender = darth;
// 		yourDefSelected = true;
// 	}	
// 	});	
	

// 	$("#han").on("click", function() {	
// 		if (yourCharSelected == false) {
// 			//console.log(yourCharSelected);
// 			//console.log(han);
// 			hanHeroClick();
// 			hero = han;
// 			//yourCharSelected = true;
// 		} else if (yourDefSelected == false && hero != han){

// 			hanDefenderClick();
// 			defender = han;
// 			yourDefSelected = true;
// 		}
// 	});

// 	$("#kylo").on("click", function() {	
// 		if (yourCharSelected == false) {
// 			kyloHeroClick();
// 			hero = kylo;
// 			yourCharSelected = true;
// 		} else if (yourDefSelected == false && hero != kylo){
// 			kyloDefenderClick();
// 			defender = kylo;
// 			yourDefSelected = true;
// 		}
// 	});
// 																	//on click (as long as hero !== to onclick item)
// 	$("#emperor").on("click", function() {	
// 		if (yourCharSelected == false) {
// 			emperorHeroClick();
// 			hero = emperor;
// 			yourCharSelected = true;
// 		} else if (yourDefSelected == false && hero != emperor){
// 			emperorDefenderClick();
// 			defender = emperor;
// 			yourDefSelected = true;
// 		}
// 	});
// // var heroHealth = hero.health;
// // 		var defenderHealth  = defender.health;

// 	$("#attack").on("click", function() {	
// 		if (hero.health > 1) {

// 		defender.health = defender.health - hero.attack;
// 		hero.health = hero.health - defender.attack;
// 		hero.attack = hero.attack+6;

// 		$('#herohealth').html(hero.health)
// 		$('#defenderhealth').html(defender.health)
// 		console.log(hero.attack + "attack");

		
// 		console.log(defender.name);
// 		console.log(defender.health);
// 		console.log(hero.name);
// 		console.log(hero.health);
// 		document.getElementById('action').innerHTML = "You attacked " + defender.name + " for " + hero.attack + " points";
// 		document.getElementById('actionBack').innerHTML = defender.name + " hit back for " + defender.attack + " points";
// 		} else {
// 			alert('game over');
// 		}
	
		
	
// 		if (defender.health < 0 && winCount < 3) {
// 			yourDefSelected = false;
// 			winCount++;
// 		if (winCount == 1 || winCount == 2){
// 			alert("pick another opponent")
// 		}
// 		if (winCount == 3) {
// 			alert('You Win!')
// 			 location.reload();
// 		}
	
// 	}
	
// 	});


// });
	

