var React = require('react');

var Hero = React.createClass({
	render: function() {
		return (
            <section className='hero jumbotron'>
                <div className='hero-panel'>
                    <h1 className='text-center'>2008 Beijing Olympics</h1>
                    <h2 className='text-center'>Final results</h2>
                </div>
            </section>
		)
	}
});

module.exports = Hero;
