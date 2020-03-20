function printListFromTailToHead(head)
{
    var current=head
    var arr=[]
    while(current){
        arr.push(current.val)
        current=current.next
    }
     return arr.reverse()
}