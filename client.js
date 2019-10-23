const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '192.168.0.103',
    port: 50541,
  });

  conn.setEncoding('utf8');
  
  conn.on('connect', () => {
   console.log('Server connection established.');
   conn.write('Name: 000')
  });

  conn.on('data', (data) => {
    console.log('Message from server: ', data);
  });

  return conn;

}


module.exports = connect;