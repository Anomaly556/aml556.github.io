function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

if(getParam("usrname")) {
	document.getElementById('welcome').innerHTML = `hello, ` + getParam("usrname") + "!";
}
if(getParam("lang")) {
  let current = location.origin + location.pathname;
  let curparam = location.search;
  let curhash = location.hash;
  location.href = current + getParam("lang");
}

