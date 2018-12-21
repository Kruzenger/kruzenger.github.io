




var enemy2 = document.getElementById('enemy2');
var enemy_health_bar2 = document.getElementById('Health_of_enemy2');
var spear2 = document.getElementById('spear2');

var enemy_position2 = 500;
var enemy_side2 = 1;
var stay_enemy2 = 1;
var atacking2 = 1;
var enemy_atack2 = 0;
var throwing2 = 1;
var spear_position2 = 0;
var stun2 = 0;
var dead2 = 0;



var enemy_stay_right_X2 = 1250;
var enemy_stay_left_X2 = 1100;

var enemy_run_right_X2 = 1250;
var enemy_run_left_X2 = 1100;

var enemy_atack_with_spear_right_X2 = 1250;
var enemy_atack_with_spear_left_X2 = 1100;

var enemy_atack_right_X2 = 1250;
var enemy_atack_left_X2 = 1100;

var enemy_pain_right_X2 = 1250;
var enemy_pain_left_X2 = 1100;



function searching2(){
	if (dead2 == 0) {
		if (enemy_atack2 == 0) {
			if (enemy_side2 == 1) {
				enemy_health_bar2.style.left = '0px';
				if ((enemy_position2 - Xposition) < 0 && (enemy_position2 - Xposition) >= -500) {
					if (stun2 == 0) {
						enemy_run_and_atack2();
					}
				}
				else{
					if (stay_enemy2 == 1) {
						enemy_stay2();
					}
				}
			}
			else{
				if ((enemy_position2 - Xposition) > 0 && (enemy_position2 - Xposition) <= 500) {
					if (stun2 == 0) {
						enemy_run_and_atack2();
					}
				}
				else{
					enemy_health_bar2.style.left = '40px';
					if (stay_enemy2 == 1) {
						enemy_stay2();
					}
				}
			}
			setTimeout(searching2, 50);
		}
		else{
			if (stun2 == 0) {
				enemy_run_and_atack2();
			}
			setTimeout(searching2, 50);
		}
	}
}


function enemy_stay2(){
	stay_enemy2 = 0;
	if (enemy_side2 == 1) {
		enemy_side2 = 0;
		enemy2.style.backgroundPositionX = '-' + enemy_stay_left_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + enemy_stay_Y + 'px';
	} 
	else{
		enemy_side2 = 1;
		enemy2.style.backgroundPositionX = '-' + enemy_stay_right_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + enemy_stay_Y + 'px';	
	}
	//setTimeout(change_stay2, 5000);
}

function change_stay2(){
	stay_enemy2 = 1;
}

function enemy_run_and_atack2(){
	enemy_atack2 = 1;
	if (enemy_side2 == 1) {
		enemy_health_bar2.style.left = '0px';
		if (((enemy_position2 - Xposition) >= -400 && (enemy_position2 - Xposition) <= -60)) {
			enemy_run2();
		}
		else if((enemy_position2 - Xposition) >= -500 && (enemy_position2 - Xposition) <= -400 && throwing2 == 1 && stay_player == 1){
			enemy2.style.backgroundPositionX = '-' + enemy_atack_with_spear_right_X2 + 'px';
			enemy2.style.backgroundPositionY = '-' + enemy_atack_with_spear_Y + 'px';

			if (enemy_atack_with_spear_right_X2 == 1850) {
				create_spear2();
			}

			if (enemy_atack_with_spear_right_X2 == 2300) {
				enemy_atack_with_spear_right_X2 = 1250;
				throwing2 = 0;
			}
			else{
				enemy_atack_with_spear_right_X2 += 150;
			}
		}
		else if((enemy_position2 - Xposition) >= -500 && (enemy_position2 - Xposition) <= -400 && throwing2 == 0 && stay_player == 1){
			enemy_stay_right2();
		}
		else if ((enemy_position2 - Xposition) >= -500 && (enemy_position2 - Xposition) <= -400 && stay_player == 0) {
			enemy_run2();
		}
		else if ((enemy_position2 - Xposition) < -500) {
			enemy_run2();
		}
		else if ((enemy_position2 - Xposition) <= 0 && (enemy_position2 - Xposition) >= -60 && stay_player == 1 && atacking2 == 1) {
			atacking2 = 0;
			atack2();
		}
		else if((enemy_position2 - Xposition) <= 0 && (enemy_position2 - Xposition) >= -60 && stay_player == 0){
			enemy_run2();
		}
		else if((enemy_position2 - Xposition) < 20 && (enemy_position2 - Xposition) > 0 && atacking2 == 1){
			atacking2 = 0;
			atack2();
		}
		else if ((enemy_position2 - Xposition) >= 20){
			enemy_side2 = 0;
		}
	}
	////////////////////////////////////////////////////////////////////////////////////////

	if (enemy_side2 == 0) {
		enemy_health_bar2.style.left = '40px';
		if ((enemy_position2 - Xposition) <= 400 && (enemy_position2 - Xposition) >= 60) {
			enemy_run2();
		}
		else if((enemy_position2 - Xposition) <= 500 && (enemy_position2 - Xposition) > 400 && throwing2 == 1 && stay_player == 1){
			enemy2.style.backgroundPositionX = '-' + enemy_atack_with_spear_left_X2 + 'px';
			enemy2.style.backgroundPositionY = '-' + enemy_atack_with_spear_Y + 'px';

			if (enemy_atack_with_spear_left_X2 == 650) {
				create_spear2();
			}

			if (enemy_atack_with_spear_left_X2 <= 50) {
				enemy_atack_with_spear_left_X2 = 1100;
				throwing2 = 0;
			}
			else{
				enemy_atack_with_spear_left_X2 -= 150;
			}
		}
		else if((enemy_position2 - Xposition) <= 500 && (enemy_position2 - Xposition) >= 400 && throwing2 == 0 && stay_player == 1){
			enemy_stay_left2();
		}
		else if ((enemy_position2 - Xposition) <= 500 && (enemy_position2 - Xposition) >= 400 && stay_player == 0) {
			enemy_run2();
		}
		else if ((enemy_position2 - Xposition) > 500) {
			enemy_run2();
		}
		else if ((enemy_position2 - Xposition) >= 0 && (enemy_position2 - Xposition) <= 60 && stay_player == 1 && atacking2 == 1) {
			atacking2 = 0;
			atack2();
		}
		else if((enemy_position2 - Xposition) >= 0 && (enemy_position2 - Xposition) <= 60 && stay_player == 0){
			enemy_run2();
		}
		else if((enemy_position2 - Xposition) > -20 && (enemy_position2 - Xposition) < 0 && atacking2 == 1){
			atacking2 = 0;
			atack2();
		}
		else if((enemy_position2 - Xposition) <= -20){
			enemy_side2 = 1;
		}
	}
}


function atack2(){
	if (enemy_side2 == 1) {
		enemy2.style.backgroundPositionX = '-' + enemy_atack_right_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + enemy_atack_Y + 'px';

		if (enemy_atack_right_X2 == 2000) {
			enemy_atack_right_X2 = 1250;
			if (shield_up == 0) {
				Health.value -= 40;
				if (Health.value > 0) {
					my_pain();
				}
			}
			setTimeout(function(){atacking2 = 1;}, 1000);
		}
		else{
			enemy_atack_right_X2 += 150;
			setTimeout(atack2, 70);
		}
	}
	if (enemy_side2 == 0) {
		enemy2.style.backgroundPositionX = '-' + enemy_atack_left_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + enemy_atack_Y + 'px';

		if (enemy_atack_left_X2 <= 350) {
			enemy_atack_left_X2 = 1100;
			if (shield_up == 0) {
				Health.value -= 40;
				if (Health.value > 0) {
					my_pain();
				}
			}
			setTimeout(function(){atacking2 = 1;}, 1000);
		}
		else{
			enemy_atack_left_X2 -= 150;
			setTimeout(atack2, 70);
		}
	}
}




function enemy_run2(){
	if (enemy_side2 == 1) {
		enemy2.style.backgroundPositionX = '-' + enemy_run_right_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + enemy_run_Y + 'px';

		if (Xposition <= 100 || stay_player == 1 || side == 0) {
			enemy_position2 += 10;
			enemy2.style.left = enemy_position2 + 'px';
		}

		if (enemy_run_right_X2 >= 2300) {
			enemy_run_right_X2 = 1250;
		}
		else{
			enemy_run_right_X2 += 150;
		}
	}
	if (enemy_side2 == 0) {
		enemy2.style.backgroundPositionX = '-' + enemy_run_left_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + enemy_run_Y + 'px';

		if (Xposition >= -350 || stay_player == 1 || side == 1) {
			enemy_position2 -= 10;
			enemy2.style.left = enemy_position2 + 'px';
		}

		if (enemy_run_left_X2 <= 50) {
			enemy_run_left_X2 = 1100;
		}
		else{
			enemy_run_left_X2 -= 150;
		}
	}
}

function enemy_stay_right2(){
	enemy_health_bar2.style.left = '0px';
	enemy2.style.backgroundPositionX = '-' + enemy_stay_right_X2 + 'px';
	enemy2.style.backgroundPositionY = '-' + enemy_stay_Y + 'px';
}

function enemy_stay_left2(){
	enemy_health_bar2.style.left = '40px';
	enemy2.style.backgroundPositionX = '-' + enemy_stay_left_X2 + 'px';
	enemy2.style.backgroundPositionY = '-' + enemy_stay_Y + 'px';
}

function create_spear2(){
	spear_position2 = enemy_position2;
	spear2.style.left = spear_position2 + 'px';
	mooving_spear2();
}

function mooving_spear2(){
	if (enemy_side2 == 1) {
		spear2.style.backgroundPositionY = '0px';
		if (spear_position2 < (Xposition - 35)) {
			spear_position2 += 5;
			spear2.style.left = spear_position2 + 'px';
			setTimeout(mooving_spear2, 5);
		}
		else{
			if (shield_up == 0) {
				Health.value -= 25;
				if (Health.value > 0) {
					my_pain();
				}
			}
			setTimeout(function(){throwing2 = 1}, 750);
			spear2.style.left = '-1100px';
		}
	}
	else{
		spear2.style.backgroundPositionY = '-15px';
		if (spear_position2 > (Xposition + 35)) {
			spear_position2 -= 5;
			spear2.style.left = spear_position2 + 'px';
			setTimeout(mooving_spear2, 5);
		}
		else{
			if (shield_up == 0) {
				Health.value -= 25;
				if (Health.value > 0) {
					my_pain();
				}
			}
			setTimeout(function(){throwing2 = 1}, 750);
			spear2.style.left = '-1100px';
		}
	}	
}

function enemy_pain2(){
	stun2 = 1;
	if(side == 0){
		enemy2.style.backgroundPositionX = '-' + enemy_pain_right_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + enemy_pain_Y + 'px';

		if (enemy_pain_right_X2 == 1550) {
			enemy_pain_right_X2 = 1250;
			setTimeout(function(){stun2 = 0;}, 50);
		}
		else{
			enemy_pain_right_X2 += 150;
			setTimeout(enemy_pain2, 150); 
		}
	}
	else{
		enemy2.style.backgroundPositionX = '-' + enemy_pain_left_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + enemy_pain_Y + 'px';

		if (enemy_pain_left_X2 == 800) {
			enemy_pain_left_X2 = 1100;
			setTimeout(function(){stun2 = 0;}, 50);
		}
		else{
			enemy_pain_left_X2 -= 150;
			setTimeout(enemy_pain2, 150); 
		}
	}
}


function is_moob_alive2(){
	if (enemy_health_bar2.value <= 0) {
		dead2 = 1;
		enemy2.style.opacity = '0';
		setTimeout(function(){enemy2.style.top = '0px'}, 3000)
	}
	setTimeout(is_moob_alive2, 50);
}