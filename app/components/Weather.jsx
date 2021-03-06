var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');


var Weather = React.createClass({
    checkWeather: function(newProps) {
        var location = newProps.location.query.location;
        if (location && location.length) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;
        this.setState({
            isLoading: true,
            errorMsg: undefined,
            location: undefined,
            temp: undefined
        });
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (e) {
            that.setState({
                isLoading: false,
                errorMsg: e.message
            });
        });

    },
    componentDidMount: function () {
        this.checkWeather(this.props);
    },
    componentWillReceiveProps: function (newProps) {
        this.checkWeather(newProps);
    },
    render: function () {
        var {isLoading, temp, location, errorMsg} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        function renderError() {
            if (typeof errorMsg === 'string') {
                return (
                    <ErrorModal msg={errorMsg}/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;