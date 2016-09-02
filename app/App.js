var React = require('react');

var MedalList = require('./components/MedalList');

var App = React.createClass({

	render: function() {
		return (
			<div>
				<MedalList />
			</div>
		)
	}

});

module.exports = App;
