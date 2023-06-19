const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT|| 8002;
const mongoose = require('mongoose');
const URL = require('./models/url');
const urlRoute= require('./routes/url');

mongoose.connect('mongodb+srv://devhati83:13122002@clusterdev.v2kuhlj.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('db connected');}).catch((error)=>{
        console.log(error);
    })


app.set('view engine','ejs');
app.set('views',path.resolve('./views'));


//middleware
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());  // or can use urlencoded 
//express routes
app.get('/home', async (req,res)=>{
    const allurls=await URL.find({});
    return res.render('home.ejs',{
        urls : allurls,
    });
});
app.use('/url',urlRoute);

app.get('/search/:shortid',async (req,res)=>{
    const shortid = req.params.shortid;
    const data = await URL.find({
        "$or":[
            {'note':{$regex:req.params.shortid}},
            {'redirectURL':{$regex:req.params.shortid}},
            {'shortid':{$regex:req.params.shortid}},
        ]
    })
    res.send(data);
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







app.listen(PORT || process.env.PORT,()=>console.log((`Server started at ${PORT}`)));






