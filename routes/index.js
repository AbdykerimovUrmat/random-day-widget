var express = require('express');
const fs = require('node:fs')
const path = require('path')

var router = express.Router();

console.log(__dirname)
const days = [
  "bad_links.jpg","bad_mood.jpg","boli_v_sustave.jpg","bolnoe_gorlo.jpg","bread.jpg","calendar.jpg","cat_ass.jpg","chack_chack.jpg","chai_lipton_sobaka.jpg","chai.jpg","chio_rio.jpg","chipsy.jpg","cirk.jpg","day_no_day.jpg","dayday.jpg","deadline.jpg","depression.jpg","dishes_washer.jpg","dushnila.jpg","echpochmak.jpg","energetik.jpg","face.jpg","fizika.jpg","fredi_merkuri.jpg","hair.jpg","isterika.jpg","izolenta.jpg","jojoba.jpg","kapibara.jpg","koloradskogo_juka.jpg","kosichka.jpg","krapiva.jpg","kryjovnik.jpg","kukuruza.jpg","last_sotka.jpg","leto.jpg","maksim.jpg","malboro_gold.jpg","matras.jpg","natoptysh.jpg","navoz.jpg","nedosyp.jpg","noski_pod_divanom.jpg","oak.jpg","oladushka.jpg","otkaz.jpg","otoplenie.jpg","otvety_na_voprosy.jpg","panika.jpg","perekladyvanie_otvetstvennosti.jpg","perhot.jpg","plov.jpg","pododeyalnik.jpg","polovoi.jpg","ponos.jpg","pravilnoe_pitanie.jpg","pure_kotleta.jpg","pustaya_tarelka.jpg","sala.jpg","samogon.jpg","samsa.jpg","sand.jpg","seledka.jpg","shakaly.jpg","shashlyk.jpg","sherst_stelka.jpg","shrek.jpg","snils.jpg","sosulka_provod.jpg","spirt_nastoika.jpg","stone_shoe.jpg","syrok.jpg","tg_premium.jpg","trevoga.jpg","underwear.jpg","vazelin.jpg","vedra.jpg","vetka_day.jpg","vga_cabel.jpg","vika.jpg","zaebalo.jpg"
]

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);

    var item = days[(day + 4) % days.length];
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
