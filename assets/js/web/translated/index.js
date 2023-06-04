/*
https://noteswiper.github.io/wiki-tr/tr/roblox/gasa4/GetaSnackAt4am/jp?from=roblox%2Fgasa4%2Fcashier%2Fjp
https://noteswiper.github.io/wiki-tr/tr/roblox/gasa4/Store/jp?from=roblox%2Fgasa4%2Fcashier%2Fjp
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
