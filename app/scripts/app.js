import $ from './libs/jquery';

const onPageLoaded = () => {
    function initTabs(mainContainer, tabsContainer) {
        const CONTENT_ITEM = `${mainContainer} >  div`;
        const CONTENT_ITEM_FIRST = `${mainContainer} >  div:first`;
        const LIST_LINK = `${tabsContainer} a`;
        const LIST_ITEM = `${tabsContainer} li`;
        const LIST_ITEM_FIRST = `${tabsContainer} li:first`;

        $(CONTENT_ITEM).hide();// Скрываем содержание
        $(LIST_ITEM_FIRST).addClass('current'); // Активируем первую закладку
        $(CONTENT_ITEM_FIRST).fadeIn(); // Выводим содержание

        $(LIST_LINK).on('click', function(e) {
            e.preventDefault();
            $(CONTENT_ITEM).hide(); //Скрыть все сожержание
            $(LIST_ITEM).removeClass('current'); //Сброс ID
            $(this).parent().addClass('current'); // Активируем закладку
            $('#' + $(this).attr('title')).fadeIn(); // Выводим содержание текущей закладки
        });

        $(LIST_ITEM_FIRST).click();
    };

    initTabs('#content','#tabs');
};


$(document).ready(onPageLoaded);
