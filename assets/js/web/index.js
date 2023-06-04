/*
https://noteswiper.github.io/?connected=hateblog&webname=plgr
*/

function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function faviconSetting() {
  var item = $('a');
  item.each(function () {
    var faviconUrl = $(this).attr('href');
    var url = "http://www.google.com/s2/favicons?domain=" + faviconUrl;
    if (url) { $(this).prepend('<img src="' + url + '">') } else { $(this).prepend('<img src="https://noteswiper.github.io/assets/svg/notfound.svg">') }
  });
}
faviconSetting();

var connected = getParam("connected");
var webname = getParam("webname");
var usrname = getParam("usrname");
var lang = getParam("lang");
var prev;
var from = getParam("from");

if (from) {
    prev = from;
}

if (connected) {
  
}

if (usrname) {
  document.getElementById('welcome').innerHTML = `hello, ` + getParam("usrname") + "!";
}
if (lang) {
  let current = location.origin + location.pathname;
  let curparam = location.search;
  let curhash = location.hash;
  location.href = current + getParam("lang");
}