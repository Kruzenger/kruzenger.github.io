




function searching3(){
	if (dead3 == OFF) {
		if (enemy_atack3 == OFF) {
			if (enemy_side3 == RIGHT) {
				enemy_health_bar3.style.left = '0px';
				if ((enemy_position3 - Xposition) < 0 && (enemy_position3 - Xposition) >= -500) {
					if (stun3 == OFF) {
						enemy_run_and_atack3();
					}
				}
				else{
					if (stay_enemy3 == ON) {
						enemy_stay3();
					}
				}
			}
			else{
				if ((enemy_position3 - Xposition) > 0 && (enemy_position3 - Xposition) <= 500) {
					if (stun3 == OFF) {
						enemy_run_and_atack3();
					}
				}
				else{
					enemy_health_bar3.style.left = '40px';
					if (stay_enemy3 == ON) {
						enemy_stay3();
					}
				}
			}
			setTimeout(searching3, 50);
		}
		else{
			if (stun3 == OFF) {
				enemy_run_and_atack3();
			}
			setTimeout(searching3, 50);
		}
	}
}


function enemy_stay3(){
	stay_enemy3 = OFF;
	if (enemy_side3 == RIGHT) {
		enemy_side3 = LEFT;
		enemy_stay_left3();
	} 
	else{
		enemy_side3 = RIGHT;
		enemy_stay_right3();
	}
	setTimeout(change_stay3, 5000);
}

function change_stay3(){
	stay_enemy3 = ON;
}

function enemy_run_and_atack3(){
	enemy_atack3 = ON;
	if (enemy_side3 == RIGHT) {
		enemy_health_bar3.style.left = '0px';
		if (((enemy_position3 - Xposition) >= -400 && (enemy_position3 - Xposition) <= -60)) {
			enemy_run3();
		}
		else if((enemy_position3 - Xposition) >= -500 && (enemy_position3 - Xposition) <= -400 && throwing3 == ON && stay_player == ON){
			enemy3_run = OFF;

			enemy3.style.backgroundPositionX = '-' + enemy_special_atack_right_X3 + 'px';
			enemy3.style.backgroundPositionY = '-' + cadr_special_attack_height + 'px';

			if (enemy_special_atack_right_X3 == 1850) {
				create_spear3();
			}

			if (enemy_special_atack_right_X3 == 2300) {
				enemy_special_atack_right_X3 = STANDART_FIRST_CADR_RIGHT;
				throwing3 = OFF;
			}
			else{
				enemy_special_atack_right_X3 += CADR;
			}
		}
		else if((enemy_position3 - Xposition) >= -500 && (enemy_position3 - Xposition) <= -400 && throwing3 == OFF && stay_player == ON){
			enemy3_run = OFF;
			enemy_stay_right3();
		}
		else if ((enemy_position3 - Xposition) >= -500 && (enemy_position3 - Xposition) <= -400 && stay_player == OFF) {
			enemy_run3();
		}
		else if ((enemy_position3 - Xposition) < -500) {
			enemy_run3();
		}
		else if ((enemy_position3 - Xposition) <= 0 && (enemy_position3 - Xposition) >= -60 && stay_player == ON && atacking3 == ON) {
			enemy3_run = OFF;
			atacking3 = OFF;
			atack3();
		}
		else if((enemy_position3 - Xposition) <= 0 && (enemy_position3 - Xposition) >= -60 && stay_player == OFF){
			enemy_run3();
		}
		else if((enemy_position3 - Xposition) < 20 && (enemy_position3 - Xposition) > 0 && atacking3 == ON){
			enemy3_run = OFF;
			atacking3 = OFF;
			atack3();
		}
		else if ((enemy_position3 - Xposition) >= 20){
			enemy3_run = OFF;
			enemy_side3 = LEFT;
		}
	}
	////////////////////////////////////////////////////////////////////////////////////////

	if (enemy_side3 == LEFT) {
		enemy_health_bar3.style.left = '40px';
		if ((enemy_position3 - Xposition) <= 400 && (enemy_position3 - Xposition) >= 60) {
			enemy_run3();
		}
		else if((enemy_position3 - Xposition) <= 500 && (enemy_position3 - Xposition) > 400 && throwing3 == ON && stay_player == ON){
			enemy3_run = OFF;
			enemy3.style.backgroundPositionX = '-' + enemy_special_atack_left_X3 + 'px';
			enemy3.style.backgroundPositionY = '-' + cadr_special_attack_height + 'px';

			if (enemy_special_atack_left_X3 == 650) {
				create_spear3();
			}

			if (enemy_special_atack_left_X3 <= 50) {
				enemy_special_atack_left_X3 = STANDART_FIRST_CADR_LEFT;
				throwing3 = OFF;
			}
			else{
				enemy_special_atack_left_X3 -= CADR;
			}
		}
		else if((enemy_position3 - Xposition) <= 500 && (enemy_position3 - Xposition) >= 400 && throwing3 == OFF && stay_player == ON){
			enemy3_run = OFF;
			enemy_stay_left3();
		}
		else if ((enemy_position3 - Xposition) <= 500 && (enemy_position3 - Xposition) >= 400 && stay_player == OFF) {
			enemy_run3();
		}
		else if ((enemy_position3 - Xposition) > 500) {
			enemy_run3();
		}
		else if ((enemy_position3 - Xposition) >= 0 && (enemy_position3 - Xposition) <= 60 && stay_player == ON && atacking3 == ON) {
			enemy3_run = OFF;
			atacking3 = OFF;
			atack3();
		}
		else if((enemy_position3 - Xposition) >= 0 && (enemy_position3 - Xposition) <= 60 && stay_player == OFF){
			enemy_run3();
		}
		else if((enemy_position3 - Xposition) > -20 && (enemy_position3 - Xposition) < 0 && atacking3 == ON){
			enemy3_run = OFF;
			atacking3 = OFF;
			atack3();
		}
		else if((enemy_position3 - Xposition) <= -20){
			enemy3_run = OFF;
			enemy_side3 = ON;
		}
	}
}


function atack3(){
	if (enemy_side3 == RIGHT) {
		enemy3.style.backgroundPositionX = '-' + enemy_atack_right_X3 + 'px';
		enemy3.style.backgroundPositionY = '-' + cadr_hit_height + 'px';

		if (enemy_atack_right_X3 == 2000) {
			enemy_atack_right_X3 = STANDART_FIRST_CADR_RIGHT;
			if (shield_up == OFF) {
				if (my_health > DAMAGE_MOOB){
					my_health -= DAMAGE_MOOB;
					health_width -= DAMAGE_MOOB * 2;
				}
				else{
					my_health -= 0;
					health_width -= 0;
				}
				Health.style.width = health_width + 'px'
				Health.innerHTML = (health_width / 2);
				if (my_health > 0) {
					my_pain();
				}
			}
			else{
				block_sound() 
			}
		setTimeout(function(){atacking3 = ON;}, 750);
		}
		else{
			enemy_atack_right_X3 += CADR;
			setTimeout(atack3, 70);
		}
	}
	if (enemy_side3 == LEFT) {
		enemy3.style.backgroundPositionX = '-' + enemy_atack_left_X3 + 'px';
		enemy3.style.backgroundPositionY = '-' + cadr_hit_height + 'px';

		if (enemy_atack_left_X3 <= 350) {
			enemy_atack_left_X3 = STANDART_FIRST_CADR_LEFT;
			if (shield_up == OFF) {
				if (my_health > DAMAGE_MOOB){
					my_health -= DAMAGE_MOOB;
					health_width -= DAMAGE_MOOB * 2;
				}
				else{
					my_health -= 0;
					health_width -= 0;
				}
				Health.style.width = health_width + 'px'
				Health.innerHTML = (health_width / 2);
				if (my_health > 0) {
					my_pain();
				}
			}
			else{
				block_sound() 
			}
		setTimeout(function(){atacking3 = ON;}, 750);	
		}
		else{
			enemy_atack_left_X3 -= CADR;
			setTimeout(atack3, 70);
		}
	}
}




function enemy_run3(){
	enemy3_run = ON;
	if (enemy_side3 == RIGHT) {
		enemy3.style.backgroundPositionX = '-' + enemy_run_right_X3 + 'px';
		enemy3.style.backgroundPositionY = '-' + cadr_height + 'px';

		if (enemy_run_right_X3 >= 2300) {
			enemy_run_right_X3 = STANDART_FIRST_CADR_RIGHT;
		}
		else{
			enemy_run_right_X3 += CADR;
		}
	}
	if (enemy_side3 == LEFT) {
		enemy3.style.backgroundPositionX = '-' + enemy_run_left_X3 + 'px';
		enemy3.style.backgroundPositionY = '-' + cadr_height + 'px';

		if (enemy_run_left_X3 <= 50) {
			enemy_run_left_X3 = STANDART_FIRST_CADR_LEFT;
		}
		else{
			enemy_run_left_X3 -= CADR;
		}
	}
}

function enemy_stay_right3(){
	enemy_health_bar3.style.left = '0px';
	enemy3.style.backgroundPositionX = '-' + enemy_stay_right_X3 + 'px';
	enemy3.style.backgroundPositionY = '-' + cadr_height_stay + 'px';
}

function enemy_stay_left3(){
	enemy_health_bar3.style.left = '40px';
	enemy3.style.backgroundPositionX = '-' + enemy_stay_left_X3 + 'px';
	enemy3.style.backgroundPositionY = '-' + cadr_height_stay + 'px';
}

function create_spear3(){
	spear_position3 = enemy_position3;
	spear3.style.left = spear_position3 + 'px';
	mooving_spear3();
}

function mooving_spear3(){
	if (enemy_side3 == RIGHT) {
		spear3.style.backgroundPositionY = '0px';
		if (spear_position3 < (Xposition - 35)) {
			spear_position3 += 5;
			spear3.style.left = spear_position3 + 'px';
			setTimeout(mooving_spear3, 5);
		}
		else{
			if (shield_up == OFF) {
				if (my_health >= DAMAGE_SPEAR){
					my_health -= DAMAGE_SPEAR;
					health_width -= DAMAGE_SPEAR * 2;
				}
				else{
					my_health = 0;
					health_width = 0;
				}
				Health.style.width = health_width + 'px'
				Health.innerHTML = (health_width / 2);
				if (my_health > 0) {
					my_pain();
				}
			}
			setTimeout(function(){throwing3 = ON}, 750);
			spear3.style.left = '-1100px';
		}
	}
	else{
		spear3.style.backgroundPositionY = '-15px';
		if (spear_position3 > (Xposition + 35)) {
			spear_position3 -= 5;
			spear3.style.left = spear_position3 + 'px';
			setTimeout(mooving_spear3, 5);
		}
		else{
			if (shield_up == OFF) {
				if (my_health >= DAMAGE_SPEAR){
					my_health -= DAMAGE_SPEAR;
					health_width -= DAMAGE_SPEAR * 2;
				}
				else{
					my_health = 0;
					health_width = 0;
				}
				Health.style.width = health_width + 'px'
				Health.innerHTML = (health_width / 2);
				if (my_health > 0) {
					my_pain();
				}
			}
			setTimeout(function(){throwing3 = ON}, 750);
			spear3.style.left = '-1100px';
		}
	}	
}

function enemy_pain3(){
	stun3 = ON;
	if(side == LEFT){
		enemy3.style.backgroundPositionX = '-' + enemy_pain_right_X3 + 'px';
		enemy3.style.backgroundPositionY = '-' + pain_Y + 'px';

		if (enemy_pain_right_X3 >= 1550) {
			enemy_pain_right_X3 = STANDART_FIRST_CADR_RIGHT;
			setTimeout(function(){stun3 = OFF;}, 50);
		}
		else{
			enemy_pain_right_X3 += CADR;
			setTimeout(enemy_pain3, 150); 
		}
	}
	else{
		enemy3.style.backgroundPositionX = '-' + enemy_pain_left_X3 + 'px';
		enemy3.style.backgroundPositionY = '-' + pain_Y + 'px';

		if (enemy_pain_left_X3 <= 800) {
			enemy_pain_left_X3 = STANDART_FIRST_CADR_LEFT;
			setTimeout(function(){stun3 = OFF;}, 50);
		}
		else{
			enemy_pain_left_X3 -= CADR;
			setTimeout(enemy_pain3, 150); 
		}
	}
}


function is_moob_alive3(){
	if (health_of_enemy3 <= 0) {
		dead3 = ON;
		enemy3.style.opacity = '0';
		setTimeout(function(){enemy3.style.top = '0px'}, 3000);
	}
	else{
		setTimeout(is_moob_alive3, 50);
	}
}

function moob_is_dead3(){
	dead3 = ON;
	if (side == RIGHT) {
		enemy3.style.backgroundPositionX = '-' + enemy_dead_left_X3 + 'px';
		enemy3.style.backgroundPositionY = '-' + deadly_Y + 'px';

		if (enemy_dead_left_X3 == 200) {
			enemy_dead_left_X3 = STANDART_FIRST_CADR_LEFT;
			enemy3.style.opacity = '0';
			setTimeout(function(){enemy3.style.top = '0px'}, 3000);
		}
		else{
			enemy_dead_left_X3 -= CADR;
			setTimeout(moob_is_dead3, 100);
		}
	}
	else{
		enemy3.style.backgroundPositionX = '-' + enemy_dead_right_X3 + 'px';
		enemy3.style.backgroundPositionY = '-' + deadly_Y + 'px';

		if (enemy_dead_right_X3 == 2150) {
			enemy_dead_right_X3 = STANDART_FIRST_CADR_RIGHT;
			enemy3.style.opacity = '0';
			setTimeout(function(){enemy3.style.top = '0px'}, 3000);
		}
		else{
			enemy_dead_right_X3 += CADR;
			setTimeout(moob_is_dead3, 100);
		}
	}
}

function moving_enemy3(){
	if (enemy3_run == ON && enemy_side3 == RIGHT) {
		if (stay_player == ON || side == LEFT) {
			enemy_position3 += 2;
			enemy3.style.left = enemy_position3 + 'px';
		}
	}
	if (enemy3_run == ON && enemy_side3 == LEFT) {
		if (stay_player == ON || side == RIGHT || length_of_walk <= -200) {
			enemy_position3 -= 2;
			enemy3.style.left = enemy_position3 + 'px';
		}
	}
	setTimeout(moving_enemy3, 7);
}