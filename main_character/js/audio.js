		
main_theme.volume = 0.1;

main_theme.play();

function sound_after_attack(){
	attackNT_sound.play();
};

function sound_after_s_attack(){
	attackS_sound.play();
};

music_on.onclick = function(){
	if (music_on_l == 0){
		music_on.src = "../img/speaker-off.png";
		music_on_l = 1;
		main_theme.volume = 0;
	} else{
		music_on.src="../img/speaker.png"
		music_on_l = 0;
		main_theme.volume = 0.1;
	}
}

settings_release.onclick = function(){
	if (settings_release_open == 0) {
		settings.style.display = 'block';
		settings_release_open = 1;
	} else{
		settings.style.display = 'none';
		settings_release_open = 0;
	}
}

function block_sound(){
	block.play();
}; 