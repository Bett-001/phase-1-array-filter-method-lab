// Code your solution here
// index.js

// 1. Case-insensitive exact match
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// 2. Fuzzy match (starts with letters)
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// 3. Match by name property in objects
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

module.exports = { findMatching, fuzzyMatch, matchName };
