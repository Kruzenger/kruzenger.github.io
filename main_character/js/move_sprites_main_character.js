

me_stun = ON;
setTimeout(function(){ me_stun = OFF; }, 3000);



is_moob_alive1();

is_moob_alive2();

searching1();

searching2();

moving_enemy1();

moving_enemy2();

NPC_what_to_do();

setInterval(npc_moving_run, 5)

am_I_alive();

Stamina_fulling();

where_am_I();

write_taxt_window();

moving();




///////////////////////////////////////////////DESKTOP/////////////////////////////////////////////





addEventListener("keydown", WAlking);

function WAlking(e){
		switch(e.keyCode){
       		case 65:    // если нажата клавиша A
       			if (me_stun == OFF && me_dead == OFF && me_run == OFF) {
       				stay_player = OFF;
        			couldness = OFF;
        			press = ON;
        			side = LEFT;
        			me_run = ON;
        			run_left = ON;
        			run_right = OFF;
        			/*if (play_or_not == OFF) {
        				run_aud.play();
        				play_or_not = ON;
        			}*/
        			walk();
				}
				break;
       		case 68:  	// если нажата клавиша D
       			if (me_stun == OFF && me_dead == OFF && me_run == OFF) {
        			stay_player = OFF;
        			couldness = OFF;
        			press = ON;
        			me_run = ON;
        			side = RIGHT; 
        			run_right = ON;
        			run_left = OFF;
        			/*if (play_or_not == OFF) {
        				run_aud.play();
        				play_or_not = ON;
        			}*/
           			walk();  
				}
				break;
			case 87:
			case 32:
				if (me_stun == OFF && me_dead == OFF && me_jamp == OFF) {
					me_jamp = ON;
					stay_player = OFF;
					me_stun = ON;
					press = ON;
					jamp();
				}
				break;
        	case 16: 	// если нажата клавиша Shift
        		if (Stamina_bar.value >= CHARGE_VALUE && couldness == ON && me_stun == OFF && me_dead == OFF) {
        			run_right = OFF;
					run_left = OFF
        			cooldown = ON;
        			shifting = ON;
 					setTimeout(function(){cooldown = OFF;}, 100);
        			press = ON;
        			Stamina_bar.value -= CHARGE_VALUE;
					main_character.style.width = '250px';
        			charge();
        		}
        		break;
 			case 83:    // если нажата клавиша S
 				if (me_stun == OFF && me_dead == OFF) {
 					run_right = OFF;
					run_left = OFF
 					shield_up = ON + 1;
 					stay_player = ON;
 					couldness = ON;
 					press = ON;
 					shield();
 				}
 				break;
 			case 81: 	// если нажата клавиша Q
 				if (Stamina_bar.value >= HIT_VALUE && cooldown == OFF && me_stun == OFF && me_dead == OFF) {
 					run_right = OFF;
					run_left = OFF
 					cooldown = ON;
 					me_stun = ON;
 					setTimeout(function(){cooldown = OFF;}, 500);
 					press = ON;
 					//hit_aud.play();
 					Stamina_bar.value -= HIT_VALUE; 
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
    }
}

addEventListener("keyup", pre_cheking_stay);

function pre_cheking_stay(){
	me_run = OFF;

	//run_aud.pause();
	play_or_not = OFF;
	setTimeout(function(){
		if (me_run == OFF) {
			run_right = OFF;
			run_left = OFF;
		}
	}, 500);
	me_atack = ON;
	cadr_right_X = STANDART_FIRST_CADR_RIGHT;
	cadr_left_X = STANDART_FIRST_CADR_LEFT;
	stay_player = ON;
	press = OFF; 
	couldness = ON;
	shield_up = OFF; 
	if (me_dead == OFF && me_stun == OFF) {
		setTimeout(check_staying, 200)
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
	if (side == RIGHT && shield_up == OFF) {
		

		main_character.style.backgroundPositionX = '-' + cadr_right_X + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height + 'px';

		if (cadr_right_X == 2300) {
			cadr_right_X = STANDART_FIRST_CADR_RIGHT;
		}
		else{
			cadr_right_X += CADR;
		}
		side = RIGHT;
		if (me_run == ON && run_right == ON) {
			setTimeout(walk, 50);
		}
	}
	else if (side == LEFT  && shield_up == OFF) {

		main_character.style.backgroundPositionX = '-' + cadr_left_X + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height + 'px';

		if (cadr_left_X == 50) {
			cadr_left_X = STANDART_FIRST_CADR_LEFT;
		}
		else{
			cadr_left_X -= CADR;
		}
		side = LEFT;
		if (me_run == ON && run_left == ON) {
			setTimeout(walk, 50);
		}
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
				enemy_health_bar1.value -= DAMAGE;
				enemy_pain1();
			}
			if (enemy_side2 == LEFT && (enemy_position2 - Xposition) <= 10 && (enemy_position2 - Xposition) >= -100) {		// all numbers is in px
				enemy_atack2 = ON;
				enemy_health_bar2.value -= DAMAGE;
				enemy_pain2();
			}
			
			if (enemy_side1 == RIGHT && (enemy_position1 - Xposition) <= 40 && (enemy_position1 - Xposition) >= -80) {		// all numbers is in px
				enemy_health_bar1.value -= DAMAGE;
				enemy_pain1();
			}
			if (enemy_side1 == RIGHT && (enemy_position2 - Xposition) <= 40 && (enemy_position2 - Xposition) >= -80) {		// all numbers is in px
				enemy_health_bar2.value -= DAMAGE;
				enemy_pain2();
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
					enemy_health_bar1.value -= DAMAGE;
					sound_after_s_attack();					
					enemy_pain1();
				}
				if (enemy_side2 == RIGHT && (enemy_position2 - Xposition) >= 0 && (enemy_position2 - Xposition) <= 120) {		// all numbers is in px
					enemy_atack2 = ON;
					enemy_health_bar2.value -= DAMAGE;
					enemy_pain2();
					sound_after_s_attack();

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
				//hit_aud.pause();
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
					enemy_health_bar1.value -= DAMAGE;
                    sound_after_s_attack();
					enemy_pain1();
				}
				if (enemy_side2 == LEFT && (enemy_position2 - Xposition) <= 0 && (enemy_position2 - Xposition) >= -120) {	 // all numbers is in px
					enemy_atack2 = ON;
					enemy_health_bar2.value -= DAMAGE;
					sound_after_s_attack();
					enemy_pain2();
				}
				
				if (enemy_side1 == RIGHT && (enemy_position1 - Xposition) <= 20 && (enemy_position1 - Xposition) >= -60) {		// all numbers is in px
					enemy_health_bar1.value -= DAMAGE;
					sound_after_s_attack();
					enemy_pain1();
				}
				if (enemy_side2 == RIGHT && (enemy_position2 - Xposition) <= 20 && (enemy_position2 - Xposition) >= -60) {		// all numbers is in px
					enemy_health_bar2.value -= DAMAGE;
					sound_after_s_attack();
					enemy_pain2();
				}
				
				setTimeout(repmake_150px, 150);
				cadr_hit_width_left = STANDART_FIRST_CADR_LEFT;
				//hit_aud.pause();
				me_stun = OFF;
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
	if (me_run == ON && side == RIGHT && me_jamp == OFF && shield_up == OFF) {
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

		npc_position -= 2;
		npc.style.left = npc_position + 'px'; 

	}

	else if (me_run == ON && side == LEFT && me_jamp == OFF && shield_up == OFF) {

		if (length_of_walk >= -200) {
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

			npc_position += 2;
			npc.style.left = npc_position + 'px'; 

		}	
	}

	else if (shifting == ON && side == RIGHT && me_jamp == OFF && shield_up == OFF) {
		if (length_of_walk > -200) {
			length_of_walk += 9;
			BG_Xposition -= 9; 
			enemy_position1 -= 9;
			enemy_position2 -= 9; 
			npc_position -= 9;
			npc.style.left = npc_position + 'px'; 
			enemy2.style.left = enemy_position2 + 'px';
			enemy1.style.left = enemy_position1 + 'px';
			BG.style.backgroundPositionX = BG_Xposition + 'px';
		}
	} 
	else if (shifting == ON && side == LEFT && me_jamp == OFF && shield_up == OFF) {
		if (length_of_walk > -200) {
			length_of_walk -= 9;
			BG_Xposition += 9; 	
			enemy_position1 += 9;
			enemy_position2 += 9; 	
			npc_position += 9;
			npc.style.left = npc_position + 'px'; 
			enemy2.style.left = enemy_position2 + 'px';
			enemy1.style.left = enemy_position1 + 'px';
			BG.style.backgroundPositionX = BG_Xposition + 'px';
		}
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

		if (run_left == ON) {
			if (length_of_walk >= -200) {

				BG_Xposition += 2;

				if (((enemy_position1 - Xposition) < 20 && (enemy_position1 - Xposition) > 0) || enemy_atack1 == OFF || enemy_side1 == RIGHT) {		// all numbers is in px		
					enemy_position1 += 2;
					enemy1.style.left = enemy_position1 + 'px';
				}

				if (((enemy_position2 - Xposition) < 20 && (enemy_position2 - Xposition) > 0) || enemy_atack2 == OFF || enemy_side2 == RIGHT) {		// all numbers is in px
					enemy_position2 += 2;
					enemy2.style.left = enemy_position2 + 'px';
				}
				BG.style.backgroundPositionX = BG_Xposition + 'px';
				npc_position += 2;
				npc.style.left = npc_position + 'px'; 
			}	
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

		if (run_right == ON) {
			if (length_of_walk >= -200) {

				BG_Xposition -= 2;

				if (((enemy_position1 - Xposition) < 20 && (enemy_position1 - Xposition) > 0) || enemy_atack1 == OFF || enemy_side1 == LEFT) {		// all numbers is in px		
					enemy_position1 -= 2;
					enemy1.style.left = enemy_position1 + 'px';
				}

				if (((enemy_position2 - Xposition) < 20 && (enemy_position2 - Xposition) > 0) || enemy_atack2 == OFF || enemy_side2 == LEFT) {		// all numbers is in px
					enemy_position2 -= 2;
					enemy2.style.left = enemy_position2 + 'px';
				}
				BG.style.backgroundPositionX = BG_Xposition + 'px';
				npc_position -= 2;
				npc.style.left = npc_position + 'px'; 
			}	
		}
	}
	setTimeout(moving, 5);
}

function talking() {
	if((npc_position - Xposition) <= 70 && (npc_position - Xposition) >= -70){
		statement_of_npc.style.opacity = '1';
		setTimeout(need_help, 2000);
		setTimeout(agree_or_not, 7000);
	}
}


function where_am_I(){
	if (length_of_walk >= 250 && length_of_walk <= 350 && frase_N1 == OFF) {
		all_clear();
		frase_N1 = ON;
		teach_talking();
	}

	else if (length_of_walk >= 950 && length_of_walk <= 1000 && frase_N2 == OFF) {
		all_clear();
		frase_N2 = ON;
		teach_fighting();
	}
	setTimeout(where_am_I, 100);
}

function restart_after_death(){
	darcness.style.opacity = '1';
	window_agree.style.opacity = '1';
	Q_wind.innerHTML = "You're dead"
	var restart = document.createElement('div');
	restart.className = 'restart';
	restart.onklick = function(){location.reload();};
	window_agree.appendChild(restart);
}
