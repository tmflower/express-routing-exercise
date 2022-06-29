function findMean(nums) {    
    let sum = 0;
    for (let num of nums) {
        num = +num;
        sum += num;       
    }
    let mean = sum/nums.length;
    return mean;
}


function findMedian(nums) {
    let sorted = nums.sort(function(a, b) {
        return a - b;
      });
    if (sorted.length % 2 === 0) {
        let higher = +sorted[Math.floor(nums.length/2)];
        let lower = +sorted[Math.floor(nums.length/2) -1];
        median = (higher + lower)/2; 
    }
    else {
        median = +sorted[Math.floor(nums.length/2)];
    }
    return median;
}


function findMode(nums) {
    let numCount = {};
    for (let num of nums) {
        if (numCount[num]) {
            numCount[num]++;
        }
        else {
            numCount[num] = 1;
        } 
    }         
    let counts = (Object.values(numCount));
    let max = Math.max(...counts)
    let mode = Object.keys(numCount).filter(key => numCount[key] === max)
    return mode;
    }


module.exports = {
    findMean,
    findMedian,
    findMode
}