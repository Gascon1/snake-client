let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data', handleUserInput)
  // why do we have a return here??
  // return stdin;
}
const handleUserInput = (key) => {
  if (key ==='\u0003') {
    process.exit();
  }
  if (key === 'w') {
      connection.write('Move: up');
  }
  
  if (key ==='a') {
    connection.write('Move: left');
  }
  if (key ==='s') {
    connection.write('Move: down');
  }
  if (key ==='d') {
    connection.write('Move: right');
  }
  if (key ==='j') {
    connection.write('Say: just fucking read');
  }
}

module.exports = setupInput;