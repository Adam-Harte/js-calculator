var display = document.getElementById('result');

function output(input){
	display.value += input;
	if(input === 'c'){
		display.value = '';
	}
}

function clearEntry(){
	var str = display.value;
	var len = str.length - 1;
	var newResult = str.substring(0, len);
	display.value = newResult;
}

function squared(){
	input = display.value;
	input = eval(input * input);
	display.value = input;
}

function calc(){
	input = display.value;
	input = eval(input).toFixed(2);
	display.value = input;
}