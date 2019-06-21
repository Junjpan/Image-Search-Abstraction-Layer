'use strict';

let mongoose = require('mongoose');
let Search = require('../modules/search');
let fetch = require('node-fetch');

//require('dotenv').config();

module.exports = (app) => {
    app.post('/api/imagesearch/:search', (req, res) => {
        const { search } = req.params;
        const { offset } = req.query;
        const googleurl = "https://www.googleapis.com/customsearch/v1?key=";
        const newData=[];
        var searchQuery = new Search();
        searchQuery.term = search;
        searchQuery.save((err, data) => {
            if (err) { throw err }
        })
        //use searchType=image to limit the search result to be image only
        fetch(googleurl + process.env.GOOGLE_API_KEY + "&cx=" + process.env.GOOGLE_CX + "&searchType=image&q=" + search)
            .then(function (res) {
                return res.json()
            })
            .then((data) => {
                // res.json({data})        
                for(var i=0;i<offset;i++){
                    var item={}
                    item.url=data.items[i].link;
                    item.snippet= data.items[i].snippet;
                    item.thumbnail= data.items[i].image.thumbnailLink;
                    item.context= data.items[i].image.contextLink;
                    newData.push(item);
                }
               res.send(newData)
            })
    })

}