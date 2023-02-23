sap.ui.define([
	// "sap/ui/base/ManagedObject"
	"sap/ui/core/UIComponent"
], function(UIComponent) {
	"use strict";

	return UIComponent.extend("de.jlabs.demo.Component", {
		metadata: {
			"interfaces": [
				"sap.ui.core.IAsyncContentCreation"
			],
			manifest: "json"
/* 			"rootView": {
				"viewName": "de.jlabs.demo.view.App",
				"type": "XML",
				"id": "app"
			} */
		},
		init: function () {
			UIComponent.prototype.init.apply(
				this,
				arguments
			);
		}
	});
});