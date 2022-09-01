let cl = console.log;

//Digital clock

let digitalclock = document.getElementById('digitcl');



function digitclock(){
	let date = new Date();
	let session = 'AM'
	let hr = date.getHours();
			if(hr > 12){
			session = 'PM';
			hr = hr - 12;
		}
			let min = date.getMinutes();
			let sec = date.getSeconds();
		 if(hr < 10){
			hr = '0' + hr;
		 }
		 if(min < 10){
			min = '0' + min;
		 }
		 if(sec < 10){
			sec = '0'+ sec;
		 }
	
	

	result = `${hr}:${min}:${sec} ${session}`;

	digitalclock.innerHTML = result;
	setTimeout(digitclock,1000);
}

digitclock()