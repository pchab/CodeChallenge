var express = require('express');
var router = express.Router();

var spawn = require('child_process').spawn;
var py    = spawn('python', ['./public/python/compute_input.py']);

/* POST python code, execute code, and return output. */
router.post('/', function(req, res, next) {
	// sends a message to the Python script via stdin
	var line = req.body.code;
	var dataString = '';

	py.stdout.on('data', function(data){
		dataString += data.toString();
	});
	py.stdout.on('end', function(){
		res.send(dataString);
	});

	py.stdin.write(line);
	py.stdin.end();
});

module.exports = router;
