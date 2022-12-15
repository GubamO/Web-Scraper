const PORT = 8000
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

const url = ""

const $ = cheerio.load('<h2 class="title">Hello world</h2>');

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

$.html();
//=> <html><head></head><body><h2 class="title welcome">Hello there!</h2></body></html>

app.listen(PORT, ()=> { console.log(`Serveur running on PORT ${PORT}`) })
