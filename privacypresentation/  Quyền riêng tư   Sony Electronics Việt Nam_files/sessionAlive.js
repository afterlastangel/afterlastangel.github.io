jQuery(document).ready( function () {
	if (getExtranetUserLoggedIn()== "true") {
		setOnPageLoad();	
		setTimeout(keepSessionAlive, (refreshInterval*60*1000));
	} 
});

var maxDurationAlive;
var refreshInterval;
var aliveCounter;
var refreshURL;
var result;

function keepSessionAlive() {	
	aliveCounter = aliveCounter - 1;	
	 
	 jQuery.ajax({
	   	type: "POST",
	   	url: refreshURL,
	    data: "dummyReqId=" +aliveCounter,
	    dataType: "text",
	    async: true,
	   	success: function(data) {
			if(data == aliveCounter ) {
				if (aliveCounter >= 1) {
					setTimeout(keepSessionAlive, (refreshInterval*60*1000));
				}
			}
		},
		error: function(){
			result = "error";
		}
	});
}

function setOnPageLoad() {
	maxDurationAlive = 225;
	refreshInterval = 25;	
	aliveCounter = maxDurationAlive / refreshInterval;
	refreshURL = "/HPSessionAlive.jsp";
}
