const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const encoded = bodyParser.urlencoded({ extended: true });
app.use(encoded);
app.use(express.json());
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 4000;
app.get('/get-data', async (req, res) => {
    await res.status(200).json({
        "data": "Get Data"
    });
});
app.post('/post-data', async (req, res) => {
    console.log(req.body.user_name)
    await res.status(200).json({
        'user_name': req.body.user_name
    });
})
app.listen(port, () => {
    console.log(`Server running at ${port}`);
})
