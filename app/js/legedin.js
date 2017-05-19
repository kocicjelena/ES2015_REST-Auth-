app.get('/auth/gitpage', authenticator.redirectToGit);

// This is the callback url that the user is redirected to after signing in
app.get(url.parse(config.oauth_callback).path, function(req, res) {
	authenticator.authenticate(req, res, function(err) {
		if (err) {
			console.log(err);
			res.sendStatus(401);
		} else {
			res.send("Authentication Successful");
		}
	});
});

// Start listening for requests
app.listen(config.port, function() {
	console.log("Listening on port " + config.port);
});