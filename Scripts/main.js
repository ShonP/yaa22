
function GetIE() {
    var ua = window.navigator.userAgent;
    var mise = ua.indexOf("MSIE ");
    if (mise > 0)
        return (parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
    return -1;
}


$(document).ready(function () {
    $("#heading").fadeIn('slow');

});