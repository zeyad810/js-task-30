 const setA = new Set([1,2,7,8,4,5]);
const setB = new Set([1,2,3,4,5]);

function setDiff(setA, setB) {
    const resultSet = new Set();
    for (const item of setA) {
        if (!setB.has(item)) {
            resultSet.add(item);
        }
    }
    return resultSet;
}

console.log(setDiff(setA, setB));