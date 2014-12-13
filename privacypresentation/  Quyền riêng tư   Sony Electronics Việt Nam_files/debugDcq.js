
var CanDo = document.getElementById ? true : false;
var DocAllMode = document.all ? true : false;
var scrollX = 0;
var scrollY = 0;
var cX = 0;
var cY = 0;

function UpdateCursorPosition(e) {
cX = e.pageX; cY = e.pageY;
}

function UpdateCursorPositionDocAll(e) {
cX = event.clientX; cY = event.clientY;
}

if(DocAllMode) { document.onmousemove = UpdateCursorPositionDocAll; }
else { document.onmousemove = UpdateCursorPosition; }

function ScrollAmount() {
if(self.pageYOffset) {
   scrollX = self.pageXOffset;
   scrollY = self.pageYOffset;
   }
else if(document.documentElement && document.documentElement.scrollTop) {
   scrollX = document.documentElement.scrollLeft;
   scrollY = document.documentElement.scrollTop;
   }
else if(document.body) {
   scrollX = document.body.scrollLeft;
   scrollY = document.body.scrollTop;
   }
}

function AssignPosition(d) {
if(DocAllMode) { ScrollAmount(); }
d.style.left = (scrollX+10) + "px";
d.style.top = (scrollY+10) + "px";
}

function HideContent(d) {
if(!CanDo) { return; }
if (document.getElementById(d)!=undefined || document.getElementById(d)!=null){
document.getElementById(d).style.display = "none";}
}

function ShowContent(d) {
if(! CanDo) { return; }
var dd = document.getElementById(d);
AssignPosition(dd);
dd.style.display = "block";
}

function ReverseContentDisplay(d) {
if(! CanDo) { return; }
var dd = document.getElementById(d);
if(dd.style.display == "none") {
   AssignPosition(dd);
   dd.style.display = "block";
   }
else { dd.style.display = "none"; }
}
function toggleLayer(whichLayer)
{
	if (document.getElementById)
	{
		// this is the way the standards work
		var style2 = document.getElementById(whichLayer).style;
		style2.display = style2.display? "":"none";
	}
	else if (document.all)
	{
		// this is the way old msie versions work
		var style2 = document.all[whichLayer].style;
		style2.display = style2.display? "":"none";
	}
	else if (document.layers)
	{
		// this is the way nn4 works
		var style2 = document.layers[whichLayer].style;
		style2.display = style2.display? "":"none";
	}
}
