$(document).ready(function() {
    $('.table').click(function() {


        console.log("table 1 clicked");
        $('.part p').toggleClass('visible')
        $('form').toggleClass('visible');
    });
    $('.occupied-table').click(function() {
        var txt = document.querySelector('.t4');
        var u = txt.textContent;
        alert(u + "is already booked. Please click on another table.")
    });
});