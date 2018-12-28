




function NPC_what_to_do() {
	if ((npc_position - Xposition) > 0) {
		NPC_stay_left();
	}
	else if((npc_position - Xposition) < 0){
		NPC_stay_right();
	}
	else if (npc_talked == ON) {

	}
	setTimeout(NPC_what_to_do, 100);
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
	me_stun = 0;
	counter_state = 0;
	thank_you();
}
