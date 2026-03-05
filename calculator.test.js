const { evaluateExpression } = require('./calculator');

describe('Calculator', () => {
	test('should add two numbers', () => {
		expect(evaluateExpression('2+3')).toBe(5);
	});

	test('should subtract two numbers', () => {
		expect(evaluateExpression('10-4')).toBe(6);
	});

	test('should multiply two numbers', () => {
		expect(evaluateExpression('6*7')).toBe(42);
	});

	test('should divide two numbers', () => {
		expect(evaluateExpression('20/4')).toBe(5);
	});

	test('should handle complex expressions', () => {
		expect(evaluateExpression('2+3*4')).toBe(14);
	});

	test('should handle multiple operations', () => {
		expect(evaluateExpression('100-50+25')).toBe(75);
	});

	test('should return null for invalid expressions', () => {
		expect(evaluateExpression('2++3')).toBeNull();
	});

	test('should return null for incomplete expressions', () => {
		expect(evaluateExpression('5+')).toBeNull();
	});

	test('should handle division by zero', () => {
		expect(evaluateExpression('5/0')).toBe(Infinity);
	});

	test('should handle decimal numbers', () => {
		expect(evaluateExpression('3.5+2.5')).toBe(6);
	});
});
