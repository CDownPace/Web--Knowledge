// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 
// 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead)
{
    // write code here
    if(pHead==null||pHead.next==null){
        return pHead
    }
        
    var head=new ListNode('head');
    head.next=pHead;
    var pre=head;
    var last=pre.next;
    while(last!=null){
        if(last.next!=null&&last.val==last.next.val){
            while(last.next!=null&&last.val==last.next.val){
                last=last.next;
            }
            pre.next=last.next;
            last=last.next;
        }else{
            pre=pre.next;
            last=last.next;
        }
    }
    return head.next
}

// 定义两个变量，pre和last，增加新的头，用来适应第一个节点就重复的情况。
// last.next如果和last相等，就继续向下遍历，不相等则用pre链接起来。