const http = require('http');




const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'text/html');

  if (req.url === '/favicon.ico') {
    res.end(" ");
  } else if (req.url === '/home') {
    res.statusCode = 200;
    res.write("<div style= 'display : flex'>")

    res.write(`<div class="card" style="width: 18rem;">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1TGSId0e1ml-qppS3JOZOTTj1aXC-79msQ&s"class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`);
    res.write(`<div class="card" style="width: 18rem;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1Il8Ypc2GZTQMSvYeMbyu3uvWkin60NXXA&s"class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`);
    res.statusCode = 200;
    res.statusCode = 200;
    res.write(`<div class="card" style="width: 18rem;">
    <img src="https://img.freepik.com/free-photo/view-adorable-kittens_23-2150758212.jpg" class="card-img-top img-fluid" style="width:18rem;" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`);
    res.write("</div>")
    res.end();
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.write("<div style= 'display : flex'>")

    res.write(`<div class="card" style="width: 18rem;">
      <img src="https://media.istockphoto.com/id/1201312711/photo/funny-dog-with-disgusted-face.webp?b=1&s=170667a&w=0&k=20&c=_fVyZD4CNH4H1hbS6TCjWh50o0S9pXksf4TR9y7hXe0="class="card-img-top img-fluid" style="width:18rem"  alt="...">
      <div class="card-body">
        <h5 class="card-title">MAnav Kotecha</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`);
    res.write(`<div class="card" style="width: 18rem;">
    <img src="https://i.pinimg.com/originals/c1/c8/ff/c1c8ff66847fbdce2933aa3756bc272f.jpg"class="card-img-top img-fluid" style="width:18rem" alt="...">
    <div class="card-body">
      <h5 class="card-title">zeel thakkar</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`);

    res.write(`<div class="card" style="width: 18rem;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprNgkKkmCl87zik45CJxGxE8UUNIK-LZYWQ&s" class="card-img-top img-fluid" style="width:18rem;" alt="...">
    <div class="card-body">
      <h5 class="card-title">kotecha manzeel 11</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`);
    res.write("</div>");
    res.end();
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.write("about us");
    res.end();
  } else {
    res.end(" ");
  }
});

server.listen(5020);



