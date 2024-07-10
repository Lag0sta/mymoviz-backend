var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');


const Token = process.env.TOKEN;

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: Token

    }
  };
// const keyAPI= '26edb7f4db510b4f17fb10b6154be0de'  

router.get('/movies',(req,res) => {
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        console.log(data)
        res.json({movieInfos: data})
    }
        )
})
  

module.exports = router;
