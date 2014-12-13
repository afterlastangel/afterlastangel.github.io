
var imtt = new Image();
imtt.src = '/HP/images/layout/default/icon_arrow_up.jpg';

var imtt2 = new Image();
imtt2.src = '/HP/images/layout/default/icon_hding_arrow_up.jpg';

var imtt3 = new Image();
imtt3.src = '/HP/images/layout/default/icon_arrow_up_spec.gif';

var imtt4 = new Image();
imtt4.src = '/HP/images/layout/default/icon_hding_arrow_down.jpg';

var imtt5 = new Image();
imtt5.src = '/HP/images/layout/default/icon_arrow_up_spec.gif';

var imtt6 = new Image();
imtt6.src = '/HP/images/layout/default/icon_arrow_down_spec.gif';

var imtt7 = new Image();
imtt7.src = '/HP/images/layout/default/icon_arrow_down.jpg';

var imtt8 = new Image();
imtt8.src = '/support/resources/en_AP/html/common/images/layout/default/icon_arrow_up.jpg';

var imtt9 = new Image();
imtt9.src = '/support/resources/en_AP/html/common/images/layout/default/icon_arrow_down.jpg';

var imtt10 = new Image();
imtt10.src = '/HP/images/common/pg_right_grnt.jpg';


// Jump menu script 

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

// Pop-up script 
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}


// Swap Image Script

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}


/* Start Product Expanding Function*/	
	
	function showSpan(val, spanId)
	{
	//alert(val);
		var Id=document.getElementById(spanId)
		switch (val)
		{
		
		case "0":
		Id.style.display="inline";
		break ;
		
		case "1":
		Id.style.display="none";
		break ;
		}
	}
	
	function showSpanOpen(val, spanId)
	{
	//alert(val);
	var Id=document.getElementById(spanId)
	switch (val)
	{
	
	case "0":
	Id.style.display="none";
	break ;
	
	case "1":
	Id.style.display="inline";
	break ;
	}
	}
	
	
	
	
		function ProCatShowHide(id, newid, Imgid, newImg, specCase, spanId)
		{
		identity=document.getElementById(id);
		identityImage=document.getElementById(Imgid);
		
		if (identity.idName==newid) 
		{
		newid='arrowpoint';
		newImg='/HP/images/layout/default/icon_arrow_down.jpg';
		specCase='1';
		}
		//alert(newImg);
		identity.idName=newid;
		identityImage.src=newImg;
		
		showSpan(specCase, spanId);
		}



		function ProModelShowHide(id, newid, Imgid, newImg, specCase, spanId)
		{
		identity=document.getElementById(id);
		identityImage=document.getElementById(Imgid);
		
		if (identity.idName==newid) 
		{
		newid='arrowpoint';
		newImg='/HP/images/layout/default/icon_arrow_up.jpg';
		specCase='1';
		}
		//alert(newImg);
		identity.idName=newid;
		identityImage.src=newImg;
		
		showSpanOpen(specCase, spanId);
		}
		

/* End Product Expanding Function*/

/* Start Series Page Show and Hide Function */
		function ProSeriesShowHide(id, newid, Imgid, newImg, specCase, spanId)
		{
		identity=document.getElementById(id);
		identityImage=document.getElementById(Imgid);
	
		if (identity.idName==newid) 
		{
		newid='arrowpoint';
		newImg='/HP/images/layout/default/icon_hding_arrow_up.jpg';
		specCase='1';
		}
		identity.idName=newid;
		identityImage.src=newImg;
		showSpanOpen(specCase, spanId);
		}
		
		function ProRetiredShowHide(id, newid, Imgid, newImg, specCase, spanId)
		{
		identity=document.getElementById(id);
		identityImage=document.getElementById(Imgid);
	
		if (identity.idName==newid) 
		{
		newid='arrowpoint';
		newImg='/HP/images/layout/default/icon_hding_arrow_up.jpg';
		specCase='1';
		}
		identity.idName=newid;
		identityImage.src=newImg;
		showSpanOpen(specCase, spanId);
		}
		
		
		function ProCompareShowHide(id, newid, Imgid, newImg, specCase, spanId)
		{
		identity=document.getElementById(id);
		identityImage=document.getElementById(Imgid);
	
		if (identity.idName==newid) 
		{
		newid='arrowpoint';
		newImg='/HP/images/layout/default/icon_hding_arrow_up.jpg';
		specCase='1';
		}
		identity.idName=newid;
		identityImage.src=newImg;
		showSpanOpen(specCase, spanId);
		}
		
		
/* End Series Page Show and Hide Function */


/* Start Support Tutorial Page Show and Hide Function */
		function SupportTutShowHide(id, newid, Imgid, newImg, specCase, spanId)
		{
		identity=document.getElementById(id);
		identityImage=document.getElementById(Imgid);
	
		if (identity.idName==newid) 
		{
		newid='arrowpoint';
		newImg='/HP/images/layout/default/icon_arrow_down.jpg';
		specCase='1';
		}
		identity.idName=newid;
		identityImage.src=newImg;
		showSpan(specCase, spanId);
		}
/* End Support Tutorial Page Show and Hide Function */


/* Start Support Page Show and Hide Function */
		function SupportShowHide(id, newid, Imgid, newImg, specCase, spanId)
		{
		identity=document.getElementById(id);
		identityImage=document.getElementById(Imgid);
	
		if (identity.idName==newid) 
		{
		newid='arrowpoint';
		newImg='/HP/images/layout/default/icon_arrow_down_spec.gif';
		specCase='1';
		}
		identity.idName=newid;
		identityImage.src=newImg;
		showSpanOpen(specCase, spanId);
		
		}
		
		
		function SupportShowHideNew(id, newid, Imgid, newImg, specCase, spanId)
		{
		identity=document.getElementById(id);
		identityImage=document.getElementById(Imgid);
	
		if (identity.idName==newid) 
		{
		newid='arrowpoint';
		newImg='/HP/images/layout/default/icon_arrow_down_spec.gif';
		specCase='1';
		}
		identity.idName=newid;
		identityImage.src=newImg;
		showSpan(specCase, spanId);
		
		}
/* End Support Page Show and Hide Function */



		function SupportGenericShowHide(id, newid, Imgid, newImg, specCase, spanId)
		{
		identity=document.getElementById(id);
		identityImage=document.getElementById(Imgid);
	
		if (identity.idName==newid) 
		{
		newid='arrowpoint';
		newImg='/HP/images/layout/default/icon_arrow_up_spec.gif';
		specCase='1';
		}
		identity.idName=newid;
		identityImage.src=newImg;
		showSpanOpen(specCase, spanId);
		
		}
		
		function SupportGenericShowHideOrange (id, newid, Imgid, newImg, specCase, spanId)
		{
		identity=document.getElementById(id);
		identityImage=document.getElementById(Imgid);
		
		if (identity.idName==newid) 
		{
		newid='arrowpoint';
		newImg='/HP/images/layout/default/icon_arrow_right.gif';
		specCase='1';
		}
		//alert(newImg);
		identity.idName=newid;
		identityImage.src=newImg;
		
		showSpan(specCase, spanId);
		}

		
		


/* Start Support Page Show and Hide Function */
		
		function showDwndSpan(val, spanId)
		{
		var Id=document.getElementById(spanId)
		Id.style.display="inline";
		}
	
		function SupportDwndShowHide(id, newid, Imgid, newImg, specCase, spanId)
		{
		identity=document.getElementById(id);
		identityImage=document.getElementById(Imgid);
			if (identity.idName==newid) 
			{
			newid='arrowpoint';
			newImg='/HP/images/layout/default/icon_arrow_down_spec.gif';
			specCase='1';
			}
		identity.idName=id;
		identityImage.src=newImg;
		showDwndSpan(specCase, spanId);
		}
/* End Support Page Show and Hide Function */




// Start button Script //

function addLoadEvent(func)
{
if(window.addEventListener)
window.addEventListener('load', func, false);
else if(window.attachEvent)
window.attachEvent('onload', func);
}

/* http://www.dustindiaz.com/getelementsbyclass/ */
function getElementsByClass(searchClass,node,tag) {
	var classElements = new Array();
	if ( node == null )
		node = document;
	if ( tag == null )
		tag = '*';
	var els = node.getElementsByTagName(tag);
	var elsLen = els.length;
	var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
	for (i = 0, j = 0; i < elsLen; i++) {
		if ( pattern.test(els[i].className) ) {
			classElements[j] = els[i];
			j++;
		}
	}
	return classElements;
}

/* by Jeremy Keith */
function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	}
	else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

function buttonEndings() {
	if (!document.getElementsByTagName) {
		return false
	}
	
	var buttons = getElementsByClass("button");
	/* loop through all buttons and attach a child div */
	for (i=0; i < buttons.length; i++) {
		var div = document.createElement("div");
		div.className = "buttonEnding";
		insertAfter(div, buttons[i]);
	}
}

addLoadEvent(buttonEndings);

// End button Script //



// Start Rounded Corner //

function make_corners(){
	var $i;	
	var $elements=find_class(document.body,"rounded");
	
	if(!(navigator.appName=="Microsoft Internet Explorer" && navigator.appVersion.indexOf("5.5")>-1))
		for($i = 0; $i <Number($elements.length) ; ++$i){
			rounded_corners($elements[$i]);
		}
}

function rounded_corners($element)
	{
	var $rc_radius=7, $rc_left=true, $rc_right=true, $rc_top=true, $rc_bottom=true, $rc_self_color, $rc_parent_color, $rc_antialiased,$rc_antialiased_cf=0.33,$rc_compact,$rc_auto_margin,$rc_method="margin",$rc_border,$border_color;
	var	$property,$container,$el_container,$el_inner,$j,$i,$ang,$ang_last,$bw,$width,ee,$err_alert;
	var $classes=$element.className.split(" ");


	$rc_self_color=get_current_style($element,"background-color","(transparent)|(rgba)");
	$rc_parent_color=get_current_style($element.parentNode,"background-color","(transparent)|(rgba)");
	$border_color=get_current_style($element,"border-top-color");	
	for ($i= 0; $i < $classes.length; ++$i){
		$property=$classes[$i].split("-");
		
		if($property[0]=="rc"){	
				switch ($property[1]){
				case "radius":
					$rc_radius=$property[2];
					break;
				case "top":
					$rc_top=$property[2]!="0"?true:false;
					break;
				case "left":
					$rc_left=$property[2]!="0"?true:false;
					break;
				case "right":
					$rc_right=$property[2]!="0"?true:false;
					break;
				case "bottom":
					$rc_bottom=$property[2]!="0"?true:false;
					break;
				case "selfcolor":
					$rc_self_color="#"+$property[2];
					break;
				case "parentcolor":
					$rc_parent_color=$property[2]=="transparent"?"transparent":"#"+$property[2];
					break;
				case "inheritstylecolors":
					$rc_parent_color=$property[2]!="0"?false:true;
					$rc_self_color=$property[2]!="0"?false:true;
					break;
				case "antialiased":
					$rc_antialiased=$property[2]!="0"?true:false;
					break;
				case "antialiasedcf":
					$rc_antialiased_cf=parseFloat($property[2]);
					break;
				case "compact":
					$rc_compact=$property[2]!="0"?true:false;
					break;
				case "automargin":
					$rc_auto_margin=$property[2]!="0"?true:false;
					break;
				case "method":
					$rc_method=$property[2];
					break;
				case "border":
					$rc_method="margin";
					$rc_border=true;
					$element.style.border="none";
					break;
				}
			}
		}
	if($rc_antialiased && $rc_method=="margin")
		{
		var $arr_self_color=color2array($rc_self_color);
		var $arr_parent_color=$rc_border?color2array($border_color):color2array($rc_parent_color);
		if($arr_self_color!=false && $arr_parent_color!=false) var $rc_antialiased_color="rgb("+Math.round(($arr_parent_color[0]-$arr_self_color[0])*$rc_antialiased_cf+$arr_self_color[0])+","+Math.round(($arr_parent_color[1]-$arr_self_color[1])*$rc_antialiased_cf+$arr_self_color[1])+","+Math.round(($arr_parent_color[2]-$arr_self_color[2])*$rc_antialiased_cf+$arr_self_color[2])+")";
		else $rc_antialiased=false;
		}
	var $containers=new Array();
	if($rc_top)$containers[0]="top";
	if($rc_bottom)$containers[$containers.length]="bottom";
	if(!$rc_parent_color)$rc_parent_color=get_current_style(document.body,"background-color");
	for($j = 0 ; $j<$containers.length ; ++$j)
		{
		if($j == 'extend'){
		continue;
		}
		$container=$containers[$j];
		$el_container=document.createElement("div");
		$el_container.className="rc-container-"+$container;
		if($rc_parent_color && $rc_method=="margin")
		    {
		    try
		      {
		      $el_container.style.backgroundColor=$rc_parent_color;
		      }
		     catch(ee){self.status="Chyba nastaveni pozadi."}
		    }
		$el_container.style.height=$rc_radius+"px";
		for($i=0;$i<$rc_radius;$i++)
			{
			$el_inner=document.createElement("span");
			if($rc_self_color && $rc_method=="margin")$el_inner.style.backgroundColor=$rc_self_color;
			$el_inner.style.display="block";
			$el_inner.className="rc-inner rc-level-"+$i;
			$ang=Math.asin($i/$rc_radius);
			$el_inner.style.height="1px";
			$el_inner.style.overflow="hidden";
			$width=($rc_radius-Math.round($rc_radius*Math.cos($ang)));
			if($rc_method=="margin")
				{
				$el_inner.style.margin="0 "+($rc_right?$width:"0")+"px 0 "+($rc_left?$width:"0")+"px";
				if($rc_antialiased || $rc_border)
					{
					$bw=Math.ceil($rc_radius*Math.cos(Math.asin(($i-1)/$rc_radius))-$rc_radius*Math.cos($ang));
					if($bw==0)$bw=1;
					//[comments-20080621:start] fix the gap problem
					//$el_inner.style.borderWidth="0 "+($rc_right?$bw:"0")+"px 0 "+($rc_left?$bw:"0")+"px";
					$el_inner.style.borderWidth="0 "+($bw)+"px 0 "+($bw)+"px";
					//[comments-20080621:end] fix the gap problem
					
					if(!$rc_border)
						{
						try{$el_inner.style.borderColor=$rc_antialiased_color;}
						catch($ee){if(!$err_alert)alert("There's probably a wrong CSS declaration of color used (use '#000000' instead of 'black' or '#000'.");$err_alert=true;}
						}
					else
						{
						$el_inner.style.borderColor=($rc_antialiased && $width) ? $rc_antialiased_color : $border_color;
						if($i==$rc_radius-1)
							{
							$el_inner.style.backgroundColor=$border_color;
							}
						}
					$el_inner.style.borderStyle="solid";
					}
				}
			else
				{
				if($rc_parent_color)$el_inner.style.borderColor=$rc_parent_color;
				$el_inner.style.borderStyle="solid";
				$el_inner.style.borderWidth="0 "+($rc_right?$width:"0")+"px 0 "+($rc_left?$width:"0")+"px";
				}
			if($container=="top" && $el_container.firstChild)$el_container.insertBefore($el_inner.cloneNode(true),$el_container.firstChild);
			else $el_container.appendChild($el_inner.cloneNode(true));
			delete $el_inner;
			}
		if($rc_compact)
			{
			if($container=="top") $el_container.style.marginBottom="-"+$rc_radius+"px";
			else $el_container.style.marginTop="-"+$rc_radius+"px";
			}
		if($rc_auto_margin)
			{
			$el_container.style.marginLeft="-"+get_current_style($element,"padding-left");
			$el_container.style.marginRight="-"+get_current_style($element,"padding-right");
			if($container=="top") $el_container.style.marginTop="-"+get_current_style($element,"padding-top");
			else $el_container.style.marginBottom="-"+get_current_style($element,"padding-bottom");
			}
		if($container=="top" && $element.firstChild)$element.insertBefore($el_container.cloneNode(true),$element.firstChild);
		else $element.appendChild($el_container.cloneNode(true));
		delete $container;
		}

	}

// common functions:

function find_class($element,$classnames,$result,$first)
  {
/*	  
  if(!$first)$first=$element;
  if(!$result)$result=new Array();
  if ($element.nodeType==1)
    {
    var $test_exp=new RegExp("(^| )("+$classnames+")( |$)");
    if($test_exp.test($element.className)) $result[$result.length]=$element;
	$tempArray	= $element.findAll (function (n){return n.className == $classnames;})

    }
  if ($element.hasChildNodes()) $result=find_class($element.firstChild,$classnames,$result,$first);
  if ($element.nextSibling && $element!=$first) $result=find_class($element.nextSibling,$classnames,$result,$first);
  */
  $result 	= getElementsByClass ($classnames, $element)
  return $result;
  }

function get_current_style($element,$property,$not_accepted)
  {
  var ee,$i,$val,$apr;
  var $na=new RegExp($not_accepted);
  try
    {
    var $cs=document.defaultView.getComputedStyle($element,'');
    $val=$cs.getPropertyValue($property);
    }
  catch(ee)
    {
    if($element.currentStyle)
    	{
	    $apr=$property.split("-");
	    for($i=1;$i<$apr.length;$i++)
	    {
	    	$apr[$i]=$apr[$i].toUpperCase();
	    }
	    $apr=$apr.join("");
	    $val=$element.currentStyle.getAttribute($apr);
	    }
    }
  
  if($not_accepted && $na.test($val) && $element.parentNode) $val=get_current_style($element.parentNode,$property,$not_accepted);
  return $val;
  }

function color2array($value)
	{
	if($value.substr(0,1)=="#")return hex2array($value);
	else if($value.indexOf("rgb")>-1) return rgb2array($value);
	else return false;
	}

function rgb2array($value)
	{
	var $i;
	var $regexp=/([0-9]+)[, ]+([0-9]+)[, ]+([0-9]+)/;
	var $array=$regexp.exec($value);
	$array.shift();
	for($i=0;$i<3;$i++)$array[$i]=parseInt($array[$i]);
	return($array);
	}

function hex2array($value)
	{
	return new Array(parseInt($value.substr(1,2),16),parseInt($value.substr(3,2),16),parseInt($value.substr(5,2),16));
	}
	
// End Rounded Corner //


/* Start Flash Border Remove Script */

//v1.0
//Copyright 2006 Adobe Systems, Inc. All rights reserved.
function AC_AddExtension(src, ext)
{
  if (src.indexOf('?') != -1)
    return src.replace(/\?/, ext+'?'); 
  else
    return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs) 
{ 
  var str = '<object ';
  for (var i in objAttrs)
    str += i + '="' + objAttrs[i] + '" ';
  str += '>';
  for (var i in params)
    str += '<param name="' + i + '" value="' + params[i] + '" /> ';
  str += '<embed ';
  for (var i in embedAttrs)
    str += i + '="' + embedAttrs[i] + '" ';
  str += ' ></embed></object>';

  document.write(str);
}

function AC_FL_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_SW_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000"
     , null
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType){
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i=0; i < args.length; i=i+2){
    var currArg = args[i].toLowerCase();    

    switch (currArg){	
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i+1];
        break;
      case "src":
      case "movie":	
        args[i+1] = AC_AddExtension(args[i+1], ext);
        ret.embedAttrs["src"] = args[i+1];
        ret.params[srcParamName] = args[i+1];
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblClick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
        ret.objAttrs[args[i]] = args[i+1];
        break;
      case "width":
      case "height":
      case "align":
      case "vspace": 
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "id":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
}

/* End Flash Border Remove Script */

function compareswitchhidesimilar(){
	if (bcompareshowsimilar){
		comparerecalcsimilar('hidesimilar');
		objbtnHideSimilar.innerHTML = sTextShowSimilar;
	}
	else{
		comparerecalcsimilar('showsimilar');
		objbtnHideSimilar.innerHTML = sTextHideSimilar;
	}
}


/* For Print This page Oprtion*/

function printWindow()
{
bV = parseInt(navigator.appVersion)
if (bV >= 4) window.print()
}7

function SystemPrintPreview(OLECMDID) 
{ 
 //var OLECMDID = 10; 
 /* OLECMDID values: 
 * 6 - print 
 * 7 - print preview 
 * 8 - page setup (for printing) 
 * 1 - open window 
 * 4 - Save As 
 * 10 - properties 
 */try
 {
 var PROMPT = 1; // 1 PROMPT & 2 DONT PROMPT USER 
 var oWebBrowser = document.getElementById("WebBrowser1");
 if(oWebBrowser == null)
 {
 var sWebBrowser = '<OBJECT ID="WebBrowser1" WIDTH=0 HEIGHT=0 CLASSID="CLSID:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>'; 
 document.body.insertAdjacentHTML('beforeEnd', sWebBrowser); 
 oWebBrowser = document.getElementById("WebBrowser1");
 //WebBrowser1.outerHTML = ""; 
  }
oWebBrowser.ExecWB(OLECMDID,PROMPT);
}
catch(e){alert("Printing failed! " + e.message);}
} 



/** Checkbox javascript  **/

function removespacewidth(id)
{
var browser=navigator.appName
identity=document.getElementByType('Checkbox');
//identity=document.all['chk'];
	if("Netscape"== browser)
	{
	identity.className='ChkBoxMZ';
	//document.getElementByClass('ChkBoxIE').className='ChkBoxMZ';
	
	}
}






// Iframe Script // from Yih Cheng

function iFrameHeight() {
if(document.getElementById && !(document.all)) {
h = document.getElementById('iframename').contentDocument.body.scrollHeight;
document.getElementById('iframename').style.height = h;
}
else if(document.all) {
h = document.frames('iframename').document.body.scrollHeight;
document.all.iframename.style.height = h;
}
}



// Popup Script // from Yih Cheng

function popUp(form, vWidth, vHeight) {

    var windowName = 'Sony';
    var setting =
        'width='        + vWidth +
        ',height='      + vHeight +
                ',left='                + '100' +
                ',top='                 + '100' +
        ',location='    + 'no' +
        ',menubar='     + 'no' +
        ',scrollbars='  + 'yes' +
        ',status='      + 'yes' +
        ',toolbar='     + 'no' +
        ',resizable='   + 'yes';

window.open(form.choice.value, windowName, setting);
}

function linkPopUp(URL, vWidth, vHeight) {
	
    var windowName = 'Sony';
    var setting =
    'width='+ vWidth +',height='+ vHeight +',left='+'100'+',top='+'30'+',location='+'no'+',menubar='+'no'+',scrollbars='+'yes'+',status='+'yes'+',toolbar='+'no'+',resizable='+'yes';
        window.open(URL, windowName, setting);
}


function hideLoadBar()
{
	varLoadinBarDiv = document.getElementById("LoadingbarDiv");
	if(varLoadinBarDiv!=null){
		varLoadinBarDiv.style.display = "none";
	}
}

function showLoadBar()
{
	varLoadinBarDiv = document.getElementById("LoadingbarDiv");
	if(varLoadinBarDiv!=null){
		varLoadinBarDiv.style.display = "block";
	}
}

// Start SAL Warranty


/************************************************************************************************************
(C) www.dhtmlgoodies.com, November 2005

This is a script from www.dhtmlgoodies.com. You will find this and a lot of other scripts at our website.	

Terms of use:
You are free to use this script as long as the copyright message is kept intact. However, you may not
redistribute, sell or repost it without our permission.

Thank you!

www.dhtmlgoodies.com
Alf Magne Kalleland

************************************************************************************************************/

var dhtmlgoodies_slideSpeed = 10;	// Higher value = faster
var dhtmlgoodies_timer = 10;	// Lower value = faster

var objectIdToSlideDown = false;
var dhtmlgoodies_activeId = false;
var dhtmlgoodies_slideInProgress = false;
function showHideContent(e,inputId)
{
	if(dhtmlgoodies_slideInProgress)return;
	dhtmlgoodies_slideInProgress = true;
	if(!inputId)inputId = this.id;
	inputId = inputId + '';
	var numericId = inputId.replace(/[^0-9]/g,'');
	var answerDiv = document.getElementById('dhtmlgoodies_a' + numericId);

	objectIdToSlideDown = false;
	
	if(!answerDiv.style.display || answerDiv.style.display=='none'){		
		if(dhtmlgoodies_activeId &&  dhtmlgoodies_activeId!=numericId){			
			objectIdToSlideDown = numericId;
			slideContent(dhtmlgoodies_activeId,(dhtmlgoodies_slideSpeed*-1));
		}else{
			
			answerDiv.style.display='block';
			answerDiv.style.visibility = 'visible';
			
			slideContent(numericId,dhtmlgoodies_slideSpeed);
		}
	}else{
		slideContent(numericId,(dhtmlgoodies_slideSpeed*-1));
		dhtmlgoodies_activeId = false;
	}	
}

function slideContent(inputId,direction)
{
	
	var obj =document.getElementById('dhtmlgoodies_a' + inputId);
	var contentObj = document.getElementById('dhtmlgoodies_ac' + inputId);
	height = obj.clientHeight;
	if(height==0)height = obj.offsetHeight;
	height = height + direction;
	rerunFunction = true;
	if(height>contentObj.offsetHeight){
		height = contentObj.offsetHeight;
		rerunFunction = false;
	}
	if(height<=1){
		height = 1;
		rerunFunction = false;
	}

	obj.style.height = height + 'px';
	var topPos = height - contentObj.offsetHeight;
	if(topPos>0)topPos=0;
	contentObj.style.top = topPos + 'px';
	if(rerunFunction){
		setTimeout('slideContent(' + inputId + ',' + direction + ')',dhtmlgoodies_timer);
	}else{
		if(height<=1){
			obj.style.display='none'; 
			if(objectIdToSlideDown && objectIdToSlideDown!=inputId){
				document.getElementById('dhtmlgoodies_a' + objectIdToSlideDown).style.display='block';
				document.getElementById('dhtmlgoodies_a' + objectIdToSlideDown).style.visibility='visible';
				slideContent(objectIdToSlideDown,dhtmlgoodies_slideSpeed);				
			}else{
				dhtmlgoodies_slideInProgress = false;
			}
		}else{
			dhtmlgoodies_activeId = inputId;
			dhtmlgoodies_slideInProgress = false;
		}
	}
}



function initShowHideDivs()
{

	var divs = document.getElementsByTagName('DIV');
	var divCounter = 1;
	for(var no=0;no<divs.length;no++){
		if(divs[no].className=='dhtmlgoodies_question'){
			divs[no].onclick = showHideContent;
			divs[no].id = 'dhtmlgoodies_q'+divCounter;
			var answer = divs[no].nextSibling;
			while(answer && answer.tagName!='DIV'){
				answer = answer.nextSibling;
			}
			answer.id = 'dhtmlgoodies_a'+divCounter;	
			contentDiv = answer.getElementsByTagName('DIV')[0];
			contentDiv.style.top = 0 - contentDiv.offsetHeight + 'px'; 	
			contentDiv.className='dhtmlgoodies_answer_content';
			contentDiv.id = 'dhtmlgoodies_ac' + divCounter;
			answer.style.display='none';
			answer.style.height='1px';
			divCounter++;
		}		
	}	

}
addLoadEvent(initShowHideDivs);




// End SAL Warranty
/* Start :new print function             */

function showPrintView (){
	var div = document.getElementById("TopStaticPrintHeader");
	div.style.display = 'inline';
	setActiveStyleSheet('print');
	/*
	* Mindtree July 22 2009- Mohit : fix for MySony left alignment of Right Navigation
	* This solution works fine with IE as well as firefox
	*/
	if(document.getElementsByClassName("mysony")!=null) {
		var mySonyDivObj = document.getElementsByClassName("mysony");
		if(mySonyDivObj[0]!=null){

			/* 
			* 50112: CSS issue- Print version of Order tracking page
			* 
			* Check for view parameter in the URL and apply the width
			* based on browser type. 
			*/
			var queryString = window.top.location.href;
			var parameterName = "view";
			var resultParam = getParameter(queryString, parameterName);
			if(resultParam == 'g_orderDetail') {

				if (navigator.appName == "Microsoft Internet Explorer")	{
					mySonyDivObj[0].style.width = "693px";
				}
				else if (navigator.appName == "Netscape") {
					mySonyDivObj[0].style.width = "710px";
				}
				else {
					 mySonyDivObj[0].style.width = "700px";
				}
			}
			else {
				mySonyDivObj[0].style.width = "700px";//"490px";
			}

	}
}
	/*
	* Mindtree July 23 2009- Mohit : fix Only for MySony Postlogin landing page left alignment of Right Navigation
	* This solution works fine with IE as well as firefox
	*/
	if(document.getElementById("mysony_postlogin")!=null) {
		var mySonyPostDivObj = document.getElementById("mysony_postlogin");
		if(mySonyPostDivObj!=null){
			mySonyPostDivObj.style.width = "700px";
		}
	}

	/*
	* Mindtree July 3 2009- Mohit : fix for displaying only selected tab
	* This solution works fine with IE as well as firefox
	*/
	$tabCount	= $jq(".pro_details_tabs > .tabs > .TabMenu ul li a");
	var i_tabId = $tabCount.length;
	for (i = 1 ; i <= i_tabId; i++){
		if(document.getElementById("eComTab"+i)!=null) {
			var tabId = document.getElementById("eComTab"+i);
			s_CSSClass = tabId.attributes.getNamedItem("class").nodeValue;
			if(s_CSSClass == ""){
				tabId.style.display = 'none';
			}
		}
	}
	window.setTimeout('printWindow()',100);
}

function showWebView (){
	var div = document.getElementById("TopStaticPrintHeader");
	div.style.display = 'none';
	setActiveStyleSheet('web');
	/*
	* Mindtree July 22 2009- Mohit : fix for MySony left alignment of Right Navigation
	* This solution works fine with IE as well as firefox
	*/
	if(document.getElementsByClassName("mysony")!=null) {
		var mySonyDivObj = document.getElementsByClassName("mysony");
		//mySonyDivObj[0].attributes.getNamedItem("style").nodeValue = "";
		if(mySonyDivObj[0]!=null){
			mySonyDivObj[0].style.width = "auto";
		}
	}
	/*
	* Mindtree July 23 2009- Mohit : fix Only for MySony Postlogin landing page left alignment of Right Navigation
	* This solution works fine with IE as well as firefox
	*/
	if(document.getElementById("mysony_postlogin")!=null) {
		var mySonyPostDivObj = document.getElementById("mysony_postlogin");
		if(mySonyPostDivObj!=null){
			mySonyPostDivObj.style.width = "912px";
		}
	}


	/*
	* Mindtree July 3 2009- Mohit : fix for displaying all tabs
	* This solution works fine with IE as well as firefox
	*/
	$tabCount	= $jq(".pro_details_tabs > .tabs > .TabMenu ul li a");
	var i_tabId = $tabCount.length;
	for (i = 1 ; i <= i_tabId; i++){
		if(document.getElementById("eComTab"+i)!=null) {
			var tabId = document.getElementById("eComTab"+i);
			s_CSSClass = tabId.attributes.getNamedItem("class").nodeValue;
			if(s_CSSClass == ""){
				tabId.style.display = 'block';
			}
		}
	}
}

/***********************************************/
/* Start :  return parameter value from the URL          
* 50112: CSS issue- Print version of Order tracking page */
function getParameter ( queryString, parameterName ) {
var parameterName = parameterName + "=";
if ( queryString.length > 0 ) {
	begin = queryString.indexOf ( parameterName );
	if ( begin != -1 ) {
		begin += parameterName.length;
		end = queryString.indexOf ( "&" , begin );
		if ( end == -1 ) {
			end = queryString.length
		}
		return unescape ( queryString.substring ( begin, end ) );
	}
return "null";
}
}

/***********************************************/
/* End :  return parameter value from the URL          */


/* End :new print function          */