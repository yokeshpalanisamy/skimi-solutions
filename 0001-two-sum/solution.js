const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
const lines = [];
rl.on('line', (l) => lines.push(l));
rl.on('close', () => {
  const nums = lines[0].split(',').map(Number);
  const target = Number(lines[1]);
  console.log(JSON.stringify(twoSum(nums, target)));
});

function twoSum(nums, target) {
  // Your code here
}