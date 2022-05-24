// declare
var a = 1;
var b = 2;


// assignment
a = 10;


// operator & print
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);


// condition
if (a == 1) {
	console.log("good a");
} else if (a == 2) {
	console.log('nice a');
} else {
	console.log("also a");
}


// repeat
for (var i = 0; i < 10; i++) {
	console.log(i);
}

var j = 0;
while (1) {
	if (j % 2 == 1) continue;
	console.log(j);
	j++;
	if (j < 10) break;
}


// list
l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// function
function temp_func() {
	console.log("bruh");
}

function func_return_0() {
	return 0;
}

function func_argument(a) {
	return a+1;
}
