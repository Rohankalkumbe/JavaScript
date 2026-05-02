for(let i=1; i<=6; i++)
{
    let result = "";
    for(let j=1; j<=6-i; j++)
    {
        //result=result+j;
        if(j%2==0)
        {
            result=result+"G"+" ";
        }
        else{
            result=result+"R"+" ";
        }
    }
    console.log(result);
}