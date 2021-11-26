var express = require('express');
const _ = require('lodash');
var router = express.Router();
const axios = require('axios');



// Create RAW data array
let data = null;


async function charger() {

    const url_joueur= "https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=1";

            try
            {
                data= await axios(url_joueur, {
                headers: {
                Accept: "application/json"
                        }
                })
            } 
            catch(e) 
            {
                console.log(e)
            }
}

/* GET movie page. */
router.get('/', function(req, res, next) {
  charger();
  res.status(200).json({data});

  
  
});
  
  
module.exports = router;
