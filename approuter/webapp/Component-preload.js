//@ui5-bundle ui5/Component-preload.js
sap.ui.require.preload({
	"ui5/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent"],function(n){"use strict";return n.extend("de.jlabs.demo.Component",{metadata:{interfaces:["sap.ui.core.IAsyncContentCreation"],manifest:"json"},init:function(){n.prototype.init.apply(this,arguments)}})});
},
	"ui5/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"],function(e,t){"use strict";return e.extend("ui5.controller.App",{incrementBy1:function(){let e=this.getView().byId("counter");let t=parseInt(e.getText());let n=t+1;e.setText(n)},onInit:function(){let e=this;let t={url:"/user-api/currentUser",method:"GET"};jQuery.ajax(t).done(function(t){let n=JSON.parse(t);let r=n.firstName;e.getView().byId("appPanel").setHeaderText(`Hello, ${r}!`)})}})});
},
	"ui5/manifest.json":'{"sap.app":{"id":"ui5","applicationVersion":{"version":"1.0.0"},"dataSources":{"youTubeAPI":{"uri":"/youTubeURL/youtube/v3/playlistItems?part=contentDetails%2Csnippet&playlistId=PL6RpkC85SLQBM78mD6AiJ1vKlSB7OWtUz&key=apiKey","type":"JSON"}}},"sap.ui5":{"rootView":{"viewName":"de.jlabs.demo.view.App","type":"XML","id":"app"},"models":{"youTubeModel":{"dataSource":"youTubeAPI"}}}}',
	"ui5/view/App.view.xml":'<mvc:View\r\n\txmlns:mvc="sap.ui.core.mvc"\r\n\txmlns="sap.m"\r\n\tcontrollerName="de.jlabs.demo.controller.App"><App><pages><Page title="2 Minutes of SAPUI5"><content><Panel\r\n\t\t\t\t\t\tid="appPanel"\r\n\t\t\t\t\t\theaderText="Hello, Dev!"><content><Button\r\n\t\t\t\t\t\t\t\ttext="Counter Button"\r\n\t\t\t\t\t\t\t\tpress=".incrementBy1"/><Text id="counter" text="0"/><List\r\n\t\t\t\t\t\t\t\tid="episodeOverview"\r\n\t\t\t\t\t\t\t\theaderText="{youTubeModel>/items/1/snippet/channelTitle}"\r\n\t\t\t\t\t\t\t\titems="{youTubeModel>/items}"><items><StandardListItem \r\n\t\t\t\t\t\t\t\t\t\ttitle="{youTubeModel>snippet/title}"\r\n\t\t\t\t\t\t\t\t\t\tdescription="{youTubeModel>snippet/publishedAt}"\r\n\t\t\t\t\t\t\t\t\t\t/></items></List></content></Panel></content></Page></pages></App></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map
