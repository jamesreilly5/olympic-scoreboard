var compareValues = function(objA, objB, keys, index) {
    // If no more keys to compare then break
    if(index >= keys.length) { return 0; }

    var key = keys[index],
        valA = (objA[key]),
        valB = (objB[key]);

    if (valA > valB) {
        return -1;
    } else if (valA < valB) {
        return 1;
    } else {
        debugger;
        return compareValues(objA, objB, keys, ++index);
    }
};

module.exports = {
    sortDesc: function(array, keys) {
        // TODO: only sort for numbers
        return array.sort(function(objA, objB) {
            return compareValues(objA, objB, keys, 0);
        });
    }
};
