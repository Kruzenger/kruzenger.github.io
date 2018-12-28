




function write_taxt_window(){
	field_for_text.style.opacity = 1;
	setTimeout(teach_walking, 1000);
}

function teach_walking() {
	if (counter < teaching_walk_right_and_left.length && frase_N1 == OFF && frase_N2 == OFF) {
    	txt.innerHTML += teaching_walk_right_and_left.charAt(counter);
    	counter++;
   		setTimeout(teach_walking, speed);
	}
}

function all_clear(){
	txt.innerHTML = ' ';
	counter = 0;
	frase_N1 = OFF;
	frase_N2 = OFF;
}

function teach_fighting(){
	if (counter < teaching_shield_hide.length && frase_N1 == OFF) {
    	txt.innerHTML += teaching_shield_hide.charAt(counter);
    	counter++;
   		setTimeout(teach_fighting, speed);
	}
}

function teach_talking(){
	if (counter <  teaching_talking.length && frase_N2 == OFF) {
		txt.innerHTML += teaching_talking.charAt(counter);
		counter++;
		setTimeout(teach_talking, speed);
	}
}

function need_help() {
	if (counter_state < need_help_state.length) {
		state.innerHTML += need_help_state.charAt(counter_state);
		counter_state++;
		setTimeout(need_help, speed);
	}
}


function agree_or_not(){
	darkness.style.opacity = '1';
	window_agree.style.opacity = '1';
	me_stun = ON;	 
}

function thank_you(){
	if (counter_state < thank_you_stay.length) {
		state.innerHTML += thank_you_stay.charAt(counter_state);
		counter_state++;
		setTimeout(thank_you, speed);
	}
}