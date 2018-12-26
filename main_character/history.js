var skip = document.getElementById('skip');
var next = document.getElementById('next');
var images = document.getElementById('history_img');
var number_next = 0;


next.onclick = function(){

	if (number_next == 0){
	images.src = "../img/history_2.jpg";
	number_next++;}
	else{
	images.src = "../img/history_3.jpg";
	number_next++;
		if(number_next == 3){
			next.style.display = 'none';
			images.style.display = 'none';
			skip.style.display = 'none';
		}
	}

}


skip.onclick = function(){
	next.style.display = 'none';
	images.style.display = 'none';
	this.style.display = 'none';
}