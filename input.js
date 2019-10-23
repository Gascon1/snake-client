const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data', handleUserInput)
  return stdin;
}
// need to ask question about why we put the callback here, and why is it formatted this way.
const handleUserInput = (key) => {
  if (key ==='\u0003') {
    process.exit();
  }
}

module.exports = setupInput;