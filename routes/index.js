var express = require('express');
const fs = require('node:fs')
const path = require('path')

var router = express.Router();

console.log(__dirname)
const days = [
  "babushek.jpg","bad_links.jpg","bad_mood.jpg","bidon.jpg","boli_v_sustave.jpg","bolnoe_gorlo.jpg","bread.jpg","calendar.jpg","cat_ass.jpg","chack_chack.jpg","chai_lipton_sobaka.jpg","chai.jpg","chio_rio.jpg","chipsy.jpg","cirk.jpg","day_no_day.jpg","dayday.jpg","deadline.jpg","depression.jpg","dishes_washer.jpg","divan_noski.jpg","dushnila.jpg","echpochmak.jpg","energetik.jpg","face.jpg","fizika.jpg","fredi_merkuri.jpg","friendzona.jpg","gavkoshmyg.jpg","gulyash.jpg","hair.jpg","isterika.jpg","izolenta.jpg","jojoba.jpg","kaifuem_tancuem.jpg","kapibara.jpg","kartofelnyh_ochistkov.jpg","koloradskiy_zhuk.jpg","kosichka.jpg","kotoptichka.jpg","krapiva.jpg","kryjovnik.jpg","kukuruza.jpg","kurskoi_turmy.jpg","last_sotka.jpg","lenivogo_kota.jpg","leto.jpg","makarony.jpg","maksim.jpg","malboro_gold.jpg","matras.jpg","mesyachnyh.jpg","natoptysh.jpg","navoz.jpg","nedosyp.jpg","neust_internet.jpg","noski_pod_divanom.jpg","oak.jpg","oladushka.jpg","otkaz.jpg","otklyucheniya_vody.jpg","otoplenie.jpg","otvety_na_voprosy.jpg","panika.jpg","penki_piva.jpg","perekladyvanie_otvetstvennosti.jpg","perhot.jpg","pododeyalnik.jpg","polina_s_dr.jpg","polovoi.jpg","ponos.jpg","pravilnoe_pitatine.jpg","pure_kotleta.jpg","pustaya_tarelka.jpg","ren_tv.jpg","salo.jpg","samogon.jpg","samsa.jpg","sand.jpg","seledka.jpg","shakaly.jpg","shashlyk.jpg","sherst_stelka.jpg","shrek.jpg","snils.jpg","sosulka_provod.jpg","spirt_nastoika.jpg","steklovata.jpg","stone_shoe.jpg","svarochnyi_show.jpg","syrok.jpg","tg_premium.jpg","transport.jpg","trevoga.jpg","tushonogo_echpochmaka.jpg","underwear.jpg","uzbekskogo_plova.jpg","vazelin.jpg","vedra.jpg","vetka_day.jpg","vga_cabel.jpg","z1_porvannaya_maska.jpg","z1_shpala.jpeg","z3_block_cilindra.jpeg","z4_tumbochka.jpeg","z5_paverbank.jpeg","z6_stanok.jpeg","z7_flomaster.jpeg","z8_rascheska.jpeg","z9_organizer.jpeg","z10_predohranitel.jpeg","z11_raskladushka.jpeg","z12_kapuchinator.jpeg","z12_vedro.jpeg","z13_sracheli.jpeg","z17_wd.jpeg","z18_provod.jpeg","z19_nakovalna.jpeg","z20_stop_kran.jpeg","z21_tualetnaya.jpeg","z24.jpeg","z30.jpeg","z34.jpeg","z38.jpeg","z39.jpeg","z40.jpeg","z41.jpeg","z42.jpeg","z43.jpeg","z44.jpeg","z45.jpeg","z46.jpeg","z48.jpeg","z49.jpeg","z54.jpeg","z58.jpeg","z61.jpeg","z63.jpeg","z64.jpeg","z65.jpeg","z66.jpeg","z67.jpeg","z68.jpeg","z69.jpeg","z72.jpeg","z75.jpeg"
]

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);

    var item = days[((day + 12)) % days.length];
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
