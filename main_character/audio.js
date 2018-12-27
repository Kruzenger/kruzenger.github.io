var main_theme = document.getElementById('main_theme');
var attackNT_sound = document.getElementById('attackNT_sound');
var attackS_sound = document.getElementById('attackS_sound');
var music_on = document.getElementById('music_on');
var music_on_l = 0;
var settings_release = document.getElementById('settings_icon_svg');
var settings_release_open = 0;
var settings = document.getElementById('settings');


main_theme.volume = 0.3;

main_theme.play();


function play_main_theme(){
};

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
		main_theme.volume = 0.3;
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
