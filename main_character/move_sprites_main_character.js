





is_moob_alive1();

is_moob_alive2();

searching1();

searching2();

am_I_alive();

Stamina_fulling();

where_am_I();

write_taxt_window();

///////////////////////////////////////////////DESKTOP/////////////////////////////////////////////





addEventListener("keydown", WAlking);

function WAlking(e){
		switch(e.keyCode){
       		case 65:    // если нажата клавиша A
       			if (me_stun == OFF && me_dead == OFF) {
       				stay_player = OFF;
        			couldness = OFF;
        			press = ON;
        			side = LEFT;
        			walk();
          			break;
				}
       		case 68:  	// если нажата клавиша D
       			if (me_stun == OFF && me_dead == OFF) {
        			stay_player = OFF;
        			couldness = OFF;
        			press = ON;
        			side = RIGHT; 
           			walk();
            		break;
				}
        	case 16: 	// если нажата клавиша Shift
        		if (Stamina_bar.value >= CHARGE_VALUE && couldness == ON && cooldown == OFF && me_stun == OFF && me_dead == OFF) {
        			cooldown = ON;
 					setTimeout(function(){cooldown = OFF;}, 650);
        			press = ON;
        			Stamina_bar.value -= CHARGE_VALUE;
					main_character.style.width = '250px';
        			charge();
        			break;
        		}

 			case 83:    // если нажата клавиша S
 				if (me_stun == OFF && me_dead == OFF) {
 					shield_up = ON;
 					stay_player = ON;
 					couldness = ON;
 					press = ON;
 					shield();
 					break;
 				}
 			case 81: 	// если нажата клавиша Q
 				if (Stamina_bar.value >= HIT_VALUE && cooldown == OFF && me_stun == OFF && me_dead == OFF) {
 					cooldown = ON;
 					setTimeout(function(){cooldown = OFF;}, 500);
 					press = ON;
 					Stamina_bar.value -= HIT_VALUE; 
 					hit();
 					break;
 				}

    }
}

addEventListener("keyup", pre_cheking_stay);

function pre_cheking_stay(){
	cadr_right_X = STANDART_FIRST_CADR_RIGHT;
	cadr_left_X = STANDART_FIRST_CADR_LEFT;
	stay_player = ON;
	press = OFF; 
	shield_up = OFF;
	couldness = ON; 
	if (me_dead == OFF) {
		setTimeout(check_staying, 400)
	}
}

function check_staying(){
	if (press == OFF) {
		stay_here();
	}
}

function repmake_150px(){
	main_character.style.width = '150px';
}

function stay_here(){
	repmake_150px();

	sheld = OFF;

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
	if (side == RIGHT) {
		length_of_walk += 15;

		main_character.style.backgroundPositionX = '-' + cadr_right_X + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height + 'px';


		if (Xposition >= 50) {
			BG_Xposition -= 12;	  //px
			if (((enemy_position1 - Xposition) > -20 && (enemy_position1 - Xposition) < 0) || enemy_atack1 == OFF || enemy_side1 == LEFT) {    	// all numbers is in px
				enemy_position1 -= 12;	 //px
				enemy1.style.left = enemy_position1 + 'px';
			}
			if (((enemy_position2 - Xposition) > -20 && (enemy_position2 - Xposition) < 0) || enemy_atack2 == OFF || enemy_side2 == LEFT) {	   	// all numbers is in px
				enemy_position2 -= 12;	 //px
				enemy2.style.left = enemy_position2 + 'px';
			}
			BG.style.backgroundPositionX = BG_Xposition + 'px';
		}
		else{
			Xposition += 15;	//px
			main_character.style.left = Xposition + 'px';
		}


		if (cadr_right_X == 2300) {
			cadr_right_X = STANDART_FIRST_CADR_RIGHT;
		}
		else{
			cadr_right_X += CADR;
		}
		side = RIGHT;
	}
	else{
		length_of_walk -= 15;

		main_character.style.backgroundPositionX = '-' + cadr_left_X + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height + 'px';

		if (length_of_walk >= -200) {
			if (Xposition <= -50) {
				BG_Xposition += 12;
				if (((enemy_position1 - Xposition) < 20 && (enemy_position1 - Xposition) > 0) || enemy_atack1 == OFF || enemy_side1 == RIGHT) {		// all numbers is in px
					enemy_position1 += 12;
					enemy1.style.left = enemy_position1 + 'px';
				}
				if (((enemy_position2 - Xposition) < 20 && (enemy_position2 - Xposition) > 0) || enemy_atack2 == OFF || enemy_side2 == RIGHT) {		// all numbers is in px
					enemy_position2 += 12;
					enemy2.style.left = enemy_position2 + 'px';
				}
				BG.style.backgroundPositionX = BG_Xposition + 'px';
			}	
			else{
				Xposition -= 15;
				main_character.style.left = Xposition + 'px';
			}
		}

		if (cadr_left_X == 50) {
			cadr_left_X = STANDART_FIRST_CADR_LEFT;
		}
		else{
			cadr_left_X -= CADR;
		}
		side = LEFT;
	}
}

function charge(){

	if (side == RIGHT) {
		length_of_walk += 65;

		main_character.style.backgroundPositionX = '-' + cadr_charge_wight_right + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_special_attack_height + 'px';


		if (Xposition >= 50) {
			BG_Xposition -= 65; 	//px
			enemy_position1 -= 65;		//px
			enemy_position2 -= 65; 		//px
			enemy2.style.left = enemy_position2 + 'px';
			enemy1.style.left = enemy_position1 + 'px';
			BG.style.backgroundPositionX = BG_Xposition + 'px';
		}
		else{
			Xposition += 65; 	//px
			main_character.style.left = Xposition + 'px';
		}


		if(cadr_charge_wight_right != 2250){
			cadr_charge_wight_right += CADR_CHARGE;
			setTimeout(charge, 50);
		}
		else{
			if(enemy_side1 == RIGHT && (enemy_position1 - Xposition) >= -10 && (enemy_position1 - Xposition) <= 100) {		// all numbers is in px
				enemy_atack1 = ON;
				enemy_health_bar1.value -= DAMAGE;
				enemy_pain1();
			}
			if (enemy_side2 == RIGHT && (enemy_position2 - Xposition) >= -10 && (enemy_position2 - Xposition) <= 100) {		// all numbers is in px
				enemy_atack2 = ON;
				enemy_health_bar2.value -= DAMAGE;
				enemy_pain2();
			}
			if (enemy_side1 == LEFT && (enemy_position1 - Xposition) >= -20 && (enemy_position1 - Xposition) <= 80) {		// all numbers is in px
				enemy_health_bar1.value -= DAMAGE;
				enemy_pain1();
			}
			if (enemy_side2 == LEFT && (enemy_position2 - Xposition) >= -20 && (enemy_position2 - Xposition) <= 80) {		// all numbers is in px
				enemy_health_bar2.value -= DAMAGE;
				enemy_pain2();
			}

			cadr_charge_wight_right = STANDART_FIRST_CADR_RIGHT;
			setTimeout(repmake_150px, 50);
			setTimeout(stay_here, 50);
		}
	}
	else{
		length_of_walk -= 65;

		main_character.style.backgroundPositionX = '-' + cadr_charge_wight_left + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_special_attack_height + 'px';
		if (length_of_walk >= -200) {
			if (Xposition <= -50) {
				BG_Xposition += 65; 	//px
				enemy_position1 += 65; 		//px
				enemy_position2 += 65; 		//px
				enemy2.style.left = enemy_position2 + 'px';
				enemy1.style.left = enemy_position1 + 'px';
				BG.style.backgroundPositionX = BG_Xposition + 'px';
			}	
			else{
				Xposition -= 65; 	//px
				main_character.style.left = Xposition + 'px';
			}
		}

		if(cadr_charge_wight_left != 0){
			cadr_charge_wight_left -= CADR_CHARGE;
			setTimeout(charge, 50);
		}
		else{
			if(enemy_side1 == RIGHT && (enemy_position1 - Xposition) <= 10 && (enemy_position1 - Xposition) >= -100) {		// all numbers is in px
				enemy_atack1 = ON;
				enemy_health_bar1.value -= DAMAGE;
				enemy_pain1();
				sound_after_s_attack();
			}
			if (enemy_side2 == LEFT && (enemy_position2 - Xposition) <= 10 && (enemy_position2 - Xposition) >= -100) {		// all numbers is in px
				enemy_atack2 = ON;
				enemy_health_bar2.value -= DAMAGE;
				enemy_pain2();
				sound_after_s_attack();
			}
			
			if (enemy_side1 == RIGHT && (enemy_position1 - Xposition) <= 40 && (enemy_position1 - Xposition) >= -80) {		// all numbers is in px
				enemy_health_bar1.value -= DAMAGE;
				enemy_pain1();
				sound_after_s_attack();
			}
			if (enemy_side1 == RIGHT && (enemy_position2 - Xposition) <= 40 && (enemy_position2 - Xposition) >= -80) {		// all numbers is in px
				enemy_health_bar2.value -= DAMAGE;
				enemy_pain2();
				sound_after_s_attack();
			}
			setTimeout(repmake_150px, 50);
			cadr_charge_wight_left = 1000;
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
			sound_after_attack();
			setTimeout(hit, 50);

		}
		else{
			if (cadr_hit_width_right < 2050) {
				main_character.style.width = '200px';
				cadr_hit_width_right += 200;
				setTimeout(hit, 50);
			}
			else{
				if(enemy_side1 == RIGHT && (enemy_position1 - Xposition) >= 0 && (enemy_position1 - Xposition) <= 100) {		// all numbers is in px
					enemy_atack1 = ON;
					enemy_health_bar1.value -= DAMAGE;
					sound_after_s_attack();
					enemy_pain1();

				}
				if (enemy_side2 == RIGHT && (enemy_position2 - Xposition) >= 0 && (enemy_position2 - Xposition) <= 100) {		// all numbers is in px
					enemy_atack2 = ON;
					enemy_health_bar2.value -= DAMAGE;
					sound_after_s_attack();
					enemy_pain2();
				}
				if (enemy_side1 == LEFT && (enemy_position1 - Xposition) >= -20 && (enemy_position1 - Xposition) <= 60) {		// all numbers is in px
					enemy_health_bar1.value -= DAMAGE;
					sound_after_s_attack();
					enemy_pain1();
				}
				if (enemy_side2 == LEFT && (enemy_position2 - Xposition) >= -20 && (enemy_position2 - Xposition) <= 60) {		// all numbers is in px
					enemy_health_bar2.value -= DAMAGE;
					sound_after_s_attack();
					enemy_pain2();
				}
				setTimeout(repmake_150px, 150);
				cadr_hit_width_right = STANDART_FIRST_CADR_RIGHT;
				setTimeout(stay_here, 150);
			}
		}
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_hit_width_left + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_hit_height + 'px';

		if (cadr_hit_width_left > 500) {
			cadr_hit_width_left -= CADR;
			sound_after_attack();
			setTimeout(hit, 50);
		}
		else{
			if(cadr_hit_width_left > 100 && cadr_hit_width_left < 500){
				main_character.style.width = '200px';
				cadr_hit_width_left -= CADR_HIT;
				setTimeout(hit, 50);
			}
			else{
				if(enemy_side1 == LEFT && (enemy_position1 - Xposition) <= 0 && (enemy_position1 - Xposition) >= -80) {		// all numbers is in px
					enemy_atack1 = ON;
					enemy_health_bar1.value -= DAMAGE;
					enemy_pain1();
					sound_after_s_attack();
				}
				if (enemy_side2 == LEFT && (enemy_position2 - Xposition) <= 0 && (enemy_position2 - Xposition) >= -80) {	 // all numbers is in px
					enemy_atack2 = ON;
					enemy_health_bar2.value -= DAMAGE;
					enemy_pain2();
					sound_after_s_attack();
				}
				
				if (enemy_side1 == RIGHT && (enemy_position1 - Xposition) <= 20 && (enemy_position1 - Xposition) >= -60) {		// all numbers is in px
					enemy_health_bar1.value -= DAMAGE;
					enemy_pain1();
				}
				if (enemy_side2 == RIGHT && (enemy_position2 - Xposition) <= 20 && (enemy_position2 - Xposition) >= -60) {		// all numbers is in px
					enemy_health_bar2.value -= DAMAGE;
					enemy_pain2();
					sound_after_s_attack();
				}
				
				setTimeout(repmake_150px, 150);
				cadr_hit_width_left = STANDART_FIRST_CADR_LEFT;
				setTimeout(stay_here, 150);
			}
		}
	}
}

function my_pain(){
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
	Stamina_bar.value += 1;
	setTimeout(Stamina_fulling, 75);
}



function am_I_alive(){
	if (Health.value <= 0) {
		me_dead = ON;
		I_am_dead();
	}
	else{
		setTimeout(am_I_alive, 50);
	}
}

function I_am_dead(){
	if (side == RIGHT) {
		main_character.style.backgroundPositionX = '-' + cadr_dead_right_X + 'px';
		main_character.style.backgroundPositionY = '-' + deadly_Y + 'px';

		if (cadr_dead_right_X == 2150) {
			cadr_dead_right_X = STANDART_FIRST_CADR_RIGHT;
			location.reload();
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
		}
		else{
			cadr_dead_right_X -= CADR;
			setTimeout(I_am_dead, 100);
		}
	}
}

function where_am_I(){
	if (length_of_walk >= 900 && length_of_walk <= 950) {
		all_clear();
	}
	else if (length_of_walk >= 950 && length_of_walk <= 1000 && frase_N2 == OFF) {
		frase_N2 = ON;
		teach_hiding();
	}
	setTimeout(where_am_I, 100);
}