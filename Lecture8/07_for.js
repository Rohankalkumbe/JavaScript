for(let i=1;i<=5;i++)
{
    result="";
    let ch = "A";
    for(let j=1;j<=6-i;j++)
    {
        result=result+ch+" ";
        ch=String.fromCharCode(ch.charCodeAt(0)+1);
    }
    console.log(result);
}