const obj = {
    A: 12,
    B: 34,
    C: {
        P: 56,
        O: {
            L: 78,
        },
        Q: [1, 2, 3],
    },
};

// Function to flatten nested object keys and create a new object with flattened keys
function flattenObject(obj, parent) {
    let finalObj = {};

    // Recursive function to flatten object keys
    function flatten(obj, parent) {
        for (let key in obj) {
            const value = obj[key];
            let newParent = parent + key;

            if (typeof value === 'object') {
                // If the value is another object, recursively call the flatten function
                flatten(value, newParent + '.');
            } else {
                // Otherwise, assign the value to the corresponding flattened key
                finalObj[newParent] = value;
            }
        }
    }

    // Start the flattening process with the given object and an empty parent key
    flatten(obj, parent);
    return finalObj;
}

// Flatten the 'obj' and print the result
console.log(flattenObject(obj, ""));
