//this is a webserver
const express = require('express');//we pull in express module
const app = express();//initializes express so we can use it
const path = require('path');
const hbs = require('express-handlebars');
const getWeather = require('./lib/getWeather');


app.use(express.static(path.join(__dirname, 'public')));//joining paths so dont need 
//to use './' for file paths??!

app.engine('.hbs', hbs({ //the 'view' engine, how its gonna look
    defaultLayout: 'layout',
    extname: '.hbs'
}))
app.set('view engine', '.hbs');


// '/' one page, can use other pages instead or with
app.get('/', async(req, res) => {//get specific method we are using, refers to the http method(get, post, put, delete)
    let data = await getWeather();
    console.log(data)

    let place = (data.list[0].name)
    console.log(place)

    let temp = (data.list[0].main.temp)
    console.log(temp)

    let wind = (data.list[0].wind.speed)
    console.log(wind)

    let snow = (data.list[0].snow)

    if(snow == null){
        snow = "No snow today, folks!"
    }
    console.log(snow)

    let rain = (data.list[0].rain)
    if (rain == null) {
        rain = "Manchester isn't raining... WTF?"
    }
    console.log(rain)

    let dt = (data.list[0].dt)
    console.log(dt)

    let weather = (data.list[0].weather[0].description)
    console.log(weather)

    let mainForecast = (data.list[0].weather[0].main)
    console.log(mainForecast)

    res.render('index', {place, temp, wind, snow, rain, dt, weather, mainForecast})
});

app.listen(3000, () => {//which port its listening on
    console.log('server listening on port 3000')//ports, like doorways. Each has specific purpose
})//use ports to communicate with net, other comps etc
//to connect to doorways you need corridors, any protocol htcp


//local host is like a server on your laptop but no1 else can see it