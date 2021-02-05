class Calculator{
  getValues(){
    let n1 = document.getElementById("number1").value;
    let n2 = document.getElementById("number2").value;
    console.log("First number's type in input: " + typeof n1);
    console.log("Second number's type in input: " + typeof n1);


    if(isNaN(n1) || isNaN(n2)){
      console.error("Values have to be numbers.");
    }

    return this.convertToNumber(n1, n2);
  }

  updateResult(r){
    document.getElementById("result").value = r;
  }

  convertToNumber(...strings){
    console.log("...rest operator: " + strings);
    let result = strings.map(function (string) {
      let number = Number(string);
      return number;
    });

    console.log("First number's type after converting: " + typeof result[0]);
    console.log("Second number's type after converting: " + typeof result[1]);
    return result;
  }

}

let calculator = new Calculator();

let methodSelect = document.getElementById("method");
let equalsBtn = document.getElementById("equals");
let method = methodSelect.value;
const one = 1;

methodSelect.addEventListener("change", () => { method = methodSelect.value; }, false);

equalsBtn.addEventListener("click", () => {
  let values = calculator.getValues();
  plus();

  switch (method) {
    case '+':
      calculator.updateResult(values[0] + values[1]);
      break;
    case '-':
      calculator.updateResult(values[0] - values[1]);
      break;
    case '*':
      calculator.updateResult(values[0] * values[1]);
      break;
    case '/':
      calculator.updateResult(values[0] / values[1]);
      break;
  }
}, false);

let plus =(function(){
 let sum = 0;

return function(){
  sum += one;
  let times = sum > 1 ? (sum == 2 ? "twice" : sum + " times") : "once";
  return console.log("Calculator has been used " + times);
}
})();
