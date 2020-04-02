var a=1;
console.log(1);
setTimeout(function () {
    console.log(2);
},0);
function fun() {
    console.log(3);
    setTimeout(function () {
        console.log(4);
    },0);
    for (var i=0;i<10000;i++){
        a++;
    }
    console.log(5);
    return a;
};
console.log(6);
console.log(fun());