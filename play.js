const { copyFileSync } = require('fs');
const net = require('net');
const chalk = require('chalk')
// const INITIAL_SNAKE_SIZE = 4
// const SNAKE_COLOR = 'green'
// const DOT_COLOR = 'red'

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541// PORT number here,
  });

  conn.on("connect",() => {
  
    conn.write(chalk.red('Buhaha'));

  });

  conn.on("data",(data) => {
    console.log("server:",data)
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();