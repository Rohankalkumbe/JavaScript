let pin=481315

let max=0;

while(pin>0) // while(pin !=0 )
{
    let rem = pin%10;
    if(max<rem)
        max=rem;
    pin = parseInt(pin/10);
}
console.log(max);