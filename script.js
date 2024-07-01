// $('h1').css('color', 'red')  

/*
// 152 Selecting the elements ===================
$('h1')
$('button') 
*/


// 153 - Manipulating styles in jQuery  =========================================================

/*
// way 1 :
$('h1').css('color', 'green');
console.log($('h1').css('color'));   // output : rgb(0, 128, 0)  (the code color for green color)
console.log($('h1').css('font-size'));   // output : 32px
*/

/*
// way 2 : 
$('h1').css('color')  // this means we are getting the values in css
$('h1').css('color', 'green');  // here, second parameters means that we are setting the values
*/


// way 3 : what if we have class (.big-title and .margin-head) in style.css , we have to set it here;
$('h1').addClass('big-title margin-head');

// we can remove it also;  here we removing just single class
$('h1').removeClass('big-title')
// console.log($('h1').removeClass('big-title'))

// we can also check, if this can include such class or not
console.log($('h1').hasClass('margin-head'));  // output: true