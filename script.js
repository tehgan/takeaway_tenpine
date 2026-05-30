// Source - https://stackoverflow.com/a/1216130
// Posted by Christian C. Salvadó, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-30, License - CC BY-SA 4.0
$(window).scroll(function(){
    const $navbar = $('.navbar-container');
    let isPositionFixed = ($navbar.css('position') === 'fixed');
    if ($(this).scrollTop() > 27 && !isPositionFixed){
        $navbar.css({'position': 'fixed', 'top': '0px'});
    }
    if ($(this).scrollTop() <= 27 && isPositionFixed){
        $navbar.css({'position': 'absolute', 'top': '27px'});
    }
});
