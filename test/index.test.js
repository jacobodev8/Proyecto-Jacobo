const assert = require('assert');
const { holaMundo } = require('../index.js');

try {
  assert.strictEqual(holaMundo(), "Hola mundo");
  console.log('Test pasó ✅');
} catch (error) {
  console.error('Test falló ❌', error.message);
  process.exit(1);
}