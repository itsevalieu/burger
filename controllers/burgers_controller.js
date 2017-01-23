var express = require("express");
var burger = require("../models/burger.js");

var app = express();


//create the router for the app

module.exports = function(app) {
	app.get("/", function(request, response) {
		response.redirect("/index");
	});
	app.get("/index", function(request, response) {
		burger.selectAll(function(data) {
			var dataObject = {
				burgers: data
			};
			console.log(dataObject);
			response.render("index", dataObject);
		});
	});
};