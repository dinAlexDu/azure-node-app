const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use a porta fornecida pelo ambiente ou 3000 como fallback

app.get('/', (req, res) => {
    res.send('Hello, Azure App Services!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
