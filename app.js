const express = require('express')
const math = require('./math')

const app = express();

app.use(express.json());

app.get('/mean', function (req, res) {
    let mean;
    let nums = req.query.nums;
    if (!nums) {
        return res.status(400).send("Nums are required.")
    }
    let numsArr = nums.split(',');
    for (let num of numsArr) {
        num = +num;
        if (isNaN(num)) {
            return res.status(400).send("Not a valid number.")
        }
    }
    mean = math.findMean(numsArr);
    return res.json({operation: "mean", value: `${mean}`})
})


app.get('/median', function (req, res) {
    let median;
    let nums = req.query.nums;
    if (!nums) {
        return res.status(400).send("Nums are required.")
    }    
    let numsArr = nums.split(',');
    for (let num of numsArr) {
        num = +num;
        if (isNaN(num)) {
            return res.status(400).send("Not a valid number")
        }            
    }
    median = math.findMedian(numsArr);
    return res.json({operation: "median", value: `${median}`});
})


app.get('/mode', function (req, res) {
    let mode;
    let nums = req.query.nums;
        if (!nums) {
        return res.status(400).send("Nums are required.")
    }
    let numsArr = nums.split(',')
    
    for (let i = 0; i < numsArr.length; i++) {
        let num = +numsArr[i];
        if (isNaN(num)) {
            return res.status(400).send("Not a valid number")
        }
    }
    mode = math.findMode(numsArr);
    return res.json({operation: "mode", value: `${mode}`});
})



app.listen(3000, () => {
    console.log('App on port 3000');
})