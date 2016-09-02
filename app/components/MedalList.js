var React = require('react');

var MedalParser = require('./../MedalParser');
var SortUtils = require('./../SortUtils');

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
        this.setState({medalTally: SortUtils.sortDesc(parsedData, ['Gold', 'Silver', 'Bronze'])});
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
                    <div className='col-md-12 title'>
                        <div className='row'>
                            <div className='col-xs-6'><h3>Country</h3></div>
                            <div className='col-xs-2'><h3>Gold</h3></div>
                            <div className='col-xs-2'><h3>Silver</h3></div>
                            <div className='col-xs-2'><h3>Bronze</h3></div>
                        </div>
                    </div>
                    {
                        medalTallyList.map(function(medalData) {
                            return <MedalInfo country={medalData.Country}
                                        gold={medalData.Gold}
                                        silver={medalData.Silver}
                                        bronze={medalData.Bronze}
                                    />
                        })
                    }
                </section>
            </div>
        )
    }
});

module.exports = MedalList;
