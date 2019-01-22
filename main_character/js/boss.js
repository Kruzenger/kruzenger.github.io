



function boss_intelegence(){
	if (boss_atack == OFF) {
	}
	else if(boss_side == RIGHT){
		if ((boss_position - Xposition) <= -100 && boss_now_attacks_or_not == OFF) {
			boss_run();
		}
		else if((boss_position - Xposition) > -150 && (boss_position - Xposition) <= 0){
			if(stay_player == ON && boss_might_attack == ON){
				boss_run_or_not = OFF;
				boss_hit();
			}
			else if (stay_player == OFF && boss_now_attacks_or_not == OFF) {
				boss_run();
			}
			else if (stay_player == ON && boss_might_attack == OFF && boss_now_attacks_or_not == OFF) {
				boss_run_or_not = OFF;
				boss_staying_right();
			}
		}
		else if((boss_position - Xposition) > 0 && boss_now_attacks_or_not == OFF){
			boss_side = LEFT;
		}
	}
	else if(boss_side == LEFT){
		if ((boss_position - Xposition) >= 100 && boss_now_attacks_or_not == OFF) {
			boss_run();
		}
		else if((boss_position - Xposition) <= 150 && (boss_position - Xposition) >= 0){
			if(stay_player == ON && boss_might_attack == ON){
				boss_run_or_not = OFF;
				boss_hit();
			}
			else if (stay_player == OFF && boss_now_attacks_or_not == OFF) {
				boss_run();
			}
			else if (stay_player == ON && boss_might_attack == OFF && boss_now_attacks_or_not == OFF) {
				boss_run_or_not = OFF;
				boss_staying_left();
			}
		}
		else if((boss_position - Xposition) < 0 && boss_now_attacks_or_not == OFF){
			boss_side = RIGHT;
		}
	}
}


function boss_run(){ 
	boss_run_or_not = ON;
	if(boss_side == RIGHT){
		boss.style.backgroundPositionX = '-' + boss_run_right_X + 'px';
		boss.style.backgroundPositionY = '-' + boss_run_Y + 'px';

		if(boss_run_right_X >= 3000){
			boss_run_right_X = 1600;
		}
		else{
			boss_run_right_X += 200;
		}
	}
	else{
		boss.style.backgroundPositionX = '-' + boss_run_left_X + 'px';
		boss.style.backgroundPositionY = '-' + boss_run_Y + 'px';

		if(boss_run_left_X <= 0){
			boss_run_left_X = 1400;
		}
		else{
			boss_run_left_X -= 200;
		}
	}
}

function boss_moving(){
	if (boss_run_or_not == ON && boss_side == RIGHT && (side == LEFT || stay_player == ON) && boss_now_attacks_or_not == OFF) {
		boss_position += 2;
		boss.style.left = boss_position + 'px';
	}
	else if (boss_run_or_not == ON && boss_side == LEFT && (side == RIGHT || stay_player == ON) && boss_now_attacks_or_not == OFF) {
		boss_position -= 2;
		boss.style.left = boss_position + 'px';
	}
}

function boss_staying_right(){
	boss_side = RIGHT;
	boss.style.backgroundPositionX = '-' + boss_stay_right_X + 'px';
	boss.style.backgroundPositionY = '-' + boss_stay_Y + 'px'; 
}

function boss_staying_left(){
	boss_side = LEFT;
	boss.style.backgroundPositionX = '-' + boss_stay_left_X + 'px';
	boss.style.backgroundPositionY = '-' + boss_stay_Y + 'px'; 
}

function boss_hit(){
	boss_now_attacks_or_not = ON;
	boss_might_attack = OFF;
	if (boss_side == RIGHT) {
		boss.style.backgroundPositionX = '-' + boss_hit_right_X + 'px';
		boss.style.backgroundPositionY = '-' + boss_hit_Y + 'px'; 

		if (boss_hit_right_X >= 2600) {
			boss_now_attacks_or_not = OFF;
			boss_hit_right_X = 1600;
			if (boss_health > 400) {
				setTimeout(function(){
					boss_might_attack = ON;
				}, 1500);
			}
			if (boss_health <= 400 && boss_health >= 200) {
				setTimeout(function(){
					boss_might_attack = ON;
				}, 1200);
			}
			if (boss_health < 200) {
				setTimeout(function(){
					boss_might_attack = ON;
				}, 1000);
			}
			if ((boss_position - Xposition) <= 10 && (boss_position - Xposition) > -150) {
				if (shield_up == OFF) { 
					if (my_health >= DAMAGE_BOSS){
						my_health -= DAMAGE_BOSS;
						health_width -= DAMAGE_BOSS * 2;
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
					if (my_health >= DAMAGE_BOSS_TROW_THE_SHIELD){
						my_health -= DAMAGE_BOSS_TROW_THE_SHIELD;
						health_width -= DAMAGE_BOSS_TROW_THE_SHIELD * 2;
					}
					else{
						my_health = 0;
						health_width = 0;
					}
					Health.style.width = health_width + 'px'
					Health.innerHTML = (health_width / 2);
					block_sound() 
				}
			}
		}
		else{
			boss_hit_right_X += 200;
			if (boss_hit_right_X < 2400 || boss_hit_right_X == 2600) {
				setTimeout(boss_hit, 70);
			}
			else{
				if (boss_health > 400) {
					setTimeout(boss_hit, 1000);
				}
				if (boss_health <= 400 && boss_health >= 200) {
					setTimeout(boss_hit, 900);
				}
				if (boss_health < 200) {
					setTimeout(boss_hit, 800);
				}
			}
		}
	}
	else{
		boss.style.backgroundPositionX = '-' + boss_hit_left_X + 'px';
		boss.style.backgroundPositionY = '-' + boss_hit_Y + 'px'; 

		if (boss_hit_left_X <= 400) {
			boss_now_attacks_or_not = OFF;
			boss_hit_left_X = 1400;
			if (boss_health > 400) {
				setTimeout(function(){
					boss_might_attack = ON;
				}, 1500);
			}
			if (boss_health <= 400 && boss_health >= 200) {
				setTimeout(function(){
					boss_might_attack = ON;
				}, 1200);
			}
			if (boss_health < 200) {
				setTimeout(function(){
					boss_might_attack = ON;
				}, 1000);
			}
			if ((boss_position - Xposition) >= -10 && (boss_position - Xposition) < 150) {
				if (shield_up == OFF) { 
					if (my_health >= DAMAGE_BOSS){
						my_health -= DAMAGE_BOSS;
						health_width -= DAMAGE_BOSS * 2;
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
					if (my_health >= DAMAGE_BOSS_TROW_THE_SHIELD){
						my_health -= DAMAGE_BOSS_TROW_THE_SHIELD;
						health_width -= DAMAGE_BOSS_TROW_THE_SHIELD * 2;
					}
					else{
						my_health = 0;
						health_width = 0;
					}
					Health.style.width = health_width + 'px'
					Health.innerHTML = (health_width / 2);
					block_sound() 
				}
			}
		}
		else{
			boss_hit_left_X -= 200;
			if (boss_hit_left_X > 600 || boss_hit_left_X == 400) {
				setTimeout(boss_hit, 70);
			}
			else{
				if (boss_health > 400) {
					setTimeout(boss_hit, 1000);
				}
				if (boss_health <= 400 && boss_health >= 200) {
					setTimeout(boss_hit, 900);
				}
				if (boss_health < 200) {
					setTimeout(boss_hit, 800);
				}
			}
		}
	}
}

function is_boss_alive(){
	if (boss_health <= 0) {
		boss_atack = OFF;
		boss.style.opacity = '0';
	}
}


function what_fase_it_now(){
	if (boss_health == 500 && boss_fase1 == OFF) {
		boss_fase1 = ON;
		boss_atack = OFF;
		rain_of_spears();
	}
	else if (boss_health == 400 && boss_fase2 == OFF){
		boss_fase2 = ON;
		boss_atack = OFF;
		rain_of_spears();
	}
	else if (boss_health == 300 && boss_fase3 == OFF){
		boss_fase3 = ON;
		boss_atack = OFF;
		rain_of_spears();
	}
	else if (boss_health == 200 && boss_fase4 == OFF){
		boss_fase4 = ON;
		boss_atack = OFF;
		rain_of_spears();
	}
	else if (boss_health == 100 && boss_fase5 == OFF){
		boss_fase5 = ON;
		boss_atack = OFF;
		rain_of_spears();
	}
}

function rain_of_spears(){
	spear_boss1.style.top = '-3875px';
	spear_boss2.style.top = '-4175px';
	spear_boss3.style.top = '-4475px';
	spear_boss1_position = boss_position - 5;
	spear_boss2_position = boss_position;
	spear_boss3_position = boss_position + 5;
	spear_boss1.style.left = spear_boss1_position + 'px';
	spear_boss2.style.left = spear_boss2_position + 'px';
	spear_boss3.style.left = spear_boss3_position + 'px';
	move_spears_boss_up();
}

function move_spears_boss_up(){
	if (spear_boss1_position_Y >= -4375) {
		spear_boss1_position_Y -= 5;
		spear_boss2_position_Y -= 5;
		spear_boss3_position_Y -= 5;
		spear_boss1.style.top = spear_boss1_position_Y + 'px';
		spear_boss2.style.top = spear_boss2_position_Y + 'px';
		spear_boss3.style.top = spear_boss3_position_Y + 'px';
		setTimeout(move_spears_boss_up, 5);
	}
	else{
		wait_and_drop_spears();
	}
}

function wait_and_drop_spears(){
	spear_boss1_position = randomInteger(-500, 500);
	spear_boss2_position = randomInteger(-500, 500);
	spear_boss3_position = randomInteger(-500, 500);
	spear_boss1.style.left = spear_boss1_position + 'px';
	spear_boss2.style.left = spear_boss2_position + 'px';
	spear_boss3.style.left = spear_boss3_position + 'px';
	voskl1.style.top = '-4480px';
	voskl2.style.top = '-4530px';
	voskl3.style.top = '-4580px';
	voskl1_position = spear_boss1_position;
	voskl2_position = spear_boss2_position;
	voskl3_position = spear_boss3_position;
	voskl1.style.left = voskl1_position + 'px';
	voskl2.style.left = voskl2_position + 'px';
	voskl3.style.left = voskl3_position + 'px';
	voskl1.style.visibility = 'visible';
	voskl2.style.visibility = 'visible';
	voskl3.style.visibility = 'visible';
	setTimeout(function(){
		spear_boss1.style.backgroundPositionX = '-10px';
		spear_boss2.style.backgroundPositionX = '-10px';
		spear_boss3.style.backgroundPositionX = '-10px';
		voskl1.style.visibility = 'hidden';
		voskl2.style.visibility = 'hidden';
		voskl3.style.visibility = 'hidden';

		move_spears_boss_down();
	}, 1500);
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function move_spears_boss_down(){
	if (spear_boss1_position_Y < -3675) {
		spear_boss1_position_Y += 5;
		spear_boss2_position_Y += 5;
		spear_boss3_position_Y += 5;

		spear_boss1.style.top = spear_boss1_position_Y + 'px';
		spear_boss2.style.top = spear_boss2_position_Y + 'px';
		spear_boss3.style.top = spear_boss3_position_Y + 'px';
		setTimeout(move_spears_boss_down, 5);
	}
	else{
		if (spear_boss1_position < 50 && spear_boss1_position > -50) {
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
		if (spear_boss2_position < 50 && spear_boss2_position > -50) {
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
		if (spear_boss3_position < 50 && spear_boss3_position > -50) {
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
		boss_atack = ON;
	}
}