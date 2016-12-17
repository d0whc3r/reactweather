var axios = require('axios');

const OWM_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=bb99aad9f75793f187a86b6039652977';
//bb99aad9f75793f187a86b6039652977

var owm = {};

owm.getTemp = function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OWM_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
        if (!res.data.list.length) {
            throw new Error(res.data.message);
        } else {
            return res.data.list[0].main.temp;
        }
    }, function (res) {
        throw new Error(res.data.message);
    })
};

module.exports = owm;