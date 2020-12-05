window.onscroll = function()
{
    if($(document).height()-$(window).scrollTop() - $(window).height() < 1) {
        alert("bottom!");
    }
}