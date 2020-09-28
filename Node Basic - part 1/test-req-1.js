var request = require('request');

request.get('https://covid19.th-stat.com/api/open/today', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(body)
    data = JSON.parse(body)
    console.log(data)
  }
});




// fetch('https://covid19.th-stat.com/api/open/today')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });