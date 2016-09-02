var React = require('react');

var MedalTally = React.createClass({

	render: function() {
		return (
            <div className='row medal-info'>
                <div className='col-xs-6'>{this.props.country}</div>
                <div className='col-xs-2'>{this.props.gold}</div>
                <div className='col-xs-2'>{this.props.silver}</div>
                <div className='col-xs-2'>{this.props.bronze}</div>
            </div>
		)
	}
});

module.exports = MedalTally;
