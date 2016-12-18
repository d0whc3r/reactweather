var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        msg: React.PropTypes.string.isRequired
    },
    getDefaultProps: function() {
        return {
            title: 'Error'
        };
    },
    componentDidMount: function () {
        var {title, msg} = this.props;
        var modalTemplate = (
            <div id="error-modal" className="reveal reveal-modal tiny text-center" data-reveal="" aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
                <h2 id="modalTitle">{title}</h2>
                <p>Error: {msg}</p>
                <p>
                    <a className="button hollow close-reveal-modal" aria-label="Close" data-close="">Close</a>
                </p>
            </div>
        );

        var $modal = $(ReactDOMServer.renderToString(modalTemplate));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {
        return (
          <div></div>
        );
    }
});

module.exports = ErrorModal;