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
    // 定义两个节点，第一个指向下一个，第二个指向下两个。如果两个能碰到就是环链表
    // 确定碰到的地方，让第二个指回头部，第二个从头部出发，第一个从相遇处出发，再次碰到就是入口节点。


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