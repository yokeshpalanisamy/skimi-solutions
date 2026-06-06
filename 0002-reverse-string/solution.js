// Read from stdin
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
const lines = [];
rl.on('line', (l) => lines.push(l));
rl.on('close', () => {
  // Your solution here
});