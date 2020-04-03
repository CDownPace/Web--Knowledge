function ReverseList(pHead)
{
var current=pHead
var newHead=null
var t=null
while(current){
    
    t=current.next
    
    current.next=newHead
    newHead=current
    current=t
}
    return newHead
    
}

