var skip = document.getElementById('skip');
var next = document.getElementById('next');
var images = document.getElementById('history_img');
var history_window = document.getElementById('history_window');
var number_next = 0;


next.onclick = function(){

	if (number_next == 0){
		images.src = "../img/history_2.jpg";
		number_next++;}
	else{
		images.src = "../img/history_3.jpg";
		number_next++;
		if(number_next == 3){
			next.remove();
			images.remove();
			skip.remove();
		}
	}
}


skip.onclick = function(){
	next.style.display = 'none';
	images.style.display = 'none';
	images.style.zIndex = 0;
	this.style.display = 'none';
}
