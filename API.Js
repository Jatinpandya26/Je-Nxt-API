var unirest = require("unirest");

var req = unirest("GET", "https://jenxt.p.rapidapi.comhttps//github.com/Jatinpandya26");

req.headers({
	"pyjenxy": "0",
	"x-rapidapi-key": "SIGN-UP-FOR-KEY",
	"x-rapidapi-host": "jenxt.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
