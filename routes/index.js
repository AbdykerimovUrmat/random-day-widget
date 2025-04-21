var express = require('express');
const fs = require('node:fs')
const path = require('path')

var router = express.Router();

console.log(__dirname)
const days = [
  "babushek.jpg","bad_links.jpg","bad_mood.jpg","bidon.jpg","boli_v_sustave.jpg","bolnoe_gorlo.jpg","bread.jpg","calendar.jpg","cat_ass.jpg","chack_chack.jpg","chai_lipton_sobaka.jpg","chai.jpg","chio_rio.jpg","chipsy.jpg","cirk.jpg","day_no_day.jpg","dayday.jpg","deadline.jpg","depression.jpg","dishes_washer.jpg","divan_noski.jpg","dushnila.jpg","echpochmak.jpg","energetik.jpg","face.jpg","fizika.jpg","fredi_merkuri.jpg","friendzona.jpg","gavkoshmyg.jpg","gulyash.jpg","hair.jpg","isterika.jpg","izolenta.jpg","jojoba.jpg","kaifuem_tancuem.jpg","kapibara.jpg","kartofelnyh_ochistkov.jpg","koloradskiy_zhuk.jpg","kosichka.jpg","kotoptichka.jpg","krapiva.jpg","kryjovnik.jpg","kukuruza.jpg","kurskoi_turmy.jpg","last_sotka.jpg","lenivogo_kota.jpg","leto.jpg","makarony.jpg","maksim.jpg","malboro_gold.jpg","matras.jpg","mesyachnyh.jpg","natoptysh.jpg","navoz.jpg","nedosyp.jpg","neust_internet.jpg","noski_pod_divanom.jpg","oak.jpg","oladushka.jpg","otkaz.jpg","otklyucheniya_vody.jpg","otoplenie.jpg","otvety_na_voprosy.jpg","panika.jpg","penki_piva.jpg","perekladyvanie_otvetstvennosti.jpg","perhot.jpg","pododeyalnik.jpg","polina_s_dr.jpg","polovoi.jpg","ponos.jpg","pravilnoe_pitatine.jpg","pure_kotleta.jpg","pustaya_tarelka.jpg","ren_tv.jpg","salo.jpg","samogon.jpg","samsa.jpg","sand.jpg","seledka.jpg","shakaly.jpg","shashlyk.jpg","sherst_stelka.jpg","shrek.jpg","snils.jpg","sosulka_provod.jpg","spirt_nastoika.jpg","steklovata.jpg","stone_shoe.jpg","svarochnyi_show.jpg","syrok.jpg","tg_premium.jpg","transport.jpg","trevoga.jpg","tushonogo_echpochmaka.jpg","underwear.jpg","uzbekskogo_plova.jpg","vazelin.jpg","vedra.jpg","vetka_day.jpg","vga_cabel.jpg","z1_porvannaya_maska.jpg","z1_shpala.jpeg","z3_block_cilindra.jpeg","z4_tumbochka.jpeg","z5_paverbank.jpeg","z6_stanok.jpeg","z7_flomaster.jpeg","z8_rascheska.jpeg","z9_organizer.jpeg","z10_predohranitel.jpeg","z11_raskladushka.jpeg","z12_kapuchinator.jpeg","z12_vedro.jpeg","z13_sracheli.jpeg","z17_wd.jpeg","z18_provod.jpeg","z19_nakovalna.jpeg","z20_stop_kran.jpeg","z21_tualetnaya.jpeg","z24.jpeg","z30.jpeg","z34.jpeg","z38.jpeg","z39.jpeg","z40.jpeg","z41.jpeg","z42.jpeg","z43.jpeg","z44.jpeg","z45.jpeg","z46.jpeg","z48.jpeg","z49.jpeg","z50.jpeg","z51.jpeg","z52.jpeg","z53.jpeg","z54.jpeg","z55.jpeg","z56.jpeg","z57.jpeg","z58.jpeg","z59.jpeg","z60.jpeg","z61.jpeg","z62.jpeg","z63.jpeg","z64.jpeg","z65.jpeg","z66.jpeg","z67.jpeg","z68.jpeg","z69.jpeg","z70.jpeg","z71.jpeg","z72.jpeg","z73.jpeg","z74.jpeg","z75.jpeg","z76.jpeg","z77.jpeg","z79.jpeg"
]

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);

    var item = days[((day + 14)) % days.length];
    console.log("reading image")
  
    const data = fs.readFileSync(path.resolve(__dirname, `../day_image/${item}`), null);
    
    res.setHeader('Content-Type', 'image/jpeg');
          
    res.send(data);
  } 
  catch(e) {
    console.log(e)
  }
});

// POST метод для сохранения пожеланий
app.post('/submit-wish', (req, res) => {
    const { name, wish } = req.body;

    if (!name || !wish) {
        return res.status(400).json({ error: 'Both name and wish fields are required.' });
    }

    const wishEntry = { name, wish };

    // Чтение существующих пожеланий из файла
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).json({ error: 'Failed to read wishes file.' });
        }

        const wishes = data ? JSON.parse(data) : [];
        wishes.push(wishEntry);

        fs.writeFile(FILE_PATH, JSON.stringify(wishes, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save wish.' });
            }

            res.status(201).json({ message: 'Wish saved successfully.' });
        });
    });
});

// GET метод для получения списка пожеланий
app.get('/wishes', (req, res) => {
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).json({ error: 'Failed to read wishes file.' });
        }

        const wishes = data ? JSON.parse(data) : [];
        res.json(wishes);
    });
});
module.exports = router;
