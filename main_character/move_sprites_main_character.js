



var main_character = document.getElementById('main_character');
var BG = document.getElementById('BG');
var Stamina = document.getElementById('Stamina_bar');
var game = document.getElementById('Game');

var cadr_wight_right = 1250;
const cadr_height_right = 0;
var cadr_wight_left = 1100;
const cadr_height_left = 0;

var cadr_wight_stay_right = 1250;
var cadr_wight_stay_left = 350;
const cadr_height_stay = 150;

var cadr_charge_wight_right = 1250;
const cadr_charge_height_right = 300;
var cadr_charge_wight_left = 1000;
const cadr_charge_height_left = 300;

var	Xposition = 0;
var side = 1;
var stay_player = 1;

var cadr_wight_right_sheld = 2150;
var cadr_wight_left_sheld = 200;
const cadr_sheld_height = 150;

var cadr_hit_width_right = 1250;
var cadr_hit_width_left = 1100;
const cadr_hit_height = 450;

var BG_Xposition = 0;

var Stamina = document.getElementById('Stamina_bar');
var which_fun = 0;

var Couldness = 1;


//////////////////////////////////ENEMY///////////////////////////////////

var enemy = document.getElementById('enemy');
var enemy_health_bar = document.getElementById('Health_of_enemy');
var spear = document.getElementById('spear');

var enemy_position = 400;
var enemy_side = 1;
var stay_enemy = 1;

var enemy_stay_right_X = 1250;
var enemy_stay_left_X = 1100;
const enemy_stay_Y = 150;

var enemy_run_right_X = 1250;
var enemy_run_left_X = 1100;
const enemy_run_Y = 0;

var enemy_atack_with_spear_right_X = 1250;
var enemy_atack_with_spear_left_X = 1100;
const enemy_atack_with_spear_Y = 300;

var enemy_atack_right_X = 1250;
var enemy_atack_left_X = 1100;
const enemy_atack_Y = 450;

var atacking = 1;

var enemy_atack = 0;
var throwing = 1;
var spear_position = 0;


//////////////////////////////////ENEMY///////////////////////////////////






searching();


Stamina_fulling();






addEventListener("keydown", WAlking);

function WAlking(e){
	switch(e.keyCode){
         
        case 65:    // если нажата клавиша A
       		stay_player = 0;
        	Couldness = 0;
        	which_fun = 1;
        	side = 0;
        	walk();
            break;
        case 68:  	// если нажата клавиша D
        	stay_player = 0;
        	Couldness = 0;
        	which_fun = 1;
        	side = 1; 
            walk();
            break;
        case 16: 	// если нажата клавиша Shift
        if (Stamina_bar.value >= 40 && Couldness == 1) {
        	which_fun = 2;
        	Stamina_bar.value -= 40;
			main_character.style.width = '250px';
        	charge();
        	break;
        }
 		case 83:    // если нажата клавиша S
 			stay_player = 1;
 			Couldness = 1;
 			which_fun = 1;
 			shield();
 			break;
 		case 81: 	// если нажата клавиша Q
 		if (Stamina_bar.value >= 20 && Couldness == 1) {
 			which_fun = 2;
 			Stamina_bar.value -= 20; 
 			hit();
 			break;
 		}
    }
}

addEventListener("keyup", staying);

function staying(){
	Couldness = 1;
	if (which_fun == 1) {
		setTimeout(stay_here, 150);
	}
	else{
		
	}
}

function repmake_150px(){
	main_character.style.width = '150px';
}

function stay_here(){
	stay_player = 1;
	repmake_150px();
	cadr_wight_right = 1250;
	cadr_wight_left = 1100;

	sheld = 0;

	if (side == 1) {
		main_character.style.backgroundPositionX = '-' + cadr_wight_stay_right + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height_stay + 'px';
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_wight_stay_left + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height_stay + 'px';
	}
}

function walk(){
	if (side == 1) {
		main_character.style.backgroundPositionX = '-' + cadr_wight_right + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height_right + 'px';

		if (Xposition >= 350) {
			BG_Xposition -= 10;
			if (enemy_atack == 0) {
				enemy_position -= 10;
				enemy.style.left = enemy_position + 'px';
			}
			BG.style.backgroundPositionX = BG_Xposition + 'px';
		}
		else{
			Xposition += 13;
			main_character.style.left = Xposition + 'px';
		}

		if (cadr_wight_right == 2300) {
			cadr_wight_right = 1250;
		}
		else{
			cadr_wight_right += 150;
		}
		side = 1;
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_wight_left + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height_left + 'px';

		if (Xposition <= -350) {
			BG_Xposition += 10;
			if (enemy_atack == 0) {
				enemy_position += 10;
				enemy.style.left = enemy_position + 'px';
			}
			BG.style.backgroundPositionX = BG_Xposition + 'px';
		}	
		else{
			Xposition -= 13;
			main_character.style.left = Xposition + 'px';
		}

		if (cadr_wight_left == 50) {
			cadr_wight_left = 1100;
		}
		else{
			cadr_wight_left -= 150;
		}
		side = 0;
	}
}

function charge(){

	if (side == 1) {

		main_character.style.backgroundPositionX = '-' + cadr_charge_wight_right + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_charge_height_right + 'px';

		if (Xposition >= 350) {
			BG_Xposition -= 65;
			enemy_position -= 65;
			enemy.style.left = enemy_position + 'px';
			BG.style.backgroundPositionX = BG_Xposition + 'px';
		}
		else{
			Xposition += 65;
			main_character.style.left = Xposition + 'px';
		}

		if(cadr_charge_wight_right != 2250){
			cadr_charge_wight_right += 250;
			setTimeout(charge, 50);
		}
		else{
			setTimeout(repmake_150px, 50);
			cadr_charge_wight_right = 1250;
			setTimeout(stay_here, 50);
		}
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_charge_wight_left + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_charge_height_left + 'px';

		if (Xposition <= -350) {
			BG_Xposition += 65;
			enemy_position += 65;
			enemy.style.left = enemy_position + 'px';
			BG.style.backgroundPositionX = BG_Xposition + 'px';

		}	
		else{
			Xposition -= 65;
			main_character.style.left = Xposition + 'px';
		}

		if(cadr_charge_wight_left != 0){
			cadr_charge_wight_left -= 250;
			setTimeout(charge, 50);
		}
		else{
			setTimeout(repmake_150px, 50);
			cadr_charge_wight_left = 1000;
			setTimeout(stay_here, 50);
		}
	}
}

function shield(){
	if (side == 1) {
		main_character.style.backgroundPositionX = '-' + cadr_wight_right_sheld + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_sheld_height + 'px';
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_wight_left_sheld + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_sheld_height + 'px';
	}
}

function hit(){

	if (side == 1) {

		main_character.style.backgroundPositionX = '-' + cadr_hit_width_right + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_hit_height + 'px';

		if(cadr_hit_width_right < 1850){
			cadr_hit_width_right += 150;
			setTimeout(hit, 50);
		}
		else{
			if (cadr_hit_width_right < 2050) {
				main_character.style.width = '200px';
				cadr_hit_width_right += 200;
				setTimeout(hit, 50);
			}
			else{
				setTimeout(repmake_150px, 150);
				cadr_hit_width_right = 1250;
				setTimeout(stay_here, 150);
			}
		}
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_hit_width_left + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_hit_height + 'px';

		if (cadr_hit_width_left > 500) {
			cadr_hit_width_left -= 150;
			setTimeout(hit, 50);
		}
		else{
			if(cadr_hit_width_left > 100 && cadr_hit_width_left < 500){
				main_character.style.width = '200px';
				cadr_hit_width_left -= 200;
				setTimeout(hit, 50);
			}
			else{
				setTimeout(repmake_150px, 150);
				cadr_hit_width_left = 1100;
				setTimeout(stay_here, 150);
			}
		}
	}
}

function Stamina_fulling(){
	Stamina_bar.value += 1;
	setTimeout(Stamina_fulling, 100);
}

////////////////////////////////////ENEMY///////////////////////////////////

function searching(){
	if (enemy_atack == 0) {
		if (enemy_side == 1) {
			if ((enemy_position - Xposition) < 0 && (enemy_position - Xposition) >= -500) {
				enemy_run_and_atack();
			}
			else{
				if (stay_enemy == 1) {
					enemy_stay();
				}
			}
		}
		else{
			if ((enemy_position - Xposition) > 0 && (enemy_position - Xposition) <= 500) {

			}
			else{
				if (stay_enemy == 1) {
					enemy_stay();
				}
			}
		}
	}
	else{
		enemy_run_and_atack();
	}
	setTimeout(searching, 50);
}


function enemy_stay(){
	stay_enemy = 0;
	if (enemy_side == 1) {
		enemy_side = 0;
		enemy.style.backgroundPositionX = '-' + enemy_stay_left_X + 'px';
		enemy.style.backgroundPositionY = '-' + enemy_stay_Y + 'px';
	} 
	else{
		enemy_side = 1;
		enemy.style.backgroundPositionX = '-' + enemy_stay_right_X + 'px';
		enemy.style.backgroundPositionY = '-' + enemy_stay_Y + 'px';	
	}
	setTimeout(change_stay, 5000);
}

function change_stay(){
	stay_enemy = 1;
}

function enemy_run_and_atack(){
	enemy_atack = 1;
	if (enemy_side == 1) {
		if (((enemy_position - Xposition) >= -400 && (enemy_position - Xposition) <= -60)) {
			enemy_run();
		}
		else if((enemy_position - Xposition) >= -500 && (enemy_position - Xposition) <= -400 && throwing == 1 && stay_player == 1){
			enemy.style.backgroundPositionX = '-' + enemy_atack_with_spear_right_X + 'px';
			enemy.style.backgroundPositionY = '-' + enemy_atack_with_spear_Y + 'px';

			if (enemy_atack_with_spear_right_X == 1700) {
				create_spear();
			}

			if (enemy_atack_with_spear_right_X == 2300) {
				enemy_atack_with_spear_right_X = 1250;
				throwing = 0;
			}
			else{
				enemy_atack_with_spear_right_X += 150;
			}
		}
		else if((enemy_position - Xposition) >= -500 && (enemy_position - Xposition) <= -400 && throwing == 0 && stay_player == 1){
			setTimeout(function(){throwing = 1}, 100);
			enemy_stay_right();
		}
		else if ((enemy_position - Xposition) >= -500 && (enemy_position - Xposition) <= -400 && stay_player == 0) {
			enemy_run();
		}
		else if ((enemy_position - Xposition) < -500) {
			enemy_run();
		}
		else if ((enemy_position - Xposition) <= 0 && (enemy_position - Xposition) >= -60 && stay_player == 1 && atacking == 1) {
			atacking = 0;
			atack();
		}
	}
}


function atack(){
	enemy.style.backgroundPositionX = '-' + enemy_atack_right_X + 'px';
	enemy.style.backgroundPositionY = '-' + enemy_atack_Y + 'px';

	if (enemy_atack_right_X == 2000) {
		enemy_atack_right_X = 1250;
		setTimeout(function(){atacking = 1;}, 20);
	}
	else{
		enemy_atack_right_X += 150;
		setTimeout(atack, 65);
	}
}




function enemy_run(){
	enemy.style.backgroundPositionX = '-' + enemy_run_right_X + 'px';
	enemy.style.backgroundPositionY = '-' + enemy_run_Y + 'px';

	if (Xposition <= 350 || stay_player == 1) {
		enemy_position += 10;
		enemy.style.left = enemy_position + 'px';
	}

	if (enemy_run_right_X >= 2300) {
		enemy_run_right_X = 1250;
	}
	else{
		enemy_run_right_X += 150;
	}
}

function enemy_stay_right(){
	enemy.style.backgroundPositionX = '-' + enemy_stay_right_X + 'px';
	enemy.style.backgroundPositionY = '-' + enemy_stay_Y + 'px';
}

function create_spear(){
	spear_position = enemy_position;
	spear.style.left = spear_position + 'px';
	spear.style.background = "url(/img/spear.gif)";
	mooving_spear();
}

function mooving_spear(){
	if (spear_position < (Xposition - 35)) {
		spear_position += 5;
		spear.style.left = spear_position + 'px';
		setTimeout(mooving_spear, 5);
	}
	else{
		throwing = 1;
		spear.style.left = '-1100px';
	}	
}
