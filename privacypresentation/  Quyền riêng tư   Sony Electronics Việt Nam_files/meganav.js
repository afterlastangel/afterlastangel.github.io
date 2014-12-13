jQuery(document).ready(function() {
	//IE quirks fix
	var IEquirks = jQuery('html').attr('xmlns')
	var RTLpage = (jQuery('.menuleft').css('direction')=="rtl");
	var docModeIE8 = document.documentMode;
	var locale='';
	var logicalPage='';
	jQuery('meta').each(function(){
		if(jQuery(this).attr('name')=='locale'){
			locale = jQuery(this).attr('content');
		}
		if(jQuery(this).attr('name')=='logicalPage'){
			logicalPage = jQuery(this).attr('content');
		}
	});
	
	//TW_CS
	if(((locale=="tw_CS")||(locale=="tw_TW")) && (logicalPage="HPSiteMapPage")){
		jQuery('#SiteMapArea .ProductSiteMapSection').hide();
		jQuery('#SiteMapArea .OtherSiteMapSectionBlock').width(880);
	}
	
	jQuery(".menuleft").children().children().addClass('meganavLI');
	if(jQuery.browser.msie){
		if(IEquirks!="http://www.w3.org/1999/xhtml"){
			jQuery('.menuleft').css('margin-top','-1px');
			jQuery('.menuleft ul.meganav').css('line-height','22px');
			jQuery('.meganav').children('li').css('padding-bottom','2px');
			
			if(RTLpage){jQuery('.menuleft .sub').css('margin-top','26px')}
			else{jQuery('.menuleft .sub').css('margin-top','21px')}
		}
		
		if(jQuery.browser.version<=6){
			if(!RTLpage){
				jQuery('#submegaproduct .prodSecContent').css('margin-left','65px');
			}else{
				jQuery('#submegaproduct .prodSecContent').css('margin-right','65px');
				setTimeout(function(){
					jQuery('#menu .menuleft').css({'padding-right':'5px','zoom':'100%'});
					jQuery('#menu .menuright td a img').css('position','relative');
				},300);
			}
		}
		
		if((document.compatMode=='CSS1Compat') && (docModeIE8!='5')){
			jQuery('.menuleft').css('margin-top','0px');
			jQuery('.meganav').children('li').css('padding-bottom','0px');
			jQuery('.menuleft').children('li').children('span').height(29);
			
			if(jQuery.browser.msie){
				if(jQuery.browser.version>=8){
					if(RTLpage){jQuery('.menuleft .sub').css('margin-top','2px')}
					else{jQuery('.menuleft .sub').css('margin-top','2px')}
				}
			}
		}
	}
	
	//Add hover effect for section titles
	jQuery('#submegaproduct .secHead a strong, .meganav .sub ul.list li a, .meganav .sub .level2 p a').hover(
		function(){jQuery(this).addClass('hover');},
		function(){jQuery(this).removeClass('hover')}
	);
	
	//Toggle consumer/professional products
	jQuery('#submegaproduct .prodSec p:eq(0)').addClass('selected');
	jQuery('#submegaproduct .prodSecContent:eq(1)').hide();
	jQuery('#submegaproduct .prodSec p').hover(
		function(){jQuery(this).addClass('hover')},
		function(){jQuery(this).removeClass('hover')}
	);
	
	jQuery('#submegaproduct .prodSec p:eq(0)').click(function(){
		jQuery('#submegaproduct .prodSec p:eq(0)').addClass('selected');
		jQuery('#submegaproduct .prodSec p:eq(1)').removeClass('selected');
		jQuery('#submegaproduct .prodSecContent:eq(0)').show();
		jQuery('#submegaproduct .prodSecContent:eq(1)').hide();
		setTimeout(function(){
			jQuery('#submegaproduct .prodSecContent:eq(0) .secHead').addClass('zoomIE');
			jQuery('#submegaproduct .prodSecContent:eq(1) .secHead').removeClass('zoomIE');
		},10);
		jQuery('.pagecenter #menu').next('iframe').remove();
		ie6framecover();
	});
	
	jQuery('#submegaproduct .prodSec p:eq(1)').click(function(){
		jQuery('#submegaproduct .prodSec p:eq(1)').addClass('selected');
		jQuery('#submegaproduct .prodSec p:eq(0)').removeClass('selected');
		jQuery('#submegaproduct .prodSecContent:eq(1)').show();
		jQuery('#submegaproduct .prodSecContent:eq(0)').hide();
		setTimeout(function(){
			jQuery('#submegaproduct .prodSecContent:eq(1) .secHead').addClass('zoomIE');
			jQuery('#submegaproduct .prodSecContent:eq(0) .secHead').removeClass('zoomIE');
		},10);
		jQuery('.pagecenter #menu').next('iframe').remove();
		ie6framecover();
	});
	
	//Check count of row, if only 1 then adjust the position of the row
	jQuery('#submegaproduct .prodSecContent').each(function(){
		var profRow = jQuery(this).children('.row');
		if(profRow.length<=1){
			if(profRow.height()<70){
				profRow.css({
					'padding-top':'18px',
					'padding-bottom':'18px'
				});
			}
		}
	});
	
	//Disable hover for links without href
	jQuery('.level2 a').each(function(){
		if(jQuery(this).attr('href')=='#'){
			jQuery(this).mouseover(function(){
				jQuery(this).removeClass('hover').css({
					'text-decoration':'none',
					'cursor':'default'
				});
				jQuery(this).children().css('cursor','default');
			});
		}else{
			if(jQuery.browser.msie){
				jQuery(this).click(function(){
					if(jQuery(this).attr('target')!='_blank'){
						location.href=jQuery(this).attr('href');
					}else{
						return true;
					}
				});
				
			}
		}
	});
	
	
	//Submenu hide/show
	countHover=0;
	function navOver(){
		var id = '#sub'+jQuery(this).attr('id');
		withSub = jQuery(this).children('.sub');
		
		withSub.show();
		jQuery(this).not('.level2','ul.list li').addClass('withSubHover');
		
		//Only load images once the section is expanded
		jQuery(this).not('.level2').find('.sub img').stop().each(function(){
			var imgsrc = jQuery(this).attr('original');
			if(imgsrc) jQuery(this).attr('src',imgsrc).show();
		});
		
		countSubmenuList();
		
		//Equal height for each row
		if(id!="#submegaproduct"){
			jQuery(id+' .level2:lt(4)').equalHeight();
			jQuery(id+' .level2:lt(8):gt(3)').equalHeight();
			jQuery(id+' .level2:lt(12):gt(7)').equalHeight();
			jQuery(id).height(jQuery(id).parent().height());
		}
		
		ie6framecover();
		
		//Determine the position of the menu and the submenu
		var menuIndex = jQuery('.meganav').children('li').index(this);
		if((menuIndex>1 && menuIndex<5 && subListCount==2) || (menuIndex==2 && subListCount==3)){
			jQuery('.meganav').children('li').eq(menuIndex).children('.sub').addClass('oneList');
			jQuery('.meganav').children('li').eq(menuIndex).css({'position':'relative'});
		}
		if(menuIndex>6 && subListCount==2){
			jQuery('.meganav').children('li').eq(menuIndex).children('.sub').addClass('oneListRev');
			jQuery('.meganav').children('li').eq(menuIndex).css({'position':'relative'});
		}
		
		//TW_CS
		if((locale=="tw_CS") && menuIndex==1){
			jQuery('.meganav').children('li').eq(menuIndex).children('.sub').addClass('oneList');
			jQuery('.meganav').children('li').eq(menuIndex).css({'position':'relative'});
		}
		
		//TW_TW
		if((locale=="tw_TW") && menuIndex==0){
			jQuery('.meganav').children('li').eq(menuIndex).children('.sub').addClass('oneList');
			jQuery('.meganav').children('li').eq(menuIndex).css({'position':'relative'});
		}
		
		//Check height of the prod sec and adjust line-height accordingly
		if(id=="#submegaproduct"){
			if((jQuery.browser.msie) && (jQuery.browser.version<=7) && document.compatMode=='CSS1Compat'){
				if(!RTLpage){
					jQuery('#submegaproduct .prodSec p').css({'float':'left','padding-right':'20px','width':'120px'});
				}else{
					jQuery('#submegaproduct .prodSecContent li.level2').css({'overflow':'hidden','zoom':'100%','position':'relative'});
					jQuery('#submegaproduct .prodSecContent li.level2 div.secHead').css({'position':'absolute','right':'0px'});
					jQuery('#submegaproduct .prodSecContent ul.list').css({'margin-top':'43px'});
				}
			}
			setTimeout(function(){
				jQuery('#submegaproduct .prodSec p').each(function(){
					if(countHover<=1){
						if(jQuery(this).height()<18){
							jQuery(this).css({
								'height':'40px',
								'line-height':'40px'
							});
						}else{
							jQuery(this).css({
								'height':'40px',
								'line-height':'13px',
								'padding-top':'8px'
							});
						}
					}
					countHover++;
				});
			},200);
		}
	}
	
	function navOut(){ 
		jQuery(this).children(".sub").hide();
		jQuery(this).removeClass('withSubHover');
		jQuery('#submegaproduct .prodSec').removeClass('zoomIE');
		jQuery('.pagecenter #menu').next('iframe').remove();
		
		jQuery('#submegaproduct .prodSec p:eq(0)').addClass('selected');
		jQuery('#submegaproduct .prodSec p:eq(1)').removeClass('selected');
		jQuery('#submegaproduct .prodSecContent:eq(0)').show();
		jQuery('#submegaproduct .prodSecContent:eq(1)').hide();
		setTimeout(function(){
			jQuery('#submegaproduct .prodSecContent:eq(0) .secHead').addClass('zoomIE');
			jQuery('#submegaproduct .prodSecContent:eq(1) .secHead').removeClass('zoomIE');
		},10);
		jQuery('.pagecenter #menu').next('iframe').remove();
		ie6framecover();
	}

	var config = {    
		 sensitivity: 1, // number = sensitivity threshold (must be 1 or higher)    
		 interval: 20, // number = milliseconds for onMouseOver polling interval    
		 over: navOver, // function = onMouseOver callback (REQUIRED)    
		 timeout: 10, // number = milliseconds delay before onMouseOut    
		 out: navOut // function = onMouseOut callback (REQUIRED)    
	};

	jQuery(".menuleft ul").children('li.meganavLI').hoverIntent(config);
	
	//Count number of submenu items and then automatically position it to the center of the page
	function countSubmenuList(){
		subListCount = withSub.find('.level2').stop().length;
		if(withSub.parent().attr('id')=="megaproduct"){
			if((jQuery.browser.msie) && (jQuery.browser.version<=7) && (document.compatMode=='CSS1Compat') && (docModeIE8!='5')){
				jQuery('.menuleft li#megaproduct .sub .prodSec').css('margin-left','2px');
				jQuery('.menuleft li#megaproduct .sub div.secHead a strong').css('display','inline-block');	
				jQuery('.menuleft ul.list li').css('display','inline-block');
				if(jQuery.browser.version==7){jQuery('.menuleft li#megaproduct .level2').css('padding','0px 10px');}
			}
			if(RTLpage){
				if(jQuery.browser.msie){
					withSub.width(910).css('right','28px');
					if((document.compatMode=='CSS1Compat') && (docModeIE8!='5')){
						withSub.width(910).css('right','8px');
						if(jQuery.browser.version<=7){
							jQuery('.menuleft ul.list li').css('float','right');
							jQuery('.menuleft li#megaproduct .sub .prodSec').css('margin-right','2px');
							jQuery('.menuleft #submegaproduct').width(930);
							jQuery('.menuleft ul.list').css('display','inline');
							jQuery('.menuleft li#megaproduct .level2').css('padding','0px 3px');
							withSub.width(930).css('right','0px');
							setTimeout(function(){
								jQuery('.menuleft li#megaproduct .secHead').css('zoom','0');
								jQuery('.menuleft li#megaproduct div.row').css('display','inline-block');
							},100);
							setTimeout(function(){
								jQuery('.menuleft li#megaproduct .secHead').css({'zoom':'1'});
								jQuery('.menuleft li#megaproduct div.row').css('display','inline');
							},200);
							
						}
					}
				}else{
					withSub.width(910).css('right','8px');
				}
			}else{
				if((document.compatMode=='CSS1Compat') && (docModeIE8!='5') && (jQuery.browser.msie) && (jQuery.browser.version==6)){
					jQuery('.menuleft #submegaproduct').width(930);
					withSub.width(930).css('left','0px');
				}else{
					withSub.width(910).css('left','8px');
				}
			}
		} else {
			if(withSub.width()!=0){
				var subWidth = 0;
				var subID = withSub.children().attr('id');
				
				if((jQuery.browser.msie) && (document.compatMode=='CSS1Compat') && (docModeIE8!='5')){
					jQuery('#'+subID+' .level2 .img_swf').each(function(i,e){
						if(jQuery.browser.version<=7){
							if(RTLpage){
								jQuery('.menuleft ul.list').css({'display':'inline','padding-bottom':'10px'});
								if(jQuery.browser.version==6){jQuery('.menuleft ul.list li').width(145)}
							}
						}else{
							jQuery('.menuleft ul.list li').css('display','inline-block');
						}
						
						if(jQuery(this).width()=='0'){jQuery(this).width(171).hide()}
						
						subWidth += jQuery(e).width()+30;
						jQuery(this).parent().parent('li').width(jQuery(this).width());
					
						if(subWidth > 800) { subWidth=800 } 
						var subLeft = (880-subWidth)/2;
						
						if(jQuery.browser.version==6){subWidth = subWidth+15;}
						
						if(RTLpage){
							withSub.width(subWidth).css('right',subLeft+15);
						}else{
							withSub.width(subWidth).css('left',subLeft);
						}
						
						if(subListCount<=1){
							withSub.addClass('oneList');
							withSub.parent().css({'position':'relative'});
						}
					});
				} else {
					jQuery('#'+subID+' .level2 .img_swf').each(function(i,e){
						if(jQuery(this).width()=='0'){
							jQuery(this).width(171).hide();
						}
						
						subWidth += jQuery(e).width();
						jQuery(this).parent().parent('li').width(jQuery(this).width());
						
						if(jQuery.browser.msie){
							if(subWidth > 800) { subWidth=800 } 
							var subLeft = (880-subWidth)/2;
							subWidth = subWidth+51;
						} else {
							if(subWidth > 880) { subWidth=757 }
							var subLeft = (855-subWidth)/2;
							subWidth = subWidth+33;
						}
						
						if(RTLpage){
							if(jQuery.browser.msie){
								withSub.width(subWidth).css('right',subLeft+15);
							}else{
								withSub.width(subWidth).css('right',subLeft);
							}
						}else{
							withSub.width(subWidth).css('left',subLeft);
						}
						
						if(subListCount<=1){
							withSub.addClass('oneList');
							withSub.parent().css({'position':'relative'});
						}
						if(subListCount==2 && jQuery.browser.msie) withSub.width(subWidth+20);
					});
				}
			}
		}
	}
	
	//IE6 iframe cover for form fields
	function ie6framecover(){
		if(jQuery.browser.msie){
			setTimeout(function(){
				jQuery('#submegaproduct:visible .prodSec').addClass('zoomIE');
				if(jQuery.browser.version<=6){
					var x=38;
					var y=30;
					meganavSubHeight = jQuery('.meganav .sub:visible').height();
					meganavSubWidth = jQuery('.meganav .sub:visible').width();
					meganavSubLeft = jQuery('.meganav .sub:visible').offset();
					
					if(jQuery('.meganav .sub:visible').parent().attr('id')=='megaproduct'){
						meganavSubWidth=910;
						x=0;
						y=-8;
					}
					
					if(meganavSubLeft){
						jQuery('.pagecenter #menu').after('<iframe style="position:absolute; top:112px; left:'+meganavSubLeft.left+'px;" frameborder="0" width='+(meganavSubWidth+x)+' height='+(meganavSubHeight+y)+'></iframe>')
					}
				}
			},10);
		}
	}
	
	//Equal Height
	(function($){
		$.fn.equalHeight = function() {
			tallest = 0;
			this.each(function(){
				thisHeight = $(this).height();
				if( thisHeight > tallest)
					tallest = thisHeight;
			});
			this.each(function(){
				var x = 0;
				if($.browser.msie){x = 5}
				$(this).height(tallest+x);
			});
		}
	})(jQuery);
	
	/* mobile redirect M parameter logic */
	//setTimeout(function(){
//		jQuery('a').each(function(){
//			if(jQuery(this).attr('href')){
//				var relLink = jQuery(this).attr('href');
//				if(jQuery.inArray('/',relLink,0)==0 && relLink.indexOf('?m=')==-1 && relLink!='#' && getURLParameters('m')){
//					if(relLink.indexOf('?')>=0){
//						jQuery(this).attr('href',relLink+'&m='+getURLParameters('m'));
//					}else{
//						jQuery(this).attr('href',relLink+'?m='+getURLParameters('m'));
//					}
//				}
//			}
//		});
//	},5000);
	
});


function getURLParameters(paramName) 
{
    var sURL = window.document.URL.toString();  
    if (sURL.indexOf("?") > 0)
    {
       var arrParams = sURL.split("?");         
       var arrURLParams = arrParams[1].split("&");      
       var arrParamNames = new Array(arrURLParams.length);
       var arrParamValues = new Array(arrURLParams.length);     
       var i = 0;
       for (i=0;i<arrURLParams.length;i++)
       {
        var sParam =  arrURLParams[i].split("=");
        arrParamNames[i] = sParam[0];
        if ((sParam[1]=='1') || sParam[1]=='0')
            arrParamValues[i] = escape(sParam[1]);
       }

       for (i=0;i<arrURLParams.length;i++)
       {
            if(arrParamNames[i] == paramName){
			return arrParamValues[i];
            }
       }
       //return "No Parameters Found";
    }
}
