var express = require('express');
const fs = require('node:fs')
const path = require('path')

var router = express.Router();

console.log(__dirname)
const days = [
  "bad_mood.jpg","bread.jpg","chack_chack.jpg","chipsy.jpg","dayday.jpg","dishes_washer.jpg","echpochmak.jpg","fredi_merkuri.jpg","hair.jpg","izolenta.jpg","kapibara.jpg","kosichka.jpg","krapiva.jpg","kryjovnik.jpg","kukuruza.jpg","maksim.jpg","natoptysh.jpg","nedosyp.jpg","oak.jpg","oladushka.jpg","plov.jpg","polovoi.jpg","ponos.jpg","sala.jpg","samogon.jpg","samsa.jpg","sand.jpg","shashlyk.jpg","sherst_stelka.jpg","snils.jpg","stone_shoe.jpg","trevoga.jpg","underwear.jpg","vedra.jpg","vetka_day.jpg","zaebalo.jpg"
]

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);

    var item = days[day % days.length];
    console.log("reading image")
  
    const data = fs.readFileSync(path.resolve(__dirname, `../day_image/${item}`), null);
    
    res.setHeader('Content-Type', 'image/jpeg');
          
    res.send(data);
  } 
  catch(e) {
    console.log(e)
  }
});

module.exports = router;
