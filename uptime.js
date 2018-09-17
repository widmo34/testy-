const os = require('os');
const formatDate = require('./index');

const uptime = formatDate(28);

console.log(`Current uptime is ${uptime}`);