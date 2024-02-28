const readlineSync = require('readline-sync');

function Calculator() {
this.read = function() {
this.a = readlineSync.question('Введите первое число: ');
this.b = readlineSync.question('Введите второе число: ');
};

this.sum = function() {
return Number(this.a) + Number(this.b);
};

this.mul = function() {
return Number(this.a) * Number(this.b);
};
}

const calculator = new Calculator();
calculator.read();
console.log('Сумма:', calculator.sum());
console.log('Произведение:', calculator.mul());