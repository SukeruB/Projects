let numbers=[];
let numberGraph=[];
let h = 0;
let i = 0;
let ans ;
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
    trace1 = {
        type: 'scatter',
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        mode: 'lines',
        name: 'Red',
        line: {
          color: 'rgb(219, 64, 82)',
          width: 3
        }
      };
      
      trace2 = {
        type: 'scatter',
        x: [1, 2, 3, 4],
        y: [12, 9, 15, 12],
        mode: 'lines',
        name: 'Blue',
        line: {
          color: 'rgb(55, 128, 191)',
          width: 1
        }
      };
      
      var layout = {
        width: 500,
        height: 500
      };
      
      var data = [trace1, trace2];
      
      Plotly.newPlot('info', data, layout);
}

function evaluateNumber(){
  h = Math.max(...numbers);
  i = Math.min(...numbers);
}

function createGhostArray(){
  console.log("entre")
  if(h<50){
    let Decrease = 50;
    for(let o=0; o<11; o++){
      Decrease-=5;
      let addNumber = numberGraph.push(Decrease+5);
    }
  } else if(h<100 && h>50){
    let Decrease = 100;
    for(let o=0; o<11; o++){
      Decrease-=10;
      let addNumber = numberGraph.push(Decrease+10);
    }
  }else if(h<250 && h>100){
    let Decrease = 250;
    for(let o=0; o<26; o++){
      Decrease-=25;
      let addNumber = numberGraph.push(Decrease+25);
    }
  }else if(h<500 && h>250){
    let Decrease = 500;
    for(let o=0; o==11; o++){
      Decrease-=50;
      let addNumber = numberGraph.push(Decrease+50);
    }
  }else if(h<1000 && h>500){
    let Decrease = 1000;
    for(let o=0; o<11; o++){
      Decrease-=100;
      let addNumber = numberGraph.push(Decrease+100);
    }
  }else if(h<5000 && h>1000){
    let Decrease = 5000;
    for(let o=0; o<11; o++){
      Decrease-=500;
      let addNumber = numberGraph.push(Decrease+500);
    }
  }else if(h<10000 && h>5000){
    let Decrease = 10000;
    for(let o=0; o<11; o++){
      Decrease-=1000;
      let addNumber = numberGraph.push(Decrease+1000);
    }
  }
}

const startEcuation = document.getElementById("start");
startEcuation.addEventListener("click", function(){
    let x = document.getElementById("number").value;
    calculateNumbers(x);
    evaluateNumber();
    createGhostArray();
    //plot();
    console.log(numbers);
    console.log(h);
    console.log(i);
    console.log(numberGraph);
})
