sabio.services.merchant = {};


sabio.services.merchant.create = function (formData, onSuccess, onError) {
	var url = "/api/merchant";//pulled RoutePrefix and Route from API controller, uset in REST client
	var settings = {
		cache: false
		, contentType: "application/x-www-form-urlencoded; charset=UTF-8"
		, data: formData
		, dataType: "json"
		, success: onSuccess
		, error: onError
		, type: "POST"
	};
	$.ajax(url, settings);

};

sabio.services.merchant.update = function (formData, merchantId, onSuccess, onError) {
	var url = "/api/merchant/" + merchantId;//pulled RoutePrefix and Route from API controller, used in REST client
	var settings = {
		cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: formData
        , dataType: "json"
        , success: onSuccess
		, error: onError
        , type: "PUT"
	};
	$.ajax(url, settings);
};

sabio.services.merchant.adminSelect = function (onSuccess, onError) {
    var url = "/api/admin/merchant"
    var settings = {
        cache: false
                , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
                , data: null
                , dataType: "json"
                , success: onSuccess
                , error: onError
                , type: "GET"
    };
    $.ajax(url, settings);
}

sabio.services.merchant.findConfirmedEvents = function (merchantId, onSuccess, onError) {
    var url = "/api/events/merchant/confirmed/" + merchantId;
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: null
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "GET"
    };
    $.ajax(url, settings);
}
sabio.services.merchant.confirmedEventsNearby = function (formData, onSuccess, onError) {
    var url = "/api/events/merchant/local"
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: formData
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "GET"
    };
    $.ajax(url, settings);
}
