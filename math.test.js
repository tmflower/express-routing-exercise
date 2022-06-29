const { findMean, findMedian, findMode } = require("./math");

test('should return mean', () => {
    let mean = findMean([1, 2, 3, 4, 5, 6, 7]);
    expect(mean).toEqual(4);
});

test('should return median', () => {
    let median = findMedian([1, 2, 3, 4, 5, 6, 7]);
    expect(median).toEqual(4);
})

test('should return mode', () => {
    let median = findMedian([1, 2, 2, 2, 5, 6, 7]);
    expect(median).toEqual(2);
})