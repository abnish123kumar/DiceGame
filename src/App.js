//import logo from './logo.svg';
import { useState} from 'react';
import './App.css';
//import Condition from './Condition';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const arr = ["one", "two", "three", "four", "five", "six"];
function App() {
  const [value, setValue] = useState('six');
  const [value2, setValue2] = useState('six');
  
  const [amount, setAmount] = useState(0);
  const [check, setCheck] = useState();
  
  const [wallet, setWallet] = useState(100);
  
   
    function myfunc(){

      if(wallet>=10 && amount<=wallet){ 

      const a = Math.floor(Math.random()*6);
      const b = Math.floor(Math.random()*6);
      console.log(a);
      setValue(arr[a]);
          setValue2(arr[b]);
      //setTotale(a+b+2);
      const  total = a+b+2;
      setWallet((prev)=>{
        console.log(check);
        console.log(total);
          if(check==="less" && total<7){
            
            console.log(total);
              return prev+(amount*1.5);
              // alert(`Result : ${total} \n winning Amount : ${prev+(amount*2.5)}`)
          }else if(check==="equal" && total===7){
            return prev+(amount*4.5);
          } else if(check==="greater" && total>7){
            return prev+(amount*1.5);
          }
          return prev-amount;
        
        
      })
      // setTotale(0);
          
      }
      else{
          document.querySelector(".error").textContent = "insufficient amount in wallet";
          document.querySelector(".error").style.color = "red";
      }   
         
    
  }
  // function funcCheck(e){
  //        setLess(e.target.value);
  //        setEqual(false);
  //        setGreater(false);
  // }
  // function funcheckSev(e){
  //   setEqual(e.target.value);
  //    setLess(false);
  //   setGreater(false);
  // }
  // function funcheckgr(e){
  //   setGreater(e.target.value);
  //   setEqual(false);
  //    setLess(false);
  // }

 
//   useEffect(()=>{
//   //   if(less && total<7){
//   //     setWallet(wallet+amount);
//   //     console.log(setWallet);
//   //     console.log(wallet);
//   // }  \
//   console.log("hello");
//   if(wallet>=10){ 
//   if(less){

//     total<7 && total>1 ?   setWallet(prevs=> prevs + (+amount)) : setWallet(wallet-amount) 
    
    
//  } 
//  if(equal){

//   total === 7 ? setWallet(prevs=> prevs + (+amount*3)) : setWallet(wallet-amount)
  
//    console.log(wallet);
//    console.log(typeof amount);
 
// }  
// if(greater){

//   total > 7 ? setWallet(prevs=> prevs + (+amount)) : setWallet(wallet-amount)
  
//    console.log(wallet);
//    console.log(typeof amount);

// }  
 
//   }
 
//   },[total])
  
  return (
    <div className="App">
      <h1>Dice Game</h1>
      <div className='walletMoney'>
      <div>
    <span className='wallet'> Wallet :- {wallet}</span> 
   </div>
    {/* <input className='totalMoney' value={wallet} onChange={(e)=>setAmountVal(e)} ></input> */}
    </div>
     <div className='dice'> 
     <div className='firstDice'> <i className={`fa-solid fa-dice-${value}`}></i></div>
    <div className='secondDice'> <i className={`fa-solid fa-dice-${value2}`}></i></div>
    </div>
    
    
      {/* <Condition total={total}/> */}
     
      <div className='winOrLose'>
        {/* {flag?<>
          <h4>Win</h4>
          <h3></h3>
        </>:<></>} */}
      </div>
     
        <> 
        <div className='condition'>
          <div> 
          <input type="radio" name='hello'  className='checkbox' value="less" onChange={(e)=>setCheck(e.target.value)} ></input> <span>Under 7(*1.5)</span> </div>
          <div> 
          <input type="radio" name='hello' value="equal" onChange={(e)=>setCheck(e.target.value)}></input> <span> Equal to 7(*4.5)</span>
          </div>
          
          <div>
          <input type="radio" name='hello' value="greater" onChange={(e)=>setCheck(e.target.value)}></input><span> Over 7(*1.5)</span> </div>
    
         
         
        </div>
        <div className='amount'>Enter Amount :- 
        <input type="number" min="10" max="20" className='inputvalue' value={amount} onChange={(e)=>setAmount(e.target.value)} />
        
        
        </div>
        <div>
          {check?null:"Please Slect a Condition"}
          <p className='error'></p>
        <button disabled={check?false:true} onClick={()=>myfunc()} className='btn'>Place bet</button>
        
        </div>
        </>
     
      
    </div>
  );
}

export default App;
