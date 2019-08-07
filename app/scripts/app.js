import $ from './libs/jquery';

const onPageLoaded = () => {
    $('#user-content > div').hide(); // Скрываем содержание
    $('#user-tabs li:first').addClass('current'); // Активируем первую закладку
    $('#user-content div:first').fadeIn(); // Выводим содержание

    $('#user-tabs a').on('click', function(e) {
        e.preventDefault();
        $('#user-content > div').hide(); //Скрыть все сожержание
        $('#user-tabs li').removeClass('current'); //Сброс ID
        $(this).parent().addClass('current'); // Активируем закладку
        $('#' + $(this).attr('title')).fadeIn(); // Выводим содержание текущей закладки
    });

    $('#user-tabs li:first').click();
};

$(document).ready(onPageLoaded);