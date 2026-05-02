// Write a program check number is divisible by 3, 5 and 9 with all combination?

let num = 37;
let result="";

if(num%3==0)
{
    result=result+"Number is divisible by 3 \n";
}
if(num%5==0)
    {
        result=result+"Number is divisible by 5 \n";
    }
if(num%9==0)
            {
                result = result+"Number is divisible by 9 \n";
            }

if (result == "")
    result = "Number is not divisible";

console.log(result);