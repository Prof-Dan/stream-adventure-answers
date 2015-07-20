var through2 = require('through2');
var split = require('split');
var ts = through2(write, end);
var i = 1;

function write(buffer, encoding, next) {

  //console.log('foo',i);

  if(i % 2 === 0) this.push(buffer.toString().toUpperCase()+'\n');
  else this.push(buffer.toString().toLowerCase()+'\n');

  i++;

  next();

}

function end(done) {

  done();

}

process.stdin.pipe(split()).pipe(ts).pipe(process.stdout);
