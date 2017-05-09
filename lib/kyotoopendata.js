// odp
var querySPARQL = function(q, callback) {
//	var baseurl = "https://sparql.odp.jig.jp/data/sparql";
	var baseurl = "https://sparql.city.kyoto.lg.jp/sparql/";
	var suffix = "&should-sponge=&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on";
	var url = baseurl + "?query=" + encodeURIComponent(q) + suffix;
	url += "&callback=" + getCallbackMethod(callback);
//	prompt(url);
	jsonp(url);
};
var queryItemSPARQL = function(uri, callback) {
	querySPARQL("select * { <" + uri + "> ?p ?o }", callback);
};
