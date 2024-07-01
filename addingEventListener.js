// Topics :  Click event listener =======================================================

/* // changing the color of h1 tag, but just clicking on the h1 heading;

$('h1').click(function () {
    $('h1').css('color', 'purple');
})
*/


/* // without jQuery changing the color of h1 to red, by clicking on any of the button===

for (var i = 0; i < 5; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function () {
        document.querySelector('h1').style.color = 'red';
    })
}
*/

/*
// with jQuery
$('button').click(function () {
    $('h1').css('color', 'darkgreen');
})
*/



// Topic : keypress event listener =========================================

/*
$('input').keypress(function (event) {
    console.log(event.key)
})
*/

/*
// Challenge : Write any key inside the input and it will change the text of h1 tag
$('input').keypress(function (event) {
    $('h1').text(event.key);
})
*/



// Topic : on event
$('h1').on('mouseover', function () {
    $('h1').css('color', 'red');
})