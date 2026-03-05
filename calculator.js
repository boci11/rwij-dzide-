// Calculator functions

function appendToDisplay(value) {
	if (typeof document !== 'undefined') {
		document.getElementById('display').value += value;
	}
}

function clearDisplay() {
	if (typeof document !== 'undefined') {
		document.getElementById('display').value = '';
	}
}

function calculate() {
	const display = typeof document !== 'undefined' ? document.getElementById('display') : null;
	if (!display) return null;
	
	try {
		const result = eval(display.value);
		display.value = result;
		return result;
	} catch (e) {
		display.value = 'Error';
		return null;
	}
}

// Pure calculation function for testing
function evaluateExpression(expression) {
	try {
		return eval(expression);
	} catch (e) {
		return null;
	}
}

// Export for Node.js/Jest
if (typeof module !== 'undefined' && module.exports) {
	module.exports = {
		evaluateExpression,
		appendToDisplay,
		clearDisplay,
		calculate
	};
}
