require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT|| 8002;
const mongoose = require('mongoose');
const URL = require('./models/url');
const urlRoute= require('./routes/url');
const searchRoute = require('./routes/searchroute');

mongoose
    .connect(process.env.MONGO_URI)
    .then((e) => console.log('MongoDB connected'));

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

//middleware
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());  // or can use urlencoded 
//express routes


app.get('/',(req,res)=>{
    return res.redirect('home');
    //setting deafault page to home 
});
app.get('/home',(req,res)=>{
    // const allurls=await URL.find({});
    return res.render('home.ejs');
});

app.use('/url',urlRoute);

app.get('/archive', async (req,res)=>{
    const allurls=await URL.find({});
    return res.render('archivepage.ejs',{
        data : allurls,
    })
});

app.get('/url/:shortid',async (req,res)=>{
    const shortid = req.params.shortid;
    const entry=await URL.findOneAndUpdate({
        shortid,
    },
    {
        $push:{
            visitedHistory: {
                timestamp:Date.now(),
            },
        },
    }
    );
    res.redirect(entry.redirectURL);
})

app.post('/search',async (req,res)=>{
    const body= req.body.input;
    const data = await URL.find({
        "$or":[
            {'note':{$regex:body}},
            {'redirectURL':{$regex:body}},
            {'shortid':{$regex:body}},
        ]
    })
    return res.render('searchpage.ejs',{
        packet : data,
    });
});

app.use('/search',(req,res)=>{
    return res.render('searchpage');
});

app.listen(PORT || process.env.PORT,()=>console.log((`Server started at ${PORT}`)));






