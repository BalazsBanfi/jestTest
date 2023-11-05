export default function analyzeArray(arr) {
  const message =
    'This is not a real array or there are in some not a number element';
  if (!Array.isArray(arr) || arr.length === 0 || (arr.filter((x) => !Number.isInteger(x)) || []).length > 0) {
    return message;
  } else {
    const length = arr.length;
    const average = arr.reduce((x, y) => x + y, 0) / length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
      average,
      length,
      max,
      min,
    };
  }
}
