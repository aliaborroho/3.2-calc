var modeEl = document.getElementById('mode');
var valEl = document.getElementById('value');
var clearEl = document.getElementById(' clear');

var numButtons = document.getElementsByClassName('number-button');
var modeButtons = document.getElementsByClassName('mode-button');



clearEl.onclick = function () {
	valueEl.innerHTML = tmp;
};

var numberSubscibe = function () {
	var currentNum = parseInt(this.innerHTML);
	var tmp;
	if(modeEl.innerHTML == '+') {
		var tmp = currentNum + parseInt(valueEl.innerHTML);
	} else {
		var tmp = parseInt(valueEl.innerHTML);
	}

	valueEl.innerHTML = tmp;
};

var modeClick = function () {
	modeEl.innerHTML = this.innerHTML;
};

for (var i = numButtons.length - 1; i >= 0; i--) {
	numButtons[i].onclick = numberSubscibe;
}
for (var i = numButtons.length - 1; i >= 0; i--) {
	numButtons[i].onclick = modeClick;
}
