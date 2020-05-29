const express = require('express');
const Blob = require("cross-blob");
const ax = require('axios');
app = express();
const PORT = 4000;

//SAMPLE LARGE DATA -- first time generating data may take time
const DATA = ax.get('https://jsonplaceholder.typicode.com/photos', async function getData(response) {
    if (response.status === 200) {

        return response;
    }

});

app.get("/data/download/", async function sendBlobs(req, res) {
    const item = new Blob([JSON.stringify((await DATA).data)], {type: 'application/json'});
    res.type(item.type);
    console.log("Success !!!");
    res.send(Buffer.from(await item.arrayBuffer()));

});

app.listen(PORT, () => {
    console.log('Server started on ', PORT);
})