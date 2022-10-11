import { add } from './lib.mjs'
import assert from 'assert';

console.log('add()\nShould add to numbers')
try{
    assert.strictEqual(add(1,2),3)
    console.log("SUCCESS")
}catch(err){
    console.log("FAIL")
    console.error(err)
}