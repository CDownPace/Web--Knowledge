// 请实现一个函数用来找出字符流中第一个只出现一次的字符。
// 例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。
// 当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。
//Init module if you need
let arr=[];
let obj={}
function Init()
{
    // write code here
    arr=[];
    obj={};
}
//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    arr.push(ch);
    if(!obj[ch]){
        obj[ch]=1;
    }else{
        obj[ch]++;
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]===1) return arr[i];
    }
    return '#';
}