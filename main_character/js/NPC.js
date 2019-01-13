




function NPC_what_to_do() {
	if (npc_angry == ON) {
		setTimeout(function() {
			npc_moving = ON;
			npc_side = LEFT;
			npc_run();
	}, 3000);

	}
	else{
		if (npc_talked == ON) {
			if ((npc_position - Xposition) < -300) {
				npc_moving = ON;
				npc_run();
			}
			else if ((npc_position - Xposition) > 300) {
				npc_moving = ON;
				npc_run();
			}
			else if ((npc_position - Xposition) > 0 && (npc_position - Xposition) < 300) {
				npc_moving = OFF;
				npc_side = LEFT;
				NPC_stay_left();
			}
			else if((npc_position - Xposition) < 0 && (npc_position - Xposition) > -300){
				npc_moving = OFF;
				npc_side = RIGHT;
				NPC_stay_right();
			}
		}
		else if ((npc_position - Xposition) > 0) {
			npc_side = LEFT;
			NPC_stay_left();
		}
		else if((npc_position - Xposition) < 0){
			npc_side = RIGHT;
			NPC_stay_right();
		}
	}
	setTimeout(NPC_what_to_do, 50);
}

function NPC_stay_left(){
	npc.style.backgroundPositionX = '-' + npc_stay_left_X + 'px';
	npc.style.backgroundPositionY = '-' + cadr_height_stay + 'px';
}

function NPC_stay_right(){
	npc.style.backgroundPositionX = '-' + npc_stay_right_X + 'px';
	npc.style.backgroundPositionY = '-' + cadr_height_stay + 'px';
}

function player_helps_him() {
	window_agree.style.opacity = '0';
	darkness.style.opacity = '0';
	state.innerHTML = ' ';
	state.style.color = 'green';
	all_clear();
	frase_N1 = ON;
	frase_N2 = ON;
	reputation();
	me_stun = 0;
	counter_state = 0;
	setTimeout(function() {
		frase_N1 = OFF;
		frase_N2 = OFF;
	}, 7500);
	npc_talked = ON;
	var ok = document.getElementById('OK');
	var no = document.getElementById('NO');
	ok.remove();
	no.remove();
	thank_you();
}

function player_do_not_help_him(){
	window_agree.style.opacity = '0';
	darkness.style.opacity = '0';
	state.innerHTML = ' ';
	state.style.color = 'red';
	all_clear();
	frase_N1 = ON;
	frase_N2 = ON;
	reputation();
	me_stun = 0;
	counter_state = 0;
	setTimeout(function() {
		frase_N1 = OFF;
		frase_N2 = OFF;
	}, 7500);
	npc_angry = ON;
	var ok = document.getElementById('OK');
	var no = document.getElementById('NO');
	ok.remove();
	no.remove();
	disapeard();
}

function npc_run(){
	if (npc_side == RIGHT) {
		npc.style.backgroundPositionX = '-' + npc_run_right_X + 'px';
		npc.style.backgroundPositionY = '-' + cadr_height + 'px';

		if (npc_run_right_X == 2300) {
			npc_run_right_X = 1250;
		}
		else{
			npc_run_right_X += 150;
		}
	}
	else{
		npc.style.backgroundPositionX = '-' + npc_run_left_X + 'px';
		npc.style.backgroundPositionY = '-' + cadr_height + 'px';

		if (npc_run_left_X == 50) {
			npc_run_left_X = 1100;
		}
		else{
			npc_run_left_X -= 150;
		}
	}
}

function npc_moving_run(){
	if (npc_side == RIGHT && npc_moving == ON) {
		npc_position += 2;
		npc.style.left = npc_position + 'px';
	}
	else if(npc_side == LEFT && npc_moving == ON){
		npc_position -= 2;
		npc.style.left = npc_position + 'px';
	}
}