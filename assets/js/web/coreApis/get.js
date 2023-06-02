/*
~/_core/api/get?fileType=json&gameId=roblox&apiName=word
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

var fileType;
var gameId;
var apiName;
var additional;

if (getParam("fileType")) fileType = getParam("fileType");
if (getParam("gameId")) gameId = getParam("gameId");
if (getParam("apiName")) apiName = getParam("apiName");
if (getParam("additional")) additional = getParam("additional");

if (additional == undefined | additional == null) {
    location.href = origin + "/resources/coreApis/" + gameId + "/" + apiName;
} else {
    location.href = origin + "/resources/coreApis/" + gameId + "/" + additional + apiName;
}
