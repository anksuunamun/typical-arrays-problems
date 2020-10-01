exports.min = function min(array) {
    if (Array.isArray(array) && array.length !== 0) {
        for (let item of array) {
            if (typeof item !== "number") {
                return 0;
            }
        }
        let temporaryMin = array[0];
        for (let item of array) {
            if (item < temporaryMin) {
                temporaryMin = item;
            }
        }
        return temporaryMin;
    } else return 0;
}

exports.max = function max(array) {
    if (Array.isArray(array) && array.length !== 0) {
        for (let item of array) {
            if (typeof item !== "number") {
                return 0;
            }
        }
        let temporaryMax = array[0];
        for (let item of array) {
            if (item > temporaryMax) {
                temporaryMax = item;
            }
        }
        return temporaryMax;
    } else return 0;
}

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length !== 0) {
        for (let item of array) {
            if (typeof item !== "number") {
                return 0;
            }
        }
        let average = 0;
        for (let item of array) {
            average += item;
        }
        return average / array.length;
    } else return 0;
}
