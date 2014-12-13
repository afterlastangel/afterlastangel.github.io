/* SiteCatalyst code version: H.22.1.
/* SiteCatalyst code version: H.22.1.
Copyright 1996-2010 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com */


// defines the domain listing for filtering                
var domainlist = "sony-africa.com,sony.com.tw,sony-asia.com,sony.com.sg,sony.com.ph,sony.com.my,sony.co.th,sony.com.vn,sony.co.id,sony.com.au,sony.co.za,sony.co.nz,sony.co.in,sony-mea.com,sony.co.ir,sony-europe.com,80.88.42.5,80.88.41.5,80.88.40.8,80.88.42.6,80.88.39.10"

//domainlist += ",localhost"; //comment off for deployment

// - added 29-Feb-2008 to check the intregity of the legal domains
function checkSiteIntegrity()
{
    var cpFlag = -1; // defaults to false.

    // apply checks to see if the domain falls in the list below
    var currentDomain = document.domain;

    domainName  = new Array();
    domainName  = domainlist.split(",");
    domainCount = domainName.length;

    var i = 0;
    while (i < domainCount)
    { 
        // compares if the domain string is found in the domain listings defined above.
        if ((currentDomain.indexOf(domainName[i]) < 0) && (i == (domainCount-1)))
            cpFlag = 1; // assigns to 1 to assign the s_account to ""

        if ((currentDomain.indexOf(domainName[i]) >= 0) && (i <= domainCount))
            break;
            
        i++;
    }
    return cpFlag;
}

// flag to control the copying of the domain - added 29-Feb-2008        
var cFlag = checkSiteIntegrity();

if (cFlag == 1 )
    s_account = "";
 

/************************** CONSTANT VALUE **************************/

var PRODUCTS                                = "products";
var EVENTS                                  = "events";
var EVENT_0_SC_ADD                          = "scAdd";
var EVENT_0_SC_OPEN                         = "scOpen";
var EVENT_2_GMAP_LOCATOR                    = "event2";
var EVENT_4_ENEWSLETTER_SUBSCRIBE           = "event4";
var EVENT_8_ONSITE_TOOL                     = "event8";
var EVENT_9_BACKORDER_PURCHASED             = "event9";
var EVENT_11_FORM_ABANDON                   = "event11";
var EVENT_12_FORM_SUCCESS                   = "event12";
var EVENT_13_FORM_ERROR                     = "event13";

var EVAR_8_ANALYSIS_FORM                    = "eVar8";
var EVAR_6_ONSITE_TOOL                      = "eVar6";
var EVAR_11_INTERNAL_CAMPAIGN               = "eVar11";
var EVAR_31_GMAP_LOCATOR_OPTION             = "eVar31";
var EVAR_32_GMAP_LOCATOR_LINK               = "eVar32";
var EVAR_34_ENEWSLETTER_SIGNUP              = "eVar34";
var EVAR_36_ENEWSLETTER_TYPE                = "eVar36";

var PROP_6_INTERNAL_SEARCH_TERM             = "prop6";
var PROP_8_HOME_ELEMENTS                    = "prop8";
var PROP_17_HUB_ELEMENTS                    = "prop17";
var PROP_18_PRODUCT_ELEMENTS                = "prop18";
var PROP_48_INTERNAL_SEARCH_TERM_NO_RESULTS = "prop48";

var PROP_21_SUPPORT_TITLE                   = "prop21";
var PROP_22_SUPPORT_TYPE                    = "prop22";
var PROP_23_SUPPORT_CATEGORY                = "prop23";
var PROP_24_SUPPORT_CATEGORY_1              = "prop24";
var PROP_25_SUPPORT_CATEGORY_2              = "prop25";
var PROP_26_SUPPORT_SERIES                  = "prop26";
var PROP_27_SUPPORT_MODEL                   = "prop27";
var PROP_29_SUPPORT_ELEMENTS                = "prop29";
                                            
var PROP_31_LOCATOR_SEARCH_TYPE             = "prop31";
var PROP_32_LOCATOR_SEARCH_TERM             = "prop32";
var PROP_33_LOCATOR_PRODUCT                 = "prop33";
var PROP_34_LOCATOR_SHOP                    = "prop34";

var PROP_47_CAMPAIGN_CODE                   = "prop47";
var PROP_50_CAMPAIGN_PATHING                = "prop50";
 
/* Specify the Report Suite ID(s) to track here */
var s = s_gi(s_account);

/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s.charSet             = "UTF-8";
s.cookieDomainPeriods = "3";

if(window.location.hostname.indexOf("sony-asia.com")>-1 || window.location.hostname.indexOf("sony-mea.com")>-1)
    s.cookieDomainPeriods = "2";

/* Link Tracking Config */
s.trackDownloadLinks    = true;
s.trackExternalLinks    = true;
s.trackInlineStats      = true;
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,psd,ai";
s.linkInternalFilters   = "javascript:,"+ domainlist;
s.linkLeaveQueryString  = true;
s.linkTrackVars         = "None";
s.linkTrackEvents       = "None";

/* Form Analysis Config*/
s.formList      = ""; //"shoppingCartForm,shippingBillingForm,paymentForm"; //Not suitable as HOMEPAGE forms does not have FORM standard implementation.
s.trackFormList = true;
s.trackPageName = true;
s.useCommerce   = true;
s.varUsed       = EVAR_8_ANALYSIS_FORM;
s.eventList     = EVENT_11_FORM_ABANDON +","+
                  EVENT_12_FORM_SUCCESS +","+
                  EVENT_13_FORM_ERROR; // Abandon,Success,Error

/* Plugin Config */
s.usePlugins = true;

function s_doPlugins(s)
{    
    s.campaign = s.getValOnce(s.getQueryParam('cid') ,'s_campaign',0); //campaign 
    s.eVar11   = s.getValOnce(s.getQueryParam('hpid'),'s_'+ EVAR_11_INTERNAL_CAMPAIGN,0); //defines the Internal campaign captured by paramteer "hpid=" added - 14082007
    
    // For DREAMmail
    if(s.getQueryParam('sssdmh'))
        s.campaign = s.getValOnce(s.getQueryParam('sssdmh'),'s_campaign',0); //DREAMmail campaign 

    try //backward compatible for old page that does not have dfaSiteId
    {
        //This line is necessary for the DFA integration to work. The DFA plugin below references it.
        if(isParamValid(dfaSiteId))
            s.variableProvider ='DFA#'+ dfaSiteId +':v45=[["DFA-"+lis+"-"+lip+"-"+lastimp+"-"+lastimptime+"-"+lcs+"-"+lcp+"-"+lastclk+"-"+lastclktime]]';
    }
    catch(e){}
    
    //DFA Plugin call
    s.partnerDFACheck("dfa_cookie","cid");
    //Cookie stored as 'dfa_cookie'
    //Looks for 'cid' in query string for mid visit click throughs

    s.setupFormAnalysis();    

	/* Campaign Pathing - Added 6 Sep 2010*/
	if(!isParamValid(s.prop50)) //track only if s.prop50 is empty, else do not over track due to link tracking.
	{
		if(s.campaign)                                 // add new external campaign if any
			s.prop50 = s.pageName +"|cid:" + s.campaign;
		else if(s.eVar11)                              // else add new internal campaign if any
			s.prop50 = s.pageName +"|hpid:"+ s.eVar11;
		else                                           // else add any existing campaign in cookie if any
		{
			if(isParamValid(getActiveCampaign()))
				s.prop50 = s.pageName +"|"+ getActiveCampaign(); 
			else
				s.prop50 = s.pageName;
		}
	}
	
	s.prop47 = getActiveCampaign(); // add persistent campaign code if any.

    /*
   * There is a limit to the size of the URI that is allowed to be sent to DFA.  On occasion, the URI becomes too large.
   * To fix this, below line of code  is added INSIDE of the do_plugins area. This line will remove the plugins portion of the server call that goes to DFA. 
   * This is mostly extraneous data and to lose it for one call will not hurt, but it will ensure that you DFA data reaches SiteCatalyst without throwing a 414 error.
   * It should go at the very bottom of the do_plugins function so that it runs after all other code in do_plugins.
   */
    if(s.variableProvider)
        s.plugins="";
} 

// This retreive the campaign code from cookie, where cid(s.campaign) has higher priority over hpid(s.eVar11)
function getActiveCampaign()
{
	var active_Cid_Hpid = "";
					
	if(getCookie("s_campaign")) //s.campaign has higer priority them s.eVar11. External campaign vs Internal Campaign
		active_Cid_Hpid = "cid:" + getCookie("s_campaign");
		
	else if(getCookie("s_eVar11"))
		active_Cid_Hpid = "hpid:"+ getCookie("s_eVar11");
	
	return active_Cid_Hpid;

}

function customDownloadTracker(obj,downloadname,downloadcategory)
{
    s.linkTrackVars = PROP_21_SUPPORT_TITLE      +","+
                      PROP_22_SUPPORT_TYPE       +","+
                      PROP_23_SUPPORT_CATEGORY   +","+
                      PROP_24_SUPPORT_CATEGORY_1 +","+
                      PROP_25_SUPPORT_CATEGORY_2 +","+
                      PROP_26_SUPPORT_SERIES     +","+
                      PROP_27_SUPPORT_MODEL;
    s.prop21        = downloadname;     // PROP_21_SUPPORT_TITLE
    s.prop22        = downloadcategory; // PROP_22_SUPPORT_TYPE
    s.tl(true,'d',obj);
}

/* [[ Top Page Tracking. Start ################################################## */      
function trackHomeElement(obj,toppagetag)
{
    s.linkTrackVars = PROP_8_HOME_ELEMENTS +","+
	                  PROP_50_CAMPAIGN_PATHING;
    s.prop8         = toppagetag; // PROP_8_HOME_ELEMENTS
	s.prop50        = s.prop8;    // PROP_50_CAMPAIGN_PATHING
    s.tl(obj,'o',toppagetag);

}
function trackHomeCSF_MainBanner(jvarPosition,jvarTitle) //CSF = Cover Story Flash
{
    var mainBanner = "Home.MainFlash.BigBanner." + jvarPosition + "." + jvarTitle;
    trackHomeElement("flash", mainBanner); // String "flash" is pass-in as object. If NULL it will be submitting all variables like page view.
    
    return mainBanner;
}
function trackHomeCSF_SmallBanner(jvarPosition,jvarTitle) //CSF = Cover Story Flash
{
    var smallBanner = "Home.MainFlash.SmallBanner." + jvarPosition + "." + jvarTitle;
    trackHomeElement("flash", smallBanner); // String "flash" is pass-in as object. If NULL it will be submitting all variables like page view.
    
    return smallBanner;
}
function trackHomePHF_View(jvarPosition,jvarTitle) //PHF = Product Hightlights Flash
{
    var smallProduct = "Home.ProductFlash." + jvarPosition + "." + jvarTitle + ".View";
    trackHomeElement("flash", smallProduct); // String "flash" is pass-in as object. If NULL it will be submitting all variables like page view.
    
    return smallProduct;
}
function trackHomePHF_Visit(jvarPosition,jvarTitle) //PHF = Product Hightlights Flash
{
    var bigProduct = "Home.ProductFlash." + jvarPosition + "." + jvarTitle + ".Visit";
    trackHomeElement("flash", bigProduct); // String "flash" is pass-in as object. If NULL it will be submitting all variables like page view.
    
    return bigProduct;
}
function trackHomeHtmlColumn(jvarTitle) //For HTML Column
{
    var elementTitle = "";
    
    if(isParamValid(jvarTitle))
        elementTitle = "."+jvarTitle;

    var htmlCol = "Home.HTMLColumn" + elementTitle;
    trackHomeElement(true, htmlCol);
    
    return htmlCol;
}
function trackHomePageTakeOverDuration(jvarTitle, jvarTotalTime, jvarCloseTime)
{
	var ptoName = "Home.PageTakeOver." + jvarTitle + "." + jvarCloseTime + "/" + jvarTotalTime;
	
	trackHomeElement(true, ptoName);
    
    return ptoName;
}
/* ################################################## Top Page Tracking. End ]] */


/* [[ Hub Page Tracking. Start ################################################## */ 
function trackHubElement(obj,hubpagetag)
{
    s.linkTrackVars = PROP_17_HUB_ELEMENTS +","+
	                  PROP_50_CAMPAIGN_PATHING;
    s.prop17        = unescape(hubpagetag); // PROP_17_HUB_ELEMENTS
	s.prop50        = s.prop17;             // PROP_50_CAMPAIGN_PATHING
    s.tl(obj,'o',unescape(hubpagetag));
}
function trackHubFlash(jvarSection)
{
    var flashSection = "";
    
    if(isParamValid(jvarSection))
        flashSection = "." + jvarSection;
    
    var HUB_FLASH = getDeepestCategory() + ".HubFlash" + flashSection;
    trackHubElement("flash", HUB_FLASH); // String "flash" is pass-in as object. If NULL it will be submitting all variables like page view.
    
    return HUB_FLASH;
}
function trackHubMarketing(jvarTitle)
{
    var flashTitle = "";
    
    if(isParamValid(jvarTitle))
        flashTitle = "."+jvarTitle;
     
    var HUB_MARKETING = getDeepestCategory() + ".HubMarketing" + flashTitle;
    trackHubElement(true, HUB_MARKETING); // String "flash" is pass-in as object. If NULL it will be submitting all variables like page view.
    
    return HUB_MARKETING;
}
function trackHubHtmlColumn(jvarTitle)
{
    var elementTitle = "";
    
    if(isParamValid(jvarTitle))
        elementTitle = "."+jvarTitle;
     
    var HUB_HTML_COLUMN = getDeepestCategory() + ".HubHtmlColumn" + elementTitle;
    trackHubElement(true, HUB_HTML_COLUMN); // String "flash" is pass-in as object. If NULL it will be submitting all variables like page view.
    
    return HUB_HTML_COLUMN;
}
function trackHubSeriesTab(jvarTitle)
{
    var tabTitle = "";
    
    if(isParamValid(jvarTitle))
        tabTitle = "."+jvarTitle;
     
    var HUB_SERIES_TAB = getDeepestCategory() + ".HubTab" + tabTitle;
    trackHubElement(true, HUB_SERIES_TAB);
    
    return HUB_SERIES_TAB;
}
function trackHubSeriesTab_Gallery(jvarElement)
{
    var trackTitle = "Gallery"

    if(isParamValid(jvarElement)) // if valid, it means the elements in  Gallery tab is begin clicked, else Gallery Tab(itself) is being clicked.
        trackTitle += "." + jvarElement;
    
    trackHubSeriesTab(trackTitle);
}
function trackHubSeriesTab_Gallery_Image(jvarPosition)
{
    if(isParamValid(jvarPosition))
        trackHubSeriesTab_Gallery("Image."+jvarPosition);
}
function trackHubSeriesTab_Gallery_360()
{
    trackHubSeriesTab_Gallery("360");
}
function trackHubSeriesTab_Gallery_Video()
{
    trackHubSeriesTab_Gallery("Video");
}
function trackHubSeriesTab_Gallery_ProductOutline()
{
    trackHubSeriesTab_Gallery("ProductOutline");
}
function trackHubSeriesTab_Models()
{
    trackHubSeriesTab("Models");
}
/* ################################################## Hub Page Tracking. End ]] */


/* [[ Locator Tracking. Start ################################################## */ 
function trackGMapSearch(obj,searchType,jvarSearchTerm,product,locatorMap) // jvarSearchTerm delimiter semi-colo(;) .
{
    var aryTerm    = jvarSearchTerm.split(";");
    var firstTrack = true;
    
    for(var i = 0; i < aryTerm.length; i++)
    {
        if(aryTerm[i] != "")
        {
            if(firstTrack)
            {
                s.linkTrackVars   = PROP_31_LOCATOR_SEARCH_TYPE +","+
                                    PROP_32_LOCATOR_SEARCH_TERM +","+
                                    PROP_33_LOCATOR_PRODUCT     +","+
                                    EVAR_6_ONSITE_TOOL          +","+
                                    EVAR_31_GMAP_LOCATOR_OPTION +","+
                                    PROP_50_CAMPAIGN_PATHING    +","+
	                                EVENTS;
                s.linkTrackEvents = EVENT_8_ONSITE_TOOL;      // Onsite Tool Event
                s.events          = EVENT_8_ONSITE_TOOL;      // Onsite Tool Event
                s.prop31          = searchType;               // PROP_31_LOCATOR_SEARCH_TYPE
                s.prop32          = aryTerm[i].toLowerCase(); // PROP_32_LOCATOR_SEARCH_TERM
                s.prop33          = product;                  // PROP_33_LOCATOR_PRODUCT
                s.eVar6           = locatorMap;               // EVAR_6_ONSITE_TOOL
                s.eVar31          = s.prop31;                 // EVAR_31_GMAP_LOCATOR_OPTION
				s.prop50          = s.prop31;                 // PROP_50_CAMPAIGN_PATHING
                s.tl(true,'o',searchType);
                
                firstTrack = false;
            }
            else
            {
                s.linkTrackVars = PROP_32_LOCATOR_SEARCH_TERM;
                s.prop32        = aryTerm[i].toLowerCase(); // PROP_32_LOCATOR_SEARCH_TERM
                s.tl(true,'o',searchType);  
            }
        }            
    }
}
function trackGMapShop(obj,shopName,clickVia)
{
    s.linkTrackVars   = EVAR_32_GMAP_LOCATOR_LINK +","+
                        PROP_34_LOCATOR_SHOP      +","+
						PROP_50_CAMPAIGN_PATHING  +","+
                        EVENTS;
    s.linkTrackEvents = EVENT_2_GMAP_LOCATOR;   // Shop Found Event
    s.events          = EVENT_2_GMAP_LOCATOR;   // Shop Found Event
    s.eVar32          = clickVia;               // EVAR_32_GMAP_LOCATOR_LINK
    s.prop34          = shopName.toLowerCase(); // PROP_34_LOCATOR_SHOP
	s.prop50          = s.prop34;               // PROP_50_CAMPAIGN_PATHING
    s.tl(obj,'o',s.eVar32);
}
function trackGMapDriving(obj,direction,locatorDriving)
{
    s.linkTrackVars   = EVAR_6_ONSITE_TOOL       +","+
                        PROP_34_LOCATOR_SHOP     +","+
						PROP_50_CAMPAIGN_PATHING +","+
                        EVENTS;
    s.linkTrackEvents = EVENT_8_ONSITE_TOOL;       // Onsite Tool Event
    s.events          = EVENT_8_ONSITE_TOOL;       // Onsite Tool Event
    s.eVar6           = locatorDriving;            // EVAR_6_ONSITE_TOOL
    s.prop34          = direction;                 // PROP_34_LOCATOR_SHOP
	s.prop50          = s.prop34; // PROP_50_CAMPAIGN_PATHING
    s.tl(obj,'o',s.eVar6);
}
function trackGMapProductWarranty(obj,productName)
{
    s.linkTrackVars = PROP_33_LOCATOR_PRODUCT +","+
					  PROP_50_CAMPAIGN_PATHING;
    s.prop33        = productName;               // PROP_33_LOCATOR_PRODUCT	
	s.prop50        = s.prop33; // PROP_50_CAMPAIGN_PATHING
    s.tl(obj,'o',productName);  
}
/* ################################################## Hub Page Tracking. End ]] */


/* [[ Shopping Check-Out-Process. Start ################################################## */ 
function trackCop_AddProduct(obj,jvarSProducts,jvarCartItemCount)
{
    var cartOpen = "";
    
    if(isParamValid(jvarCartItemCount))
    {
        if(jvarCartItemCount == 1) // first item in cart, means cart freshly open.
            cartOpen = ","+ EVENT_0_SC_OPEN;
    }

    s.linkTrackVars   = EVENTS +","+ PRODUCTS +","+
					    PROP_50_CAMPAIGN_PATHING;   // For s.prop50 campaign pathing will stop here(model page). Will not track s.prop50 on other ecom functions.
    s.linkTrackEvents = EVENT_0_SC_ADD + cartOpen;  // scAdd, scOpen
    s.events          = EVENT_0_SC_ADD + cartOpen;  // scAdd, scOpen
    s.products        = jvarSProducts;              // s.products="<n-1>;<n>,<n2-1>;<n2>"; where n = product SKU	
	s.prop50          = s.pageName +":Add to Cart"; // PROP_50_CAMPAIGN_PATHING
    s.tl(obj,'o',EVENT_0_SC_ADD+":Add Product");
}
function trackCop_PurchaseBackOrderProduct(obj,jvarBOProducts)
{
    s.linkTrackVars   = EVENTS +","+ PRODUCTS;
    s.linkTrackEvents = EVENT_9_BACKORDER_PURCHASED; // event9 = BackOrder - Purchased
    s.events          = EVENT_9_BACKORDER_PURCHASED; // event9 = BackOrder - Purchased
    s.products        = jvarBOProducts;  // s.products="<n-1>;<n>,<n2-1>;<n2>"; where n = product SKU
    s.tl(true,'o',EVENT_9_BACKORDER_PURCHASED+":BackOrder Product Purchased"); 
}
function trackCop_PreAuth(jvarBoolean) //TRUE = PreAuth success, FALSE = PreAuth fail
{
	if(jvarBoolean)
	{
		s.pageName = "sonystyle:COP:creditcardsecurepay:preauth:success";
		s.hier5	   = "home|sonystyle|COP|creditcardsecurepay|preauth:success";
		s.t();
	}
	else
	{
		s.pageName = "sonystyle:COP:creditcardsecurepay:preauth:fail";
		s.hier5	   = "home|sonystyle|COP|creditcardsecurepay|preauth:fail";
		s.t();
	}
}
/* ################################################## Shopping Check-Out-Process. End ]] */


/* [[ My Sony eNewsletter subscribe. Start ################################################## */
function trackMySony_eNewsletterUpdate(obj,jvarMemberId,jvarAction)
{    
    s.linkTrackVars   = EVAR_34_ENEWSLETTER_SIGNUP +","+
                        EVENTS;
    s.linkTrackEvents = EVENT_4_ENEWSLETTER_SUBSCRIBE;                    // event4 = eNewsletter Subscribe
    s.events          = EVENT_4_ENEWSLETTER_SUBSCRIBE +":"+ jvarMemberId; // event4:<Unique ID> = eNewsletter Subscribe
    s.eVar34          = jvarAction.toLowerCase();                         // format: "mysony:enewsletter:subscribe"
    s.tl(obj,'o',jvarAction);    
}
function trackeNewsletterType(obj,jvarTypes) // use semi-colon(;) as delimiter
{    
    var aryTypes = jvarTypes.split(";");
    
    for(var i = 0; i < aryTypes.length; i++)
    {
        if(aryTypes[i] != "")
        {        
            s.linkTrackVars = EVAR_36_ENEWSLETTER_TYPE;
            s.eVar36        = aryTypes[i]; // EVAR_36_ENEWSLETTER_TYPE
            s.tl(true,'o',s.eVar36);
        }
    }
}
/* ################################################## My Sony eNewsletter subscribe. End ]] */


/* [[ Support 2011. Start ################################################## */ 

function trackSupportElement(obj,elementName)
{
    s.linkTrackVars = PROP_29_SUPPORT_ELEMENTS +","+
				      PROP_50_CAMPAIGN_PATHING;
    s.prop29        = elementName; // PROP_29_SUPPORT_ELEMENTS
	s.prop50        = s.prop29;    // PROP_50_CAMPAIGN_PATHING
    s.tl(obj,'o',elementName);
}
function trackSupportHomePHF_View(jvarPosition,jvarTitle) //PHF = Product Hightlights Flash - In Support Landing Page
{
    var smallProduct = "Support.Home.ProductFlash." + jvarPosition + "." + jvarTitle + ".View";
    trackSupportElement("flash", smallProduct); // String "flash" is pass-in as object. If NULL it will be submitting all variables like page view.
    
    return smallProduct;
}
function trackSupportHomePHF_Visit(jvarPosition,jvarTitle) //PHF = Product Hightlights Flash - In Support Landing Page
{
    var bigProduct = "Support.Home.ProductFlash." + jvarPosition + "." + jvarTitle + ".Visit";
    trackSupportElement("flash", bigProduct); // String "flash" is pass-in as object. If NULL it will be submitting all variables like page view.
    
    return bigProduct;
}

function trackSupportProductSelector(obj,toolName,elementName,searchTerm)
{
    s.linkTrackVars   = EVAR_6_ONSITE_TOOL           +","+
                        PROP_29_SUPPORT_ELEMENTS     +","+
						PROP_6_INTERNAL_SEARCH_TERM  +","+
						PROP_50_CAMPAIGN_PATHING     +","+
                        EVENTS;
    s.linkTrackEvents = EVENT_8_ONSITE_TOOL; // Onsite Tool Event
    s.events          = EVENT_8_ONSITE_TOOL; // Onsite Tool Event
    s.eVar6           = toolName;            // EVAR_6_ONSITE_TOOL
    s.prop29          = elementName;         // PROP_29_SUPPORT_ELEMENTS
	s.prop6           = "";                  // PROP_6_INTERNAL_SEARCH_TERM
	s.prop50          = s.prop29;            // PROP_50_CAMPAIGN_PATHING
	
	//if(!isParamValid(searchTerm))
	if(searchTerm != null && searchTerm != "" && searchTerm != undefined)
		s.prop6 = searchTerm; // PROP_6_INTERNAL_SEARCH_TERM
	
    s.tl(obj,'o',s.eVar6);
}

function trackSupportModelPageSearch(obj,toolName,elementName,searchTerm)
{
	trackSupportProductSelector(obj,toolName,elementName,searchTerm);
}

/* ################################################## Support 2011. End ]] */

//Track search term when serach result is zero records. PARAM "searchTerm" must be pageName+searchTerm for meaningful report
function trackSearchNoResult(obj,searchTerm)
{
    s.linkTrackVars = PROP_48_INTERNAL_SEARCH_TERM_NO_RESULTS;
    s.prop48        = searchTerm; //PROP_48_INTERNAL_SEARCH_TERM_NO_RESULTS
    s.tl(true,'o',searchTerm);
}

//Track linkTracking for product track only.
function trackProductElement(obj,producttag)
{
    s.linkTrackVars = PROP_18_PRODUCT_ELEMENTS +","+
					  PROP_50_CAMPAIGN_PATHING;
    s.prop18        = producttag; // PROP_18_PRODUCT_ELEMENTS
	s.prop50        = s.prop18;   // PROP_50_CAMPAIGN_PATHING
    s.tl(obj,'o',producttag);
}

//Track custom Exit link
function trackExitLink(jvarURL)
{
	var exitLinkName = s.pageName +":exit:"+ jvarURL.toLowerCase();
	
	s.linkTrackVars = PROP_50_CAMPAIGN_PATHING;
	s.prop50        = exitLinkName; // PROP_50_CAMPAIGN_PATHING

	s.tl(true,'e',exitLinkName);
}

//Get the deespest category for Product related page where s.prop 11,12,13 is avaibable.
function getDeepestCategory()
{
    var deepCategory = s.prop14;
        
    if(!isParamValid(deepCategory))
        deepCategory = s.prop13;
        
    if(!isParamValid(deepCategory))
        deepCategory = s.prop12;
    
    if(!isParamValid(deepCategory))
        deepCategory = s.prop11;
    
    if(!isParamValid(deepCategory))
        deepCategory = s.pageName; // if all fails, concat the pagename for tracing/debugging.
    
    return deepCategory;
}

function customProductTabTracker(obj,currentTab,newTab)
{
    var oldTab = currentTab;
    if(currentTab == "features"){
        oldTab = "Features";
    } else if(currentTab == "specifications"){
        oldTab = "Specs";
    } else if(currentTab == "technology"){
        oldTab = "Tech";
    } else if(currentTab == "accessories"){
        oldTab = "Accy";
    } else if(currentTab == "articles"){
        oldTab = "Articles";
    } else if(currentTab == "promotion"){
        oldTab = "Promotions";
    }
    var pagename  = originalPageName.substring(0,originalPageName.lastIndexOf(oldTab))+newTab;
    var hierarchy = originalHier5.substring(0,originalHier5.lastIndexOf(oldTab))+newTab;
    var s = s_gi(s_account);
    s.pageName = pagename;
    s.hier5 = hierarchy;
    void(s.t());
}
function isParamValid(jvarObj) // test for null, empty string and undefined parameter
{
    var UNDEFINED;
    var isValid = false;
    
    if(jvarObj != null && jvarObj != "" && jvarObj != UNDEFINED)
        isValid = true;

    return isValid;
}

//Extracted from http://www.w3schools.com/JS/js_cookies.asp
function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
  {
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}


s.doPlugins = s_doPlugins;
/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here. */

/*
 * Plugin: getQueryParam 2.1 - return query string parameter(s)
 */
s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t)v+=v?d+t:t;p=p.subs"
+"tring(i==p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");

/*
 * Plugin: Set variable to value only once per time priod:
 *         (Min, Hour, Day, Month, Year)
 *         in the specified timezone (hour offset from GMT)
 */
s.vp_setOncePer=new Function("vs","v","period","tzOffs",
"var s=this;if(v){var n=s.dt(tzOffs,0),t,st=s.vh_gt(vs,v);st=st?st:0;"
+"if(!s.vh_s(vs,v))v='';else if(st){t=s.dt(tzOffs,st);var min=n.getMi"
+"nutes()==t.getMinutes(),hour=n.getHours()==t.getHours(),day=n.getDa"
+"te()==t.getDate(),mon=n.getMonth()==t.getMonth(),year=n.getYear()=="
+"t.getYear();period=period.toLowerCase();if(period=='ever'||(year&&("
+"period=='year'||(mon&&(period=='month'||(day&&(period=='day'||(hour"
+"&&(period=='hour'||(min&&period=='min'))))))))))v='';}}s.vpr(vs,v)");

/*
 * Plugin Utility: apl v1.1
 */
s.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");

/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin Utilities v3.0 (Required For All Plugins)
 */
 
// Comment of because this function is repeated (different version but same functionality)
/*s.vpr=new Function("vs","v",
"var s=this,k=vs.substring(0,2)=='s_'?vs.substring(2):vs;s['vpv_'+k]="
+"v;s['vpm_'+k]=1");*/

s.dt=new Function("tz","t",
"var d=new Date;if(t)d.setTime(t);d=new Date(d.getTime()+(d.getTimezo"
+"neOffset()*60*1000));return new Date(Math.floor(d.getTime()+(tz*60*"
+"60*1000)))");
s.vh_gt=new Function("k","v",
"var s=this,vh='|'+s.c_r('s_vh_'+k),vi=vh.indexOf('|'+v+'='),ti=vi<0?"
+"vi:vi+2+v.length,pi=vh.indexOf('|',ti),t=ti<0?'':vh.substring(ti,pi"
+"<0?vh.length:pi);return t");
s.vh_gl=new Function("k",
"var s=this,vh=s.c_r('s_vh_'+k),e=vh?vh.indexOf('='):0;return vh?(vh."
+"substring(0,e?e:vh.length)):''");
s.vh_s=new Function("k","v",
"if(k&&v){var s=this,e=new Date,st=e.getTime(),y=e.getYear(),c='s_vh_"
+"'+k,vh='|'+s.c_r(c)+'|',t=s.vh_gt(k,v);e.setYear((y<1900?y+1900:y)+"
+"5);if(t)vh=s.rep(vh,'|'+v+'='+t+'|','|');if(vh.substring(0,1)=='|')"
+"vh=vh.substring(1);if(vh.substring(vh.length-1,vh.length)=='|')vh=v"
+"h.substring(0,vh.length-1);vh=v+'=[PCC]'+(vh?'|'+vh:'');s.c_w(c,vh,"
+"e);if(s.vh_gt(k,v)!='[PCC]')return 0;vh=s.rep(vh,'[PCC]',st);s.c_w("
+"c,vh,e)}return 1");

/*
 * Plugin: getValOnce 0.2 - get a value once per session or number of days
 */
s.getValOnce=new Function("v","c","e",""
+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");

/*
 * Plugin: Form Analysis 2.1 (Success, Error, Abandonment)
 */
s.setupFormAnalysis=new Function(""
+"var s=this;if(!s.fa){s.fa=new Object;var f=s.fa;f.ol=s.wd.onload;s."
+"wd.onload=s.faol;f.uc=s.useCommerce;f.vu=s.varUsed;f.vl=f.uc?s.even"
+"tList:'';f.tfl=s.trackFormList;f.fl=s.formList;f.va=new Array('',''"
+",'','')}");
s.sendFormEvent=new Function("t","pn","fn","en",""
+"var s=this,f=s.fa;t=t=='s'?t:'e';f.va[0]=pn;f.va[1]=fn;f.va[3]=t=='"
+"s'?'Success':en;s.fasl(t);f.va[1]='';f.va[3]='';");
s.faol=new Function("e",""
+"var s=s_c_il["+s._in+"],f=s.fa,r=true,fo,fn,i,en,t,tf;if(!e)e=s.wd."
+"event;f.os=new Array;if(f.ol)r=f.ol(e);if(s.d.forms&&s.d.forms.leng"
+"th>0){for(i=s.d.forms.length-1;i>=0;i--){fo=s.d.forms[i];fn=fo.name"
+";tf=f.tfl&&s.pt(f.fl,',','ee',fn)||!f.tfl&&!s.pt(f.fl,',','ee',fn);"
+"if(tf){f.os[fn]=fo.onsubmit;fo.onsubmit=s.faos;f.va[1]=fn;f.va[3]='"
+"No Data Entered';for(en=0;en<fo.elements.length;en++){el=fo.element"
+"s[en];t=el.type;if(t&&t.toUpperCase){t=t.toUpperCase();var md=el.on"
+"mousedown,kd=el.onkeydown,omd=md?md.toString():'',okd=kd?kd.toStrin"
+"g():'';if(omd.indexOf('.fam(')<0&&okd.indexOf('.fam(')<0){el.s_famd"
+"=md;el.s_fakd=kd;el.onmousedown=s.fam;el.onkeydown=s.fam}}}}}f.ul=s"
+".wd.onunload;s.wd.onunload=s.fasl;}return r;");
s.faos=new Function("e",""
+"var s=s_c_il["+s._in+"],f=s.fa,su;if(!e)e=s.wd.event;if(f.vu){s[f.v"
+"u]='';f.va[1]='';f.va[3]='';}su=f.os[this.name];return su?su(e):tru"
+"e;");
s.fasl=new Function("e",""
+"var s=s_c_il["+s._in+"],f=s.fa,a=f.va,l=s.wd.location,ip=s.trackPag"
+"eName,p=s.pageName;if(a[1]!=''&&a[3]!=''){a[0]=!p&&ip?l.host+l.path"
+"name:a[0]?a[0]:p;if(!f.uc&&a[3]!='No Data Entered'){if(e=='e')a[2]="
+"'Error';else if(e=='s')a[2]='Success';else a[2]='Abandon'}else a[2]"
+"='';var tp=ip?a[0]+':':'',t3=e!='s'?':('+a[3]+')':'',ym=!f.uc&&a[3]"
+"!='No Data Entered'?tp+a[1]+':'+a[2]+t3:tp+a[1]+t3,ltv=s.linkTrackV"
+"ars,lte=s.linkTrackEvents,up=s.usePlugins;if(f.uc){s.linkTrackVars="
+"ltv=='None'?f.vu+',events':ltv+',events,'+f.vu;s.linkTrackEvents=lt"
+"e=='None'?f.vl:lte+','+f.vl;f.cnt=-1;if(e=='e')s.events=s.pt(f.vl,'"
+",','fage',2);else if(e=='s')s.events=s.pt(f.vl,',','fage',1);else s"
+".events=s.pt(f.vl,',','fage',0)}else{s.linkTrackVars=ltv=='None'?f."
+"vu:ltv+','+f.vu}s[f.vu]=ym;s.usePlugins=false;var faLink=new Object"
+"();faLink.href='#';s.tl(faLink,'o','Form Analysis');s[f.vu]='';s.us"
+"ePlugins=up}return f.ul&&e!='e'&&e!='s'?f.ul(e):true;");
s.fam=new Function("e",""
+"var s=s_c_il["+s._in+"],f=s.fa;if(!e) e=s.wd.event;var o=s.trackLas"
+"tChanged,et=e.type.toUpperCase(),t=this.type.toUpperCase(),fn=this."
+"form.name,en=this.name,sc=false;if(document.layers){kp=e.which;b=e."
+"which}else{kp=e.keyCode;b=e.button}et=et=='MOUSEDOWN'?1:et=='KEYDOW"
+"N'?2:et;if(f.ce!=en||f.cf!=fn){if(et==1&&b!=2&&'BUTTONSUBMITRESETIM"
+"AGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=e"
+"n;sc=true}else if(et==1&&b==2&&'TEXTAREAPASSWORDFILE'.indexOf(t)>-1"
+"){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==2&&kp!=9&&kp!=13){f.va["
+"1]=fn;f.va[3]=en;sc=true}if(sc){nface=en;nfacf=fn}}if(et==1&&this.s"
+"_famd)return this.s_famd(e);if(et==2&&this.s_fakd)return this.s_fak"
+"d(e);");
s.ee=new Function("e","n",""
+"return n&&n.toLowerCase?e.toLowerCase()==n.toLowerCase():false;");
s.fage=new Function("e","a",""
+"var s=this,f=s.fa,x=f.cnt;x=x?x+1:1;f.cnt=x;return x==a?e:'';");

/*
* Partner Plugin: DFA Check 0.8 - Restrict DFA calls to once a visit,
* per report suite, per click through. Used in conjunction with VISTA
*/
s.partnerDFACheck=new Function("c","src","p",""
+"var s=this,dl=',',cr,nc,q,g,i,j,k,fnd,v=1,t=new Date,cn=0,ca=new Ar"
+"ray,aa=new Array,cs=new Array;t.setTime(t.getTime()+1800000);cr=s.c"
+"_r(c);if(cr){v=0;}ca=s.split(cr,dl);aa=s.split(s.un,dl);for(i=0;i<a"
+"a.length;i++){fnd=0;for(j=0;j<ca.length;j++){if(aa[i]==ca[j]){fnd=1"
+";}}if(!fnd){cs[cn]=aa[i];cn++;}}if(cs.length){for(k=0;k<cs.length;k"
+"++){nc=(nc?nc+dl:'')+cs[k];}cr=(cr?cr+dl:'')+nc;s.vpr(p,nc);v=1;}q="
+"s.wd.location.search.toLowerCase();q=s.repl(q,'?','&');g=q.indexOf("
+"'&'+src.toLowerCase()+'=');if(g>-1){s.vpr(p,cr);v=1;}if(!s.c_w(c,cr"
+",t)){s.c_w(c,cr,0);}if(!s.c_r(c)){v=0;}if(v<1){s.vpr('variableProvi"
+"der','');}");

/*
 * Utility Function: vpr - set the variable vs with value v
 */
s.vpr=new Function("vs","v",
"if(typeof(v)!='undefined'){var s=this; eval('s.'+vs+'=\"'+v+'\"')}");

/* Plugin Utility: Replace v1.0
 */
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
 * Partner Plugin: Eyeblaster Check 0.3 
 */
if(window.location.hostname.indexOf("sony.com.sg")>-1) {
	s.maxDelay=750
	s.loadModule("Integrate")
	s.Integrate.onLoad=function(s,m){
	s.Integrate.add("Eyeblaster_ACM")

	s.Integrate.Eyeblaster_ACM.aID=38047
	s.Integrate.Eyeblaster_ACM.cID=50017
	s.Integrate.Eyeblaster_ACM.adVar="eVar47"

	s.Integrate.Eyeblaster_ACM.get("http://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&vn=omn&activityID=[cID]&advID=[aID]&var=[VAR]&rnd=[RAND]")

	s.Integrate.Eyeblaster_ACM.setVars=function(s,p){
		var
			at=p.lastImpTime,
			a1=p.lastImpSId,
			a2=p.lastImpPId,
			a3=p.lastImpId,
			bt=p.lastClkTime,
			b1=p.lastClkSId,
			b2=p.lastClkPId,
			b3=p.lastClkId;

	if(((at&&a1&&a2&&a3)||(bt&&b1&&b2&&b3))&&!p.errorCode)s[p.adVar]="EB_ACM:"+(at?at:0)+":"+(a1?a1:0)+":"+(a2?a2:0)+":"+(a3?a3:0)+":"+(bt?bt:0)+":"+(b1?b1:0)+":"+(b2?b2:0)+":"+(b3?b3:0)
		}
	}
}

/* WARNING: Changing the visitor namespace will cause drastic changes
to how your visitor data is collected.  Changes should only be made
when instructed to do so by your account manager.*/
s.visitorNamespace = "sonypanasia";
s.trackingServer   = "sonypanasia.112.2o7.net";
//s.dc               = "112"; obsolete after H.22



/****************************** MODULES *****************************/
/* Module: Integrate */
s.m_Integrate_c="var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!s.wd[o])s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.disable=0;p.get"
+"=m.get;p.delay=m.delay;p.ready=m.ready;p.beacon=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){p=m[m.l[i]"
+"];if(p&&!p.disable&&p[f]){if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._fu=function"
+"(p,u){var m=this,s=m.s,x,v,tm=new Date;if(u.toLowerCase().substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()*1000000000000"
+"0):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000)%10;for(x in p)if(x&&x.substring(0,1)!='_'&&(!Object||!Object.prototype||!Object.prototype[x])){v=''+p[x];if(v==p[x]||parseFloat(v)==p[x])u="
+"s.rep(u,'['+x+']',s.rep(escape(v),'+','%2B'))}return u};m.get=function(u,v){var p=this,m=p._m;if(!p.disable){if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.loadModule("
+"'Integrate:'+v,m._fu(p,u),0,1,p._n)}};m.delay=function(){var p=this;if(p._d<=0)p._d=1};m.ready=function(){var p=this,m=p._m;p._d=0;if(!p.disable)m.s.dlt()};m._d=function(){var m=this,i,p;for(i=0;i<"
+"m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&&p._d>0)return 1}return 0};m._x=function(d,n){var p=this[n],x;if(!p.disable){for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))p[x]=d["
+"x];p._d--}};m.beacon=function(u){var p=this,m=p._m,s=m.s,imn='s_i_'+m._in+'_Integrate_'+p._n+'_'+p._c,im;if(!p.disable&&s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){p._c++;i"
+"m=s.wd[imn]=new Image;im.src=m._fu(p,u)}};m.script=function(u){var p=this,m=p._m;if(!p.disable)m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)";
s.m_i("Integrate");


/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s._c='s_c';s.wd=window;if(!s.wd.s_c_in){s.wd.s_c_il=new Array;s.wd.s_c_in=0;}s._il=s.wd.s_c_il;s._in=s.wd.s_c_in;s._il[s._in]=s;s.wd.s_c_in++;s"
+".an=s_an;s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=func"
+"tion(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexO"
+"f(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3)"
+"return encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%"
+"16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}return y}else{x=s.rep(escape(''+x),'+','%2B');if(c&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if"
+"(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}}return x};s.epa=function(x){var s=this;if(x){x=''+x;return s.em==3?de"
+"codeURIComponent(x):unescape(s.rep(x,'+',' '))}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.l"
+"ength;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.f"
+"sf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c="
+"s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)=='string')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}"
+"c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var"
+" s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('"
+".',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s."
+"epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NON"
+"E'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()"
+"+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i]."
+"o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv"
+">=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,"
+"'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s"
+".t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs="
+"p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,"
+"l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,0,r.t,r.u)}};s.br=function(id,rs){var s=this;if(s.disableBufferedRequests||!s.c_w('s_br',rs))s.brl=rs};s.flushBufferedReques"
+"ts=function(){this.fbr(0)};s.fbr=function(id){var s=this,br=s.c_r('s_br');if(!br)br=s.brl;if(br){if(!s.disableBufferedRequests)s.c_w('s_br','');s.mr(0,0,br)}s.brl=0};s.mr=function(sess,q,rs,id,ta,u"
+"){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if"
+"(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s"
+".ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/H.22.1/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047);if(id){s.br(id,rs);return}}if(s.d.images&&s.apv>=3"
+"&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+']."
+"mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e',"
+"'this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if((!ta||ta=='_self'||ta="
+"='_top'||(s.wd.name&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0"
+" alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl="
+"function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,l,a,b='',c='',t;if(x){y=''+x;i=y.indexOf('?');if(i>0){a=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase()"
+";i=0;if(h.substring(0,7)=='http://')i+=7;else if(h.substring(0,8)=='https://')i+=8;h=h.substring(i);i=h.indexOf(\"/\");if(i>0){h=h.substring(0,i);if(h.indexOf('google')>=0){a=s.sp(a,'&');if(a.lengt"
+"h>1){l=',q,ie,start,search_key,word,kw,cd,';for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c){y+='?'+b+'&'"
+"+c;if(''+x!=y)x=y}}}}}}return x};s.hav=function(){var s=this,qs='',fv=s.linkTrackVars,fe=s.linkTrackEvents,mn,i;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].tr"
+"ackVars;fe=s[mn].trackEvents}}fv=fv?fv+','+s.vl_l+','+s.vl_l2:'';for(i=0;i<s.va_t.length;i++){var k=s.va_t[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(v&&k!='linkName'&&k!='l"
+"inkType'){if(s.pe||s.lnk||s.eo){if(fv&&(','+fv+',').indexOf(','+k+',')<0)v='';if(k=='events'&&fe)v=s.fs(v,fe)}if(v){if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pa"
+"geURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigra"
+"tionServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em="
+"=2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode"
+"')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j"
+"';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp'"
+";else if(k=='plugins')q='p';else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+q+'='+(k.substring(0,3)"
+"!='pev'?s.ape(v):v)}}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t"
+")return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExt"
+"ernalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)"
+"!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t"
+"();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Functi"
+"on(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.inde"
+"xOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'"
+"')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE'"
+")t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p"
+"=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' '"
+",'');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100"
+");o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&"
+"s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,'"
+",','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[u"
+"n]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Ob"
+"ject.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq"
+"[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o"
+".onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie|"
+"|!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=func"
+"tion(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e)"
+")return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.subst"
+"ring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowe"
+"rCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};"
+"s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_"
+"l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Ar"
+"ray('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.le"
+"ngth;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0"
+";if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf("
+"\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl."
+"length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexO"
+"f('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadMo"
+"dule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else "
+"g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],"
+"o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!"
+"o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javas"
+"cript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,"
+"f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.vo1=function(t,a){if(a[t]"
+"||a['!'+t])this[t]=a[t]};s.vo2=function(t,a){if(!a[t]){a[t]=this[t];if(!a[t])a['!'+t]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.d"
+"ll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.d"
+"l=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.pt(s.vl_g,',','vo2',vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.t=fun"
+"ction(vo,id){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate("
+")+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Objec"
+"t;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1'"
+";if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try"
+"{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c="
+"screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWid"
+"th;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp="
+"tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.f"
+"l(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=c"
+"t;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.pt(s.vl_g,',','vo2',vb);s.pt(s.vl_g,',','vo1',vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer"
+";if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk;if(!o)return '';var p=s.pageName,w=1,t=s.ot(o)"
+",n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';t=s.ot(o);n=s.oid(o);x=o.s_oidt}oc=o.onclick?''+o.onclick:''"
+";if((oc.indexOf(\"s_gs(\")>=0&&oc.indexOf(\".s_oc(\")<0)||oc.indexOf(\".tl(\")>=0)return ''}if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName"
+";t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l))q+='&pe=lnk_'+(t=='d'||t=='e'?s.ape(t):'o')+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');else trk=0;if(s.trackInlineStats){if(!p){p="
+"s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot="
+"'+s.ape(t)+(i?'&oi='+i:'')}}if(!trk&&!qs)return '';s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,id,ta);qs='';s.m_m('t');if(s.p_r)s.p_r("
+");s.referrer=''}s.sq(qs);}else{s.dl(vo);}if(vo)s.pt(s.vl_g,',','vo1',vb);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_link"
+"Name=s.wd.s_linkType='';if(!id&&!s.tc){s.tc=1;s.flushBufferedRequests()}return code};s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};if(pg){s.wd.s_co=function(o)"
+"{var s=s_gi(\"_\",1,1);return s.co(o)};s.wd.s_gs=function(un){var s=s_gi(un,1,1);return s.t()};s.wd.s_dc=function(un){var s=s_gi(un,1);return s.t()}}s.ssl=(s.wd.location.protocol.toLowerCase().inde"
+"xOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var ap"
+"n=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isope"
+"ra=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv="
+"parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=="
+"'%U0100'?1:0))}s.sa(un);s.vl_l='dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLi"
+"fetime,pageName,pageURL,referrer,currencyCode';s.va_l=s.sp(s.vl_l,',');s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,products,linkName,"
+"linkType';for(var n=1;n<76;n++)s.vl_t+=',prop'+n+',eVar'+n+',hier'+n+',list'+n;s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browse"
+"rHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests"
+",mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadF"
+"ileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,_1_referrer';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);if(!ss)s.wds()",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,s;if(un){un=un.toLowerCase();if(l)for(i=0;i<l.length;i++){s=l[i];if(!s._c||s._c=='s_c'){if(s.oun==un)return s;else if(s.fs&&s.sa&&s.fs(s.oun,un)){s.sa(un);return s}}}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a>=5&&v.indexOf('Opera')<0&&u.indexOf('Opera')<0){w.s_c=new Function("un","pg","ss","var s=this;"+c);return new s_c(un,pg,ss)}else s=new Function("un","pg","ss","var s=new Object;"+s_ft(c)+";return s");return s(un,pg,ss)}


