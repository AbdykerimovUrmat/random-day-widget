var express = require('express');
var router = express.Router();

// POST метод для сохранения пожеланий
router.post('wishes', (req, res) => {
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
router.get('wishes', (req, res) => {
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).json({ error: 'Failed to read wishes file.' });
        }

        const wishes = data ? JSON.parse(data) : [];
        res.json(wishes);
    });
});

module.exports = router;
