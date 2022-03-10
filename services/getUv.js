import axios from 'axios';

//const axios = require('axios').default;

async function getUV() {
  const response = (await axios.get(`http://svuv-api.herokuapp.com/data_read/last`))
    .data;
   
  var teste = response.uv;
 
 // console.log(teste);
  //console.log('UV: ' + teste);
  //return response.uv ;

}

export default getUV;