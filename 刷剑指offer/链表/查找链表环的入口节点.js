// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    // write code here
    if(pHead==null||pHead.next==null||pHead.next.next==null){
        return null 
    }
    let fast =pHead.next.next;
    let slow=pHead.next;
    while(fast&&slow){
        if(fast!=slow){
        fast=fast.next.next;
        slow=slow.next
        }else{
        break;
    }
        
    }
    fast=pHead;
    while(fast!=slow){
        fast=fast.next;
        slow=slow.next;
    }
    return fast
}