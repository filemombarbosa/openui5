/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"sap/ui/demo/iconexplorer/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});
