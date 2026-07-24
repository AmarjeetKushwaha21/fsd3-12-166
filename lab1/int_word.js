// Write a function to take any digit (0-9) and return its in word
const toWords = (digit) => {
  if (digit === 0) return "zero"; // handle zero separately
  if (digit >= 1 && digit <= 9) {
    return words[digit - 1];
  }
  return "invalid"; // for inputs outside 0–9
};

const words = ["one","two","three","four","five","six","seven","eight","nine"];

// Example usage:
console.log(toWords(0)); // "zero"
console.log(toWords(5)); // "five"
console.log(toWords(9)); // "nine"
console.log(toWords(10)); // "invalid"