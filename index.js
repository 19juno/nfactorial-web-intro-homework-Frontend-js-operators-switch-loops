console.log('salem alem')
// 1. Создайте объект user. Узнайте у user-a его имя, 
//возраст, является ли он мужчиной или женщиной. 
//Запишите все в объект. И выведите в консоли. 
let user = {};
user.name = prompt("Как вас зовут?", "ФИО");
user.age = +prompt("Сколько вам лет?", "18");

if(confirm("Вы мужчина?")) {
    user.gender = "Mужчина";
} else  user.gender = "Женщина";
 
console.log(user);


// 2. Используя конструкцию if..else, напишите код, 
// который получает число через prompt, а затем выводит в alert.

let number;

if(number =  prompt('Введите число')) {
    alert(number);
}

// 3. Перепишите этот блок кода с использованием оператора switch. 

let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch(a) {
    case 0: alert(0);
            break;
    case 1: alert(1);
            break;
    case 2:
    case 3: alert('2,3');
            break;
    default: alert("Введите другое значение")
}

// 4. Посчитайте сумму всех четных чисел в промежутке 1-100. Выведите в консоль. 

let sum = 0;

for(let i = 0; i <= 100; i+=2) {  // 
    sum += i;
}

console.log("sum = " + sum);

//  5. Перепишите цикл for на while. 

let i = 0;
while(i < 3) {
    alert( `number ${i}!` );
    i++;
}

