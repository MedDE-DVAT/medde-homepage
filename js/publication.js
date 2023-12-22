window.onload = pageLoad;
function pageLoad() {
    var margin_value = document.querySelector('.navbar').scrollHeight;
    document.querySelector('.wrapper').style.marginTop = String(margin_value) + 'px';
    document.querySelector('.position-sticky').style.top = String(margin_value) + 'px';
};