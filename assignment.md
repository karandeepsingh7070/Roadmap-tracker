# Assignment Question Number 3

## Optimize JavaScript Filtering Function

### **Task Description**
You are given the following function, which filters an array of objects based on a keyword:

### **Initial Code:**
```javascript
function fetchDataAndFilter(data, keyword) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].title.includes(keyword)) {
            var results = [];
            results.push(data[i]);
        }
    }
    return results;
}
```

### **Identified Issues:**
1. **Results Array Scope Issue** ❌
   - `results` is declared inside the loop, so it gets reset on every iteration.
2. **Inefficient Filtering** ❌
   - Using a loop when `.filter()` is more efficient.
3. **Edge Cases Not Handled** ❌
   - **Empty arrays** ✅
   - **Missing properties (`title` might be undefined)** ✅
   - **Partial matches (e.g., "JS" should match "JavaScript")** ❌
   - **Case-insensitive search** ✅

---

### **Optimized Code**
```javascript
function fetchDataAndFilter(data, searchKey) {
    // ** NOTE: Can also use Debouncing if searchKey is used from an input **
    if (typeof searchKey !== "string") {
        throw new Error("searchKey should be a string");
    }

    searchKey = searchKey.trim().toLowerCase();
    if (!searchKey || !data.length) return [];

    let result = data.filter(item => item?.title?.toLowerCase()?.includes(searchKey));
    return result;
}
```

### **Enhancements:**
- ✅ **Used `.filter()` for better efficiency**
- ✅ **Ensured `title` is not `undefined` or `null`**
- ✅ **Handled case-insensitive search**
- ❌ **Still does not support partial matches**

---

### **Handling Partial Matches**
We need to improve the function so that searching for "JS" should match "JavaScript".

#### **Final Code with Partial Matching**
```javascript
function isPartialMatch(word, searchKey) {
    if (typeof word !== "string") return false;
    word = word.toLowerCase();
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

    let result = data.filter(item => isPartialMatch(item?.title, searchKey));
    return result;
}
```

### **Time Complexity Analysis:**
- **`isPartialMatch()` Complexity:** `O(k)`, where `k` is the length of the word.
- **`fetchDataAndFilter()` Complexity:** `O(n * k)`, where `n` is the number of items in `data`.

---

### **Test Cases**
```javascript
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

const searchTerm = "JS";

console.log(fetchDataAndFilter(testData, searchTerm));
```

### **Expected Output:**
```javascript
[
    { title: 'JavaScript' },
    { title: 'JS Carousel' }
]
```

### **Final Improvements:**
✅ **Handles case-insensitive search**  
✅ **Supports partial matches**  
✅ **Fixes scope issue with `results` array**  
✅ **Handles `null`, `undefined`, and non-string values gracefully**  
✅ **Improved readability and maintainability** 🚀

