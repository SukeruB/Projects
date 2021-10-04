let numbers=[];
function compareNumbers(a,b){
  return a - b;
}

function calculateNumbers(x) {
    if(x == 1){
        let message = "El minimo numero es 1"
        return message
    }else{
        if(x%2==1){
            d = 3 * x;
            c = d + 1;
            let p = numbers.push(c);
            calculateNumbers(c);
        }else{
            c = x/2;
            let p = numbers.push(c);
            calculateNumbers(c);
        }
    }
}

function plot(){
  var trace1 = {
    x: numbers,
    y: numbers,
    type: 'scatter'
  };
  var data = [trace1];
  
  Plotly.newPlot('info', data);
}
const startEcuation = document.getElementById("start");
startEcuation.addEventListener("click", function(){
  numbers.splice(0);
    let x = document.getElementById("number").value;
    calculateNumbers(x);
    plot();
    console.log(numbers);
})
