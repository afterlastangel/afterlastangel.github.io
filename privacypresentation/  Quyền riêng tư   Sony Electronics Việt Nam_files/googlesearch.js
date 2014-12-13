function submitSearchForm() {
    var queryObj = document.getElementById('query');
    if (queryObj.value == '' || queryObj.value == searchText || queryObj.value == errorText) {
        queryObj.value = errorText;
    } else {
        document.searchForm.submit();	 
    }
}
function searchBlur(obj) {
    if (obj.value == '' || obj.value == errorText) {
        obj.value = searchText;
    }
}
function searchFocus(obj) {
    if (obj.value == searchText || obj.value == errorText) {
        obj.value = '';
    }
}
function initSearch() {
    if(document.getElementById('query')) {
        var queryObj = document.getElementById('query');
        queryObj.value = searchText;
    }
}
initSearch();