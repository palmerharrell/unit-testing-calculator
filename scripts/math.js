// Create a user interface for a calculator. One text input and 6 buttons.
// The user will enter a number in the text input.
// The user will then press one of the buttons for an operation.
// The input field should be cleared so that a new number can be typed in.
// The user will then type in a new number and press enter.
// The resulting value of the operation should then be in the text input.

"use strict";

var mathFunction = "";
var number1 = 0;
var number2 = "N/A";

// Determine which function to call
function calculate(func, num1, num2) {
	if (num2 !== "N/A") {
		$("#inputText").val(func(num1, num2));
	} else {
		$("#inputText").val(func(num1));
	};
}

// Math Functions
function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function square(num) {
	return Math.pow(num, 2);
}

function squareRoot(num) {
	return Math.sqrt(num);
}

// Button Event Listeners
$(".twoNums").click(function() {
	mathFunction = $(this).attr("id");
	number1 = parseInt($("#inputText").val());
	$("#inputText").val("");
	$("#inputText").attr("placeholder", "Enter 2nd number");
});

$(".oneNum").click(function() {
	mathFunction = $(this).attr("id");
	number1 = parseInt($("#inputText").val());
	number2 = "N/A";
	if (mathFunction === "square") {
		calculate(square, number1);
	} else if (mathFunction === "squareRoot") {
		calculate(squareRoot, number1);
	};
});

// Get 2nd number, pass math function and numbers to calculate function
$("#inputText").keyup(function(e) {
	if (e.keyCode == 13) {
		if (mathFunction === "add") {
			number2 = parseInt($("#inputText").val());
			calculate(add, number1, number2);
		} else if (mathFunction === "subtract") {
			number2 = parseInt($("#inputText").val());
			calculate(subtract, number1, number2);
		} else if (mathFunction === "multiply") {
			number2 = parseInt($("#inputText").val());
			calculate(multiply, number1, number2);
		} else if (mathFunction === "divide") {
			number2 = parseInt($("#inputText").val());
			calculate(divide, number1, number2);
		};
	};
});









