//const express = require('express');

const request=require('request')
const weatherUrl='https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22'

request({url:weatherUrl},(error,response)=>
{
    const result=JSON.parse(response.body)
    if(error){
        console.log('error:', error);
      } else {
        console.log('City -:'+ result.name )
        console.log('Weather -: '+result.id.main )
        console.log('Description -: '+result.description)
        console.log('Maximum Temperature -: '+ result.temp_max)
        console.log('Minimum Temperature -: '+ result.temp_min)
        console.log('Pressure -: '+ result.pressure)
        console.log('Humidity -: '+ result.humidity)
        console.log('Visibility -: '+result.visibility)
        
    
      }
    });
    