const passport = require('passport');
const { JWTStrategy } = require('@sap/xssec');
const xsenv = require('@sap/xsenv');

passport.use(new JWTStrategy(xsenv.getServices({uaa: {tag: 'xsuaa'}}).uaa));

app.use(passport.initialize());
app.use(passport.authenticate('JWT', { session: false}));

/* sap.ui.define(["sap/ui/core/ComponentContainer"], 
function(ComponentContainer) {
    "use strict"

new ComponentContainer({
    name: "de.jlabs.demo",
    settings: {
        id: "app"
    },
    async: true
}).placeAt("content");
    XMLView.create({
        viewName: "de.jlabs.demo.view.App"
    }).then(function(oView) {
        oView.placeAt("content");
    });

    new Button({
        text: "Hello Jupiter"
    }).placeAt("content");
}); */