<<<<<<< HEAD
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
=======
var b = 10;
(function b() {
  b = 20;
  console.log(b)
})()
>>>>>>> 9582fdf3798c5da69881bdced081bfd5d496ca61
