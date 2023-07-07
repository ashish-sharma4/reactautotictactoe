import React ,{useState}from 'react';

export default function Home() {

  const [click,setClick] = useState(0);
  const [cross,setCross] = useState([]);
  const [circle,setCircle] = useState([]);

  const includesAll = (arr, values) => values.every(v => arr.includes(v));

  const decideWinner = (arr) => {
    if(includesAll(arr,['0','1','2']) || includesAll(arr,['3','4','5']) || includesAll(arr,['6','7','8']) || includesAll(arr,['0','3','6']) || includesAll(arr,['1','4','7']) || includesAll(arr,['2','5','8']) || includesAll(arr,['0','4','8']) || includesAll(arr,['2','4','6'])){
      return true;
    }else{
      return false;
    }
  }

  if(decideWinner(cross)){
    const btn = document.getElementById("start")
    btn.style.display = "block";

    const winner = document.getElementById("winner")
    winner.innerHTML = "Cross Is Winner";
  }else if(decideWinner(circle)){
    const btn = document.getElementById("start")
    btn.style.display = "block";

    const winner = document.getElementById("winner")
    winner.innerHTML = "Circle Is Winner";
  }else if(click == 9 ){
    const btn = document.getElementById("start")
    btn.style.display = "block";

    const winner = document.getElementById("winner")
    winner.innerHTML = "Draw";
  }

  const handleClick = (e) => {
    setClick(click+1);
    if(click % 2 != 0){
      e.target.innerHTML = "O";
      setCircle([...circle,e.target.name]);
      e.target.disabled = true;
    }else{
      e.target.innerHTML = "X";
      setCross([...cross,e.target.name]);
      e.target.disabled = true;
    }
  }

  const handleStart = () => {
    const buttons = document.getElementsByClassName("btn");

    buttons[1].innerHTML = "/";
    buttons[2].innerHTML = "/";
    buttons[3].innerHTML = "/";
    buttons[4].innerHTML = "/";
    buttons[5].innerHTML = "/";
    buttons[6].innerHTML = "/";
    buttons[7].innerHTML = "/";
    buttons[8].innerHTML = "/";
    buttons[9].innerHTML = "/";

    buttons[1].disabled = false;
    buttons[2].disabled = false;
    buttons[3].disabled = false;
    buttons[4].disabled = false;
    buttons[5].disabled = false;
    buttons[6].disabled = false;
    buttons[7].disabled = false;
    buttons[8].disabled = false;
    buttons[9].disabled = false;

    const winner = document.getElementById("winner");
    winner.innerHTML = "";

    const start = document.getElementById("start");
    start.style.display = "none";

    setCross([]);
    setCircle([]);
    setClick(0);
  }

  return (
      <div class="container bg-dark" style={{width : "40%",marginTop : "100px"}}>
       <h1 className='text-light text-center'>Tic-Tac-Toe</h1>

       <h1 className='text-center' style={{color : "yellow"}} id='winner' data-testid = "winner"></h1> 

       <button className='btn btn-primary mx-auto my-2' style={{display : "none"}} data-testid = "start" id="start" onClick = {handleStart}>Start A New Game</button> 

  <div class="row">
    <button className='btn btn-dark col' style={{border : "1px solid white"}} name = {0} id = "button-1" onClick={(e) => {handleClick(e)}} data-testid = "button-1">/</button>
    <button className='btn btn-dark col' style={{border : "1px solid white"}} name = {1} id = "button-2" onClick={(e) => {handleClick(e)}} data-testid = "button-2">/</button>
    <button className='btn btn-dark col' style={{border : "1px solid white"}} name = {2} id = "button-3" onClick={(e) => {handleClick(e)}} data-testid = "button-3">/</button>
    <div class="w-100"></div>
    <button className='btn btn-dark col' style={{border : "1px solid white"}} name = {3} id = "button-4" onClick={(e) => {handleClick(e)}} data-testid = "button-4">/</button>
    <button className='btn btn-dark col' style={{border : "1px solid white"}} name = {4} id = "button-5" onClick={(e) => {handleClick(e)}} data-testid = "button-5">/</button>
    <button className='btn btn-dark col' style={{border : "1px solid white"}} name = {5} id = "button-6" onClick={(e) => {handleClick(e)}} data-testid = "button-6">/</button>
    <div class="w-100"></div>
    <button className='btn btn-dark col' style={{border : "1px solid white"}} name = {6} id = "button-7" onClick={(e) => {handleClick(e)}} data-testid = "button-7">/</button>
    <button className='btn btn-dark col' style={{border : "1px solid white"}} name = {7} id = "button-8" onClick={(e) => {handleClick(e)}} data-testid = "button-8">/</button>
    <button className='btn btn-dark col' style={{border : "1px solid white"}} name = {8} id = "button-9" onClick={(e) => {handleClick(e)}} data-testid = "button-9">/</button>
  </div>
</div>

  );
}
