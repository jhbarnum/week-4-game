


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
// $(".charimg").click(function(){
//         $(".charimg").each(function(){
//             alert($(this).text())
//         });
//     });

function hanHeroClick() {
	var hanHeroButton = $("#han");
	hanHeroButton.addClass(".hero");
	$("#hero").append(hanHeroButton);
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
}
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
function kyloHeroClick() {
	var kyloHeroButton = $("#kylo");
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

function hanDefenderClick() {
	var hanDefenderBtn = $("#han");
	$("#defender").append(hanDefenderBtn);
}
function darthDefenderClick() {
	var darthDefenderBtn = $("#darth");
	$("#defender").append(darthDefenderBtn);
}
function kyloDefenderClick() {
	var kyloDefenderBtn = $("#kylo");
	$("#defender").append(kyloDefenderBtn);
}
function emperorDefenderClick() {
	var emperorDefenderBtn = $("#emperor");
	$("#defender").append(emperorDefenderBtn);
}


$(document).ready(function() {



	$("#darth").on("click", function() {
		darthHeroClick();
		//$(".charimg").hide();
	});
	$("#han").on("click", function() {
		console.log("I worked");
		hanHeroClick();	
	});
	$("#kylo").on("click", function() {
		kyloHeroClick();	
	});
	$("#emperor").on("click", function() {
		emperorHeroClick();	
	});
}
for (var i = 0; i < 1; i++) {
	var clickCounter2 = i;
	$("#han").on("click", function() {
		console.log("hanDefenderClick");
		hanDefenderClick();	
	});
}

});
