const axios = require('axios');

axios.get('https://jul1u5.herokuapp.com/notes')
    .then(function (response) {
      
        let array = response.data;
        getData(array);

        // for (let i = 0; i < array.length; i++) {
        //     console.log(array[i].about);
        // }

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


function getData(param) {

    let wrap = document.querySelector('.wrapper');
    
    wrap.innerHTML = param[0].about;

    return console.log(param);

}