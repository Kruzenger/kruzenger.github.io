

me_stun = ON;
setTimeout(function(){ me_stun = OFF; }, 3000);



is_moob_alive1();

is_moob_alive2();

is_moob_alive3();

searching1();

searching2();

searching3();

moving_enemy1();

moving_enemy2();

moving_enemy3();

NPC_what_to_do();

setInterval(npc_moving_run, 5);

setInterval(am_I_alive, 50);

setInterval(Stamina_fulling, 75);

setInterval(where_am_I, 100);

setInterval(moving, 5);

setInterval(self_healing, 1500);

setInterval(hear_character, 50);




///////////////////////////////////////////////DESKTOP/////////////////////////////////////////////





addEventListener("keydown", WAlking);

function WAlking(e){
		switch(e.keyCode){
       		case 65:    // если нажата клавиша A
       			if (me_stun == OFF && me_dead == OFF && me_run == OFF) {
       				stay_player = OFF;
        			couldness = OFF;
        			press = ON + 2;
        			side = LEFT;
        			me_run = ON;
        			run_left = ON;
        			run_right = OFF;
        			if (play_or_not == OFF) {
        				run_aud.play();
        				play_or_not = ON;
        			}
        			click = ON;
        			walk();
				}
				break;
       		case 68:  	// если нажата клавиша D
       			if (me_stun == OFF && me_dead == OFF && me_run == OFF) {
        			stay_player = OFF;
        			couldness = OFF;
        			press = ON + 3;
        			me_run = ON;
        			side = RIGHT; 
        			run_right = ON;
        			run_left = OFF;
        			if (play_or_not == OFF) {
        				run_aud.play();
        				play_or_not = ON;
        			}
        			click = ON;
           			walk();  
				}
				break;
			case 87:
				if (me_stun == OFF && me_dead == OFF && me_jamp == OFF) {
					me_jamp = ON;
					stay_player = OFF;
					me_stun = ON;
					press = ON;
					click = ON;
					jamp();
				}
				break;
        	case 16: 	// если нажата клавиша Shift
        		if (my_stamina >= CHARGE_VALUE && couldness == ON && me_stun == OFF && me_dead == OFF) {
        			run_right = OFF;
					run_left = OFF
        			cooldown = ON;
        			shifting = ON;
 					setTimeout(function(){cooldown = OFF;}, 100);
        			press = ON;
        			my_stamina -= CHARGE_VALUE;
        			stamina_width -= (CHARGE_VALUE * 2)
 					Stamina.style.width = stamina_width + 'px';
 					Stamina.innerHTML = (stamina_width / 2);
					main_character.style.width = '250px';
					click = ON;
        			charge();
        		}
        		break;
 			case 83:    // если нажата клавиша S
 				if (me_stun == OFF && me_dead == OFF) {
 					run_right = OFF;
					run_left = OFF
 					shield_up = ON + 1;
 					stay_player = ON;
 					couldness = OFF;
 					press = ON;
 					click = ON;
 					shield();
 				}
 				break;
 			case 81: 	// если нажата клавиша Q
 				if (my_stamina >= HIT_VALUE && cooldown == OFF && me_stun == OFF && me_dead == OFF) {
 					run_right = OFF;
					run_left = OFF
 					cooldown = ON;
 					me_stun = ON;
 					setTimeout(function(){cooldown = OFF;}, 500);
 					press = ON;
 					my_stamina -= HIT_VALUE; 
 					stamina_width -= (HIT_VALUE * 2)
 					Stamina.style.width = stamina_width + 'px';
 					Stamina.innerHTML = (stamina_width / 2);
 					click = ON;
 					hit();
 				}
 				break;
 			case 69:
 				if (me_stun == OFF && me_dead == OFF && npc_talked == OFF && npc_angry == OFF) {
 					me_stun = ON;
 					setTimeout(function(){ me_stun = OFF; }, 1500);
 					talking();
 				}
 				break;
 			case 70:
 				if (me_stun == OFF && me_dead == OFF) {
 					use_healing();
 				}
    }
}

addEventListener("keyup", pre_cheking_stay);

function pre_cheking_stay(){
	me_run = OFF;

	run_aud.pause();
	play_or_not = OFF;
	setTimeout(function(){
		if (me_run == OFF) {
			run_right = OFF;
			run_left = OFF;
		}
	}, 500);
	me_atack = ON;
	if (press <= ON + 1) {
		press = OFF;
	}
	click = OFF;
	cadr_right_X = STANDART_FIRST_CADR_RIGHT;
	cadr_left_X = STANDART_FIRST_CADR_LEFT;
	stay_player = ON;
	couldness = ON;
	shield_up = OFF; 
	if (me_dead == OFF && me_stun == OFF) {
		setTimeout(check_staying, 300)
	}
}

function check_staying(){
	if (click == OFF) {
		stay_here();
	}
}

function repmake_150px(){
	main_character.style.width = '150px';
}

function stay_here(){
	repmake_150px();

	if (side == RIGHT) {
		main_character.style.backgroundPositionX = '-' + cadr_wight_stay_right + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height_stay + 'px';
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_wight_stay_left + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height_stay + 'px';
	}
}

function walk(){
	if (side == RIGHT && shield_up == OFF && me_run == ON) {
		

		main_character.style.backgroundPositionX = '-' + cadr_right_X + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height + 'px';

		if (cadr_right_X == 2300) {
			cadr_right_X = STANDART_FIRST_CADR_RIGHT;
		}
		else{
			cadr_right_X += CADR;
		}
		side = RIGHT;
		setTimeout(function(){
			if (press == ON + 3) {
				walk();
			}
		}, 50);
	}
	else if (side == LEFT  && shield_up == OFF && me_run == ON) {

		main_character.style.backgroundPositionX = '-' + cadr_left_X + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height + 'px';

		if (cadr_left_X == 50) {
			cadr_left_X = STANDART_FIRST_CADR_LEFT;
		}
		else{
			cadr_left_X -= CADR;
		}
		side = LEFT;
		setTimeout(function(){
			if (press == ON + 2) {
				walk();
			}
		}, 50);
	}
}

function charge(){

	if (side == RIGHT) {

		main_character.style.backgroundPositionX = '-' + cadr_charge_wight_right + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_special_attack_height + 'px';

		if(cadr_charge_wight_right != 2250){
			cadr_charge_wight_right += CADR_CHARGE;
			setTimeout(charge, 50);
		}
		else{
			if(enemy_side1 == RIGHT && (enemy_position1 - Xposition) >= -10 && (enemy_position1 - Xposition) <= 100) {		// all numbers is in px
				enemy_atack1 = ON;
				if (health_of_enemy1 > DAMAGE){
					health_of_enemy1 -= DAMAGE;
					health_of_enemy_width1 -= DAMAGE;
				}
				else{
					health_of_enemy1 = 0;
					health_of_enemy_width1 = 0;
				}
				enemy_health1.style.width = health_of_enemy_width1 + 'px';
				enemy_pain1();
			}
			if (enemy_side2 == RIGHT && (enemy_position2 - Xposition) >= -10 && (enemy_position2 - Xposition) <= 100) {		// all numbers is in px
				enemy_atack2 = ON;
				if (health_of_enemy2 > DAMAGE){
					health_of_enemy2 -= DAMAGE;
					health_of_enemy_width2 -= DAMAGE;
				}
				else{
					health_of_enemy2 = 0;
					health_of_enemy_width2 = 0;
				}
				enemy_health2.style.width = health_of_enemy_width2 + 'px';
				enemy_pain2();
			}
			if (enemy_side1 == LEFT && (enemy_position1 - Xposition) >= -20 && (enemy_position1 - Xposition) <= 80) {		// all numbers is in px
				if (health_of_enemy1 > DAMAGE){
					health_of_enemy1 -= DAMAGE;
					health_of_enemy_width1 -= DAMAGE;
				}
				else{
					health_of_enemy1 = 0;
					health_of_enemy_width1 = 0;
				}
				enemy_health1.style.width = health_of_enemy_width1 + 'px';
				enemy_pain1();
			}
			if (enemy_side2 == LEFT && (enemy_position2 - Xposition) >= -20 && (enemy_position2 - Xposition) <= 80) {		// all numbers is in px
				if (health_of_enemy2 > DAMAGE){
					health_of_enemy2 -= DAMAGE;
					health_of_enemy_width2 -= DAMAGE;
				}
				else{
					health_of_enemy2 = 0;
					health_of_enemy_width2 = 0;
				}
				enemy_health2.style.width = health_of_enemy_width2 + 'px';
				enemy_pain2();
			}
			if (enemy_side3 == RIGHT && (enemy_position3 - Xposition) >= -10 && (enemy_position3 - Xposition) <= 100) {		// all numbers is in px
				enemy_atack3 = ON;
				if (health_of_enemy3 > DAMAGE){
					health_of_enemy3 -= DAMAGE;
					health_of_enemy_width3 -= DAMAGE;
				}
				else{
					health_of_enemy3 = 0;
					health_of_enemy_width3 = 0;
				}
				enemy_health3.style.width = health_of_enemy_width3 + 'px';
				enemy_pain3();
			}
			if (enemy_side3 == LEFT && (enemy_position3 - Xposition) >= -20 && (enemy_position3 - Xposition) <= 80) {		// all numbers is in px
				if (health_of_enemy3 > DAMAGE){
					health_of_enemy3 -= DAMAGE;
					health_of_enemy_width3 -= DAMAGE;
				}
				else{
					health_of_enemy3 = 0;
					health_of_enemy_width3 = 0;
				}
				enemy_health3.style.width = health_of_enemy_width3 + 'px';
				enemy_pain3();
			}
			if (boss_side == RIGHT && (boss_position - Xposition) >= -10 && (boss_position - Xposition) <= 100) {		// all numbers is in px
				boss_atack = ON;
				if (boss_health > DAMAGE){
					boss_health -= DAMAGE;
					boss_health_width -= DAMAGE;
				}
				else{
					boss_health = 0;
					boss_health_width = 0;
				}
				boss_HP.style.width = boss_health_width + 'px';
			}
			if (boss_side == LEFT && (boss_position - Xposition) >= -20 && (boss_position - Xposition) <= 80) {		// all numbers is in px
				boss_atack = ON;
				if (boss_health > DAMAGE){
					boss_health -= DAMAGE;
					boss_health_width -= DAMAGE;
				}
				else{
					boss_health = 0;
					boss_health_width = 0;
				}
				boss_HP.style.width = boss_health_width + 'px';
			}
			cadr_charge_wight_right = STANDART_FIRST_CADR_RIGHT;
			setTimeout(repmake_150px, 50);
			shifting = OFF;
			setTimeout(stay_here, 50);
		}
	}
	else{

		main_character.style.backgroundPositionX = '-' + cadr_charge_wight_left + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_special_attack_height + 'px';

		if(cadr_charge_wight_left != 0){
			cadr_charge_wight_left -= CADR_CHARGE;
			setTimeout(charge, 50);
		}
		else{
			if(enemy_side1 == RIGHT && (enemy_position1 - Xposition) <= 10 && (enemy_position1 - Xposition) >= -100) {		// all numbers is in px
				enemy_atack1 = ON;
				if (health_of_enemy1 > DAMAGE){
					health_of_enemy1 -= DAMAGE;
					health_of_enemy_width1 -= DAMAGE;
				}
				else{
					health_of_enemy1 = 0;
					health_of_enemy_width1 = 0;
				}
				enemy_health1.style.width = health_of_enemy_width1 + 'px';
				enemy_pain1();
			}
			if (enemy_side2 == LEFT && (enemy_position2 - Xposition) <= 10 && (enemy_position2 - Xposition) >= -100) {		// all numbers is in px
				enemy_atack2 = ON;
				if (health_of_enemy2 > DAMAGE){
					health_of_enemy2 -= DAMAGE;
					health_of_enemy_width2 -= DAMAGE;
				}
				else{
					health_of_enemy2 = 0;
					health_of_enemy_width2 = 0;
				}
				enemy_health2.style.width = health_of_enemy_width2 + 'px';
				enemy_pain2();
			}
			
			if (enemy_side1 == RIGHT && (enemy_position1 - Xposition) <= 40 && (enemy_position1 - Xposition) >= -80) {		// all numbers is in px
				if (health_of_enemy1 > DAMAGE){
					health_of_enemy1 -= DAMAGE;
					health_of_enemy_width1 -= DAMAGE;
				}
				else{
					health_of_enemy1 = 0;
					health_of_enemy_width1 = 0;
				}
				enemy_health1.style.width = health_of_enemy_width1 + 'px';
				enemy_pain1();
			}
			if (enemy_side1 == RIGHT && (enemy_position2 - Xposition) <= 40 && (enemy_position2 - Xposition) >= -80) {		// all numbers is in px
				if (health_of_enemy2 > DAMAGE){
					health_of_enemy2 -= DAMAGE;
					health_of_enemy_width2 -= DAMAGE;
				}
				else{
					health_of_enemy2 = 0;
					health_of_enemy_width2 = 0;
				}
				enemy_health2.style.width = health_of_enemy_width2 + 'px';
				enemy_pain2();
			}
			if (enemy_side3 == LEFT && (enemy_position3 - Xposition) <= 10 && (enemy_position3 - Xposition) >= -100) {		// all numbers is in px
				enemy_atack3 = ON;
				if (health_of_enemy3 > DAMAGE){
					health_of_enemy3 -= DAMAGE;
					health_of_enemy_width3 -= DAMAGE;
				}
				else{
					health_of_enemy3 = 0;
					health_of_enemy_width3 = 0;
				}
				enemy_health3.style.width = health_of_enemy_width3 + 'px';
				enemy_pain3();
			}
			
			if (enemy_side3 == RIGHT && (enemy_position3 - Xposition) <= 40 && (enemy_position3 - Xposition) >= -80) {		// all numbers is in px
				if (health_of_enemy3 > DAMAGE){
					health_of_enemy3 -= DAMAGE;
					health_of_enemy_width3 -= DAMAGE;
				}
				else{
					health_of_enemy3 = 0;
					health_of_enemy_width3 = 0;
				}
				enemy_health3.style.width = health_of_enemy_width3 + 'px';
				enemy_pain3();
			}
			if (boss_side == LEFT && (boss_position - Xposition) <= 10 && (boss_position - Xposition) >= -100) {		// all numbers is in px
				boss_atack = ON;
				if (boss_health > DAMAGE){
					boss_health -= DAMAGE;
					boss_health_width -= DAMAGE;
				}
				else{
					boss_health = 0;
					boss_health_width = 0;
				}
				boss_HP.style.width = boss_health_width + 'px';
			}
			if (boss_side == RIGHT && (boss_position - Xposition) <= 40 && (boss_position - Xposition) >= -80) {		// all numbers is in px
				boss_atack = ON;
				if (boss_health > DAMAGE){
					boss_health -= DAMAGE;
					boss_health_width -= DAMAGE;
				}
				else{
					boss_health = 0;
					boss_health_width = 0;
				}
				boss_HP.style.width = boss_health_width + 'px';
			}
			setTimeout(repmake_150px, 50);
			cadr_charge_wight_left = 1000;
			shifting = OFF;
			setTimeout(stay_here, 50);
		}
	}
}

function shield(){
	if (side == RIGHT) {
		main_character.style.backgroundPositionX = '-' + cadr_wight_right_sheld + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height_stay + 'px';
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_wight_left_sheld + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height_stay + 'px';
	}
}

function hit(){
	if (side == RIGHT) {

		main_character.style.backgroundPositionX = '-' + cadr_hit_width_right + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_hit_height + 'px';

		if(cadr_hit_width_right < 1850){
			cadr_hit_width_right += CADR;
			setTimeout(hit, 50);
			sound_after_attack();
		}
		else{
			if (cadr_hit_width_right < 2050) {
				main_character.style.width = '200px';
				cadr_hit_width_right += 200;
				setTimeout(hit, 50);
			}
			else{
				if(enemy_side1 == RIGHT && (enemy_position1 - Xposition) >= 0 && (enemy_position1 - Xposition) <= 120) {		// all numbers is in px
					enemy_atack1 = ON;
					if (health_of_enemy1 > DAMAGE){
						health_of_enemy1 -= DAMAGE;
						health_of_enemy_width1 -= DAMAGE;
					}
					else{
						health_of_enemy1 = 0;
						health_of_enemy_width1 = 0;
					}
					enemy_health1.style.width = health_of_enemy_width1 + 'px';	
					enemy_pain1();
				}
				if (enemy_side2 == RIGHT && (enemy_position2 - Xposition) >= 0 && (enemy_position2 - Xposition) <= 120) {		// all numbers is in px
					enemy_atack2 = ON;
					if (health_of_enemy2 > DAMAGE){
						health_of_enemy2 -= DAMAGE;
						health_of_enemy_width2 -= DAMAGE;
					}
					else{
						health_of_enemy2 = 0;
						health_of_enemy_width2 = 0;
					}
					enemy_health2.style.width = health_of_enemy_width2 + 'px';
					enemy_pain2();
				}
				if (enemy_side1 == LEFT && (enemy_position1 - Xposition) >= -20 && (enemy_position1 - Xposition) <= 60) {		// all numbers is in px
					if (health_of_enemy1 > DAMAGE){
						health_of_enemy1 -= DAMAGE;
						health_of_enemy_width1 -= DAMAGE;
					}
					else{
						health_of_enemy1 = 0;
						health_of_enemy_width1 = 0;
					}
					enemy_health1.style.width = health_of_enemy_width1 + 'px';	
					enemy_pain1();
				}
				if (enemy_side2 == LEFT && (enemy_position2 - Xposition) >= -20 && (enemy_position2 - Xposition) <= 60) {		// all numbers is in px
					if (health_of_enemy2 > DAMAGE){
						health_of_enemy2 -= DAMAGE;
						health_of_enemy_width2 -= DAMAGE;
					}
					else{
						health_of_enemy2 = 0;
						health_of_enemy_width2 = 0;
					}
					enemy_health2.style.width = health_of_enemy_width2 + 'px';
					enemy_pain2();
				}
				if (enemy_side3 == RIGHT && (enemy_position3 - Xposition) >= 0 && (enemy_position3 - Xposition) <= 120) {		// all numbers is in px
					enemy_atack3 = ON;
					if (health_of_enemy3 > DAMAGE){
						health_of_enemy3 -= DAMAGE;
						health_of_enemy_width3 -= DAMAGE;
					}
					else{
						health_of_enemy3 = 0;
						health_of_enemy_width3 = 0;
					}
					enemy_health3.style.width = health_of_enemy_width3 + 'px';
					enemy_pain3();
				}
				if (enemy_side3 == LEFT && (enemy_position3 - Xposition) >= -20 && (enemy_position3 - Xposition) <= 60) {		// all numbers is in px
					if (health_of_enemy3 > DAMAGE){
						health_of_enemy3 -= DAMAGE;
						health_of_enemy_width3 -= DAMAGE;
					}
					else{
						health_of_enemy3 = 0;
						health_of_enemy_width3 = 0;
					}
					enemy_health3.style.width = health_of_enemy_width3 + 'px';
					enemy_pain3();
				}
				if (boss_side == RIGHT && (boss_position - Xposition) >= 0 && (boss_position - Xposition) <= 120) {		// all numbers is in px
					boss_atack = ON;
					if (boss_health > DAMAGE){
						boss_health -= DAMAGE;
						boss_health_width -= DAMAGE;
					}
					else{
						boss_health = 0;
						boss_health_width = 0;
					}
					boss_HP.style.width = boss_health_width + 'px';
				}
				if (boss_side == LEFT && (boss_position - Xposition) >= -20 && (boss_position - Xposition) <= 60) {		// all numbers is in px
					boss_atack = ON;
					if (boss_health > DAMAGE){
						boss_health -= DAMAGE;
						boss_health_width -= DAMAGE;
					}
					else{
						boss_health = 0;
						boss_health_width = 0;
					}
					boss_HP.style.width = boss_health_width + 'px';
				}
				setTimeout(repmake_150px, 150);
				cadr_hit_width_right = STANDART_FIRST_CADR_RIGHT;
				me_stun = OFF;
				setTimeout(stay_here, 150);
			}
		}
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_hit_width_left + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_hit_height + 'px';

		if (cadr_hit_width_left > 500) {
			cadr_hit_width_left -= CADR;
			setTimeout(hit, 50);
			sound_after_attack();
		}
		else{
			if(cadr_hit_width_left > 100 && cadr_hit_width_left < 500){
				main_character.style.width = '200px';
				cadr_hit_width_left -= CADR_HIT;
				setTimeout(hit, 50);
			}
			else{
				if(enemy_side1 == LEFT && (enemy_position1 - Xposition) <= 0 && (enemy_position1 - Xposition) >= -120) {		// all numbers is in px
					enemy_atack1 = ON;
					if (health_of_enemy1 > DAMAGE){
						health_of_enemy1 -= DAMAGE;
						health_of_enemy_width1 -= DAMAGE;
					}
					else{
						health_of_enemy1 = 0;
						health_of_enemy_width1 = 0;
					}
					enemy_health1.style.width = health_of_enemy_width1 + 'px';	
					enemy_pain1();
				}
				if (enemy_side2 == LEFT && (enemy_position2 - Xposition) <= 0 && (enemy_position2 - Xposition) >= -120) {	 // all numbers is in px
					enemy_atack2 = ON;
					if (health_of_enemy2 > DAMAGE){
						health_of_enemy2 -= DAMAGE;
						health_of_enemy_width2 -= DAMAGE;
					}
					else{
						health_of_enemy2 = 0;
						health_of_enemy_width2 = 0;
					}
					enemy_health2.style.width = health_of_enemy_width2 + 'px';
					enemy_pain2();
				}

				if (enemy_side3 == LEFT && (enemy_position3 - Xposition) <= 0 && (enemy_position3 - Xposition) >= -120) {	 // all numbers is in px
					enemy_atack3 = ON;
					if (health_of_enemy3 > DAMAGE){
						health_of_enemy3 -= DAMAGE;
						health_of_enemy_width3 -= DAMAGE;
					}
					else{
						health_of_enemy3 = 0;
						health_of_enemy_width3 = 0;
					}
					enemy_health3.style.width = health_of_enemy_width3 + 'px';
					enemy_pain3();
				}
				
				if (enemy_side3 == RIGHT && (enemy_position3 - Xposition) <= 20 && (enemy_position3 - Xposition) >= -60) {		// all numbers is in px
					if (health_of_enemy3 > DAMAGE){
						health_of_enemy3 -= DAMAGE;
						health_of_enemy_width3 -= DAMAGE;
					}
					else{
						health_of_enemy3 = 0;
						health_of_enemy_width3 = 0;
					}
					enemy_health3.style.width = health_of_enemy_width3 + 'px';
					enemy_pain3();
				}
				
				if (enemy_side1 == RIGHT && (enemy_position1 - Xposition) <= 20 && (enemy_position1 - Xposition) >= -60) {		// all numbers is in px
					if (health_of_enemy1 > DAMAGE){
						health_of_enemy1 -= DAMAGE;
						health_of_enemy_width1 -= DAMAGE;
					}
					else{
						health_of_enemy1 = 0;
						health_of_enemy_width1 = 0;
					}
					enemy_health1.style.width = health_of_enemy_width1 + 'px';	
					enemy_pain1();
				}
				if (enemy_side2 == RIGHT && (enemy_position2 - Xposition) <= 20 && (enemy_position2 - Xposition) >= -60) {		// all numbers is in px
					if (health_of_enemy2 > DAMAGE){
						health_of_enemy2 -= DAMAGE;
						health_of_enemy_width2 -= DAMAGE;
					}
					else{
						health_of_enemy2 = 0;
						health_of_enemy_width2 = 0;
					}
					enemy_health2.style.width = health_of_enemy_width2 + 'px';
					enemy_pain2();
				}
				if (boss_side == LEFT && (boss_position - Xposition) <= 0 && (boss_position - Xposition) >= -120) {		// all numbers is in px
					boss_atack = ON;
					if (boss_health > DAMAGE){
						boss_health -= DAMAGE;
						boss_health_width -= DAMAGE;
					}
					else{
						boss_health = 0;
						boss_health_width = 0;
					}
					boss_HP.style.width = boss_health_width + 'px';
				}
				if (boss_side == RIGHT && (boss_position - Xposition) <= 20 && (boss_position - Xposition) >= -60) {		// all numbers is in px
					boss_atack = ON;
					if (boss_health > DAMAGE){
						boss_health -= DAMAGE;
						boss_health_width -= DAMAGE;
					}
					else{
						boss_health = 0;
						boss_health_width = 0;
					}
					boss_HP.style.width = boss_health_width + 'px';
				}
				setTimeout(repmake_150px, 150);
				cadr_hit_width_left = STANDART_FIRST_CADR_LEFT;
				me_stun = OFF;
				setTimeout(stay_here, 150);
			}
		}
	}
}

function my_pain(){
	repmake_150px();
	me_stun = ON;
	if(side == RIGHT){
		main_character.style.backgroundPositionX = '-' + cadr_pain_right_X + 'px';
		main_character.style.backgroundPositionY = '-' + pain_Y + 'px';

		if (cadr_pain_right_X == 1550) {
			cadr_pain_right_X = STANDART_FIRST_CADR_RIGHT;
			me_stun = OFF;
			pre_cheking_stay();

		}
		else{
			cadr_pain_right_X += CADR;
			setTimeout(my_pain, 100); 
		}
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_pain_left_X + 'px';
		main_character.style.backgroundPositionY = '-' + pain_Y + 'px';

		if (cadr_pain_left_X == 800) {
			cadr_pain_left_X = STANDART_FIRST_CADR_LEFT;
			me_stun = OFF;
			pre_cheking_stay();
		}
		else{
			cadr_pain_left_X -= CADR;
			setTimeout(my_pain, 100); 
		}
	}
}

function Stamina_fulling(){
	if (my_stamina < 100) {
		my_stamina += 1;
		stamina_width += 2;
		Stamina.style.width = stamina_width + 'px';
		Stamina.innerHTML = (stamina_width / 2);
	}
}



function am_I_alive(){
	if (my_health <= 0 && me_dead == OFF) {
		me_dead = ON;
		I_am_dead();
	}
}

function I_am_dead(){
	repmake_150px();
	if (side == RIGHT) {
		main_character.style.backgroundPositionX = '-' + cadr_dead_right_X + 'px';
		main_character.style.backgroundPositionY = '-' + deadly_Y + 'px';

		if (cadr_dead_right_X == 2150) {
			cadr_dead_right_X = STANDART_FIRST_CADR_RIGHT;
			restart_after_death();
		}
		else{
			cadr_dead_right_X += CADR;
			setTimeout(I_am_dead, 100);
		}
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_dead_right_X + 'px';
		main_character.style.backgroundPositionY = '-' + deadly_Y + 'px';

		if (cadr_dead_right_X == 200) {
			cadr_dead_right_X = STANDART_FIRST_CADR_LEFT;
			restart_after_death();
		}
		else{
			cadr_dead_right_X -= CADR;
			setTimeout(I_am_dead, 100);
		}
	}
}

function jamp(){
	if (side == RIGHT) {
		main_character.style.backgroundPositionX = '-' + cadr_jamp_right_X + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height + 'px';

		if (cadr_jamp_right_X == 2300) {
			cadr_jamp_right_X = STANDART_FIRST_CADR_RIGHT;
			
			me_jamp = OFF;
			me_stun = OFF;
			run_right = OFF;
			run_left = OFF
 			shield_up = ON;
 			stay_player = ON;
 			couldness = ON;
 			press = ON;
			shield();
			setTimeout(stay_here, 250);
		}
		else if (cadr_jamp_right_X < 2300 && cadr_jamp_right_X >= 1850){
			cadr_jamp_right_X += CADR;
			setTimeout(jamp, 75);
		}
		else if (cadr_jamp_right_X < 1850) {
			cadr_jamp_right_X += CADR;
			setTimeout(jamp, 75);
		}
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_jamp_left_X + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height + 'px';

		if (cadr_jamp_left_X == 50) {
			cadr_jamp_left_X = STANDART_FIRST_CADR_LEFT;

			me_jamp = OFF;
			me_stun = OFF;
			run_right = OFF;
			run_left = OFF
 			shield_up = ON;
 			stay_player = ON;
 			couldness = ON;
 			press = ON;
			shield();
			setTimeout(stay_here, 250);
		}
		else if (cadr_jamp_left_X < 650 && cadr_jamp_left_X > 50){
			cadr_jamp_left_X -= CADR;
			setTimeout(jamp, 75);
		}
		else if (cadr_jamp_left_X >= 650) {
			cadr_jamp_left_X -= CADR;
			setTimeout(jamp, 75);
		}
	}
}

function moving() {
	if ((me_run == ON && side == RIGHT && me_jamp == OFF && shield_up == OFF) && (length_of_walk <= 600 || npc_talked == ON || npc_angry == ON) && length_of_walk <= 7000) {
		length_of_walk += 2;

		BG_Xposition -= 2;
		BG.style.backgroundPositionX = BG_Xposition + 'px';

		if (((enemy_position1 - Xposition) > -20 && (enemy_position1 - Xposition) < 0) || enemy_atack1 == OFF || enemy_side1 == LEFT) {    	// all numbers is in px
			enemy_position1 -= 2;	 //px
			enemy1.style.left = enemy_position1 + 'px';
		}

		if (((enemy_position2 - Xposition) > -20 && (enemy_position2 - Xposition) < 0) || enemy_atack2 == OFF || enemy_side2 == LEFT) {	   	// all numbers is in px
			enemy_position2 -= 2;	 //px
			enemy2.style.left = enemy_position2 + 'px';
		}

		if (((enemy_position3 - Xposition) > -20 && (enemy_position3 - Xposition) < 0) || enemy_atack3 == OFF || enemy_side3 == LEFT) {    	// all numbers is in px
			enemy_position3 -= 2;	 //px
			enemy3.style.left = enemy_position3 + 'px';
		}

		if (((boss_position - Xposition) > -20 && (boss_position - Xposition) < 0) || boss_atack == OFF || boss_side == LEFT) {    	// all numbers is in px
			boss_position -= 2;	 //px
			boss.style.left = boss_position + 'px';
		}

		healing_position -= 2;
		healing.style.left = healing_position + 'px';

		npc_position -= 2;
		npc.style.left = npc_position + 'px'; 

	}

	else if (me_run == ON && side == LEFT && me_jamp == OFF && shield_up == OFF && length_of_walk >= -200) {
		length_of_walk -= 2;

		BG_Xposition += 2;
		BG.style.backgroundPositionX = BG_Xposition + 'px';

		if (((enemy_position1 - Xposition) < 20 && (enemy_position1 - Xposition) > 0) || enemy_atack1 == OFF || enemy_side1 == RIGHT) {		// all numbers is in px
			enemy_position1 += 2;
			enemy1.style.left = enemy_position1 + 'px';
		}

		if (((enemy_position2 - Xposition) < 20 && (enemy_position2 - Xposition) > 0) || enemy_atack2 == OFF || enemy_side2 == RIGHT) {		// all numbers is in px
			enemy_position2 += 2;
			enemy2.style.left = enemy_position2 + 'px';
		}

		if (((enemy_position3 - Xposition) < 20 && (enemy_position3 - Xposition) > 0) || enemy_atack3 == OFF || enemy_side3 == RIGHT) {		// all numbers is in px
			enemy_position3 += 2;
			enemy3.style.left = enemy_position3 + 'px';
		}

		if (((boss_position - Xposition) < 20 && (boss_position - Xposition) > 0) || boss_atack == OFF || boss_side == RIGHT) {    	// all numbers is in px
			boss_position += 2;	 //px
			boss.style.left = boss_position + 'px';
		}

		healing_position += 2;
		healing.style.left = healing_position + 'px';

		npc_position += 2;
		npc.style.left = npc_position + 'px'; 
	}

	else if ((shifting == ON && side == RIGHT && me_jamp == OFF && shield_up == OFF) && (length_of_walk <= 600 || npc_talked == ON || npc_angry == ON) && length_of_walk <= 7000) {
		length_of_walk += 9;
		BG_Xposition -= 9; 
		enemy_position1 -= 9;
		enemy_position2 -= 9; 
		enemy_position3 -= 9; 
		npc_position -= 9;
		healing_position -= 9;
		boss_position -= 9;
		boss.style.left = boss_position + 'px';
		healing.style.left = healing_position + 'px';
		npc.style.left = npc_position + 'px'; 
		enemy2.style.left = enemy_position2 + 'px';
		enemy1.style.left = enemy_position1 + 'px';
		enemy3.style.left = enemy_position3 + 'px';
		BG.style.backgroundPositionX = BG_Xposition + 'px';
	} 
	else if (shifting == ON && side == LEFT && me_jamp == OFF && shield_up == OFF && length_of_walk > -200) {
		length_of_walk -= 9;
		BG_Xposition += 9; 	
		enemy_position1 += 9;
		enemy_position2 += 9; 
		enemy_position3 += 9; 	
		npc_position += 9;
		healing_position += 9;
		boss_position += 9;
		boss.style.left = boss_position + 'px';
		healing.style.left = healing_position + 'px';
		npc.style.left = npc_position + 'px'; 
		enemy2.style.left = enemy_position2 + 'px';
		enemy1.style.left = enemy_position1 + 'px';
		enemy3.style.left = enemy_position3 + 'px';
		BG.style.backgroundPositionX = BG_Xposition + 'px';
	} 
	else if(side == LEFT && me_jamp == ON){
		if (cadr_jamp_left_X >= 650) {
			Yposition -= 4;
			main_character.style.top = Yposition + 'px';
		}

		else if (Yposition < 145){
			Yposition += 4;
			main_character.style.top = Yposition + 'px';
		}

		if (run_left == ON && length_of_walk >= -200) {

			BG_Xposition += 2;

			if (((enemy_position1 - Xposition) < 20 && (enemy_position1 - Xposition) > 0) || enemy_atack1 == OFF || enemy_side1 == RIGHT) {		// all numbers is in px		
				enemy_position1 += 2;
				enemy1.style.left = enemy_position1 + 'px';
			}

			if (((enemy_position2 - Xposition) < 20 && (enemy_position2 - Xposition) > 0) || enemy_atack2 == OFF || enemy_side2 == RIGHT) {		// all numbers is in px
				enemy_position2 += 2;
				enemy2.style.left = enemy_position2 + 'px';
			}

			if (((enemy_position3 - Xposition) < 20 && (enemy_position3 - Xposition) > 0) || enemy_atack3 == OFF || enemy_side3 == RIGHT) {		// all numbers is in px
				enemy_position3 += 2;
				enemy3.style.left = enemy_position3 + 'px';
			}

			if (((boss_position - Xposition) < 20 && (boss_position - Xposition) > 0) || boss_atack == OFF || boss_side == RIGHT) {    	// all numbers is in px
				boss_position += 2;	 //px
				boss.style.left = boss_position + 'px';
			}

			healing_position += 2;
			healing.style.left = healing_position + 'px';

			BG.style.backgroundPositionX = BG_Xposition + 'px';
			npc_position += 2;
			npc.style.left = npc_position + 'px';
		}
	}

	else if(side == RIGHT && me_jamp == ON){
		if (cadr_jamp_right_X < 1850) {
			Yposition -= 4;
			main_character.style.top = Yposition + 'px';
		}

		else if (Yposition < 145){
			Yposition += 4;
			main_character.style.top = Yposition + 'px';
		}

		if ((run_right == ON) && (length_of_walk <= 600 || npc_talked == ON || npc_angry == ON) && length_of_walk <= 7000) {

			BG_Xposition -= 2;

			if (((enemy_position1 - Xposition) < 20 && (enemy_position1 - Xposition) > 0) || enemy_atack1 == OFF || enemy_side1 == LEFT) {		// all numbers is in px		
				enemy_position1 -= 2;
				enemy1.style.left = enemy_position1 + 'px';
			}

			if (((enemy_position2 - Xposition) < 20 && (enemy_position2 - Xposition) > 0) || enemy_atack2 == OFF || enemy_side2 == LEFT) {		// all numbers is in px
				enemy_position2 -= 2;
				enemy2.style.left = enemy_position2 + 'px';
			}

			if (((enemy_position3 - Xposition) > -20 && (enemy_position3 - Xposition) < 0) || enemy_atack3 == OFF || enemy_side3 == LEFT) {    	// all numbers is in px
				enemy_position3 -= 2;	 //px
				enemy3.style.left = enemy_position3 + 'px';
			}

			if (((boss_position - Xposition) > -20 && (boss_position - Xposition) < 0) || boss_atack == OFF || boss_side == LEFT) {    	// all numbers is in px
				boss_position -= 2;	 //px
				boss.style.left = boss_position + 'px';
			}

			healing_position -= 2;
			healing.style.left = healing_position + 'px';

			BG.style.backgroundPositionX = BG_Xposition + 'px';
			npc_position -= 2;
			npc.style.left = npc_position + 'px'; 
		}
	}
}

function talking() {
	if((npc_position - Xposition) <= 70 && (npc_position - Xposition) >= -70){
		statement_of_npc.style.opacity = '1';
		setTimeout(need_help, 2000);
		setTimeout(agree_or_not, 6000);
	}
}


function where_am_I(){
	if (length_of_walk >= 250 && length_of_walk <= 350 && frase_N1 == OFF) {
		all_clear();
		frase_N1 = ON;
		teach_talking();
	}
	else if (length_of_walk >= 650 && length_of_walk <= 1000 && frase_N2 == OFF) {
		all_clear();
		frase_N2 = ON;
		teach_fighting();
	}
	else if(length_of_walk >= 1600 && length_of_walk <= 1700 && frase_N3 == OFF){
		all_clear();
		frase_N3 = ON;
		teach_healing();
	}
	else if(length_of_walk >= 4000 && frase_N5 == OFF){
		console.log(1);
		state.innerHTML = '';
		state.style.color = 'black';
		frase_N5 = ON;
		counter_state = 0;
		if (npc_talked == ON) {
			we_are_close();
		}
	}
	if ((npc_talked == ON || npc_angry == ON) && frase_N4 == OFF) {
		quest_content1.innerHTML = '';
		frase_N4 = ON;
		change_quest();
	}
}

function restart_after_death(){
	darcness.style.opacity = '1';
	window_agree.style.opacity = '1';
	Q_wind.innerHTML = "You're dead"
	var restart = document.createElement('div');
	restart.onclick = reloading;
	restart.className = 'restart';
	window_agree.appendChild(restart);
}

function reloading(){
	location.reload();
}

function use_healing(){
	if((healing_position - Xposition) <= 50 && (healing_position - Xposition) >= -50){
		healing.style.opacity = '0';
		setTimeout(function(){ 
			if (my_health < 50) {
				my_health += 50; 
				health_width += 100;
				Health.style.width = health_width + 'px';
				Health.innerHTML = (health_width / 2);
			}
			else{
				my_health = 100;
				health_width = 200;
				Health.style.width = health_width + 'px';
				Health.innerHTML = (health_width / 2);
			}
		}, 500);
		setTimeout(function(){
			healing_position = 2000;
			healing.style.left = healing_position + "px";
			healing.style.opacity = '1';
		}, 2000);
	}
}

function self_healing(){
	if(my_health < 100 && my_health > 0){
		my_health += 1;
		health_width += 2;
		Health.style.width = health_width + 'px'
		Health.innerHTML = (health_width / 2);
	}
}

function hear_character(){
	if ((npc_position - Xposition) <= -350 || (npc_position - Xposition) >= 350 ){
		statement_of_npc.style.opacity = '0';
	}
	else if ((npc_position - Xposition) >= -350 && (npc_position - Xposition) <= 350 && statement_of_npc.style.opacity ==  '0' && npc_talked == ON){
		statement_of_npc.style.opacity = '1';
	}
}