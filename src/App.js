//import logo from './logo.svg';
import { useEffect, useState} from 'react';
import './App.css';
//import Condition from './Condition';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const arr = ["one", "two", "three", "four", "five", "six"];
function App() {
  const [value, setValue] = useState('six');
  const [value2, setValue2] = useState('six');
  const [total, setTotale] = useState(0);
  const [amount, setAmount] = useState(0);
  const [less, setLess] = useState(false);
  const [equal, setEqual] = useState(false);
  const [greater, setGreater] = useState(false);
  const [wallet, setWallet] = useState(100);
  
  
    function myfunc(){

      if(wallet>=10){ 

      const a = Math.floor(Math.random()*6);
      const b = Math.floor(Math.random()*6);
      console.log(a);
      setValue(arr[a]);
          setValue2(arr[b]);
      setTotale(a+b+2);
      setTimeout(()=>{
         setTotale(0);
      },3000);
          
      }
         
         
    
  }
  function funcCheck(e){
         setLess(e.target.value);
         setEqual(false);
         setGreater(false);
  }
  function funcheckSev(e){
    setEqual(e.target.value);
     setLess(false);
    setGreater(false);
  }
  function funcheckgr(e){
    setGreater(e.target.value);
    setEqual(false);
     setLess(false);
  }
 
  useEffect(()=>{
  //   if(less && total<7){
  //     setWallet(wallet+amount);
  //     console.log(setWallet);
  //     console.log(wallet);
  // }  
  if(wallet>=10){ 
  if(less){

    total<7 && total>1 ?   setWallet(prevs=> prevs + (+amount)) : setWallet(wallet-amount) 
    
    
 } 
 if(equal){

  total === 7 ? setWallet(prevs=> prevs + (+amount*3)) : setWallet(wallet-amount)
  
   console.log(wallet);
   console.log(typeof amount);
 
}  
if(greater){

  total > 7 ? setWallet(prevs=> prevs + (+amount)) : setWallet(wallet-amount)
  
   console.log(wallet);
   console.log(typeof amount);

}  
 
  }
 
  },[total])
  
  return (
    <div className="App">
      <h1>Dice Game</h1>
      <div className='walletMoney'>
      <div>
    <span className='wallet'> Wallet :- </span> <span className='totalMoney' >{wallet}</span>
   </div>
    {/* <input className='totalMoney' value={wallet} onChange={(e)=>setAmountVal(e)} ></input> */}
    </div>
     <div className='dice'> 
     <div className='firstDice'> <i className={`fa-solid fa-dice-${value}`}></i></div>
    <div className='secondDice'> <i className={`fa-solid fa-dice-${value2}`}></i></div>
    </div>
    <h1>Total :- {total}</h1>
    
      {/* <Condition total={total}/> */}
     
    
     
        <> 
        <div className='condition'>
          <div> 
          <input type="radio" name='hello' value={less} onChange={(e)=>funcCheck(e)} ></input> <span>Less than 7</span> </div>
          <div> 
          <input type="radio" name='hello' value={equal} onChange={(e)=>funcheckSev(e)}></input> <span> Equal to 7</span>
          </div>
          
          <div>
          <input type="radio" name='hello' value={greater} onChange={(e)=>funcheckgr(e)}></input><span>Greater than 7</span> </div>
    
         
         
        </div>
        <div className='amount'>Enter Amount :- 
        <input type="number" min="10" max="20" className='inputvalue' value={amount} onChange={(e)=>setAmount(e.target.value)} />
        <button onClick={()=>myfunc()} className='btn'>Place bet</button>
        </div>
        </>
     
      
    </div>
  );
}

export default App;
