// RIGHT SIDED TRIANGLE, PYTHAGORAS APP //

let inputA = document.getElementById("InputA");
let inputB = document.getElementById("InputB");
let inputC = document.getElementById("InputC");
let result = document.getElementById("Result");
let canvasTriangle = document.getElementById("TriangleCanvas");
let pythagorasButton = document.querySelector("#PythagorasButton");

canvasTriangle.width = 150;
canvasTriangle.height = 100;
const ctxTriangle = canvasTriangle.getContext("2d");
const centerX = canvasTriangle.width / 2;
const centerY = canvasTriangle.height / 2;

pythagorasButton.addEventListener("click", handlePythagorasCalculate);

function handlePythagorasCalculate() {
  const a = parseFloat(inputA.value);
  const b = parseFloat(inputB.value);
  const c = parseFloat(inputC.value);

  let inputCount = 0;
  if (!isNaN(a)) inputCount++;
  if (!isNaN(b)) inputCount++;
  if (!isNaN(c)) inputCount++;

  if (inputCount !== 2) {
    result.innerHTML =
      "Please input exactly two side-values of a right triangle.";
    return;
  }

  let base, height, hypotenuse;
  if (isNaN(c)) {
    hypotenuse = Math.sqrt(a * a + b * b);
    result.innerHTML = `The hypotenuse is ${hypotenuse.toFixed(2)}.`;
    base = a;
    height = b;
  } else if (isNaN(b)) {
    height = Math.sqrt(c * c - a * a);
    result.innerHTML = `The height is ${height.toFixed(2)}.`;
    base = a;
    hypotenuse = c;
  } else {
    base = Math.sqrt(c * c - b * b);
    result.innerHTML = `The base is ${base.toFixed(2)}.`;
    height = b;
    hypotenuse = c;
  }

  drawTriangle(base, height, hypotenuse);
  
}

function drawTriangle(base, height, hypotenuse) {
  if (!isNaN(base) && !isNaN(height) && !isNaN(hypotenuse)) {
    const hypotenuseLength = Math.max(base, height, hypotenuse);
    const canvasTriangleWidth = canvasTriangle.width;
    const canvasTriangleHeight = canvasTriangle.height;
    const scale = hypotenuseLength / Math.min(canvasTriangleWidth, canvasTriangleHeight);

    const position = { x: 0, y: canvasTriangleHeight };
    const h = height / scale;
    const w = base / scale;

    canvasTriangle.style.transition = "width 1s ease-in-out, height 1s ease-in-out";
    canvasTriangle.style.width = canvasTriangleWidth * scale + "px";
    canvasTriangle.style.height = canvasTriangleHeight * scale + "px";

    canvasTriangle.style.opacity = 0;
let opacity = 0;
const fadeInInterval = setInterval(function() {
  if (opacity >= 1) clearInterval(fadeInInterval);
  canvasTriangle.style.opacity = opacity;
  opacity += 0.05;
}, 50);


    clearTriangle();

    const x = position.x * canvasTriangle.width;
    const y = position.y;
    ctxTriangle.beginPath();
    ctxTriangle.moveTo(x, y);
    ctxTriangle.lineTo(x + w, y);
    ctxTriangle.lineTo(x, y - h);
    ctxTriangle.lineTo(x, y);
    ctxTriangle.fillStyle = "transparent";
    ctxTriangle.shadowBlur = 20; 
    ctxTriangle.shadowColor ="green"
    ctxTriangle.fill();
    ctxTriangle.strokeStyle = "green";
    ctxTriangle.stroke();


    
    const animationFrame = () => {
      if (h > 0 && w > 0) {
        ctxTriangle.clearRect(0, 0, canvasTriangle.width, canvasTriangle.height);
        ctxTriangle.beginPath();
        ctxTriangle.moveTo(x, y);
        ctxTriangle.lineTo(x + w, y);
        ctxTriangle.lineTo(x, y - h);
        ctxTriangle.lineTo(x, y);
        ctxTriangle.shadowBlur = 20;
        ctxTriangle.shadowColor = "green";
        ctxTriangle.strokeStyle = "green";
        ctxTriangle.stroke();
        h -= 1;
        w -= 1;
        requestAnimationFrame(animationFrame);
      }
    };

    requestAnimationFrame(animationFrame);
  }
}

function clearTriangle() {
  ctxTriangle.clearRect(0, 0, canvasTriangle.width, canvasTriangle.height); 

}


// Graphing a parabola //

let QuadraticInputA = document.getElementById("QuadraticInputA");
let QuadraticInputB = document.getElementById("QuadraticInputB");
let QuadraticInputC = document.getElementById("QuadraticInputC");
let QuadraticButton = document.querySelector("#GraphButton");
let canvasParabola = document.getElementById("QuadraticGraphCanvas");
canvasParabola.width = canvasParabola.clientWidth;
canvasParabola.height = canvasParabola.clientHeight;

const ctxParabola = canvasParabola.getContext("2d");
const parabolaCenterX = canvasParabola.width / 2;
const parabolaCenterY = canvasParabola.height / 2;

function drawQuadraticGrid() {
  ctxParabola.strokeStyle = "green";
  ctxParabola.clearRect(0, 0, canvasParabola.width, canvasParabola.height);
  
  // Draw the x-axis
  ctxParabola.beginPath();
  ctxParabola.moveTo(0, parabolaCenterY);
  ctxParabola.lineTo(canvasParabola.width, parabolaCenterY);
  ctxParabola.stroke();

  // Draw the y-axis
  ctxParabola.beginPath();
  ctxParabola.moveTo(parabolaCenterX, 0);
  ctxParabola.lineTo(parabolaCenterX, canvasParabola.height);
  ctxParabola.stroke();

  // Draw tick marks and labels for the x-axis
  const numTicksX = 20; // Number of ticks to draw
  const tickSpacingX = canvasParabola.width / numTicksX;
  const tickStartX = tickSpacingX;
  for (let i = 0; i < numTicksX; i++) {
    const tickX = tickStartX + i * tickSpacingX;
    ctxParabola.beginPath();
    ctxParabola.moveTo(tickX, parabolaCenterY - 5);
    ctxParabola.lineTo(tickX, parabolaCenterY + 5);
    ctxParabola.stroke();
    ctxParabola.fillText((i - numTicksX / 2).toString(), tickX - 3, parabolaCenterY + 20);
  }

  // Draw tick marks and labels for the y-axis
  const numTicksY = 20; // Number of ticks to draw
  const tickSpacingY = canvasParabola.height / numTicksY;
  const tickStartY = tickSpacingY;
  for (let i = 0; i < numTicksY; i++) {
    const tickY = tickStartY + i * tickSpacingY;
    ctxParabola.beginPath();
    ctxParabola.moveTo(parabolaCenterX - 5, tickY);
    ctxParabola.lineTo(parabolaCenterX + 5, tickY);
    ctxParabola.stroke();
    ctxParabola.fillText((numTicksY / 2 - i).toString(), parabolaCenterX + 10, tickY + 3);
  }
}
drawQuadraticGrid();

function drawQuadraticParabola(){
const aq = parseFloat(QuadraticInputA.value);
const bq = parseFloat(QuadraticInputB.value);
const cq = parseFloat(QuadraticInputC.value);
ctxParabola.clearRect(0, 0, canvasParabola.width, canvasParabola.height);
  
drawQuadraticGrid();

   // Calculate the y value for each x coordinate on the canvas
   const step = 1;
   const minY = -50;
   const maxY = 50;
   const points = [];
   for (let x = parabolaCenterX + minY; x < parabolaCenterX + maxY; x += step) {
     const y = aq * Math.pow((x - parabolaCenterX), 2) + bq * (x - parabolaCenterX) + cq + parabolaCenterY;
     points.push([x, y]);
   }
 
   const maxOpacity = 1;
   const minOpacity = 0;
   let currentOpacity = minOpacity;

   // Define the animation function
   function animateParabola() {
       // Increase the opacity and draw the parabola
       currentOpacity += 0.01;
       ctxParabola.clearRect(0, 0, canvasParabola.width, canvasParabola.height);
       drawQuadraticGrid();
       ctxParabola.beginPath();
       ctxParabola.strokeStyle = "rgba(0,255,0," + currentOpacity + ")";
       ctxParabola.moveTo(points[0][0], points[0][1]);
       for (let i = 1; i < points.length; i++) {
           ctxParabola.lineTo(points[i][0], points[i][1]);
       }
       ctxParabola.stroke();
   
       // Keep animating until the max opacity is reached
       if (currentOpacity < maxOpacity) {
           requestAnimationFrame(animateParabola);
       }
   }

   // Start the animation
   animateParabola();
}

QuadraticButton.addEventListener("click", drawQuadraticParabola);

body .ProgrammingMath{

  height: 100%;
  width: 100%;
  font-family: 'Kanit', sans-serif;
  color:rgba(16, 150, 67, 0.954)
  }
  
  .ProgrammingListContainer{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%; 
  height : 15%; 
  align-items: start;
  margin : -20px;
  }
  .ProgrammingList{
    list-style: none;
    text-decoration: none;
    justify-content: space-between;
    align-items: start;
    display: flex;
    width: 100%; 
    animation: fade-in 1s ease-in-out forwards;
    text-align: start  ;
    font-size : 15px;
    }
  
  
  .PythagorasHeaderContainer{
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit', sans-serif;
    color:rgba(9, 197, 81, 0.877);
  }
  #PythagorasHeader{
    font-size: 24px;
    text-align: center;
    display : flex;
    align-items: center;
    justify-content: center;
    padding-right : 30px; 
    font-family: 'Kanit', sans-serif;
    color:rgba(9, 197, 81, 0.877);
  }
  .PythagorasFormulaContainer{
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: center ;
    font-family: 'Kanit', sans-serif;
    color:rgba(16, 150, 67, 0.527)
  }
  .PythagorasFormula{
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit', sans-serif;
    color:rgba(16, 150, 67, 0.954);
    font-size: 15px;
  }
  .PythagorasLabelAndInputContainer{
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit', sans-serif;
    color:rgba(9, 197, 81, 0.877);
    opacity : 0.6; 
    padding-top: 195px; 
    padding-bottom: 20px;
  }
  .PythagorasInputLabel{
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit', sans-serif;
    color:rgba(9, 197, 81, 0.877);
    margin-inline: 10px;
  }
  
  .PythagorasInputField{
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit', sans-serif;
    color:rgba(9, 197, 81, 0.877);
  }
  #PythagorasButton{
    display: flex;
    margin-bottom: 10px;
    margin-left : 10px;
    opacity : 0.6;
    background-color: rgba(47, 181, 47, 0.39);
    color:rgb(202, 252, 197);
  }
  .ResultContainer{
    display:flex;
    flex-direction: column; 
    font-family: 'Kanit', sans-serif;
    color:rgba(16, 150, 67, 0.954);
  }
  #Result{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .TriangleContainer{
    display: flex;
     justify-content: center;
     align-items: center;   
  }
  #TriangleCanvas {
    display : flex;
    justify-content: center;
    align-items: center ;
    margin-top: 10px;
    border: 1px solid rgba(46, 250, 97, 0);
    max-width : 220px;
    max-height : 220px;
    min-width: 190px;
    min-height: 190px;
   
  }
  .ParabolaGraphTitleContainer{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ParabolaGraphTitle{
    margin-top: 50px;
    display : flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Kanit', sans-serif;
    color:rgba(9, 197, 81, 0.877);
    font-size : 20px; 
  }
  .QuadraticGraphCanvasContainer{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width : 500px;
  height: 500px; 
  margin : 0 auto; 
  }
  #QuadraticGraphCanvas{
    display : flex;
    flex-direction : row ; 
    align-items: center;
    justify-content: center;
    width: 100%; 
    height : 100%; 
  }
  .QuadraticGraphFormContainer{
    display : flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .QuadraticGraphForm{
    display : flex;
    justify-content: center;
    align-items: center;
    font-family: 'Kanit', sans-serif;
    color:rgba(9, 197, 81, 0.877);
    margin-right : 15px!important; 
  }
  .GraphInputField{
    display : flex;
    align-items: center;
    justify-content: center;
    margin: 10px; 
    font-family: 'Kanit', sans-serif;
    color:rgba(9, 197, 81, 0.877);
    opacity : 0.6; 
  }
  .GraphButton{
    opacity : 0.3;
    background-color: rgba(47, 181, 47, 0.39);
    color:rgb(202, 252, 197);
    font-family: 'Kanit', sans-serif;
  }
  .QuadraticStandardFormContainer{
  display:flex;
  justify-content: center;
  align-items: center;
  }
  .QuadraticStandardForm{
  display:flex;
  justify-content: center;
  align-items: center;
  font-family: 'Kanit', sans-serif;
  color:rgba(9, 197, 81, 0.877);
  margin-bottom : 50px;
  }
  .QuadraticGraphCanvasOutputContainer{
    display : flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .QuadraticGraphCanvasOutput{
    display : flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }
  .CircleFormOutputContainer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Kanit', sans-serif;
    color:rgba(9, 197, 81, 0.877);
    margin-top : 50px;
  }
  .CircleFormContainer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Kanit', sans-serif;
    color:rgba(9, 197, 81, 0.877);
    margin-top : 50px;
  }
  .CircleForm{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Kanit', sans-serif;
  color:rgba(9, 197, 81, 0.877);
  }
  .CalculateCircleCircumferenceButton{
    opacity : 0.3;
    background-color: rgba(47, 181, 47, 0.39);
    color:rgb(202, 252, 197);
    font-family: 'Kanit', sans-serif;
  }
  .CircleCanvasContainer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Kanit', sans-serif;
  color:rgba(9, 197, 81, 0.877);
  
  }
  
  .CircleCanvas{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  .CalculatorContainerTopRow{
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 100px; 
    padding-inline: 10px; 
  
  
  
  }
  .CalculatorContainerMiddleRow{
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
  }
  .CalculatorContainerBottomRow{
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
  }
  .CalculatorContainerOperations{
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
  }
  .CalculatorContainerInput{
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }