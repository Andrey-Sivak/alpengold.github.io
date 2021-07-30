'use strict';

window.addEventListener('load', function () {

    (function loader() {
        if (!document.querySelector('.loader')) {
            return;
        }

        const loader = document.querySelector('.loader');

        if (loader.classList.contains('active')) {
            loader.classList.remove('active');
        }

        setTimeout(() => {
            loader.parentElement.removeChild(loader);
        }, 500);

    })();

    (function timer() {
        if (!document.querySelector('.counter__wrap')) {
            return;
        }

        const eventDate = new Date(2021, 8, 5);

        const numbers = {
            mins: document.querySelector('.counter__item.mins'),
            hours: document.querySelector('.counter__item.hours'),
            days: document.querySelector('.counter__item.days'),
        };

        setDate();

        setInterval(() => {
            setDate();
        }, 60000);

        for (let num in numbers) {
            if (numbers[num].classList.contains('hide')) {
                numbers[num].classList.remove('hide');
            }
        }

        function diffDates(day_one, day_two) {
            return (day_one - day_two) / (60 * 60 * 24 * 1000);
        }

        function showData(elem, number) {
            const num = number.toString();
            if (num.length < 2) {
                elem.children[0].innerHTML = '0';
                elem.children[1].innerHTML = num;
                return;
            }

            elem.children[0].innerHTML = num[0];
            elem.children[1].innerHTML = num[1];
        }

        function setDate() {
            const date = new Date();
            const dateNow = diffDates(eventDate,
                new Date(date.getFullYear(),
                    date.getMonth() + 1,
                    date.getDate()));
            const hoursNow = 23 - date.getHours();
            const minutesNow = 60 - date.getMinutes();

            showData(numbers.days, dateNow);
            showData(numbers.hours, hoursNow);
            showData(numbers.mins, minutesNow);
        }
    })();

});