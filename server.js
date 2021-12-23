var http = require("http")
const port = 3000

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.write("Hello World")
    res.end()
  }).listen(port,() => {
      console.log('Server is running on port http://localhost:' + port)
  })