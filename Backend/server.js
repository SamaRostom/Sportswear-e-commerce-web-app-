const express = require("express");
const multer = require("multer");
const db = require("mongodb");


app.get('/words', getwordslistController )
app.post('/rank', RankingController )


// listening on port 3000
app.listen(3000 ,()=>{console.log("server is listening:")})