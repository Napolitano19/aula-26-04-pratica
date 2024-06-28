const express = require('express');
const path = require('path');
const app = express();

const porta = 80;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

if (require.main === module) {
    app.listen(porta, () => {
        console.log(`O servidor está rodando na porta http://localhost:${porta}`);
    });
}

module.exports = app;
