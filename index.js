#!/usr/bin/env node

const axios = require('axios');


axios.get(`https://date.nager.at/api/v2/publicholidays/2019/BE`)
  .then(holidays => {
    console.log(holidays.data);
 
  })
  .catch(err => {
    console.log(err);
});
