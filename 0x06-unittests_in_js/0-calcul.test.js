const calculateNumber = require('./0-calcul');
const assert = require('assert')


describe('calculateNumber', () => {
    it('should round both numbers up and return their sum', () => {
        assert.strictEqual(calculateNumber(1.4, 2.6), 4); // 1 + 3
      });
    
      it('should round both numbers down and return their sum', () => {
        assert.strictEqual(calculateNumber(1.2, 2.1), 3); // 1 + 2
      });
    
      it('should handle rounding one number up and one down', () => {
        assert.strictEqual(calculateNumber(1.7, 2.3), 4); // 2 + 2
      });
    
      it('should handle negative numbers correctly', () => {
        assert.strictEqual(calculateNumber(-1.4, -2.6), -4); // -1 + -3
      });
    
      it('should handle large numbers correctly', () => {
        assert.strictEqual(calculateNumber(1000.4, 2000.6), 3001); // 1000 + 2001
      });
    
      it('should handle zero correctly', () => {
        assert.strictEqual(calculateNumber(0, 0), 0);
        assert.strictEqual(calculateNumber(0.4, 0.6), 1); // 0 + 1
      });
})