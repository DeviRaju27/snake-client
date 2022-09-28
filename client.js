const net = require('net');
const chalk = require('chalk');
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541// PORT number here,
  });

  conn.on("connect",() => {
  
    conn.write(chalk.red('Buhaha'));

  });

  conn.on("data",(data) => {
    console.log("server:",data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;