var App = require('./../app/App.js');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

describe("App", function() {

    it("renders the text '2008 Beijing Results'", function() {
        var app = TestUtils.renderIntoDocument(React.createElement(App));
        expect(ReactDOM.findDOMNode(app).textContent).toContain('2008 Beijing Olympics');
    });

});
