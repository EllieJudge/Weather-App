const request = require('request');
const { promisify } = require('util');

const promisifiedRequest = promisify(request);


const getWeather = async () => {
        let data = await promisifiedRequest({
        uri: `http://api.openweathermap.org/data/2.5/find?q=Manchester,uk&APPID=${process.env.APPID}`,
        json: true
    });
    return data.body;
}
getWeather();

module.exports = getWeather;