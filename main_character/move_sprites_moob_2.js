






function searching2(){
	if (dead2 == OFF) {
		if (enemy_atack2 == OFF) {
			if (enemy_side2 == RIGHT) {
				enemy_health_bar2.style.left = '0px';
				if ((enemy_position2 - Xposition) < 0 && (enemy_position2 - Xposition) >= -500) {
					if (stun2 == OFF) {
						enemy_run_and_atack2();
					}
				}
				else{
					if (stay_enemy2 == ON) {
						enemy_stay2();
					}
				}
			}
			else{
				if ((enemy_position2 - Xposition) > 0 && (enemy_position2 - Xposition) <= 500) {
					if (stun2 == OFF) {
						enemy_run_and_atack2();
					}
				}
				else{
					enemy_health_bar2.style.left = '40px';
					if (stay_enemy2 == ON) {
						enemy_stay2();
					}
				}
			}
			setTimeout(searching2, 50);
		}
		else{
			if (stun2 == OFF) {
				enemy_run_and_atack2();
			}
			setTimeout(searching2, 50);
		}
	}
}


function enemy_stay2(){
	stay_enemy2 = OFF;
	if (enemy_side2 == RIGHT) {
		enemy_side2 = LEFT;
		enemy2.style.backgroundPositionX = '-' + enemy_stay_left_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + cadr_height_stay + 'px';
	} 
	else{
		enemy_side2 = RIGHT;
		enemy2.style.backgroundPositionX = '-' + enemy_stay_right_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + cadr_height_stay + 'px';	
	}
	//setTimeout(change_stay2, 5000);
}

function change_stay2(){
	stay_enemy2 = ON;
}

function enemy_run_and_atack2(){
	enemy_atack2 = ON;
	if (enemy_side2 == RIGHT) {
		enemy_health_bar2.style.left = '0px';
		if (((enemy_position2 - Xposition) >= -400 && (enemy_position2 - Xposition) <= -60)) {
			enemy_run2();
		}
		else if((enemy_position2 - Xposition) >= -500 && (enemy_position2 - Xposition) <= -400 && throwing2 == ON && stay_player == ON){
			enemy2.style.backgroundPositionX = '-' + enemy_special_atack_right_X2 + 'px';
			enemy2.style.backgroundPositionY = '-' + cadr_special_attack_height + 'px';

			if (enemy_special_atack_right_X2 == 1850) {
				create_spear2();
			}

			if (enemy_special_atack_right_X2 == 2300) {
				enemy_special_atack_right_X2 = STANDART_FIRST_CADR_RIGHT;
				throwing2 = OFF;
			}
			else{
				enemy_special_atack_right_X2 += CADR;
			}
		}
		else if((enemy_position2 - Xposition) >= -500 && (enemy_position2 - Xposition) <= -400 && throwing2 == OFF && stay_player == ON){
			enemy_stay_right2();
		}
		else if ((enemy_position2 - Xposition) >= -500 && (enemy_position2 - Xposition) <= -400 && stay_player == OFF) {
			enemy_run2();
		}
		else if ((enemy_position2 - Xposition) < -500) {
			enemy_run2();
		}
		else if ((enemy_position2 - Xposition) <= 0 && (enemy_position2 - Xposition) >= -60 && stay_player == ON && atacking2 == ON) {
			atacking2 = OFF;
			atack2();
		}
		else if((enemy_position2 - Xposition) <= 0 && (enemy_position2 - Xposition) >= -60 && stay_player == OFF){
			enemy_run2();
		}
		else if((enemy_position2 - Xposition) < 20 && (enemy_position2 - Xposition) > 0 && atacking2 == ON){
			atacking2 = OFF;
			atack2();
		}
		else if ((enemy_position2 - Xposition) >= 20){
			enemy_side2 = LEFT;
		}
	}
	////////////////////////////////////////////////////////////////////////////////////////

	if (enemy_side2 == LEFT) {
		enemy_health_bar2.style.left = '40px';
		if ((enemy_position2 - Xposition) <= 400 && (enemy_position2 - Xposition) >= 60) {
			enemy_run2();
		}
		else if((enemy_position2 - Xposition) <= 500 && (enemy_position2 - Xposition) > 400 && throwing2 == ON && stay_player == ON){
			enemy2.style.backgroundPositionX = '-' + enemy_special_atack_left_X2 + 'px';
			enemy2.style.backgroundPositionY = '-' + cadr_special_attack_height + 'px';

			if (enemy_special_atack_left_X2 == 650) {
				create_spear2();
			}

			if (enemy_special_atack_left_X2 <= 50) {
				enemy_special_atack_left_X2 = STANDART_FIRST_CADR_LEFT;
				throwing2 = OFF;
			}
			else{
				enemy_special_atack_left_X2 -= CADR;
			}
		}
		else if((enemy_position2 - Xposition) <= 500 && (enemy_position2 - Xposition) >= 400 && throwing2 == OFF && stay_player == ON){
			enemy_stay_left2();
		}
		else if ((enemy_position2 - Xposition) <= 500 && (enemy_position2 - Xposition) >= 400 && stay_player == OFF) {
			enemy_run2();
		}
		else if ((enemy_position2 - Xposition) > 500) {
			enemy_run2();
		}
		else if ((enemy_position2 - Xposition) >= 0 && (enemy_position2 - Xposition) <= 60 && stay_player == ON && atacking2 == ON) {
			atacking2 = OFF;
			atack2();
		}
		else if((enemy_position2 - Xposition) >= 0 && (enemy_position2 - Xposition) <= 60 && stay_player == OFF){
			enemy_run2();
		}
		else if((enemy_position2 - Xposition) > -20 && (enemy_position2 - Xposition) < 0 && atacking2 == ON){
			atacking2 = OFF;
			atack2();
		}
		else if((enemy_position2 - Xposition) <= -20){
			enemy_side2 = RIGHT;
		}
	}
}


function atack2(){
	if (enemy_side2 == RIGHT) {
		enemy2.style.backgroundPositionX = '-' + enemy_atack_right_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + cadr_hit_height + 'px';

		if (enemy_atack_right_X2 == 2000) {
			enemy_atack_right_X2 = STANDART_FIRST_CADR_RIGHT;
			if (shield_up == OFF) {
				Health.value -= DAMAGE;
				if (Health.value > 0) {
					my_pain();
				}
			}
			setTimeout(function(){atacking2 = ON;}, 1000);
		}
		else{
			enemy_atack_right_X2 += CADR;
			setTimeout(atack2, 70);
		}
	}
	if (enemy_side2 == LEFT) {
		enemy2.style.backgroundPositionX = '-' + enemy_atack_left_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + cadr_hit_height + 'px';

		if (enemy_atack_left_X2 <= 350) {
			enemy_atack_left_X2 = STANDART_FIRST_CADR_LEFT;
			if (shield_up == OFF) {
				Health.value -= DAMAGE;
				if (Health.value > 0) {
					my_pain();
				}
			}
			setTimeout(function(){atacking2 = ON;}, 1000);
		}
		else{
			enemy_atack_left_X2 -= CADR;
			setTimeout(atack2, 70);
		}
	}
}




function enemy_run2(){
	if (enemy_side2 == RIGHT) {
		enemy2.style.backgroundPositionX = '-' + enemy_run_right_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + cadr_height + 'px';

		if (Xposition <= 100 || stay_player == ON || side == LEFT) {
			enemy_position2 += 10;
			enemy2.style.left = enemy_position2 + 'px';
		}

		if (enemy_run_right_X2 >= 2300) {
			enemy_run_right_X2 = STANDART_FIRST_CADR_RIGHT;
		}
		else{
			enemy_run_right_X2 += CADR;
		}
	}
	if (enemy_side2 == LEFT) {
		enemy2.style.backgroundPositionX = '-' + enemy_run_left_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + cadr_height + 'px';

		if (Xposition >= -350 || stay_player == ON || side == RIGHT) {
			enemy_position2 -= 10;
			enemy2.style.left = enemy_position2 + 'px';
		}

		if (enemy_run_left_X2 <= 50) {
			enemy_run_left_X2 = STANDART_FIRST_CADR_LEFT;
		}
		else{
			enemy_run_left_X2 -= CADR;
		}
	}
}

function enemy_stay_right2(){
	enemy_health_bar2.style.left = '0px';
	enemy2.style.backgroundPositionX = '-' + enemy_stay_right_X2 + 'px';
	enemy2.style.backgroundPositionY = '-' + cadr_height_stay + 'px';
}

function enemy_stay_left2(){
	enemy_health_bar2.style.left = '40px';
	enemy2.style.backgroundPositionX = '-' + enemy_stay_left_X2 + 'px';
	enemy2.style.backgroundPositionY = '-' + cadr_height_stay + 'px';
}

function create_spear2(){
	spear_position2 = enemy_position2;
	spear2.style.left = spear_position2 + 'px';
	mooving_spear2();
}

function mooving_spear2(){
	if (enemy_side2 == RIGHT) {
		spear2.style.backgroundPositionY = '0px';
		if (spear_position2 < (Xposition - 35)) {
			spear_position2 += 5;
			spear2.style.left = spear_position2 + 'px';
			setTimeout(mooving_spear2, 5);
		}
		else{
			if (shield_up == LEFT) {
				Health.value -= DAMAGE_SPEAR;
				if (Health.value > 0) {
					my_pain();
				}
			}
			setTimeout(function(){throwing2 = ON}, 750);
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
			if (shield_up == OFF) {
				Health.value -= DAMAGE_SPEAR;
				if (Health.value > 0) {
					my_pain();
				}
			}
			setTimeout(function(){throwing2 = ON}, 750);
			spear2.style.left = '-1100px';
		}
	}	
}

function enemy_pain2(){
	stun2 = ON;
	if(side == LEFT){
		enemy2.style.backgroundPositionX = '-' + enemy_pain_right_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + pain_Y + 'px';

		if (enemy_pain_right_X2 == 1550) {
			enemy_pain_right_X2 = STANDART_FIRST_CADR_RIGHT;
			setTimeout(function(){stun2 = OFF;}, 50);
		}
		else{
			enemy_pain_right_X2 += CADR;
			setTimeout(enemy_pain2, 150); 
		}
	}
	else{
		enemy2.style.backgroundPositionX = '-' + enemy_pain_left_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + pain_Y + 'px';

		if (enemy_pain_left_X2 == 800) {
			enemy_pain_left_X2 = STANDART_FIRST_CADR_LEFT;
			setTimeout(function(){stun2 = OFF;}, 50);
		}
		else{
			enemy_pain_left_X2 -= CADR;
			setTimeout(enemy_pain2, 150); 
		}
	}
}


function is_moob_alive2(){
	if (enemy_health_bar2.value <= 0) {
		dead2 = ON;
		enemy2.style.opacity = '0';
		setTimeout(function(){enemy2.style.top = '0px'}, 3000);
	}
	else{
		setTimeout(is_moob_alive2, 50);
	}
}

function moob_is_dead2(){
	dead2 = ON;
	if (side == RIGHT) {
		enemy2.style.backgroundPositionX = '-' + enemy_dead_left_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + deadly_Y + 'px';

		if (enemy_dead_left_X2 == 200) {
			enemy_dead_left_X2 = STANDART_FIRST_CADR_LEFT;
			enemy2.style.opacity = '0';
			setTimeout(function(){enemy2.style.top = '0px'}, 3000);
		}
		else{
			enemy_dead_left_X2 -= CADR;
			setTimeout(moob_is_dead2, 100);
		}
	}
	else{
		enemy2.style.backgroundPositionX = '-' + enemy_dead_right_X2 + 'px';
		enemy2.style.backgroundPositionY = '-' + deadly_Y + 'px';

		if (enemy_dead_right_X2 == 2150) {
			enemy_dead_right_X2 = STANDART_FIRST_CADR_RIGHT;
			enemy2.style.opacity = '0';
			setTimeout(function(){enemy2.style.top = '0px'}, 3000);
		}
		else{
			enemy_dead_right_X2 += CADR;
			setTimeout(moob_is_dead2, 100);
		}
	}
}