const { add } = require('../math')

// test takes in 2 parameters: 
// 1.Statement explaining the test case
// 2.Statement is a call back function that has a scenario test.
test("Additition of 2 numbers",() =>{
    expect(add(90,10)).toBe(100)
} )