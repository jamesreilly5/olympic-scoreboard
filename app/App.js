var React = require('react');

var Hero = require('./components/Hero');
var MedalList = require('./components/MedalList');
var Footer = require('./components/Footer');

var App = React.createClass({

	render: function() {
		return (
            <div clasName='container'>
                <Hero />
                <MedalList />
                <Footer />
            </div>
		)
	}

});

module.exports = App;
