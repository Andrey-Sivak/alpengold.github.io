'use strict';
import moment from 'moment';
moment().format();
import * as $ from 'jquery';/*
import './jquery.validate.min.js';
import './jquery.inputmask.min';
import './slick.min';*/

window.addEventListener('load', function () {

    (function timer() {
        if (!document.querySelector('.counter__wrap')) {
            return;
        }

        const eventDate = new Date(2021, 8, 5);
        const mins = document.querySelector('.counter__item.mins');
        const hours = document.querySelector('.counter__item.hours');
        const days = document.querySelector('.counter__item.days');
        setDate();

        setInterval(() => {
            setDate();
        }, 60000);

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

            showData(days, dateNow);
            showData(hours, hoursNow);
            showData(mins, minutesNow);
        }
    })();

});