
/**
 * include this file right after including the jQuery libary.
 * include the desired prototype libary after this file has been included
 * resolves the issue regarding $() being shared across prototype and jQuery.
 * remember to check all jQuery plugins used for $() and $., and replace them with $jq() and $jq. respectively.
 */
jQuery.noConflict();
var $jq = jQuery;