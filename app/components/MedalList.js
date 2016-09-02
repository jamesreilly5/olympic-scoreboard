var React = require('react');

var MedalParser = require('./../MedalParser');
var SortUtils = require('./../SortUtils');
var Enums = require('./../config/Enums');

var Spinner = require('./Spinner');
var MedalInfo = require('./MedalInfo');

var MedalList = React.createClass({

    getInitialState: function(){
		return { data: { medalTally: [] } };
	},

	componentWillMount: function() {
        var validResponseData = require('./../../specs/fixtures/athletesBig.json');
        this.handleDataLoadSuccess(validResponseData);
	},

    handleDataLoadSuccess: function(data) {
        var parsedData = MedalParser.parse(data);
        this.setState({medalTally: SortUtils.sortDesc(parsedData, ['gold', 'silver', 'bronze'])});
    },

    render: function() {
        if (!this.state) { return <Spinner /> }

        var medalTallyList = this.state.medalTally;

        return (
            <div clasName='container'>
                <section className='hero jumbotron'>
                    <div className='hero-panel'>
                        <h1 className='text-center'>2008 Beijing Olympics</h1>
                        <h2 className='text-center'>Final results</h2>
                    </div>
                </section>

                <section className='container medal-list'>
                    <div className='row'>
                        <div className='col-xs-offset-1 col-xs-3'>
                            <h3 className='hidden-xs'>Country</h3>
                        </div>
                        <div className='col-xs-2 coin gold'>
                            <h3 className='hidden-xs medal-name'>{Enums.MEDALS.GOLD}</h3><h3 className='visible-xs'>G</h3>
                        </div>
                        <div className='col-xs-2 coin silver'>
                            <h3 className='hidden-xs medal-name'>{Enums.MEDALS.SILVER}</h3><h3 className='visible-xs'>S</h3>
                        </div>
                        <div className='col-xs-2 coin bronze'>
                            <h3 className='hidden-xs medal-name'>{Enums.MEDALS.BRONZE}</h3><h3 className='visible-xs'>B</h3>
                        </div>
                        <div className='col-xs-2'>
                            <h3 className='hidden-xs'>Total</h3><h3 className='visible-xs'>T</h3>
                        </div>
                    </div>
                    {
                        medalTallyList.map(function(medalData, i) {
                            return <MedalInfo key={i}
                                        position={i + 1}
                                        country={medalData.country}
                                        gold={medalData.gold}
                                        silver={medalData.silver}
                                        bronze={medalData.bronze}
                                        total={medalData.total}
                                    />
                        })
                    }
                </section>
            </div>
        )
    }
});

module.exports = MedalList;
