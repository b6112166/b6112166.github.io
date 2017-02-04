	
var a =0

function displayimg(){
	
	document.getElementById('img').src= 'imgres.jpg'

}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function DisplayMsg(k){// takes in an int
	if (k==1){// when mouse down
	document.getElementById('demo').innerHTML= "hi there"
	}
	else{ // when mouse up
	document.getElementById('demo').innerHTML= "Nothing suspicious here"	
	}
}
function count(){

	a++
	document.getElementById('count').innerHTML= a
	
	
}