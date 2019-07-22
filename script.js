console.log('Batman begins');

setInterval(function() {
	return console.log("I'm Batman!");
}, 1000);

setTimeout(function() {
	console.log(`About to kill ${process.pid}`);
	return process.kill(process.pid);
}, 5000);

process.on('exit', function(code) {
	return console.log(`About to exit with code ${code}`);
});

// process.exit(0) === success
// process.exit(1) === error
