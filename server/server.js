const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
<<<<<<< HEAD
const scrapeIt = require("scrape-it");
const Xray = require('x-ray');

//++++++++

=======
const scrapeIt = require('scrape-it');
>>>>>>> multi carousel attempt
dotenv.config();

const pg = require('./config/database.js');

const app = express();
require('./config/routes.js')(app, express);


app.use(express.static(path.join(`${__dirname}/../build`)));
app.use(express.static(path.join(`${__dirname}/../public`)));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(`${__dirname}/../public`, 'index.html'));
});

const server = app.listen(8888, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

<<<<<<< HEAD

// SCRAPE-IT EXAMPLE
//const xray = Xray();
const xray = Xray();


// <div class="items">
//   <div class="item">
//     <h2>first item</h2>
//     <ul class="tags">
//       <li>a</li>
//       <li>b</li>
//       <li>c</li>
//     </ul>
//   </div>
//   <div class="item">
//     <h2>second item</h2>
//     <ul class="tags">
//       <li>d</li>
//       <li>e</li>
//     </ul>
//   </div>
// </div>

// xray('https://www.lonelyplanet.com/canada/toronto', '.js-intro-narrative', [{
//   description: '',
//   //tags: xray('.tags', ['li'])
// }])((err, obj) => {

// console.log(obj)
// });


// xray('https://www.lonelyplanet.com/canada/toronto/introduction', '.copy--feature', [{
//   description: '',
//   //tags: xray('.tags', ['li'])
// }])((err, obj) => {
// if(err){
//   console.log('fail');
// } else {

// let tempSolution = '';
//   obj.forEach((object)=> {
//     tempSolution += object.description;
//   });
//   console.log(tempSolution);
// }});


//_G1d _wle _xle

=======
// SCRAPE-IT EXAMPLE
// scrapeIt("https://www.viator.com/search/new%20york%20city", {
// pages: {
//   listItem: ".media",
//
//   data: {
//     title: "a",
//     price: ".price-amount",
//     url: {
//     selector: "a",
//     attr: "href"
//       }
//     }
//   }
// }).then(page => {
//     console.log(page);
// });
>>>>>>> multi carousel attempt
