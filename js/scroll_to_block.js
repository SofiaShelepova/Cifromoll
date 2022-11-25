const scrollTime = 600; //время за которое происходит слайд к разделу

/* Плавный слайд к якорям по кнопке Присоединяйся*/
$(document).ready(function() {
    $(".headermain").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        var url = window.location;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, scrollTime);
        e.preventDefault(); //Убираем якорь из url
    });

});

/* Плавный слайд к якорям по кнопкам из навигационного меню */
$(document).ready(function() {
    $(".menu").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, scrollTime);
        e.preventDefault(); //Убираем якорь из url
    });
});