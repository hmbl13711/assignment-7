// // // 1. Write a ts program to find length of a string.
// // function findLength(str: string): number {
// //     return str.length;
// //   }
  
// //   const inputString = "hello";
// //   console.log(findLength(inputString)); 
  
// // 2. Write a ts program to copy one string to another string.
// function copyString(src: string): string {
//     return src.slice();
//   }
  
//   const inputString = "hello";
//   const copiedString = copyString(inputString);
//   console.log(copiedString); 
  
  
// // 3. Write a ts program to concatenate two strings.
// function concatenateStrings(str1: string, str2: string): string {
//     return str1 + str2;
//   }
  
//   const string1 = "hello";
//   const string2 = "world";
//   const result = concatenateStrings(string1, string2);
//   console.log(result); // output: "helloworld"
  
// // 4. Write a ts program to compare two strings.
// function compareStrings(str1: string, str2: string): boolean {
//     return str1 === str2;
//   }
  
//   const string1 = "hello";
//   const string2 = "world";
//   const result = compareStrings(string1, string2);
//   console.log(result); // output: false
  
//   const string3 = "hello";
//   const string4 = "hello";
//   const result2 = compareStrings(string3, string4);
//   console.log(result2); // output: true
  

// 5. Write a ts program to convert lowercase string to uppercase.
// function convertToUppercase(str: string): string {
//     return str.toUpperCase();
//   }
  
//   const inputString = "hello";
//   const result = convertToUppercase(inputString);
//   console.log(result); // output: "HELLO"
  
//  6. Write a ts program to convert uppercase string to lowercase.
// function convertToLowercase(str: string): string {
//     return str.toLowerCase();
//   }
  
//   const inputString = "HELLO";
//   const result = convertToLowercase(inputString);
//   console.log(result); // output: "hello"
  
// 7. Write a ts program to toggle case of each character of a string.
// function toggleCase(str: string): string {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       result += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
//     }
//     return result;
//   }
  
//   const inputString = "Hello World";
//   const result = toggleCase(inputString);
//   console.log(result); // output: "hELLO wORLD"
  

 // 8. Write a ts program to find total number of alphabets, digits or special character in a string.
//  function countCharacters(str: string): object {
//     let alphabets = 0;
//     let digits = 0;
//     let special = 0;
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       if (char >= "a" && char <= "z" || char >= "A" && char <= "Z") {
//         alphabets++;
//       } else if (char >= "0" && char <= "9") {
//         digits++;
//       } else {
//         special++;
//       }
//     }
//     return {
//       alphabets: alphabets,
//       digits: digits,
//       special: special
//     };
//   }
  
//   const inputString = "Hello World! 123";
//   const result = countCharacters(inputString);
//   console.log(result); // output: { alphabets: 10, digits: 3, special: 3 }
  
 // 9. Write a ts program to count total number of vowels and consonants in a string.
//  function countVowelsAndConsonants(str: string): object {
//     let vowels = 0;
//     let consonants = 0;
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i].toLowerCase();
//       if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         vowels++;
//       } else if (char >= "a" && char <= "z") {
//         consonants++;
//       }
//     }
//     return {
//       vowels: vowels,
//       consonants: consonants
//     };
//   }
  
//   const inputString = "Hello World";
//   const result = countVowelsAndConsonants(inputString);
//   console.log(result); // output: { vowels: 3, consonants: 7 }
  
// 10. Write a ts program to count total number of words in a string.
// function countWords(str: string): number {
//     let words = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === " " && str[i - 1] !== " ") {
//         words++;
//       }
//     }
//     return words + 1;
//   }
  
//   const inputString = "Hello World";
//   const result = countWords(inputString);
//   console.log(result); // output: 2
  
// 11. Write a ts program to find reverse of a string.
// function reverseString(str: string): string {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }
  
//   const inputString = "Hello World";
//   const result = reverseString(inputString);
//   console.log(result); // output: "dlroW olleH"
  
// 12. Write a ts program to check whether a string is palindrome or not.
// function isPalindrome(str: string): boolean {
//     const reversed = str.split("").reverse().join("");
//     return str === reversed;
//   }
  
//   const inputString = "racecar";
//   const result = isPalindrome(inputString);
//   console.log(result); // output: true
  
// 13. Write a ts program to reverse order of words in a given string
// function reverseWords(str: string): string {
//     const words = str.split(" ");
//     const reversedWords = words.reverse();
//     return reversedWords.join(" ");
//   }
  
//   const inputString = "Hello World";
//   const result = reverseWords(inputString);
//   console.log(result); // output: "World Hello"
  
// 14. Write a ts program to find first occurrence of a character in a given string.
// function findFirstOccurrence(str: string, char: string): number {
//     return str.indexOf(char);
//   }
  
//   const inputString = "Hello World";
//   const targetChar = "o";
//   const result = findFirstOccurrence(inputString, targetChar);
//   console.log(result); // output: 4
  
// 15. Write a ts program to find last occurrence of a character in a given string.
// function findLastOccurrence(str: string, char: string): number {
//     return str.lastIndexOf(char);
//   }
  
//   const inputString = "Hello World";
//   const targetChar = "o";
//   const result = findLastOccurrence(inputString, targetChar);
//   console.log(result); // output: 7
  
// 16. Write a ts program to search all occurrences of a character in given string.
// function searchAllOccurrences(str: string, char: string): number[] {
//     let occurrences: number[] = [];
//     let index = str.indexOf(char);
//     while (index !== -1) {
//       occurrences.push(index);
//       index = str.indexOf(char, index + 1);
//     }
//     return occurrences;
//   }
  
//   const inputString = "Hello World";
//   const targetChar = "l";
//   const result = searchAllOccurrences(inputString, targetChar);
//   console.log(result); // output: [2, 3, 9]
  
// 17. Write a ts program to count occurrences of a character in given string.
// function countOccurrences(str: string, char: string): number {
//     let count = 0;
//     let index = str.indexOf(char);
//     while (index !== -1) {
//       count++;
//       index = str.indexOf(char, index + 1);
//     }
//     return count;
//   }
  
//   const inputString = "Hello World";
//   const targetChar = "l";
//   const result = countOccurrences(inputString, targetChar);
//   console.log(result); // output: 3
  
// 18. Write a ts program to find highest frequency character in a string.
// function highestFrequencyChar(str: string): string {
//     let charCounts: { [char: string]: number } = {};
//     for (const char of str) {
//       charCounts[char] = (charCounts[char] || 0) + 1;
//     }
//     let maxChar = "";
//     let maxCount = 0;
//     for (const char in charCounts) {
//       if (charCounts[char] > maxCount) {
//         maxChar = char;
//         maxCount = charCounts[char];
//       }
//     }
//     return maxChar;
//   }
  
//   const inputString = "Hello World";
//   const result = highestFrequencyChar(inputString);
//   console.log(result); // output: "l"
  
// 19. Write a ts program to find lowest frequency character in a string.
// function lowestFrequencyChar(str: string): string {
//     let charCounts: { [char: string]: number } = {};
//     for (const char of str) {
//       charCounts[char] = (charCounts[char] || 0) + 1;
//     }
//     let minChar = str[0];
//     let minCount = str.length;
//     for (const char in charCounts) {
//       if (charCounts[char] < minCount) {
//         minChar = char;
//         minCount = charCounts[char];
//       }
//     }
//     return minChar;
//   }
  
//   const inputString = "Hello World";
//   const result = lowestFrequencyChar(inputString);
//   console.log(result); // output: "H"
  
// 20. Write a ts program to count frequency of each character in a string.
// function countCharFrequency(str: string): { [char: string]: number } {
//     let charCounts: { [char: string]: number } = {};
//     for (const char of str) {
//       charCounts[char] = (charCounts[char] || 0) + 1;
//     }
//     return charCounts;
//   }
  
//   const inputString = "Hello World";
//   const result = countCharFrequency(inputString);
//   console.log(result); // output: { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }
  
// 21. Write a ts program to remove first occurrence of a character from string.
// function removeFirstOccurrence(str: string, char: string): string {
//     let charIndex = str.indexOf(char);
//     if (charIndex === -1) return str;
//     return str.slice(0, charIndex) + str.slice(charIndex + 1);
//   }
  
//   const inputString = "Hello World";
//   const result = removeFirstOccurrence(inputString, "l");
//   console.log(result); // output: "Helo World"
  
// 22. Write a ts program to remove last occurrence of a character from string.
// function removeLastOccurrence(str: string, char: string): string {
//     let charIndex = str.lastIndexOf(char);
//     if (charIndex === -1) return str;
//     return str.slice(0, charIndex) + str.slice(charIndex + 1);
//   }
  
//   const inputString = "Hello World";
//   const result = removeLastOccurrence(inputString, "l");
//   console.log(result); // output: "Hello Worl"
  
// 23. Write a ts program to remove all occurrences of a character from string.
// function removeAllOccurrences(str: string, char: string): string {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] !== char) result += str[i];
//     }
//     return result;
//   }
  
//   const inputString = "Hello World";
//   const result = removeAllOccurrences(inputString, "l");
//   console.log(result); // output: "Heo Word"
  
// 24. Write a ts program to remove all repeated characters from a given string.
// function removeAllRepeated(str: string): string {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//       if (result.indexOf(str[i]) === -1) result += str[i];
//     }
//     return result;
//   }
  
//   const inputString = "Hello World";
//   const result = removeAllRepeated(inputString);
//   console.log(result); // output: "helo wrd"
  
// 25. Write a ts program to replace first occurrence of a character with another in a string.
// function replaceFirstOccurrence(str: string, char: string, replaceChar: string): string {
//     let index = str.indexOf(char);
//     if (index === -1) return str;
//     return str.substring(0, index) + replaceChar + str.substring(index + char.length);
//   }
  
//   const inputString = "Hello World";
//   const result = replaceFirstOccurrence(inputString, "o", "0");
//   console.log(result); // output: "Hell0 World"
  
// 26. Write a ts program to replace last occurrence of a character with another in a string.
// function replaceLastOccurrence(str: string, char: string, replaceChar: string): string {
//     let index = str.lastIndexOf(char);
//     if (index === -1) return str;
//     return str.substring(0, index) + replaceChar + str.substring(index + char.length);
//   }
  
//   const inputString = "Hello World";
//   const result = replaceLastOccurrence(inputString, "o", "0");
//   console.log(result); // output: "Hell0 W0rld"
  
// 27. Write a ts program to replace all occurrences of a character with another in a string.
// 28. Write a ts program to find first occurrence of a word in a given string.
// 29. Write a ts program to find last occurrence of a word in a given string.
// 30. Write a ts program to search all occurrences of a word in given string.
// 31. Write a ts program to count occurrences of a word in a given string.
// 32. Write a ts program to remove first occurrence of a word from string.
// 33. Write a ts program to remove last occurrence of a word in given string.
// 34. Write a ts program to remove all occurrence of a word in given string.
// 35. Write a ts program to trim leading white space characters from given string.
// 36. Write a ts program to trim trailing white space characters from given string.
// 37. Write a ts program to trim both leading and trailing white space characters from given string.
// 38. Write a ts program to remove all extra blank spaces from given string.

// conditional operators programming exercises

// 1. Write a ts program to find maximum between two numbers using conditional operator.
// 2. Write a ts program to find maximum between three numbers using conditional operator.
// 3. Write a ts program to check whether a number is even or odd using conditional operator.
// 4. Write a ts program to check whether year is leap year or not using conditional operator.
// 5. Write a ts program to check whether character is an alphabet or not using conditional operator.

// List of switch case programming exercises

// 1. Write a ts program to print day of week name using switch case.
// 2. Write a ts program print total number of days in a month using switch case.
// 3. Write a ts program to check whether an alphabet is vowel or consonant using switch case.
// 4. Write a ts program to find maximum between two numbers using switch case.
// 5. Write a ts program to check whether a number is even or odd using switch case.
// 6. Write a ts program to check whether a number is positive, negative or zero using switch case.
// 7. Write a ts program to find roots of a quadratic equation using switch case.
// 8. Write a ts program to create Simple Calculator using switch case.
