var btn = document.getElementById("calculate");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var addTwoNumbers = function (num1, num2) {
    console.log(input1, typeof input1, input2, typeof input2);
    var res = document.getElementById("result");
    res.innerHTML = "<h1>The Sum Of The Numbers Given Are ".concat(num1 + num2, "</h1>");
};
btn.addEventListener("click", function () { return addTwoNumbers(+input1.value, +input2.value); });
