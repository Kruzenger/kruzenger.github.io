




function write_taxt_window(){
	field_for_text.style.opacity = 1;
	setTimeout(teach_walking, 1000);
}

function teach_walking() {
	if (counter < teaching_walk_right_and_left.length && frase_N2 == OFF) {
    	txt.innerHTML += teaching_walk_right_and_left.charAt(counter);
    	counter++;
   		setTimeout(teach_walking, speed);
	}
}

function all_clear(){
	txt.innerHTML = ' ';
	counter = 0;
}

function teach_hiding(){
	if (counter < teaching_shield_hide.length) {
    	txt.innerHTML += teaching_shield_hide.charAt(counter);
    	counter++;
   		setTimeout(teach_hiding, speed);
	}
}
