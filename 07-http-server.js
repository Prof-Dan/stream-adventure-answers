var http = require('http');
var through = require('through2');
//process.stdin.pipe(through(write, end)).pipe(process.stdout);

function write (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}
function end (done) { done(); }

var server = http.createServer(function (req, res) {

  req.pipe(through(write, end)).pipe(res);

});
server.listen(process.argv[2]);
