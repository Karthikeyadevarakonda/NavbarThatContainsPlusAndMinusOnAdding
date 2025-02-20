
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faStar } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from '../App';
import { useContext } from 'react';




// eslint-disable-next-line react/prop-types
const Items = ({setCount}) => {
   
    const { data, setData } = useContext(DataContext); 


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
    <div className='Container flex flex-wrap gap-10 justify-center'>
       {data.map((obj)=>{
        return(
             <div key={obj.id} className='card relative flex flex-col shadow-lg gap-1 w-[180px] h-[320px] md:w-1/5 rounded-md bg-slate-200'>
                   <img src={obj.img} alt="" className="rounded-md" />
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
                 {obj.count===0 ? <button id="Btn" className='bg-blue-500 text-white font-bold rounded-md h-8' onClick={()=>add(obj.id)}>ADD</button>:
                  <button  id="sBtn" className='bg-red-500 text-white font-bold rounded-md h-8' onClick={()=>clear(obj.id)}>REMOVE</button>}
             </div>)
       })}
    </div>
  )
}

export default Items
