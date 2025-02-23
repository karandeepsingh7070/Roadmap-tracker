// ** Assignment Question Number 3

// Optimize JavaScript Filtering Function
// ● You are given the following function, which filters an array of objects based on a keyword:
// Code:
function fetchDataAndFilter(data, keyword) {
for (let i = 0; i < data.length; i++) {
if (data[i].title.includes(keyword)) {
var results = [];
results.push(data[i]); 
}
}
return results; 
}

//* Task: */
// 1.Identify the problems in the function - Result is defined inside the loop ✅
// 2. Optimize it to improve efficiency, correctness, and readability ✅
// 3. Ensure it handles edge cases: ✅
// ○ Empty arrays ✅
// ○ Missing properties (title might be undefined) - added null check ✅
// ○ Partial matches (e.g., "JS" should match "JavaScript") ❌
// ○ Case-insensitive search ✅


// Corrected Code
function fetchDataAndFilter(data, searchKey) {
 // ** NOTE : Can also use Debouncing if the search key is used from an input
  if (typeof searchKey !== "string") {
    throw new Error("data should be an array and searchKey should be a string");
  }

  searchKey = searchKey.trim().toLowerCase();
  if (!searchKey || !data.length) return [];

  let result = data.filter(item => item?.title?.toLowerCase()?.includes(keyword));
  return result
}

//** To handle the partial match */
// ○ Partial matches (e.g., "JS" should match "JavaScript") ✅

//** FINAL CODE
function isPartialMatch(word, searchKey) {
    if (typeof word !== "string") return false;
    word = word.toLowerCase()
    let searchIndex = 0;

    for (const char of searchKey) {
        searchIndex = word.indexOf(char, searchIndex);
        if (searchIndex === -1) {
            return false;
        }
    }
    return true;
}

function fetchDataAndFilter(data, searchKey) {
    if (typeof searchKey !== "string") {
        throw new Error("searchKey should be a string");
    }

    searchKey = searchKey.trim().toLowerCase();
    if (!searchKey || !data.length) return [];

    let result = data?.filter(item => isPartialMatch(item?.title, searchKey));
    return result
}

// Time complexity
//** O(n * k) (where n = searchKey.length, k = word.length)

// Test data
const testData = [
    { title: 'JavaScript' },
    { title: 'JS Carousel' },
    { title: 'Typescript' },
    { title: 'Vidhya Assignment' },
    { title: null },
    { title: 12345 },
    { title: undefined },
    { title: '' },
];
const searchTerm = "JS"


console.log(fetchDataAndFilter(testData, searchTerm));