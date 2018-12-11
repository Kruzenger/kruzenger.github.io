



var main_character = document.getElementById('main_character');

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

addEventListener("keydown", WAlking);

function WAlking(e){
	switch(e.keyCode){
         
        case 65:    // если нажата клавиша A
        	side = 0;
        	walk();
            break;
        case 68:  	// если нажата клавиша D
        	side = 1; 
            walk();
            break;
        case 16: 	// если нажата клавиша Shift
				main_character.style.width = '250px';
        		charge();
        		break;
 		case 83:    // если нажата клавиша S
 			shield();
 			break;
 		case 81: 	// если нажата клавиша Q
 			hit();
 			break;
    }
}

addEventListener("keyup", staying);

function staying(){
	setTimeout(stay_here, 250);
}

function stay_here(){
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

		Xposition += 10;
		main_character.style.marginLeft = Xposition + 'px';  

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

		Xposition -= 10;
		main_character.style.marginLeft = Xposition + 'px';  

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

		Xposition += 75;
		main_character.style.marginLeft = Xposition + 'px';

		if(cadr_charge_wight_right != 2250){
			cadr_charge_wight_right += 250;
			setTimeout(charge, 50);
		}
		else{
			main_character.style.width = '150px';
			cadr_charge_wight_right = 1250;
			setTimeout(stay_here, 50);
		}
	}
	else{
		main_character.style.backgroundPositionX = '-' + cadr_charge_wight_left + 'px';
		main_character.style.backgroundPositionY = '-' + cadr_charge_height_left + 'px';

		Xposition -= 75;
		main_character.style.marginLeft = Xposition + 'px';

		if(cadr_charge_wight_left != 0){
			cadr_charge_wight_left -= 250;
			setTimeout(charge, 50);
		}
		else{
			main_character.style.width = '150px';
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
			if (cadr_hit_width_right < 2250) {
				main_character.style.width = '200px';
				cadr_hit_width_right += 200;
				setTimeout(hit, 50);
			}
			else{
				main_character.style.width = '150px';
				cadr_hit_width_right = 1250;
				setTimeout(stay_here, 50);
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
				main_character.style.width = '150px';
				cadr_hit_width_left = 1100;
				setTimeout(stay_here, 50);
			}
		}
	}
}