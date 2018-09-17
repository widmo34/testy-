// sum 
function sum(a, b) {
    if(!isFinite(a) || (!isFinite(b))){
        return   null;
    }
    return Number(a) + Number(b);
}




function assert(received, expected){
  
    if(received === expected){
        console.log('test passed ' + received);
    }else{
        console.log(`test failed. Expecting ${expected} but received ${received}`);
    }
}

assert(sum(1, 2), 3);
assert(sum('10', '5'), 15);
