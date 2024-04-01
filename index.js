const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.get('/get-data', (req, res) => {
    res.status(200).json({
        "data": "Get Data"
    });
});
app.listen(port, () => {
    console.log(`Server running at ${port}`);
})
