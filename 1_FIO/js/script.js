let surname;
let name;
let middleName;
let age;
let ageDay;
let agePlus5;
let sex;
let sex2;
let sex3
let a;

surname = prompt('введите фамилию');

while (surname <= ' ' , surname.length < 4 ) {
    surname = prompt ('введите фамилию корректно');
}

name = prompt('введите имя');

while (name <= ' ' , name.length < 2) {
    name = prompt ('введите имя корректно');
}

middleName = prompt ('введите отчество');

while (middleName <= ' ' , middleName.length < 4) {
    middleName = prompt ('введите отчество корректно');
}

age = prompt ('введите ваш возраст');
while ( !Number (age) ) {
    age = prompt ('введите возраст корректно');
}
 
ageDay = (parseInt(age) * 365);

agePlus5 = (parseInt(age) + 5);

sex = prompt ('введите ваш пол');

while (sex !== 'м' & sex !== 'М' & sex !== 'ж' & sex !== 'Ж') {
    sex = prompt ('введите пол корректно ' + 'М или Ж' );
}

if (sex == 'м' , 'М') {
    sex2 = 'мужской';
}
else {
    sex2 = 'женский'
}

if (sex == 'м') {
    sex3 = 'мужской'
}
else {
    sex3 = 'женский'
}

if (sex2 == 'мужской' & age > 65) {
    a = ('да');
}

if (sex2 == 'женский' & age > 60) {
    a = ('да');
}

if (a == 'да') {
    a = ('Вы на пенсии: да');
}
else {
    a = ('Вы на пенсии: нет');
}


alert (`Ваше ФИО: ${surname} ${name} ${middleName}
Ваш возраст: ${age}
Ваш возраст в днях: ${ageDay}
Через 5 лет вам будет: ${agePlus5}
Ваш пол: ${sex3}
${a} `); 


document.getElementById('surname').textContent=surname;

document.getElementById('name').textContent=name;

document.getElementById('middleName').textContent=middleName;

document.getElementById('age').textContent=age;

document.getElementById('sex3').textContent=sex3;

document.getElementById('ageDay').textContent=ageDay;

document.getElementById('agePlus5').textContent=agePlus5;

document.getElementById('a').textContent=a;








 


