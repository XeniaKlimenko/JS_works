//работа с if-else
let a=1;
console.log('Задача 1.1'); (a===0) ? console.log('Верно'): console.log('Неверно');
console.log('Задача 1.2'); (a>0) ? console.log('Верно'): console.log('Неверно');
console.log('Задача 1.3'); (a<0) ? console.log('Верно'): console.log('Неверно');
console.log('Задача 1.4'); (a>=0) ? console.log('Верно'): console.log('Неверно');
console.log('Задача 1.5'); (a<=0) ? console.log('Верно'): console.log('Неверно');
console.log('Задача 1.6'); (a!==0) ? console.log('Верно'): console.log('Неверно');
let a_str1='test';
console.log('Задача 1.7'); (a_str1==='test') ? console.log('Верно'): console.log('Неверно');
let a_str2='1';
console.log('Задача 1.8'); (a_str2==='1') ? console.log('Верно'): console.log('Неверно');

//работа с логическими переменными
let test=true;
console.log('\nЗадача 2.1'); (test) ? console.log('Верно'): console.log('Неверно');
console.log('Задача 2.2'); (!test) ? console.log('Верно'): console.log('Неверно');

//Работа с && (и) и || (или)
a=5;
console.log('\nЗадача 3.1');
if (a>0 && a<5){
    console.log('Верно');
} else {
    console.log('Неверно'); 
}
console.log('Задача 3.2');
(a===0 || a===2)? a=a+7: a=a/10;
console.log(a);

console.log('Задача 3.3');
a=1;
let b=6;
((a===1 || a<1) && (b>=3)) ? console.log(a+b): console.log(Math.abs(a-b));

console.log('Задача 3.4');
((a>2 && a<11) || (b>=6 && b<14)) ? console.log('Верно'): console.log('Неверно');

//На switch-case
console.log('\nЗадача 4.1');
let num=1;
let result;
switch(num){
    case 1:
        result='зима';
        break;
    case 2:
        result='весна';
        break;
    case 3:
        result='лето';
        break;
    case 4:
        result='осень';
        break;
} 
console.log(result);

//Общие задачи
console.log('\nЗадача 5.1');
let day=31;
if (day>=1 && day<10){
    console.log('Первая декада месяца');
}
else if (day>=10 && day<20){
    console.log('Вторая декада месяца');
}
else if (day>=20 && day<30){
    console.log('Третья декада месяца');
}
else if (day>=30 && day<=31){
    console.log('Четвертая декада месяца');
}
else console.log('Это уже не число месяца');

//switch для разнообразия :)
console.log('Задача 5.2');
let month=12;
switch(month){
    case 1,2,12:
        console.log('зима');
        break;
    case 3,4,5:
        console.log('весна');
        break;
    case 6,7,8:
        console.log('лето');
        break;
    case 9,10,11:
        console.log('осень');
        break;
    default: console.log('Это не номер месяца'); 
}

console.log('\nЗадача 5.3');
for(let i=1;i<=100;i++)
{
    if(i%3===0 && i%5===0)
        console.log('FizzBuzz');
    else if(i%3===0)
        console.log('Fizz');
    else if(i%5===0)
        console.log('Buzz'); 
    else console.log(i);
}

console.log('\nЗадача 5.4');
let str='abcde';
(str[0]==='a')?console.log('да'): console.log('нет');

//Циклы while и for
console.log('\nЗадача 6.1');
console.log('Через while');
let i=1;
while (i<=100) {
    console.log(i);
    i++;
}
console.log('Через for');
for(let i=1;i<=100;i++){
    console.log(i);
}

console.log('\nЗадача 6.2');
console.log('Через while');
i=11;
while (i<=33) {
    console.log(i);
    i++;
}
console.log('Через for');
for(let i=11;i<=33;i++){
    console.log(i);
}

console.log('\nЗадача 6.3');
console.log('Через while');
i=0;
while (i<=100) {
    if (i%2===0)
        console.log(i);
    i++;
}
console.log('Через for');
for(let i=0;i<=100;i=i+2){
    console.log(i);
}

console.log('\nЗадача 6.4');
console.log('Через while');
let total=0;
i=1;
while (i<=100) {
    total+=i;
    i++;
} console.log(total);
total=0;
console.log('Через for');
for(let i=1;i<=100;i++){
    total+=i;
} console.log(total);

console.log('\nЗадача 6.5');
let number=5;
//let number=prompt('введите число: ', );
console.log('Через while');
let fact=1;
i=1;
while (i<=number) {
    fact*=i;
    i++;
} console.log(fact);

console.log('Через for');
fact=1;
for(let i=1;i<=number;i++){
    fact*=i;
} console.log(fact);

console.log('\nЗадача 6.6');
let n=5;
console.log('Через while');
i=0;
str='';
while (i<9){
    str+=String(n) 
    i++;
} console.log(str);

console.log('Через for');
str='';
for(let i=0;i<9;i++){
    str+=String(n)
} console.log(str);

console.log('\nЗадача 6.7');
console.log('Через while');
i=0;
console.log('Zero');
while (i<=300) {
    if (i%2===0&&i%12==0&&i!==48&&(9/12)%2!==0)
        console.log('Ooops');
    else if (i%2!==0&&i%3==0)
        console.log('Hola');
    i++;
}
console.log('\nЧерез for');
console.log('Zero');
for(let i=0;i<=300;i++){
    if (i%2===0&&i%12==0&&i!==48&&(9/12)%2!==0)
        console.log('Ooops');
    else if (i%2!==0&&i%3==0)
        console.log('Hola');
}

console.log('\nЗадача 8');
n=1000;
let count=0;
while (n>=50){
    n/=2;
    count++;
}
console.log('число после деления: ',n,'\nколичество итераций: ', count);