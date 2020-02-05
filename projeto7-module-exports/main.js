let plugin = require('./plugin');
let moment = require('moment');

console.log(plugin);
console.log(plugin.imc(80, 1.80));
console.log(plugin.quadrado(5));

console.log(moment().dayOfYear());