import './App.css';
import Header from './Components/Header';
import { useState , useEffect } from "react";
import Box from './Components/Box';
import Button from './Components/Button';

function App() {
  const intial = ["", "", "", "", "", "", "", "", ""];
  const [cur, updatecur] = useState(intial);
  const [turn,setturn] = useState(false);
  const [winner,setwinner] =useState(false);

  useEffect(()=>
  {
    if(winner)
    {
      if(turn)
      {
        alert('Player 1 Wins');
      }
      else
      {
        alert('Player 2 Wins');
      }
      updatecur(intial);
      setwinner(false);
      setturn(false);
    }
  },[winner])

  const checkwinner = () =>
  {
    let a=cur;
    let b=[[a[0],a[1],a[2]],[a[3],a[4],a[5]],[a[6],a[7],a[8]]];
    for(let i=0;i<3;++i)
    {
      if((b[i][1]===b[i][2])&&(b[i][0]===b[i][1])&&(b[i][0]!==""))
      {
        setwinner(true);
      }
    }
    for(let i=0;i<3;++i)
    {
      if((b[1][i]===b[2][i])&&(b[0][i]===b[1][i])&&(b[0][i]!==""))
      {
        setwinner(true);
      }
    }
    if((b[0][0]===b[1][1])&&(b[1][1]===b[2][2])&&(b[0][0]!==""))
    {
      setwinner(true);
    }
    if((b[0][2]===b[1][1])&&(b[1][1]===b[2][0])&&(b[1][1]!==""))
    {
      setwinner(true);
    }
  };

  const reset = () =>
  {
    updatecur(intial);
    setwinner(false);
  };
  
  const change = (idx) => {
    let a=cur;
    if(a[idx]!=="")
    {
      return;
    }
    if(turn)
    {
      a[idx]='X';
      setturn(false);
    }
    else
    {
      a[idx]='0';
      setturn(true);
    }
    updatecur(a);
    checkwinner();
  };
  return (
    <>
    <Header/>
    <div className='board'>
    <div className='container'>
    <Box tempid='box1' method={()=>change(0)} content={cur[0]}/>
    <Box tempid='box2' method={()=>change(1)} content={cur[1]}/>
    <Box tempid='box3' method={()=>change(2)} content={cur[2]}/>
    </div>
    <div className='container'>
    <Box tempid='box4' method={()=>change(3)} content={cur[3]}/>
    <Box tempid='box5' method={()=>change(4)} content={cur[4]}/>
    <Box tempid='box6' method={()=>change(5)} content={cur[5]}/>
    </div>
    <div className='container'>
    <Box tempid='box7' method={()=>change(6)} content={cur[6]}/>
    <Box tempid='box8' method={()=>change(7)} content={cur[7]}/>
    <Box tempid='box9' method={()=>change(8)} content={cur[8]}/>
    </div>
    </div>
    <Button temp={() => reset()}/>
    </>
  );
}

export default App;
