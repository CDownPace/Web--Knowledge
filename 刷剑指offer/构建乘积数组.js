function multiply(array)
{
    if(array.length<1){
        return [];
    }
    let barray=[1];//第一个元素是1
    for(let i=1;i<array.length;i++){
        barray[i]=barray[i-1]*array[i-1];
    }
    let temp=1;
    for(let j=array.length-2;j>=0;j--){
        temp*=array[j+1];
        barray[j]*=temp;
    }
    return barray;
}