// window.addEventListener('load') //полная загрузка страницы
window.addEventListener('DOMContentLoaded', function() { //загрузилось дерево страницы

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

        // console.log(tabContent.length);
        // for (let i =0; i < tabContent.length; i++) {
        //     console.log(tabContent[i]);
        //     tabContent[i].classList.add('hide');
        // }
    
        function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }            
        }
    });

    //Timer

    let deadline = '2019-07-31';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60), //Остаток секунд
            minutes = Math.floor((t/1000/60) % 60), //Остаток минут
             hours = Math.floor((t/(1000*60*60))); //Остаток часов
            // hours = Math.floor((t/1000/60.60) % 24), //Остаток часов
            // days = Math.floor((t/(1000*60*60*24))); //Остаток дней

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            
            if (t.hours > 9) {
                hours.textContent = t.hours;
            } else {
                hours.textContent = '0'+t.hours;
            }
            if (t.minutes > 9) {
                minutes.textContent = t.minutes;
            } else {
                minutes.textContent = '0'+t.minutes;
            }
            if (t.seconds > 9) {
                seconds.textContent = t.seconds;
            } else {
                seconds.textContent = '0'+t.seconds;
            }
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }
//let hours = timer.querySelector('.hours');
// let hours = document.getElementsByClassName('hours');
//     hours[0].textContent = '122';
    setClock('timer', deadline);
}); 

