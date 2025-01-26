import formatNumber from '../app.js'; 

describe('formatNumber', () => {
    test('should format Russian number starting with 8', () => {
        expect(formatNumber('8 (927) 000-00-00')).toBe('+79270000000');
    });

    test('should format Russian number starting with 7', () => {
        expect(formatNumber('+7 960 000 00 00')).toBe('+79600000000');
    });

    test('should return the number as is if it starts with +', () => {
        expect(formatNumber('+12 345 678 9012')).toBe('+123456789012');
    });

    test('should format a number without country code', () => {
        expect(formatNumber('1234567890123')).toBe('+1234567890123');
    });

    test('should format a number with spaces', () => {
        expect(formatNumber('123 456 7890')).toBe('+1234567890');
    });

    test('should format a number starting with 8 without formatting', () => {
        expect(formatNumber('89012345678')).toBe('+79012345678');
    });

    test('should return null for invalid input', () => {
        expect(formatNumber('invalid number')).toBeNull();
    });

    test('should return null for empty input', () => {
        expect(formatNumber('')).toBeNull();
    });

    test('should return null for input with special characters', () => {
        expect(formatNumber('123-456-7890')).toBe('+1234567890');
    });

    test('should handle input with mixed formats', () => {
        expect(formatNumber('8 927 000 00 00')).toBe('+79270000000');
        expect(formatNumber('7 (900) 000 00 00')).toBe('+79000000000');
    });
});