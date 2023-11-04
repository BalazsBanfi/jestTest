export default function analyzeArray(arr) {

    const message = 'This is not an array or there are some NaN element';
    if (arr.filter(x => x !== Number.isInteger(x)) > 0 || !arr) {
        return message
    }
    const length = arr.length;
    const average = arr.reduce((x, y) => x + y, 0) / length
    const min = Math.min(...arr);
    const max = Math.max(...arr); 
    return {
        average, length, max, min
    }
}
