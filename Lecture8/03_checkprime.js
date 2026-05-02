// If the number is not divisible by range 2 to num-1 then it is prime
// If the number is divisible 1 and itself then it is prime

let num = 10;
let i = 2;
let result = "Prime";

while(i<num)
{
    if(num%i==0)
    {
        r = "Not Prime";
        break;
    }
    i++;
}
console.log(result);
