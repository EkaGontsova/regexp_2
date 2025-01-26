export default function formatNumber(input) {
    const cleaned = input.replace(/[\s()-]/g, '');

    if (/^\+\d+$/.test(cleaned)) {
        return cleaned; 
    }

    if (cleaned.startsWith('8')) {
        return '+7' + cleaned.slice(1); 
    } else if (cleaned.startsWith('7')) {
        return '+' + cleaned; 
    } else if (/^\d+$/.test(cleaned)) {
        return '+' + cleaned; 
    } else {
        return null; 
    }
}

console.log(formatNumber('8 (927) 000-00-00'));
console.log(formatNumber('+7 960 000 00 00'));
console.log(formatNumber('+86 000 000 0000'));
console.log(formatNumber('123 456 7890')); 