const express = require('express');
const app = express();


const workers = [
    {
        name: "sergio",
        id: 1,
        available: true
    },
    {
        name: "marcos",
        id: 2,
        available: false
    },
    {
        name: "julia",
        id: 3,
        available: false
    },
    {
        name: "leon",
        id: 4,
        available: true
    },
    {
        name: "john",
        id: 5,
        available: true
    },
    {
        name: "bela",
        id: 6,
        available: true
    }

];


app.get('/',(req,res)=> {
    res.redirect('/verify');
})

app.get('/verify', (req,res) => {
    res.sendFile(__dirname + '/verifyUser.html');
})

app.get('/workers',(req,res) => {
    res.send(workers);
}) 

app.get('/workers/available',(req,res) => {
    let availables = [];
    availables = workers.filter((worker) => worker.available == true);
    res.send(availables);
}) 

app.use((req,res)=>{
    res.status(404);
    res.send('not found');
})

app.listen('3000',() => console.log("Servidor ligado na porta 3000..."));
