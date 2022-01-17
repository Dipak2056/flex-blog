// array popping and pushing
let a = ['a','b', 'c'];
let b = ['d','e','f']
let c="ram"
console.log(a.concat(b,c));

// array slice and splice method 
let first = ['a','b','c','d']

// lets see the splice method first 
console.log(first.splice(2,0,'kiwi','apple'));
console.log(first);
//we can also add the splice method to remove the element
//simply we add the values to the second args
//in splice method, this method donot returns the array with the hole

console.log(first.splice(0,1));
console.log(first);
//expected output is b kiwi apple c d

console.log(first.slice(2));
console.log(first);
console.log(first.slice(1,3));
//sorting numbers
//it is easy to sort the string but its hard for num
//so we use the function as a arguments here
let nums = [40,50,100,190];
console.log(nums.sort())
//this is wrong approach as the 100 is shown at the first 
// so we do like 
console.log(nums.sort((a,b)=> b-a));
//this also returns the max number
console.log(nums[0]);
console.log(maximumfunction(first));
function maximumfunction(arr){
     Math.max.apply(null,arr);
}
//we are performing the array iteration forEach() method
let numbers = [45,4,5,6,7];
let by2 = [];
numbers.map(myFunction);
function myFunction(val){
    by2 += val*2 
}
console.log(by2);