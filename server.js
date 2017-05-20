var express = require('express'),
    app = express();

app.use(express.static('src'));

app.listen(8080, function() {
    console.log('Express listening on Port 8080...');
});