const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(require('./privacy.html'))
    res.end()
})
app.get('/', (req, res) => {
    res.send('hello from all ');
});

app.listen(3090, () => {
    console.log('Server is running on port 3090');
});
app.get('/home', (req, res) => {

    res.send(`<div class="card" style="width: 18rem;">
<img src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg" class="card-img-top img-fluid" style="width: 18rem;"alt="...">
<div class="card-body">
  <h5 class="card-title">My HomePage</h5>
  <p class="card-text">Hello this is my home page thanks for visiting...</p>
  <button type="button" class="btn btn-primary m-5 p-2"><a href="http://127.0.0.1:5500/index.html"
  style="text-decoration: none;color: white">Home</button>
  
</div>
</div>`);


});

app.get('/about', (req, res) => {
    res.send(`<div class="card" style="width: 18rem;">
    <img src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg" class="card-img-top img-fluid" style="width: 18rem;"alt="...">
    <div class="card-body">
      <h5 class="card-title">My HomePage</h5>
      <p class="card-text">Hello this is my home page thanks for visiting...</p>
      <button type="button" class="btn btn-primary m-5 p-2"><a href="http://127.0.0.1:5500/index.html"
      style="text-decoration: none;color: white">Home</button>
      
    </div>
    </div>`);
});

app.get('/contact', (req, res) => {
    res.send(`<div class="card" style="width: 18rem;">
<img src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg" class="card-img-top img-fluid" style="width: 18rem;"alt="...">
<div class="card-body">
  <h5 class="card-title">My HomePage</h5>
  <p class="card-text">Hello this is my home page thanks for visiting...</p>
  <button type="button" class="btn btn-primary m-5 p-2"><a href="http://127.0.0.1:5500/index.html"
  style="text-decoration: none;color: white">Home</button>
  
</div>
</div>`);
});

