




function searching1(){
	if (dead1 == OFF) {
		if (enemy_atack1 == OFF) {
			if (enemy_side1 == RIGHT) {
				enemy_health_bar1.style.left = '0px';
				if ((enemy_position1 - Xposition) < 0 && (enemy_position1 - Xposition) >= -500) {
					if (stun1 == OFF) {
						enemy_run_and_atack1();
					}
				}
				else{
					if (stay_enemy1 == ON) {
						enemy_stay1();
					}
				}
			}
			else{
				if ((enemy_position1 - Xposition) > 0 && (enemy_position1 - Xposition) <= 500) {
					if (stun1 == OFF) {
						enemy_run_and_atack1();
					}
				}
				else{
					enemy_health_bar1.style.left = '40px';
					if (stay_enemy1 == ON) {
						enemy_stay1();
					}
				}
			}
			setTimeout(searching1, 50);
		}
		else{
			if (stun1 == OFF) {
				enemy_run_and_atack1();
			}
			setTimeout(searching1, 50);
		}
	}
}


function enemy_stay1(){
	stay_enemy1 = OFF;
	if (enemy_side1 == RIGHT) {
		enemy_side1 = LEFT;
		enemy_stay_left1();
	} 
	else{
		enemy_side1 = RIGHT;
		enemy_stay_right1();
	}
	setTimeout(change_stay1, 5000);
}

function change_stay1(){
	stay_enemy1 = ON;
}

function enemy_run_and_atack1(){
	enemy_atack1 = ON;
	if (enemy_side1 == RIGHT) {
		enemy_health_bar1.style.left = '0px';
		if (((enemy_position1 - Xposition) >= -400 && (enemy_position1 - Xposition) <= -60)) {
			enemy_run1();
		}
		else if((enemy_position1 - Xposition) >= -500 && (enemy_position1 - Xposition) <= -400 && throwing1 == ON && stay_player == ON){
			enemy1_run = OFF;

			enemy1.style.backgroundPositionX = '-' + enemy_special_atack_right_X1 + 'px';
			enemy1.style.backgroundPositionY = '-' + cadr_special_attack_height + 'px';

			if (enemy_special_atack_right_X1 == 1850) {
				create_spear1();
			}

			if (enemy_special_atack_right_X1 == 2300) {
				enemy_special_atack_right_X1 = STANDART_FIRST_CADR_RIGHT;
				throwing1 = OFF;
			}
			else{
				enemy_special_atack_right_X1 += CADR;
			}
		}
		else if((enemy_position1 - Xposition) >= -500 && (enemy_position1 - Xposition) <= -400 && throwing1 == OFF && stay_player == ON){
			enemy1_run = OFF;
			enemy_stay_right1();
		}
		else if ((enemy_position1 - Xposition) >= -500 && (enemy_position1 - Xposition) <= -400 && stay_player == OFF) {
			enemy_run1();
		}
		else if ((enemy_position1 - Xposition) < -500) {
			enemy_run1();
		}
		else if ((enemy_position1 - Xposition) <= 0 && (enemy_position1 - Xposition) >= -60 && stay_player == ON && atacking1 == ON) {
			enemy1_run = OFF;
			atacking1 = OFF;
			atack1();
		}
		else if((enemy_position1 - Xposition) <= 0 && (enemy_position1 - Xposition) >= -60 && stay_player == OFF){
			enemy_run1();
		}
		else if((enemy_position1 - Xposition) < 20 && (enemy_position1 - Xposition) > 0 && atacking1 == ON){
			enemy1_run = OFF;
			atacking1 = OFF;
			atack1();
		}
		else if ((enemy_position1 - Xposition) >= 20){
			enemy1_run = OFF;
			enemy_side1 = LEFT;
		}
	}
	////////////////////////////////////////////////////////////////////////////////////////

	if (enemy_side1 == LEFT) {
		enemy_health_bar1.style.left = '40px';
		if ((enemy_position1 - Xposition) <= 400 && (enemy_position1 - Xposition) >= 60) {
			enemy_run1();
		}
		else if((enemy_position1 - Xposition) <= 500 && (enemy_position1 - Xposition) > 400 && throwing1 == ON && stay_player == ON){
			enemy1_run = OFF;
			enemy1.style.backgroundPositionX = '-' + enemy_special_atack_left_X1 + 'px';
			enemy1.style.backgroundPositionY = '-' + cadr_special_attack_height + 'px';

			if (enemy_special_atack_left_X1 == 650) {
				create_spear1();
			}

			if (enemy_special_atack_left_X1 <= 50) {
				enemy_special_atack_left_X1 = STANDART_FIRST_CADR_LEFT;
				throwing1 = OFF;
			}
			else{
				enemy_special_atack_left_X1 -= CADR;
			}
		}
		else if((enemy_position1 - Xposition) <= 500 && (enemy_position1 - Xposition) >= 400 && throwing1 == OFF && stay_player == ON){
			enemy1_run = OFF;
			enemy_stay_left1();
		}
		else if ((enemy_position1 - Xposition) <= 500 && (enemy_position1 - Xposition) >= 400 && stay_player == OFF) {
			enemy_run1();
		}
		else if ((enemy_position1 - Xposition) > 500) {
			enemy_run1();
		}
		else if ((enemy_position1 - Xposition) >= 0 && (enemy_position1 - Xposition) <= 60 && stay_player == ON && atacking1 == ON) {
			enemy1_run = OFF;
			atacking1 = OFF;
			atack1();
		}
		else if((enemy_position1 - Xposition) >= 0 && (enemy_position1 - Xposition) <= 60 && stay_player == OFF){
			enemy_run1();
		}
		else if((enemy_position1 - Xposition) > -20 && (enemy_position1 - Xposition) < 0 && atacking1 == ON){
			enemy1_run = OFF;
			atacking1 = OFF;
			atack1();
		}
		else if((enemy_position1 - Xposition) <= -20){
			enemy1_run = OFF;
			enemy_side1 = ON;
		}
	}
}


function atack1(){
	if (enemy_side1 == RIGHT) {
		enemy1.style.backgroundPositionX = '-' + enemy_atack_right_X1 + 'px';
		enemy1.style.backgroundPositionY = '-' + cadr_hit_height + 'px';

		if (enemy_atack_right_X1 == 2000) {
			enemy_atack_right_X1 = STANDART_FIRST_CADR_RIGHT;
			if (shield_up == OFF) {
				if (my_health >= DAMAGE_MOOB){
					my_health -= DAMAGE_MOOB;
					health_width -= DAMAGE_MOOB * 2;
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
			else{
				block_sound() 
			}
		setTimeout(function(){atacking1 = ON;}, 750);
		}
		else{
			enemy_atack_right_X1 += CADR;
			setTimeout(atack1, 70);
		}
	}
	if (enemy_side1 == LEFT) {
		enemy1.style.backgroundPositionX = '-' + enemy_atack_left_X1 + 'px';
		enemy1.style.backgroundPositionY = '-' + cadr_hit_height + 'px';

		if (enemy_atack_left_X1 <= 350) {
			enemy_atack_left_X1 = STANDART_FIRST_CADR_LEFT;
			if (shield_up == OFF) {
				if (my_health >= DAMAGE_MOOB){
					my_health -= DAMAGE_MOOB;
					health_width -= DAMAGE_MOOB * 2;
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
			else{
				block_sound() 
			}
		setTimeout(function(){atacking1 = ON;}, 750);	
		}
		else{
			enemy_atack_left_X1 -= CADR;
			setTimeout(atack1, 70);
		}
	}
}




function enemy_run1(){
	console.log(2);
	enemy1_run = ON;
	if (enemy_side1 == RIGHT) {
		enemy1.style.backgroundPositionX = '-' + enemy_run_right_X1 + 'px';
		enemy1.style.backgroundPositionY = '-' + cadr_height + 'px';

		if (enemy_run_right_X1 >= 2300) {
			enemy_run_right_X1 = STANDART_FIRST_CADR_RIGHT;
		}
		else{
			enemy_run_right_X1 += CADR;
		}
	}
	if (enemy_side1 == LEFT) {
		enemy1.style.backgroundPositionX = '-' + enemy_run_left_X1 + 'px';
		enemy1.style.backgroundPositionY = '-' + cadr_height + 'px';

		if (enemy_run_left_X1 <= 50) {
			enemy_run_left_X1 = STANDART_FIRST_CADR_LEFT;
		}
		else{
			enemy_run_left_X1 -= CADR;
		}
	}
}

function enemy_stay_right1(){
	enemy_health_bar1.style.left = '0px';
	enemy1.style.backgroundPositionX = '-' + enemy_stay_right_X1 + 'px';
	enemy1.style.backgroundPositionY = '-' + cadr_height_stay + 'px';
}

function enemy_stay_left1(){
	enemy_health_bar1.style.left = '40px';
	enemy1.style.backgroundPositionX = '-' + enemy_stay_left_X1 + 'px';
	enemy1.style.backgroundPositionY = '-' + cadr_height_stay + 'px';
}

function create_spear1(){
	spear_position1 = enemy_position1;
	spear1.style.left = spear_position1 + 'px';
	mooving_spear1();
}

function mooving_spear1(){
	if (enemy_side1 == RIGHT) {
		spear1.style.backgroundPositionY = '0px';
		if (spear_position1 < (Xposition - 35)) {
			spear_position1 += 5;
			spear1.style.left = spear_position1 + 'px';
			setTimeout(mooving_spear1, 5);
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
			setTimeout(function(){throwing1 = ON}, 750);
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
			setTimeout(function(){throwing1 = ON}, 750);
			spear1.style.left = '-1100px';
		}
	}	
}

function enemy_pain1(){
	stun1 = ON;
	if(side == LEFT){
		enemy1.style.backgroundPositionX = '-' + enemy_pain_right_X1 + 'px';
		enemy1.style.backgroundPositionY = '-' + pain_Y + 'px';

		if (enemy_pain_right_X1 >= 1550) {
			enemy_pain_right_X1 = STANDART_FIRST_CADR_RIGHT;
			stun1 = OFF;
		}
		else{
			enemy_pain_right_X1 += CADR;
			setTimeout(enemy_pain1, 150); 
		}
	}
	else{
		enemy1.style.backgroundPositionX = '-' + enemy_pain_left_X1 + 'px';
		enemy1.style.backgroundPositionY = '-' + pain_Y + 'px';

		if (enemy_pain_left_X1 <= 800) {
			enemy_pain_left_X1 = STANDART_FIRST_CADR_LEFT;
			stun1 = OFF;
		}
		else{
			enemy_pain_left_X1 -= CADR;
			setTimeout(enemy_pain1, 150); 
		}
	}
}


function is_moob_alive1(){
	if (health_of_enemy1 <= 0) {
		setTimeout(function(){
			stun1 = ON;
		}, 300);
		enemy1.style.opacity = '0';
		setTimeout(function(){
			enemy_position1 = 3000;
			enemy1.style.left = enemy_position1 + 'px';
			enemy_atack1 = OFF;
			stun1 = OFF;
			enemy1.style.opacity = '1';
		}, 3000);
		health_of_enemy1 = 100;
		health_of_enemy_width1 = 100;
		enemy_health1.style.width = health_of_enemy1 + 'px';
	}
	setTimeout(is_moob_alive1, 50);
}


function moob_is_dead1(){
	dead1 = ON;
	if (side == RIGHT) {
		enemy1.style.backgroundPositionX = '-' + enemy_dead_left_X1 + 'px';
		enemy1.style.backgroundPositionY = '-' + deadly_Y + 'px';

		if (enemy_dead_left_X1 == 200) {
			enemy_dead_left_X1 = STANDART_FIRST_CADR_LEFT;
			enemy1.style.opacity = '0';
		}
		else{
			enemy_dead_left_X1 -= CADR;
			setTimeout(moob_is_dead1, 100);
		}
	}
	else{
		enemy1.style.backgroundPositionX = '-' + enemy_dead_right_X1 + 'px';
		enemy1.style.backgroundPositionY = '-' + deadly_Y + 'px';

		if (enemy_dead_right_X1 == 2150) {
			enemy_dead_right_X1 = STANDART_FIRST_CADR_RIGHT;
			enemy1.style.opacity = '0';
		}
		else{
			enemy_dead_right_X1 += CADR;
			setTimeout(moob_is_dead1, 100);
		}
	}
}

function moving_enemy1(){
	if (enemy1_run == ON && enemy_side1 == RIGHT) {
		if (stay_player == ON || side == LEFT) {
			enemy_position1 += 2;
			enemy1.style.left = enemy_position1 + 'px';
		}
	}
	if (enemy1_run == ON && enemy_side1 == LEFT) {
		if (stay_player == ON || side == RIGHT || length_of_walk <= -200) {
			enemy_position1 -= 2;
			enemy1.style.left = enemy_position1 + 'px';
		}
	}
	setTimeout(moving_enemy1, 7);
}