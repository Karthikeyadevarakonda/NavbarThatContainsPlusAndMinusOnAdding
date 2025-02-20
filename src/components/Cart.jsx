/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus , faStar } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from '../App';
import { useContext , useEffect} from 'react';


const Cart = ({ count,setCount}) => {
  const { data, setData } = useContext(DataContext); 

   useEffect(()=>{
        let savedData = localStorage.getItem('cardData');
        let savedCount = localStorage.getItem('totalcount')
        if(savedData && savedCount){
          setData(JSON.parse(savedData))
          setCount(JSON.parse(savedCount))
        }
      },[])
      
      
      useEffect(()=>{
      
        if(data.length > 0){
        localStorage.setItem('cardData',JSON.stringify(data))
        localStorage.setItem('totalcount',JSON.stringify(count))
        }
      
      },[data,count])
      

  const CartItems = data.filter((obj)=>obj.count > 0)

  let total = CartItems.reduce((a,b)=>a+b.discountPrice * b.count,0)
  
function add(idx){
  setCount(count=>count+1)
   let NewL = data.map((obj)=>{
               if(obj.id === idx){
                 if(obj.count < obj.quantity){
                  obj.count++;
                 }
                  return obj;
               }
               return obj;
   })
 
  setData(NewL)
}

function sub(idx){
  setCount(count=>count-1)
  let NewL = data.map((obj)=>{
              if(obj.id === idx){
                 obj.count--;
                 return obj;
              }
              return obj;
  })

  setData(NewL)
}

function clear(idx){
  let save=0;
  let NewL = data.map((obj)=>{
    if(obj.id === idx){
   save = obj.count;
   console.log(save)
       obj.count = 0;
       console.log(obj.count)
       return obj;
    }
    return obj;
})
setCount(c=>c-save);

setData(NewL)
}


       return (
        <>
       
    <h1 className="cart-title text-2xl font-bold text-center">Your Cart</h1>
    <div className="Container flex flex-wrap gap-10 justify-center">
      

      {CartItems.length === 0 ? (
        <p className="text-lg text-gray-500">No items in the cart</p>
      ) : (
        data.filter(obj => obj.count > 0).map((obj) => (
          <div key={obj.id} className='card w-[250px] h-[315px] relative flex flex-col shadow-lg gap-1 md:w-1/5 rounded-md bg-slate-200'>  
          <img src={obj.img} className="rounded-md" alt="" />
           <h4 className="ratingAndCount text-xs sm:text-base">{obj.rating}  <FontAwesomeIcon icon={faStar} className="text-green-700"/> | {obj.viewCount}</h4>
          <p className='text-xl font-bold pl-3'>{obj.name}</p>
          <div className="flex items-center gap-2">
            <span className='text-md'>₹{obj.discountPrice}/-</span> <span className='text-sm text-gray-400 line-through pl-3'>₹{obj.originalPrice}</span>
          </div>
          {obj.count > 0 &&
          <>
          <div className=' countsAddAndSub bg-black flex w-16 rounded-md absolute right-5 bottom-28 justify-between text-base font-bold  '>
          <button className=' text-white w-1/3  text-center ' onClick={()=>sub(obj.id)}>
          <FontAwesomeIcon icon={faMinus}/>
          </button>
           <p className=' text-white w-1/5'>{obj.count}</p>
          {obj.count < obj.quantity && 
           <button className=' text-center text-white w-1/3 ' onClick={()=>add(obj.id)}>
          <FontAwesomeIcon icon={faPlus}/>
          </button>}
         
          </div>
         </>
           }

            <button id="sBtn" className="bg-red-500 text-white font-bold rounded-md h-8" onClick={() => clear(obj.id)}>
              REMOVE
            </button>
          </div>
           
        ))
      )}
   
    </div>
   { data.filter(obj => obj.count > 0).length !== 0 && <div className="footer flex justify-evenly items-center bg-slate-100 shadow fixed z-1000 bottom-0 w-full"> 
           <h1 className="w-1/2 text-sm md:text-xl">TOTAL : ₹{total}/- </h1>
           <button className="placeOrderBtn rounded-md font-normal text-xs md:text-xl w-1/2 md:w-1/5 bg-amber-500">Place Your Order..!</button>
    </div>}
    </>
       )}


export default Cart
