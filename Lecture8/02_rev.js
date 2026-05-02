let num= 4081315

let rev='';

while(num>0) // while(num !=0 )
{
    rev = rev + num%10;
    num = parseInt(num/10);
}
console.log(rev);