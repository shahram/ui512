sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",

], function(
	Controller,
	JSONModel,
) {
	"use strict";

	return Controller.extend("ui5.controller.App", {
/*         onInit: function () {
            let oModel = new JSONModel(
                sap.ui.require.toUrl("de/jlabs/demo/Data.json")
            );
            this.getView().setModel(oModel);
        }, */
       incrementBy1: function() {
            let myTextElement = this.getView().byId("counter");
            let myNum = parseInt(myTextElement.getText());
            let myNewNum = myNum + 1;
            myTextElement.setText(myNewNum) 
        },
        onInit: function() {
            let controller = this;
            let reqSettings = {
                "url": "/user-api/currentUser",
                "method": "GET"
            }
            
            fetch("/user-api/currentUser")
                .then((res) => {
                    let userInfo = JSON.parse(res);
                    let userFirstName = userInfo.firstName;
                    controller.getView().byId("appPanel")
                        .setHeadrText(`Hello, ${userFirstName}`); 
                })
/*             jQuery.ajax(reqSettings)
                .done(function(response) {
                    let userInfo = JSON.parse(response);
                    let userFirstName = userInfo.firstName;
                    controller.getView().byId("appPanel")
                        .setHeaderText(`Hello, ${userFirstName}!`)
                }) */
        }
	});
});