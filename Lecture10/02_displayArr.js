// Display Array Elements

let x = [1,2,4,8,3];

for(let i=0;i<x.length;i++)
{
    console.log(x[i]);
}

console.log("Array with for of loop");

for(let elements of x)
{
    console.log(elements);
}

console.log("Array with for in loop");

for(let index in x)
{
    console.log(x[index]);
}

console.log("Array with ForEach loop");

x.forEach((item)=>{
    console.log(item);
})