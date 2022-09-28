const { copyFileSync } = require('fs');
const net = require('net');
const chalk = require('chalk');
const connect = require('./client');
// const INITIAL_SNAKE_SIZE = 4
// const SNAKE_COLOR = 'green'
// const DOT_COLOR = 'red'




console.log("Connecting ...");
connect();