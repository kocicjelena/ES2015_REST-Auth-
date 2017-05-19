var OAuth = require('oauth').OAuth;
var config = require('./config');

// Create the oauth object for accessing Twitter
var oauth = new OAuth(
	config.oauth_callback
);

module.exports = {
	redirectToGit: function(req, res) {
		res.redirect(config.authorize_url);
	},
	authenticate: function(req, res) {
		
	}
};