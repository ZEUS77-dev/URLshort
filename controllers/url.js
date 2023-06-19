const {nanoid} = require('nanoid')
const URL = require('../models/url')
async function genrateNewShortURL(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error:'url is mandatory'});
    if(!body.note) return res.status(400).json({error:'note is mandatory for search indexing'});

    const shortid=nanoid(9);
    await URL.create({
        note:body.note,
        shortid:shortid,
        redirectURL:body.url,
        visitedHistory:[],
    });
    return res.render('home',{
        id:shortid,
    })
    return res.json({id:shortid});
}

async function getAnalytics(req,res){
    const shortid = req.params.shortid;
    const result = await URL.findOne({ shortid });
    return res.json({
        totalclickcount:result.visitedHistory.length,
        analytics:result.visitedHistory,
    });
};

module.exports={
    genrateNewShortURL,
    getAnalytics,
};