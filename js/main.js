//<<<<<<<<<<<<<< ИЗМЕНЯЕМ ЧЕРЕЗ JAVASCRIPT >>>>>>>>>>>>

// Выберите при помощи селекторов DOM

// 1. — все HTML-элементы strong и окрасьте их в зеленый цвет

// let changeColor = document.getElementsByTagName('strong');
// for (i = 0; i < changeColor.length; i++){
//     changeColor[i].style.color = 'green'
// }

// 2. — найдите все HTML-элементы em и добавьте им класс .selected

// let addClass = document.getElementsByTagName('em')
// for (i = 0; i < addClass.length; i++){
//     addClass[i].classList.add('selected')
// }

// 3. — Найдите все элементы mark, которые находятся в div с классом row и задайте им
// класс .selected

// let addClass = document.querySelectorAll('.row mark')
// for (i = 0; i < addClass.length; i++){
//     addClass[i].classList.add('selected')
// }

// 4. — Найдите все гиперссылки и удалите у них подчеркивания

// let deleteLink = document.getElementsByTagName('a')
// for (i = 0; i < deleteLink.length; i++){
//     deleteLink[i].style.textDecoration = 'none'
// }

// 5. — Найдите все HTML-элементы, который содержат слово «Задания» и находятся в
// элементе с классом .container

//NOT FINISHED

// let word = document.getElementsByClassName('container')
// let regexp = /Задания/
// let result = word.match(regexp)
// console.log(result)
            

// 6. — Переключите элементы strong с классом some в состояние без этого класса, а
// тем элементам (strong), у которых небыло этого класса — добавьте.

// let switchClass = document.getElementsByTagName('strong')
// for (i= 0; i < switchClass.length; i++){
//     switchClass[i].classList.toggle('some')
// }


// 7. — среди набора элементов с классом .row удалите класс у второго элемента

//NOT FINISHED

// let elem = document.querySelectorAll('.row col-md-4')
// for (i = 0; i < elem.length; i++){
//     elem[1].classList.remove('col-md-4')
// }


// 8. — прочитайте CSS-свойство color у второй гиперсылки в тексте

// let readColor = document.getElementsByTagName('a');
// let linkColor = window.getComputedStyle(readColor[1])
// console.log(linkColor.color)