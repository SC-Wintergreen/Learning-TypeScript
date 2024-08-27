const btn = document.getElementById("calculate") as HTMLButtonElement;
const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;

const addTwoNumbers = (num1:number,num2:number) => {
  console.log(input1, typeof input1, input2, typeof input2);
  const res = document.getElementById("result") as HTMLDivElement;

  res.innerHTML = `<h1>The Sum Of The Numbers Given Are ${
   num1 + num2
  }</h1>`;
};

btn.addEventListener("click",()=> addTwoNumbers(+input1.value,+input2.value));
