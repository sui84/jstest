function getHostname(str) {
	try {
		var re = new RegExp('^(?:f|ht)tp(?:s)?\://([^/|:]+)', 'im');
		return str.match(re)[1].toString();
	} catch (e) {
		return null;
	}
};

function ispvt(hostname) {
	var re = /^((^[a-z0-9-_]+$)|((10|127)\.\d+|(172\.(1[6-9]|2[0-9]|3[01])|192\.168))\.\d+\.\d+)$/i;
	return re.test(hostname);
}

function check_email(a) {
	return a.match(/^.+@.+\.[A-Za-z]{2,6}$/)
}

function get_tabs(a) {
	try {
		//return g_isopera && typeof a.tabs.length == "undefined" ? a.tabs.getAll() : a.tabs
		return typeof a.tabs.length == "undefined" ? a.tabs.getAll() : a.tabs
	} catch (b) {
		return []
	}
}
function get_tabs_length(a) {
	try {
		return get_tabs(a).length
	} catch (b) {
		return 0
	}
}

function get_all_windows(a, b) {
	chrome.windows.getAll(a, b);
}

function refresh_windows() {
	get_all_windows({
		populate: true
	}, function (a) {
		for (var b = 0; b < a.length; b++)
			for (var c = 0; c < get_tabs_length(a[b]); c++) {
					var d = get_tabs(a[b])[c].url;
					//alert(d)
				}
	})
}

//setTimeout("refresh_windows();", 500);
