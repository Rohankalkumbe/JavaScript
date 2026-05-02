let s = "123456";
let s1 = "614352";
let res = "Anagram Number";

if(s.length == s1.length)
{
    for(let i=0; i<s.length;i++)
    {
        //console.log(s.charAt(i));
        let c = 0;
        for(let j=0;j<s1.length;j++)
        {
            if(s.charAt(i) == s1.charAt(j))
            {
                c=1;
            }
        }
        if(c==0)
        {
           res = "Not Anagram Number";
           break; 
        }
    }  
}

else
{
    res = "Not Anagram Number";
}

console.log(res)

