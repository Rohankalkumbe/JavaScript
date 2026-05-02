let student = {rno:1001, name:"Rohan Kalkumbe", branch:"CSE", fees:90000}

for(let key in student)
{
    console.log(key,student[key]);
}


// Example 2 Array two object

let stud= [
    {rno:1001, name:"Rohan", branch:"CSE", fees:90000},
    {rno:1002, name:"Gayatri", branch:"CSE", fees:70000}
]

stud.forEach((item)=>
{
    // console.log(item)
    for(let key in item)
    {
        console.log(key, item[key]);
    }
})

// Example 3 object to array

var products={
    user:[{uid:1,uname:"Rohan"},{uid:2,uname:"Gayatri"}],
    product:[{uid:1,pname:"XYZ"},{uid:2,pname:"ABC"}]
}

products.user.forEach(item=>
{
    console.log(item);
}
)

products.product.forEach(item=>
{
    // console.log(item);
    for(let key in item)
    {
        console.log(key,item[key]);
    }
}
)