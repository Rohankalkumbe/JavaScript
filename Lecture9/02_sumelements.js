let even=0;
let odd=0;
for (let i=0; i<=10; i++)
{
    //s = s + i;

    if(i%2==0)
        even = even + i;
    else
        odd = odd + i;
}
console.log("Sum of Even numbers is: "+ even + " Sum of odd numbers is: "+ odd);