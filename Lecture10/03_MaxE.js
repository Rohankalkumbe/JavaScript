let num=[23, 50, 11, 45, 37]
mx = 0

for(let item of num)
{
    if(mx<item)
    {
        mx=item;
    }
}
console.log(mx)