var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About page</h1>
            <p>Weather app with React</p>
            <p>Links:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - Github react
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - Temperatures source
                </li>
            </ul>
        </div>
    );
};

module.exports = About;
