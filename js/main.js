var $header = $('header');
var $h1 = $('h1');
var $main = $('main');
var $h2 = $('h2');
var $img = $('img');
var $li = $('li');
var $dl = $('dl');
var $dt = $('dt');

$header.addClass('masthead');
$h1.removeClass('big-heading').addClass('logo');
$main.addClass('wrapper');
$main.children('p').addClass('intro');
$h2.addClass('slug-head');
$img.addClass('slug-img');
$li.first().addClass('slug-list-first');
$li.last().addClass('slug-list-last').show();
$dl.addClass('classification');
$dt.removeClass('big-label');
