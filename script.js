window.onload = function () {
    var ta = document.getElementById('Terminal')
    var ut = navigator.userAgent;

    document.getElementById("qr").style.display = "none";
    const qr = document.getElementById("qr");

    if (ut.indexOf('iPhone') > 0 || ut.indexOf('iPod') > 0 || ut.indexOf('Android') > 0 && ut.indexOf('Mobile') > 0) {
        qr.style.display = "none";
    } else if (ut.indexOf('iPad') > 0 || ut.indexOf('Android') > 0) {
        qr.style.display = "none";
    } else {
        qr.style.display = "block";
    }
}