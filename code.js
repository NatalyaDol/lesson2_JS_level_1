// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
//     если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.






var numberCheck = function (arg1, arg2) {

    if (arg1 >= 0 && arg2 >= 0) {
        if (arg1 > arg2 || arg1 == arg2) {
            rezult = (arg1 - arg2);
            console.log('Ваши числа положительные (arg1 = ' + arg1 + ')' + ' > (arg2 = ' + arg2 + ')' + ' на ' + rezult);
        } else {
            rezult = (arg2 - arg1);
            console.log('Ваши числа положительные (arg1 = ' + arg1 + ')' + ' < (arg2 = ' + arg2 + ')' + ' на ' + rezult);
        }
    } else if (arg1 < 0 && arg2 < 0) {
        rezult = (arg2 * arg1);
        console.log('Ваши числа отрицательные, их произведение равно  (arg1 = ' + arg1 + ')' +  ' * ' + '(arg2 = ' + arg2 + ')' + ' = ' + rezult);
    } else {
        rezult = (arg2 + arg1);
        console.log('Ваши числа разных знаков их математическая сумма с учетом знаков = (arg1 = ' + arg1 + ') + (arg2 ' + arg2 + ') = ' + rezult);
    }

};
(numberCheck(3, -4));


//### 4. Присвоить переменной (а) значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15

var numbRandom = Math.floor(Math.random()*16);

var numA = numbRandom;
switch (numA) {
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
        console.log('выпало число ' + numA);
}


//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

//функция на сложение через переменную в виде функции
var theSum = function (a, b) {
    let sum = a + b;
    return sum;
};
console.log('Функция на сложение. Аргументы 10 и 5 = ' + theSum(10, 5));


//функция на вычитание без локальных переменных
function difference(e, f) {
    return  e - f;
}

//функция на умножение без локальных переменных
function multiply(m, n) {
    return  m * n;
}

//функция на деление без локальных переменных
function division(x, y) {
    return  x / y;
}



//### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.

// В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch)


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'theSum':
            return (theSum(arg1, arg2));
            break;
        case 'difference':
            return (difference(arg1, arg2));
            break;
        case 'multiply':
            return (multiply(arg1, arg2));
            break;
        case 'division':
            return (division(arg1, arg2));
            break;
    }
}

 console.log(mathOperation(200, 20, 'theSum'));

//### 7) *Сравнить null и 0. Попробуйте объяснить результат.

console.log(0 == null);//false
console.log(0 === null);//false
console.log(0 >= null);//true

// При строгом сравнении === они не равны, т.к. Ноль(нуль)0 - это число, а null - это не число,
// null выдается в браузере, если в prompt ничего нет.
// а вот при нестрогом сравнении выдает true, потому что null  приравнивается к числу 0


//### 8) *С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.
//
function power(val, pow) {
    if (pow !== 1) {
        return val * power(val, pow-1);
    } else {
        return val;
    }
}
console.log(power(4, 4));



