function square(num) {
    return num * num;
  }
  
  // Helper function to check if a number is even
  function isEven(num) {
    return num % 2 === 0;
  }
  
  // Helper function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Main function to test the helper functions
  function main() {
    const number = 7;
    console.log(`Square of ${number}: ${square(number)}`);
    console.log(`${number} is even: ${isEven(number)}`);
    console.log(`${number} is prime: ${isPrime(number)}`);
  }
  
  // Call the main function
  main();