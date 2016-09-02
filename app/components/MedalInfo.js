var React = require('react');

var MedalTally = React.createClass({

	render: function() {
		return (
            <div className='col-md-12'>
                <div className='row'>
                    <div className='col-md-6'>{this.props.country}</div>
                    <div className='col-md-2'>{this.props.gold}</div>
                    <div className='col-md-2'>{this.props.silver}</div>
                    <div className='col-md-2'>{this.props.bronze}</div>
                </div>
            </div>
		)
	}
});

module.exports = MedalTally;
