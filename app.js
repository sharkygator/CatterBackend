const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require("./api-routes");
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://user1:ZZQLuMDv5dOJEEmB@cluster0-jhmtv.mongodb.net/catter?retryWrites=true');
mongoose.connection.once('open', () => {
    console.log('Connected to Mongo')
});

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get("/api/v1/hello", (req, res) => {
    res.status(200).send({
        message: 'Hello!'
    })
});


app.use("/api/v1/", apiRoutes);

const PORT = 3001;
app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`)
});
