




var enemy1 = document.getElementById('enemy1');
var enemy_health_bar1 = document.getElementById('Health_of_enemy1');
var spear1 = document.getElementById('spear1');

var enemy_position1 = 300;
var enemy_side1 = 0;
var stay_enemy1 = 1;
var atacking1 = 1;
var enemy_atack1 = 0;
var throwing1 = 1;
var spear_position1 = 0;
var stun1 = 0;
var dead1 = 0;



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

var enemy_pain_right_X = 1250;
var enemy_pain_left_X = 1100;
const enemy_pain_Y = 600;






function searching1(){
	if (dead1 == 0) {
		if (enemy_atack1 == 0) {
			if (enemy_side1 == 1) {
				enemy_health_bar1.style.left = '0px';
				if ((enemy_position1 - Xposition) < 0 && (enemy_position1 - Xposition) >= -500) {
					if (stun1 == 0) {
						enemy_run_and_atack1();
					}
				}
				else{
					if (stay_enemy1 == 1) {
						enemy_stay1();
					}
				}
			}
			else{
				if ((enemy_position1 - Xposition) > 0 && (enemy_position1 - Xposition) <= 500) {
					if (stun1 == 0) {
						enemy_run_and_atack1();
					}
				}
				else{
					enemy_health_bar1.style.left = '40px';
					if (stay_enemy1 == 1) {
						enemy_stay1();
					}
				}
			}
			setTimeout(searching1, 50);
		}
		else{
			if (stun1 == 0) {
				enemy_run_and_atack1();
			}
			setTimeout(searching1, 50);
		}
	}
}


function enemy_stay1(){
	stay_enemy1 = 0;
	if (enemy_side1 == 1) {
		enemy_side1 = 0;
		enemy1.style.backgroundPositionX = '-' + enemy_stay_left_X + 'px';
		enemy1.style.backgroundPositionY = '-' + enemy_stay_Y + 'px';
	} 
	else{
		enemy_side1 = 1;
		enemy1.style.backgroundPositionX = '-' + enemy_stay_right_X + 'px';
		enemy1.style.backgroundPositionY = '-' + enemy_stay_Y + 'px';	
	}
	setTimeout(change_stay1, 5000);
}

function change_stay1(){
	stay_enemy1 = 1;
}

function enemy_run_and_atack1(){
	enemy_atack1 = 1;
	if (enemy_side1 == 1) {
		enemy_health_bar1.style.left = '0px';
		if (((enemy_position1 - Xposition) >= -400 && (enemy_position1 - Xposition) <= -60)) {
			enemy_run1();
		}
		else if((enemy_position1 - Xposition) >= -500 && (enemy_position1 - Xposition) <= -400 && throwing1 == 1 && stay_player == 1){
			enemy1.style.backgroundPositionX = '-' + enemy_atack_with_spear_right_X + 'px';
			enemy1.style.backgroundPositionY = '-' + enemy_atack_with_spear_Y + 'px';

			if (enemy_atack_with_spear_right_X == 1850) {
				create_spear1();
			}

			if (enemy_atack_with_spear_right_X == 2300) {
				enemy_atack_with_spear_right_X = 1250;
				throwing1 = 0;
			}
			else{
				enemy_atack_with_spear_right_X += 150;
			}
		}
		else if((enemy_position1 - Xposition) >= -500 && (enemy_position1 - Xposition) <= -400 && throwing1 == 0 && stay_player == 1){
			enemy_stay_right1();
		}
		else if ((enemy_position1 - Xposition) >= -500 && (enemy_position1 - Xposition) <= -400 && stay_player == 0) {
			enemy_run1();
		}
		else if ((enemy_position1 - Xposition) < -500) {
			enemy_run1();
		}
		else if ((enemy_position1 - Xposition) <= 0 && (enemy_position1 - Xposition) >= -60 && stay_player == 1 && atacking1 == 1) {
			atacking1 = 0;
			atack1();
		}
		else if((enemy_position1 - Xposition) <= 0 && (enemy_position1 - Xposition) >= -60 && stay_player == 0){
			enemy_run1();
		}
		else if((enemy_position1 - Xposition) < 20 && (enemy_position1 - Xposition) > 0 && atacking1 == 1){
			atacking1 = 0;
			atack1();
		}
		else if ((enemy_position1 - Xposition) >= 20){
			enemy_side1 = 0;
		}
	}
	////////////////////////////////////////////////////////////////////////////////////////

	if (enemy_side1 == 0) {
		enemy_health_bar1.style.left = '40px';
		if ((enemy_position1 - Xposition) <= 400 && (enemy_position1 - Xposition) >= 60) {
			enemy_run1();
		}
		else if((enemy_position1 - Xposition) <= 500 && (enemy_position1 - Xposition) > 400 && throwing1 == 1 && stay_player == 1){
			enemy1.style.backgroundPositionX = '-' + enemy_atack_with_spear_left_X + 'px';
			enemy1.style.backgroundPositionY = '-' + enemy_atack_with_spear_Y + 'px';

			if (enemy_atack_with_spear_left_X == 650) {
				create_spear1();
			}

			if (enemy_atack_with_spear_left_X <= 50) {
				enemy_atack_with_spear_left_X = 1100;
				throwing1 = 0;
			}
			else{
				enemy_atack_with_spear_left_X -= 150;
			}
		}
		else if((enemy_position1 - Xposition) <= 500 && (enemy_position1 - Xposition) >= 400 && throwing1 == 0 && stay_player == 1){
			enemy_stay_left1();
		}
		else if ((enemy_position1 - Xposition) <= 500 && (enemy_position1 - Xposition) >= 400 && stay_player == 0) {
			enemy_run1();
		}
		else if ((enemy_position1 - Xposition) > 500) {
			enemy_run1();
		}
		else if ((enemy_position1 - Xposition) >= 0 && (enemy_position1 - Xposition) <= 60 && stay_player == 1 && atacking1 == 1) {
			atacking1 = 0;
			atack1();
		}
		else if((enemy_position1 - Xposition) >= 0 && (enemy_position1 - Xposition) <= 60 && stay_player == 0){
			enemy_run1();
		}
		else if((enemy_position1 - Xposition) > -20 && (enemy_position1 - Xposition) < 0 && atacking1 == 1){
			atacking1 = 0;
			atack1();
		}
		else if((enemy_position1 - Xposition) <= -20){
			enemy_side1 = 1;
		}
	}
}


function atack1(){
	if (enemy_side1 == 1) {
		enemy1.style.backgroundPositionX = '-' + enemy_atack_right_X + 'px';
		enemy1.style.backgroundPositionY = '-' + enemy_atack_Y + 'px';

		if (enemy_atack_right_X == 2000) {
			enemy_atack_right_X = 1250;
			if (shield_up == 0) {
				Health.value -= 40;
			}
			setTimeout(function(){atacking1 = 1;}, 1000);
		}
		else{
			enemy_atack_right_X += 150;
			setTimeout(atack1, 70);
		}
	}
	if (enemy_side1 == 0) {
		enemy1.style.backgroundPositionX = '-' + enemy_atack_left_X + 'px';
		enemy1.style.backgroundPositionY = '-' + enemy_atack_Y + 'px';

		if (enemy_atack_left_X <= 350) {
			enemy_atack_left_X = 1100;
			if (shield_up == 0) {
				Health.value -= 40;
			}
			setTimeout(function(){atacking1 = 1;}, 1000);
		}
		else{
			enemy_atack_left_X -= 150;
			setTimeout(atack1, 70);
		}
	}
}




function enemy_run1(){
	if (enemy_side1 == 1) {
		enemy1.style.backgroundPositionX = '-' + enemy_run_right_X + 'px';
		enemy1.style.backgroundPositionY = '-' + enemy_run_Y + 'px';

		if (Xposition <= 100 || stay_player == 1 || side == 0) {
			enemy_position1 += 10;
			enemy1.style.left = enemy_position1 + 'px';
		}

		if (enemy_run_right_X >= 2300) {
			enemy_run_right_X = 1250;
		}
		else{
			enemy_run_right_X += 150;
		}
	}
	if (enemy_side1 == 0) {
		enemy1.style.backgroundPositionX = '-' + enemy_run_left_X + 'px';
		enemy1.style.backgroundPositionY = '-' + enemy_run_Y + 'px';

		if (Xposition >= -350 || stay_player == 1 || side == 1) {
			enemy_position1 -= 10;
			enemy1.style.left = enemy_position1 + 'px';
		}

		if (enemy_run_left_X <= 50) {
			enemy_run_left_X = 1100;
		}
		else{
			enemy_run_left_X -= 150;
		}
	}
}

function enemy_stay_right1(){
	enemy_health_bar1.style.left = '0px';
	enemy1.style.backgroundPositionX = '-' + enemy_stay_right_X + 'px';
	enemy1.style.backgroundPositionY = '-' + enemy_stay_Y + 'px';
}

function enemy_stay_left1(){
	enemy_health_bar1.style.left = '40px';
	enemy1.style.backgroundPositionX = '-' + enemy_stay_left_X + 'px';
	enemy1.style.backgroundPositionY = '-' + enemy_stay_Y + 'px';
}

function create_spear1(){
	spear_position1 = enemy_position1;
	spear1.style.left = spear_position1 + 'px';
	mooving_spear1();
}

function mooving_spear1(){
	if (enemy_side1 == 1) {
		spear1.style.backgroundPositionY = '0px';
		if (spear_position1 < (Xposition - 35)) {
			spear_position1 += 5;
			spear1.style.left = spear_position1 + 'px';
			setTimeout(mooving_spear1, 5);
		}
		else{
			if (shield_up == 0) {
				Health.value -= 25;
			}
			setTimeout(function(){throwing1 = 1}, 750);
			spear1.style.left = '-1100px';
		}
	}
	else{
		spear1.style.backgroundPositionY = '-15px';
		if (spear_position1 > (Xposition + 35)) {
			spear_position1 -= 5;
			spear1.style.left = spear_position1 + 'px';
			setTimeout(mooving_spear1, 5);
		}
		else{
			if (shield_up == 0) {
				Health.value -= 25;
			}
			setTimeout(function(){throwing1 = 1}, 750);
			spear1.style.left = '-1100px';
		}
	}	
}

function enemy_pain1(){
	stun1 = 1;
	if(side == 0){
		enemy1.style.backgroundPositionX = '-' + enemy_pain_right_X + 'px';
		enemy1.style.backgroundPositionY = '-' + enemy_pain_Y + 'px';

		if (enemy_pain_right_X == 1550) {
			enemy_pain_right_X = 1250;
			setTimeout(function(){stun1 = 0;}, 50);
		}
		else{
			enemy_pain_right_X += 150;
			setTimeout(enemy_pain1, 150); 
		}
	}
	else{
		enemy1.style.backgroundPositionX = '-' + enemy_pain_left_X + 'px';
		enemy1.style.backgroundPositionY = '-' + enemy_pain_Y + 'px';

		if (enemy_pain_left_X == 800) {
			enemy_pain_left_X = 1100;
			setTimeout(function(){stun1 = 0;}, 50);
		}
		else{
			enemy_pain_left_X -= 150;
			setTimeout(enemy_pain1, 150); 
		}
	}
}


function is_moob_alive1(){
	if (enemy_health_bar1.value <= 0) {
		dead1 = 1;
		enemy1.style.opacity = '0';
		setTimeout(function(){enemy1.style.top = '0px'}, 3000)
	}
	setTimeout(is_moob_alive1, 50);
}