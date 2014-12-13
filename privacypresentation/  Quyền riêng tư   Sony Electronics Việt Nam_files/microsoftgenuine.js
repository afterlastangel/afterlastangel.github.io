/* 
Netscape 4, Ice, Escape, Omniweb 4.2- 
    if( document.layers ) 

Explorer 4+, Opera 6+, iCab, Ice, Omniweb 4.2- 
    if( document.all ) 	

Mozilla, Explorer 5+, Opera 5+, Konqueror, Safari, iCab, Ice, OmniWeb 4.5 
    if( document.getElementById ) 
*/

var divLayer = 'genuineTooltip';
var mouseX   = 0;
var mouseY   = 0;

if( document.layers ) 
{
	document.captureEvents( Event.MOUSEMOVE );
}

document.onmousemove = GetCursor; 

function GetCursor( e ) 
{
	if( document.layers ) 
	{
		mouseX = e.pageX;
		mouseY = e.pageY;
		
	}
	else if( document.all ) 
	{
		
		if(navigator.appName=="Microsoft Internet Explorer"){
			if(document.body != null) {
				mouseX = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
				mouseY = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
			} else {
				mouseX = event.clientX + document.documentElement.scrollLeft;
				mouseY = event.clientY + document.documentElement.scrollTop;			
			}
		}
		if(navigator.appName=="Opera"){
			mouseX = event.clientX + document.body.scrollLeft;
			mouseY = event.clientY + document.body.scrollTop;
		}

	}
	else if( document.getElementById )
	{
	    mouseX = e.pageX;
		mouseY = e.pageY;
		
	
	}
	
	return true;
}

function GetHandle( name ) 
{
	if( document.layers ) 
	{
		return ( document.layers[name] );
	}

	if( document.all ) 
	{
		var block = eval( 'document.all.' + name + '.style' );
		
		return ( block );

	}
	
	if( document.getElementById ) 
	{
	    return document.getElementById( name ).style;
	}
}

function ShowToolTip() 
{
	var tip = GetHandle( divLayer );
	
	if( document.layers )
	{
		tip.visibility = "show";
		tip.right = mouseX;
		tip.top  = mouseY + 20;
	}
	else if( document.all )
	{
		tip.visibility = "visible";
		tip.right = mouseX;
		tip.top  = mouseY + 20;
	}
	else if( document.getElementById )
	{
	    tip.visibility = "visible";
		tip.right = mouseX + "px";
		tip.top  = mouseY + 20 + "px";
	}
}

function HideToolTip()
{
	window.setTimeout( 'HideToolTip2()', 4000 );	
}

function HideToolTip2()
{
	var tip = GetHandle( divLayer );
	
	if( document.layers )
	{
		tip.visibility = "hide";
	}
	else if( document.all )
	{
		tip.visibility = "hidden";
	}
	else if( document.getElementById )
	{
	    tip.visibility = "hidden";
	}
}
