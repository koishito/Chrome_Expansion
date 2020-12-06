window.onscroll = function()
{
    if($(document).height()-(document.documentElement.scrollTop || document.body.scrollTop) - $(window).height() < 1) {
        alert("bottom!");
    }
}