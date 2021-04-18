const https = require('https');
const fs = require('fs')

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', res => {
  let post_data = '';


  res.on('data', data => {
    post_data += data;
  })

  
  res.on('end', () => fs.writeFile('./result/posts.txt', post_data, err =>{
      if(err) throw err;
      console.log("post saved")
  }));
})
