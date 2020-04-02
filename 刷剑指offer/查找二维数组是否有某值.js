function Find(target, array)
{
    var array1=target;
    var target1=array
    // write code here
    for(var i=0;i<target1.length;i++){
        for(var j=0;j<target1[i].length;j++){
            if(target1[i][j]==array1){
                return true
            }
        }
    }
    
}