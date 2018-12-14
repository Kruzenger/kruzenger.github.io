



var main_character = document.getElementById('main_character');
var BG = document.getElementById('BG');

var cadr_wight_right = 1250;
var cadr_height_right = 0;
var cadr_wight_left = 1100;
var cadr_height_left = 0;

var cadr_wight_stay_right = 1250;
var cadr_wight_stay_left = 350;
var cadr_height_stay = 150;

var cadr_charge_wight_right = 1250;
var cadr_charge_height_right = 300;
var cadr_charge_wight_left = 1000;
var cadr_charge_height_left = 300;

var	Xposition = 15;
var side = 1;

var cadr_wight_right_sheld = 2150;
var cadr_wight_left_sheld = 200;
var cadr_sheld_height = 150;

var cadr_hit_width_right = 1250;
var cadr_hit_width_left = 1100;
var cadr_hit_height = 450;

var BG_Xposition = 0;

var Stamina = document.getElementById('Stamina_bar');
var which_fun = 0;

var Couldness = 1;

Stamina_fulling();

addEventListener("keydown", WAlking);

function WAlking(e){
	switch(e.keyCode){
         
        case 65:    // если нажата клавиша A
        	Couldness = 0;
        	which_fun = 1;
        	side = 0;
        	walk();
            break;
        case 68:  	// если нажата клавиша D
        	Couldness = 0;
        	which_fun = 1;
        	side = 1; 
            walk();
            break;
        case 16: 	// если нажата клавиша Shift
        if (Stamina_bar.value >= 40 && Couldness == 1) {
        	which_fun = 2;
        	Stamina_bar.value -= 40;
			main_character.style.width = '250px';
        	charge();
        	break;
        }
 		case 83:    // если нажата клавиша S
 			Couldness == 1;
 			which_fun = 1;
 			shield();
 			break;
 		case 81: 	// если нажата клавиша Q
 		if (Stamina_bar.value >= 20 && Couldness == 1) {
 			which_fun = 2;
 			Stamina_bar.value -= 20; 
 			hit();
 			break;
 		}
    }
}

addEventListener("keyup", staying);

function staying(){
	Couldness = 1;
	if (which_fun == 1) {
		setTimeout(stay_here, 150);
	}
	else{
		
	}
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

		if (Xposition >= 500) {
			BG_Xposition -= 8;
			BG.style.backgroundPositionX = BG_Xposition + 'px';
		}
		else{
			Xposition += 17;
			main_character.style.marginLeft = Xposition + 'px';
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

		if (Xposition <= -500) {
			BG_Xposition += 8;
			BG.style.backgroundPositionX = BG_Xposition + 'px';
		}	
		else{
			Xposition -= 17;
			main_character.style.marginLeft = Xposition + 'px';
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

		if (Xposition >= 500) {
			BG_Xposition -= 100;
			BG.style.backgroundPositionX = BG_Xposition + 'px';
		}
		else{
			Xposition += 100;
			main_character.style.marginLeft = Xposition + 'px';
		}

		if(cadr_charge_wight_right != 2250){
			cadr_charge_wight_right += 250;
			setTimeout(charge, 50);
		}
		else{
			setTimeout(repmake_150px, 50);
			cadr_charge_wight_right = 1250;
			setTimeout(stay_here, 50);
		}
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_charge_wight_left + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_charge_height_left + 'px';

		if (Xposition <= -500) {
			BG_Xposition += 100;
			BG.style.backgroundPositionX = BG_Xposition + 'px';
		}	
		else{
			Xposition -= 100;
			main_character.style.marginLeft = Xposition + 'px';
		}

		if(cadr_charge_wight_left != 0){
			cadr_charge_wight_left -= 250;
			setTimeout(charge, 50);
		}
		else{
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
				setTimeout(repmake_150px, 150);
				cadr_hit_width_left = 1100;
				setTimeout(stay_here, 150);
			}
		}
	}
}

function Stamina_fulling(){
	Stamina_bar.value += 1;
	setTimeout(Stamina_fulling, 100);
}