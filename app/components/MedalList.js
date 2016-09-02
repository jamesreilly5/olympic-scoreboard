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
            <div clasName='container medal-list'>
                <section className='hero jumbotron'>
                    <h1 className='text-center'>2008 Beijing Results</h1>
                </section>

                <section className='container'>
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
