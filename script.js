'use strict';

//Усложненное задание к уроку 7
let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; //создаем массив

let date = new Date(); //Создаем объект даты
let today = week[date.getDay() - 1];//Узнаем порядковый номер текущего дня недели

let weekList = document.createElement('ul');
document.body.prepend(weekList);//Добавляем список в начало документа
for (let i of week) {
  let li = document.createElement('li');//Создаем элемент списка...
  li.textContent = i;//...и добавляем в него текст

  //Добавляем стили к определенным элементам
  if ((li.textContent === 'Saturday') || (li.textContent === 'Sunday')) { //Суббота или воскресенье?
    li.style.fontStyle = 'italic';
  }
  if (li.textContent === today) { //Текущий день недели?
    li.style.fontWeight = 'bold';
  }

  weekList.append(li);//Добавляем готовый элемент в конец списка
}