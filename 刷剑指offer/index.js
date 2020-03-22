function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
   
    
    
    
    for(var i=0;i<numbers.length-1;i++){
        for(var j=i;j<numbers.length-1;j++){
            if(numbers[i]==numbers[j]){
                duplication[0]=numbers[i]
                console.log(true) 
                console.log(duplication[0])
            }
        }
    }
    // console.log(false) 
}





duplicate([1,2,1,4],-1)

    