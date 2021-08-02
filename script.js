//Усложненное задание к уроку 2
let num = 266219;
num = num.toString(); 

let mult = 1;
for (let i = 0; i < num.length; i++) {
  mult *= +num[i];
}
console.log(mult);

let powResult = mult ** 3;

console.log(powResult.toString().substring(0, 2));

//Усложненное задание к уроку 3
//Часть 1. Переменная lang может принимать 2 значения: 'ru' 'en'. Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке
let lang;
while ((lang !== 'ru') && (lang !== 'en')) {
  lang = prompt('Выберите язык (ru/en):', 'en');
}
let days = {
  en: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
  ru: 'Понедельник, Вторник, Среда, четверг, Пятница, Суббота, Воскресенье'
};

//a - через if
if (lang === 'en') {
  console.log(days.en);
} else {
  console.log(days.ru);
}

//b - через switch-case
switch (lang) {
  case 'en':
    console.log(days.en);
    break;
  case 'ru':
    console.log(days.ru);
    break;
  default:
    console.log('Ошибка');
}

//c - поиск и вывод данных через 2-мерный массив
let daysArray = [['en', 'ru'], [days.en, days.ru]];
console.log(daysArray[1][daysArray[0].indexOf(lang)]);

//Часть 2. У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
let namePerson = prompt('Введите ваше имя:', 'Артем');
(namePerson === 'Артем') ? console.log('Директор') :
  (namePerson === 'Максим') ? console.log('Преподаватель') :
  console.log('Студент');