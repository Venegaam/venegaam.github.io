var os_name = "Unknown OS"

if (navigator.userAgent.indexOf("Win") != -1) os_name = "Windows OS";
if (navigator.userAgent.indexOf("Mac") != -1) os_name = "Macintosh";
if (navigator.userAgent.indexOf("Linux") != -1) os_name = "Linux OS";
if (navigator.userAgent.indexOf("Android") != -1) os_name = "Android OS";
if (navigator.userAgent.indexOf("like Mac") != -1) os_name = "iOS";

console.log(os_name);

if (os_name == "Android OS" || os_name == "iOS") {

var els = document.getElementById("content").firstChild.nextSibling;

console.log(els);

els.style.width = "90%";
}
