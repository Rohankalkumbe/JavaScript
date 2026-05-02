let x1=[[1,2,3,4],[4,5,6,7],[7,8,9,10]]
let x2=[[1,2,3,4],[4,5,6,7],[7,8,9,10]]

for(let i=0;i<3;i++)
{
    let result=''
    for(let j=0;j<4;j++)
    {
        result=result+((x1[i][j])+(x2[i][j]))+ " ";
    }
    console.log(result)
}