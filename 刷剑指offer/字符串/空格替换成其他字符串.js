// 请实现一个函数，将一个字符串中的每个空格替换成“%20”。
// 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
function replaceSpace(str)
{
    // write code here
    var arr1=str.split(' ')
    var arr2=arr1.join('%20')
    return arr2
}