var graphics_path = "" ;
var graphics_init = 0 ;

function init_path()
	{
	graphics_path = document.getElementById("default").src ; // "graphics" ;

graphics_path = graphics_path.substring(0,graphics_path.lastIndexOf("/"));
graphics_path = graphics_path.substring(graphics_path.indexOf(".com/")+4);

	graphics_init = 1 ;
	}

function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) {
      	a.disabled = false;
	  }
    }
  }
  pressButton(title);
}

function unpressButton(which) {
	if ( graphics_init == 0 )
		{ init_path() }
	document.getElementById(which).src = graphics_path + "/" + which + ".gif";
}

switchButtons = ["default", "medium", "large"];

function pressButton(which) {
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) {
    	return a.getAttribute("title");
    }
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  } else {
  	expires = "";
  }
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}

