





is_moob_alive1();

is_moob_alive2();

searching1();

searching2();

am_I_alive();

Stamina_fulling();

////////////////////////////////////////////MOBILE///////////////////////////////////////////////



left_but.addEventListener('click', remake_mobile_run_left);
right_but.addEventListener('click', remake_mobile_run_right);
shield_but.addEventListener('click', remake_shield);
hit_but.addEventListener('click', hit_mobile);
charge_but.addEventListener('click', charge_mobile);

function remake_mobile_run_left(){
	shield_up_mobile = OFF;
	run_or_not_mobile_right = OFF;
	if (run_or_not_mobile_left == OFF) {
		run_or_not_mobile_left = ON;
	}
	else{
		run_or_not_mobile_left = OFF;
	}
	console.log(run_or_not_mobile_left);
	left_run_mobile();
}

function left_run_mobile(){
    if (me_stun == OFF && me_dead == OFF){ 
		if(run_or_not_mobile_left == ON){
			side = LEFT;
			stay_player = OFF;
			walk();
			setTimeout(left_run_mobile, 50);
		}
		else{
			stay_here();
		}
	}
}


function remake_mobile_run_right(){
	shield_up_mobile = OFF;
	run_or_not_mobile_left = OFF;
	if (run_or_not_mobile_right == OFF) {
		run_or_not_mobile_right = ON;
	}
	else{
		run_or_not_mobile_right = OFF;
	}
	right_run_mobile();
}

function right_run_mobile(){
	if (me_stun == OFF && me_dead == OFF){ 
		if(run_or_not_mobile_right == ON){
			side = RIGHT;
			stay_player = OFF;
			walk();
			setTimeout(right_run_mobile, 50);
		}
		else{
			stay_here();
		}
	}
}
 
function remake_shield(){
	run_or_not_mobile_right = OFF;
	run_or_not_mobile_left = OFF;
	if (shield_up_mobile == OFF) {
		shield_up_mobile = ON;
	}
	else{
		shield_up_mobile = OFF;
	}
	shield_mobile();
}

function shield_mobile(){
	if (me_stun == OFF && me_dead == OFF){ 
		if (shield_up_mobile == ON) {
			shield_up = ON;
 			stay_player = ON;
			couldness = ON;
 			shield();
 			setTimeout(shield_mobile, 50);
 		}
 		else{
 			stay_here();
 			stay_player = ON; 
			shield_up = OFF;
			couldness = ON; 
 		}
 	}
}


function hit_mobile(){
	run_or_not_mobile_right = OFF;
	run_or_not_mobile_left = OFF;
	shield_up_mobile = OFF;
	if (Stamina_bar.value >= HIT_VALUE && cooldown == OFF && me_stun == OFF && me_dead == OFF) {	
		cooldown = ON;			
		setTimeout(function(){cooldown = OFF;}, 500);		
		Stamina_bar.value -= HIT_VALUE; 		
		hit();
	}
}

function charge_mobile(){
	run_or_not_mobile_right = OFF;
	run_or_not_mobile_left = OFF;
	shield_up_mobile = OFF;
	if (Stamina_bar.value >= CHARGE_VALUE && couldness == ON && cooldown == OFF && me_stun == OFF && me_dead == OFF) {
		cooldown = ON;
 		setTimeout(function(){cooldown = OFF;}, 500);
        Stamina_bar.value -= CHARGE_VALUE;
		main_character.style.width = '250px';
		charge();
	}
}





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
		main_character.style.backgroundPositionX = '-' + cadr_right_X + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height + 'px';


		if (Xposition >= 100) {
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
		main_character.style.backgroundPositionX = '-' + cadr_left_X + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height + 'px';


		if (Xposition <= -350) {
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


		main_character.style.backgroundPositionX = '-' + cadr_charge_wight_right + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_special_attack_height + 'px';


		if (Xposition >= 100) {
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
		main_character.style.backgroundPositionX = '-' + cadr_charge_wight_left + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_special_attack_height + 'px';

		if (Xposition <= -350) {
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
					enemy_pain1();
				}
				if (enemy_side2 == RIGHT && (enemy_position2 - Xposition) >= 0 && (enemy_position2 - Xposition) <= 100) {		// all numbers is in px
					enemy_atack2 = ON;
					enemy_health_bar2.value -= DAMAGE;
					enemy_pain2();
				}
				if (enemy_side1 == LEFT && (enemy_position1 - Xposition) >= -20 && (enemy_position1 - Xposition) <= 60) {		// all numbers is in px
					enemy_health_bar1.value -= DAMAGE;
					enemy_pain1();
				}
				if (enemy_side2 == LEFT && (enemy_position2 - Xposition) >= -20 && (enemy_position2 - Xposition) <= 60) {		// all numbers is in px
					enemy_health_bar2.value -= DAMAGE;
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
				}
				if (enemy_side2 == LEFT && (enemy_position2 - Xposition) <= 0 && (enemy_position2 - Xposition) >= -80) {	 // all numbers is in px
					enemy_atack2 = ON;
					enemy_health_bar2.value -= DAMAGE;
					enemy_pain2();
				}
				
				if (enemy_side1 == RIGHT && (enemy_position1 - Xposition) <= 20 && (enemy_position1 - Xposition) >= -60) {		// all numbers is in px
					enemy_health_bar1.value -= DAMAGE;
					enemy_pain1();
				}
				if (enemy_side2 == RIGHT && (enemy_position2 - Xposition) <= 20 && (enemy_position2 - Xposition) >= -60) {		// all numbers is in px
					enemy_health_bar2.value -= DAMAGE;
					enemy_pain2();
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
