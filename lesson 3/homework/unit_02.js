//+ Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

// let a = 7,
// 	b = 9;

// console.log(a * b);

//+ Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

let c = 7,
	d = 9;

document.querySelector('.out-2').innerHTML = c / d;

document.querySelector('.out-2').textContent = c / d;

//+ Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

let e = 3,
	f = 5;

document.querySelector('.out-3').innerHTML = e + f;

document.querySelector('.out-3').textContent = e + f;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.

let e1 = '3',
	f1 = 5;

document.querySelector('.out-4').innerHTML = e1 + f1;

// document.querySelector('.out-4').textContent = e1 + f1;

// JS сказал, что мы число со строкой складываем

//+ Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

let e2 = 3,
	f2 = 0;

document.querySelector('.out-5').innerHTML = e2 / f2;

// document.querySelector('.out-5').textContent = e2 / f2;

// Бесконечность. На ноль делить, как бы нельзя 

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.

let e3 = 3,
	f3 = 'hello';

document.querySelector('.out-6').innerHTML = e3 + f3;

document.querySelector('.out-6').textContent = e3 + f3;

// Тоже самое , только наоборот . число + текст

//+ Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.

let e4 = 3,
	f4 = 'Hello';

document.querySelector('.out-7').innerHTML = e4 * f4;

document.querySelector('.out-7').textContent = e4 * f4;

// не число

//+ Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

let i8 = document.querySelector('.i-8'),
	b8 = document.querySelector('.b-8');

function t8() {
	let in8 = i8.value;
	console.log(in8);
}
document.querySelector('.b-8').onclick = t8;

//+ Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

let i9 = document.querySelector('.i-9'),
	b9 = document.querySelector('.b-9');


function t9() {
	document.querySelector('.out-9').innerHTML = i9.value;
	i9.value = "";

}
document.querySelector('.b-9').onclick = t9;

//+ Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

let i10 = document.querySelector('.i-10'),
	b10 = document.querySelector('.b-10'),
	out10 = document.querySelector('.out-10');



function t10() {
	out10.innerHTML = i10.value * 10;
	i10.value = "";
}

document.querySelector('.b-10').onclick = t10;

//+ Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

let i11 = document.querySelector('.i-11'),
	b11 = document.querySelector('.b-11');

function t11() {
	document.querySelector('.out-11').innerHTML = +i11.value + 10;
	i11.value = "";
}

document.querySelector('.b-11').onclick = t11;

//+ Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

let i12Name = document.querySelector('.i-12_1'),
	i12SureName = document.querySelector('.i-12_2'),
	b12 = document.querySelector('.b-12'),
	div12 = document.querySelector('.out-12');

function t12() {
	let wn = i12Name.value;
	let ws = i12SureName.value;
	div12.innerHTML = "Hello" + " " + wn + " " + ws;

	i12Name.value = "";
	i12SureName.value = "";
}

document.querySelector('.b-12').onclick = t12;

//+ Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

let i13fs = document.querySelector('.i-13_1'),
	i13sc = document.querySelector('.i-13_2'),
	b13 = document.querySelector('.b-13'),
	div13 = document.querySelector('.out-13');

function t13() {
	let i13f = +i13fs.value;
	let i13s = +i13sc.value;
	div13.innerHTML = i13f + i13s;
	i13fs.value = "";
	i13sc.value = "";
}

document.querySelector('.b-13').onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.


let i14 = document.querySelector('.i-14'),
	b14 = document.querySelector('.b-14'),
	div14 = document.querySelector('.out-14');

document.querySelector('.i-14').value = "HELLO";

// +Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector(".i-15");
y.style.border = '2px solid red';


// +Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16


let i16first = document.querySelector('.i-16-1'),
	i16second = document.querySelector('.i-16-2'),
	b16 = document.querySelector('.b-16'),
	div16 = document.querySelector('.out-16');

function t16() {
	let i16f = +i16first.value;
	let i16s = +i16second.value;
	div16.innerHTML = i16f + i16s;

	i16f.value = "";
	i16s.value = "";

}

document.querySelector('.b-16').onclick = t16;
// js по барабану на numder , надо + ставить


// - Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let i17 = document.querySelector('.i-17'),
	b17 = document.querySelector('.b-17'),
	div17 = document.querySelector('.out-17')

function t17() {
	let t = i17;
	t = parseInt(t);
	div17.innerHTML = t;

	i17.value = "";

}

document.querySelector('.b-17').onclick = t17;

// - Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.


let i18 = document.querySelector('.i-18'),
	b18 = document.querySelector('.b-18'),
	div18 = document.querySelector('.out-18');

function t18() {
	let t = i18;
	t = parseFloat(t);
	div18.innerHTML = t;

	i18.value = "";
}

document.querySelector('.b-18').onclick = t18;

// - Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

// работает, но неправильно скорее всего 
let i19fs = document.querySelector('.i-19-1'),
	i19sc = document.querySelector('.i-19-2'),
	b19 = document.querySelector('.b-19'),
	div19 = document.querySelector('.out-19');


function t19() {
	let i19f = +i19fs.value;
	let i19s = +i19sc.value;
	div19.innerHTML = i19f + i19s;
	i19fs.value = "";
	i19sc.value = "";
}

document.querySelector('.b-19').onclick = t19;

//+ Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

let qName = document.querySelector('.i-20-1');
let qSn = document.querySelector('.i-20-2');
let qAge = document.querySelector('.i-20-3');
let qWork = document.querySelector('.i-20-4');
let qDiv = document.querySelector(".out-20");
let b20 = document.querySelector('.b-20');

function t20() {

	let q3 = qAge.value;
	let q1 = qName.value;
	let q4 = qWork.value;
	let q2 = qSn.value;

	qDiv.innerHTML = `Уважаемый, ${q2} ${q1}, ваш возраст ${q3} года, по професси вы ${q4}`;


	qAge.value = " ";
	qName.value = " ";
	qWork.value = " ";
	qSn.value = " ";
}

document.querySelector('.b-20').onclick = t20;