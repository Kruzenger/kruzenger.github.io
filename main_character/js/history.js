

next.onclick = function(){

	if (number_next == 0){
		images.src = "../img/history_2.jpg";
		number_next++;}
	else{
		images.src = "../img/history_3.jpg";
		number_next++;
		if(number_next == 3){
			history_window.remove();
			write_text_window();
		}
	}
}


skip.onclick = function(){
	history_window.remove();
	write_text_window();
}
