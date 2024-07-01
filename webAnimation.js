/*
// 1. hide, show, toggle  ================================================================

$('button').click(function () {
    $('h1').hide();
})

// to get the element h1 again , write this in console , press enter and click on any button
$('button').click(function () {
    $('h1').show();
})

*/


/*
// toggle ==== (comment above part)
// to overcome from writing this code again and again, you can use toggle
$('button').on('click', function () {
    $('h1').toggle();
})
*/

// 2. fadeIn, fadeOut, fadeToggle   =====================================================


/*
// adding animation to this using fadeOut and fadeIn, fadeToggle to use both in 1 part
$('button').on('click', function () {
    $('h1').fadeOut();
})


// to get it again , write this in console, press enter and click on any button
// $('button').on('click', function () {
//    $('h1').fadeIn();
// })

*/

/*
// fadeToggle =======================
$('button').on('click', function () {
    $('h1').fadeToggle();
})
*/


// 3. slideUp, slideDown, fadeToggle  ================================================

/*
// adding animation to this using fadeOut and fadeIn, fadeToggle to use both in 1 part
$('button').on('click', function () {
    $('h1').slideUp();
})


// to get it again , write this in console, press enter and click on any button
// $('button').on('click', function () {
//    $('h1').slideDown();
// })
*/

/*
// toggle slide ======================
$('button').on('click', function () {
    $('h1').slideToggle();
})
*/



// 4.  Animate         animate( {} )  ==================================================================

/*
$('button').on('click', function () {
    $('h1').animate({ opacity: 0.4 });
})
*/

// Note : to animate , you have to stick with the numeric value, not string like color : 'red', this will not work , it will through an error


/*
// it can do, margin, padding etc, which have numbers  ===============================
$('button').on('click', function () {
    $('h1').animate({ margin: "1%" });
})
*/



// using more than two or more animation at a time, it will be done in ====================
// chaining ==========================

$('button').on('click', function () {
    $('h1').slideUp().slideDown().animate({ opacity: 0.5 })
})