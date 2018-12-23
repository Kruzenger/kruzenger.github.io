



var main_character = document.getElementById('main_character');
var BG = document.getElementById('BG');
var Stamina = document.getElementById('Stamina_bar');
var Health = document.getElementById('HP_bar');
var game = document.getElementById('Game');

var cadr_wight_right = 1250;
const cadr_height_right = 0;
var cadr_wight_left = 1100;
const cadr_height_left = 0;

var cadr_wight_stay_right = 1250;
var cadr_wight_stay_left = 350;
const cadr_height_stay = 150;

var cadr_charge_wight_right = 1250;
const cadr_charge_height_right = 300;
var cadr_charge_wight_left = 1000;
const cadr_charge_height_left = 300;

var	Xposition = -250;
var side = 1;
var stay_player = 1;

var cadr_wight_right_sheld = 2150;
var cadr_wight_left_sheld = 200;
const cadr_sheld_height = 150;

var cadr_hit_width_right = 1250;
var cadr_hit_width_left = 1100;
const cadr_hit_height = 450;

var my_pain_right_X = 1250;
var my_pain_left_X = 1100;
const my_pain_Y = 600;

var deadly_me_right_X = 1250;
var deadly_me_left_X = 1100;
const deadly_me_Y = 750;

var me_dead = 0;

var BG_Xposition = 0;

var Stamina = document.getElementById('Stamina_bar');
var which_fun = 0;

var Couldness = 1;
var cooldown = 1;

var shield_up = 0;

var press = 0;

var me_stun = 0;






is_moob_alive1();

is_moob_alive2();

searching1();

searching2();

am_I_alive();

Stamina_fulling();






addEventListener("keydown", WAlking);

function WAlking(e){
	if (me_stun == 0 && me_dead == 0) {
		switch(e.keyCode){
         
       		case 65:    // если нажата клавиша A
       			stay_player = 0;
        		Couldness = 0;
        		press = 1;
        		side = 0;
        		walk();
          		break;

       		case 68:  	// если нажата клавиша D
        		stay_player= 0;
        		Couldness = 0;
        		press = 1;
        		side = 1; 
           		walk();
            	break;

        	case 16: 	// если нажата клавиша Shift
        		if (Stamina_bar.value >= 40 && Couldness == 1 && cooldown == 1) {
        			cooldown = 0;
 					setTimeout(function(){cooldown = 1;}, 650);
        			press = 1;
        			Stamina_bar.value -= 40;
					main_character.style.width = '250px';
        			charge();
        			break;
        		}

 			case 83:    // если нажата клавиша S
 				shield_up = 1;
 				stay_player = 1;
 				Couldness = 1;
 				press = 1;
 				shield();
 				break;

 			case 81: 	// если нажата клавиша Q
 				if (Stamina_bar.value >= 30 && cooldown == 1) {
 					cooldown = 0;
 					setTimeout(function(){cooldown = 1;}, 500);
 					press = 1;
 					Stamina_bar.value -= 30; 
 					hit();
 					break;
 				}
 		}
    }
}

addEventListener("keyup", function(){
	stay_player = 1;
	press = 0; 
	shield_up = 0;
	Couldness = 1; 
	setTimeout(check_staying, 400)
});

function check_staying(){
	if (press == 1) {
	
	}
	else{
		staying();
	}
}

function staying(){
	stay_here();
}

function repmake_150px(){
	main_character.style.width = '150px';
}

function stay_here(){
	repmake_150px();
	cadr_wight_right = 1250;
	cadr_wight_left = 1100;

	sheld = 0;

	if (side == 1) {
		main_character.style.backgroundPositionX = '-' + cadr_wight_stay_right + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height_stay + 'px';
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_wight_stay_left + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height_stay + 'px';
	}
}

function walk(){
	if (side == 1) {
		main_character.style.backgroundPositionX = '-' + cadr_wight_right + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height_right + 'px';

		if (Xposition >= 100) {
			BG_Xposition -= 12;
			if (((enemy_position1 - Xposition) > -20 && (enemy_position1 - Xposition) < 0) || enemy_atack1 == 0 || enemy_side1 == 0) {
				enemy_position1 -= 12;
				enemy1.style.left = enemy_position1 + 'px';
			}
			if (((enemy_position2 - Xposition) > -20 && (enemy_position2 - Xposition) < 0) || enemy_atack2 == 0 || enemy_side2 == 0) {
				enemy_position2 -= 12;
				enemy2.style.left = enemy_position2 + 'px';
			}
			BG.style.backgroundPositionX = BG_Xposition + 'px';
		}
		else{
			Xposition += 15;
			main_character.style.left = Xposition + 'px';
		}

		if (cadr_wight_right == 2300) {
			cadr_wight_right = 1250;
		}
		else{
			cadr_wight_right += 150;
		}
		side = 1;
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_wight_left + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_height_left + 'px';

		if (Xposition <= -350) {
			BG_Xposition += 12;
			if (((enemy_position1 - Xposition) < 20 && (enemy_position1 - Xposition) > 0) || enemy_atack1 == 0 || enemy_side1 == 1) {
				enemy_position1 += 12;
				enemy1.style.left = enemy_position1 + 'px';
			}
			if (((enemy_position2 - Xposition) < 20 && (enemy_position2 - Xposition) > 0) || enemy_atack2 == 0 || enemy_side2 == 1) {
				enemy_position2 += 12;
				enemy2.style.left = enemy_position2 + 'px';
			}
			BG.style.backgroundPositionX = BG_Xposition + 'px';
		}	
		else{
			Xposition -= 15;
			main_character.style.left = Xposition + 'px';
		}

		if (cadr_wight_left == 50) {
			cadr_wight_left = 1100;
		}
		else{
			cadr_wight_left -= 150;
		}
		side = 0;
	}
}

function charge(){

	if (side == 1) {

		main_character.style.backgroundPositionX = '-' + cadr_charge_wight_right + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_charge_height_right + 'px';

		if (Xposition >= 100) {
			BG_Xposition -= 65;
			enemy_position1 -= 65;
			enemy_position2 -= 65;
			enemy2.style.left = enemy_position2 + 'px';
			enemy1.style.left = enemy_position1 + 'px';
			BG.style.backgroundPositionX = BG_Xposition + 'px';
		}
		else{
			Xposition += 65;
			main_character.style.left = Xposition + 'px';
		}

		if(cadr_charge_wight_right != 2250){
			cadr_charge_wight_right += 250;
			setTimeout(charge, 50);
		}
		else{
			if(enemy_side1 == 1 && (enemy_position1 - Xposition) >= -10 && (enemy_position1 - Xposition) <= 100){
				enemy_atack1 = 1;
				enemy_health_bar1.value -= 40;
				enemy_pain1();
			}
			if (enemy_side2 == 1 && (enemy_position2 - Xposition) >= -10 && (enemy_position2 - Xposition) <= 100) {
				enemy_atack2 = 1;
				enemy_health_bar2.value -= 40;
				enemy_pain2();
			}
			if (enemy_side1 == 0 && (enemy_position1 - Xposition) >= -20 && (enemy_position1 - Xposition) <= 80) {
				enemy_atack1 = 1;
				enemy_health_bar1.value -= 40;
				enemy_pain1();
			}
			if (enemy_side2 == 0 && (enemy_position2 - Xposition) >= -20 && (enemy_position2 - Xposition) <= 80) {
				enemy_atack2 = 1;
				enemy_health_bar2.value -= 40;
				enemy_pain2();
			}

			setTimeout(repmake_150px, 50);
			cadr_charge_wight_right = 1250;
			setTimeout(stay_here, 50);
		}
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_charge_wight_left + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_charge_height_left + 'px';

		if (Xposition <= -350) {
			BG_Xposition += 65;
			enemy_position1 += 65;
			enemy_position2 += 65;
			enemy2.style.left = enemy_position2 + 'px';
			enemy1.style.left = enemy_position1 + 'px';
			BG.style.backgroundPositionX = BG_Xposition + 'px';

		}	
		else{
			Xposition -= 65;
			main_character.style.left = Xposition + 'px';
		}

		if(cadr_charge_wight_left != 0){
			cadr_charge_wight_left -= 250;
			setTimeout(charge, 50);
		}
		else{
			if(enemy_side1 == 0 && (enemy_position1 - Xposition) <= 10 && (enemy_position1 - Xposition) >= -100){
				enemy_atack1 = 1;
				enemy_health_bar1.value -= 40;
				enemy_pain1();
			}
			if (enemy_side2 == 0 && (enemy_position2 - Xposition) <= 10 && (enemy_position2 - Xposition) >= -100) {
				enemy_atack2 = 1;
				enemy_health_bar2.value -= 40;
				enemy_pain2();
			}
			
			if (enemy_side1 == 1 && (enemy_position1 - Xposition) <= 40 && (enemy_position1 - Xposition) >= -80) {
				enemy_atack1 = 1;
				enemy_health_bar1.value -= 40;
				enemy_pain1();
			}
			if (enemy_side1 == 2 && (enemy_position2 - Xposition) <= 40 && (enemy_position2 - Xposition) >= -80) {
				enemy_atack2 = 1;
				enemy_health_bar2.value -= 40;
				enemy_pain2();
			}
			setTimeout(repmake_150px, 50);
			cadr_charge_wight_left = 1000;
			setTimeout(stay_here, 50);
		}
	}
}

function shield(){
	if (side == 1) {
		main_character.style.backgroundPositionX = '-' + cadr_wight_right_sheld + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_sheld_height + 'px';
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_wight_left_sheld + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_sheld_height + 'px';
	}
}

function hit(){
	if (side == 1) {

		main_character.style.backgroundPositionX = '-' + cadr_hit_width_right + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_hit_height + 'px';

		if(cadr_hit_width_right < 1850){
			cadr_hit_width_right += 150;
			setTimeout(hit, 50);
		}
		else{
			if (cadr_hit_width_right < 2050) {
				main_character.style.width = '200px';
				cadr_hit_width_right += 200;
				setTimeout(hit, 50);
			}
			else{
				if(enemy_side1 == 1 && (enemy_position1 - Xposition) >= 0 && (enemy_position1 - Xposition) <= 100){
					enemy_atack1 = 1;
					enemy_health_bar1.value -= 40;
					enemy_pain1();
				}
				if (enemy_side2 == 1 && (enemy_position2 - Xposition) >= 0 && (enemy_position2 - Xposition) <= 100) {
					enemy_atack2 = 1;
					enemy_health_bar2.value -= 40;
					enemy_pain2();
				}
				if (enemy_side1 == 0 && (enemy_position1 - Xposition) >= -20 && (enemy_position1 - Xposition) <= 60) {
					enemy_atack1 = 1;
					enemy_health_bar1.value -= 40;
					enemy_pain1();
				}
				if (enemy_side2 == 0 && (enemy_position2 - Xposition) >= -20 && (enemy_position2 - Xposition) <= 60) {
					enemy_atack2 = 1;
					enemy_health_bar2.value -= 40;
					enemy_pain2();
				}
				setTimeout(repmake_150px, 150);
				cadr_hit_width_right = 1250;
				setTimeout(stay_here, 150);
			}
		}
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_hit_width_left + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_hit_height + 'px';

		if (cadr_hit_width_left > 500) {
			cadr_hit_width_left -= 150;
			setTimeout(hit, 50);
		}
		else{
			if(cadr_hit_width_left > 100 && cadr_hit_width_left < 500){
				main_character.style.width = '200px';
				cadr_hit_width_left -= 200;
				setTimeout(hit, 50);
			}
			else{
				if(enemy_side1 == 0 && (enemy_position1 - Xposition) <= 0 && (enemy_position1 - Xposition) >= -80){
					enemy_atack1 = 1;
					enemy_health_bar1.value -= 40;
					enemy_pain1();
				}
				if (enemy_side2 == 0 && (enemy_position2 - Xposition) <= 0 && (enemy_position2 - Xposition) >= -80) {
					enemy_atack2 = 1;
					enemy_health_bar2.value -= 40;
					enemy_pain2();
				}
				
				if (enemy_side1 == 1 && (enemy_position1 - Xposition) <= 20 && (enemy_position1 - Xposition) >= -60) {
					enemy_atack1 = 1;
					enemy_health_bar1.value -= 40;
					enemy_pain1();
				}
				if (enemy_side2 == 1 && (enemy_position2 - Xposition) <= 20 && (enemy_position2 - Xposition) >= -60) {
					enemy_atack2 = 1;
					enemy_health_bar2.value -= 40;
					enemy_pain2();
				}
				
				setTimeout(repmake_150px, 150);
				cadr_hit_width_left = 1100;
				setTimeout(stay_here, 150);
			}
		}
	}
}

function my_pain(){
	me_stun = 1;
	if(side == 1){
		main_character.style.backgroundPositionX = '-' + my_pain_right_X + 'px';
		main_character.style.backgroundPositionY = '-' + my_pain_Y + 'px';

		if (my_pain_right_X == 1550) {
			my_pain_right_X = 1250;
			me_stun = 0;
		}
		else{
			my_pain_right_X += 150;
			setTimeout(my_pain, 100); 
		}
	}
	else{
		main_character.style.backgroundPositionX = '-' + my_pain_left_X + 'px';
		main_character.style.backgroundPositionY = '-' + my_pain_Y + 'px';

		if (my_pain_left_X == 800) {
			my_pain_left_X = 1100;
			me_stun = 0;
		}
		else{
			my_pain_left_X -= 150;
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
		I_am_dead();
	}
	else{
		setTimeout(am_I_alive, 50);
	}
}

function I_am_dead(){
	me_dead = 1;
	if (side == 1) {
		main_character.style.backgroundPositionX = '-' + deadly_me_right_X + 'px';
		main_character.style.backgroundPositionY = '-' + deadly_me_Y + 'px';

		if (deadly_me_right_X == 2150) {
			deadly_me_right_X = 1250;
			location.reload();
		}
		else{
			deadly_me_right_X += 150;
			setTimeout(I_am_dead, 100);
		}
	}
	else{
		main_character.style.backgroundPositionX = '-' + deadly_me_left_X + 'px';
		main_character.style.backgroundPositionY = '-' + deadly_me_Y + 'px';

		if (deadly_me_left_X == 200) {
			deadly_me_left_X = 1100;
		}
		else{
			deadly_me_left_X -= 150;
			setTimeout(I_am_dead, 100);
		}
	}
}


var skip = document.getElementById('skip');
var next = document.getElementById('next');
var images = document.getElementById('history_img');
var number_next = 0;


next.onclick = function(){

	if (number_next == 0){
	images.src = "../img/history_2.jpg";
	number_next++;}
	else{
	images.src = "../img/history_3.jpg";
	number_next++;
		if(number_next == 3){
			next.style.display = 'none';
			images.style.display = 'none';
			skip.style.display = 'none';
		}
	}

}


skip.onclick = function(){
	next.style.display = 'none';
	images.style.display = 'none';
	this.style.display = 'none';
}