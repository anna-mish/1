import $ from './libs/jquery';

const onPageLoaded = () => {
    $('#content > div').hide(); // Скрываем содержание
    $('#tabs li:first').addClass('current'); // Активируем первую закладку
    $('#content div:first').fadeIn(); // Выводим содержание

    $('#tabs a').on('click', function(e) {
        e.preventDefault();
        $('#content > div').hide(); //Скрыть все сожержание
        $('#tabs li').removeClass('current'); //Сброс ID
        $(this).parent().addClass('current'); // Активируем закладку
        $('#' + $(this).attr('title')).fadeIn(); // Выводим содержание текущей закладки
    });

    $('#tabs li:first').click();
};

$(document).ready(onPageLoaded);
