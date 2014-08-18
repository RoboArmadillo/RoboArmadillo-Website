exports.page = function(req, res) {
	var query = req.param("page");
	res.render(query, { title: "RoboArmadillo" }, function(err, body) {
		if(err) {
			res.render('404', {});
		} else {
			res.end(body);
		}
	});
}
