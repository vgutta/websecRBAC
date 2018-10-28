var express = require('express');
var http = require('http');
var path = require('path');

var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'public')));

router.listen(3000);