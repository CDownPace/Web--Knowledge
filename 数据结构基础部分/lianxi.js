var LikeList=function(){
this.head=null
this.length=0


var Node=function(element){
  this.element=element
  this.next=null
}

this.append=function(element){
  var node =new Node(element)
  
  if(head==null){
    head=node

  }else{
    var current=head
    while(current.next){
      current=current.next
    }
    current.next=node
  }
  length++
}

this.insert=function(){
  return head
}


this.insert=function(position,element){
  if(position>-1&&position<length){
    var node=new Node(element)
    if(position==0){
      var current=head
      head=node
      head.next=current
    }else{
      var index=0;
      var current=head;
      var previous=null
      while(index<position){
        previous=current
        current=current.next
        index++
      }
      previous.next=node
      node.next=current

    }
    length++
  }
}

}