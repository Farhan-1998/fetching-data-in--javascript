const express = require("express");
const https = require("https");
const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req,res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=paris&appid=e66fb0800b8b9cb32fb804fa415efb53";

  https.get(url, function(response){

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const maxTemp = weatherData.main.temp_max;
      const minTemp = weatherData.main.temp_min;
      res.render("pg1", {temp: temp, maxTemp: maxTemp, minTemp: minTemp});

    });
  });
});

app.get('/pg2', function(req,res){
  const url = "https://api.openweathermap.org/data/2.5/weather?q=paris&appid=e66fb0800b8b9cb32fb804fa415efb53";

  https.get(url, function(response){

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const maxTemp = weatherData.main.temp_max;
      const minTemp = weatherData.main.temp_min;
      res.render("pg2", {temp: temp, maxTemp: maxTemp, minTemp: minTemp});

    });
  });
});

app.listen(3000,function(){
  console.log("server started successfully at port 3000");
});
