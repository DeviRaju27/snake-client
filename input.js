
//const  { connect } = require('./client');

let connection;

const setupInput =  (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput =  (key) => {

  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\u0057' || key === '\u0077') {
    connection.write("Move: up");
  }
  if (key === '\u0061' || key === '\u0041') {
    connection.write("Move: left");
  }
  if (key === '\u0053' || key === '\u0073') {
    connection.write("Move: down");
  }
  if (key === '\u0044' || key === '\u0064') {
    connection.write("Move: right");
  }
};

module.exports = { setupInput };