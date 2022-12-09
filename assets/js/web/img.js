let prm = location.search;
prm = prm.slice(1);
prm = prm.split('&');

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

if (getParam('cb') == 1) {
  backgroundeStyl = document.getElementById('any').style;
  backgroundeStyl.backgroundClip = "padding-box";
  backgroundeStyl.backgroundColor = "#fff";
  backgroundeStyl.backgroundImage = "linear-gradient(45deg, #22222222 25%, transparent 25%, transparent 75%, #22222222 75%), linear-gradient(45deg, #22222222 25%, transparent 25%, transparent 75%, #22222222 75%)";
  backgroundeStyl.backgroundSize = "32px 32px";
  backgroundeStyl.backgroundPosition = "0 0, 16px 16px";
}