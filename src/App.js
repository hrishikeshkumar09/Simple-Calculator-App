import React,{useState} from 'react';
import './App.css';

function App() {

  const [result,setResult]=useState("");

  const clickHandler=(e)=>{
    setResult(result+e.target.value);
  }

  const delHandler=()=>{
    setResult(result.slice(0,result.length-1));
  }

  const clearHandler=()=>{
    setResult("");
  }

  const resultHandler=()=>{
    let i=0;
    while(i<result.length)
    {    
        if(result.charAt(i)==='-' || result.charAt(i)==='+' || result.charAt(i)==='*' || result.charAt(i)==='/')
          break;
        i++;
    }      
    var k=parseFloat(result.slice(0,i));
    var m=result.charAt(i);
    var n=parseFloat(result.slice(i+1,result.length));
    var str=k+m+n;
    setResult(eval(str).toString());
  }

  return (
    <>
    <div class="head">
      <h1>CALCULATOR</h1>
    </div>
    <div class='calc'>
      <input type='text' placeholder='0' value={result} class='disp'/>
      <div class='btnclass'>
        <input type='button' value='/' class='btn' onClick={clickHandler}/>
        <input type='button' value='*' class='btn' onClick={clickHandler}/>
        <input type='button' value='-' class='btn' onClick={clickHandler}/>
        <input type='button' value='+' class='btn' onClick={clickHandler}/>
        <input type='button' value='.' class='btn' onClick={clickHandler}/>
        <input type='button' value='9' class='btn' onClick={clickHandler}/>
        <input type='button' value='8' class='btn' onClick={clickHandler}/>
        <input type='button' value='7' class='btn' onClick={clickHandler}/>
        <input type='button' value='6' class='btn' onClick={clickHandler}/>
        <input type='button' value='5' class='btn' onClick={clickHandler}/>
        <input type='button' value='4' class='btn' onClick={clickHandler}/>
        <input type='button' value='3' class='btn' onClick={clickHandler}/>
        <input type='button' value='2' class='btn' onClick={clickHandler}/>
        <input type='button' value='1' class='btn' onClick={clickHandler}/>
        <input type='button' value='0' class='btn' onClick={clickHandler}/>
        <input type='button' value='Clear' class='btn1' onClick={clearHandler}/>
        <input type='button' value='Del' class='btn1' onClick={delHandler}/>
        <input type='button' value='=' class='btn1' onClick={resultHandler}/>
      </div>
    </div>
    </>
  );
}

export default App;
