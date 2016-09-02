var React = require('react');

var MedalList = require('./components/MedalList');
var Footer = require('./components/Footer');

var App = React.createClass({

	render: function() {
		return (
			<div>
				<MedalList />
                <Footer />
			</div>
		)
	}

});

module.exports = App;
