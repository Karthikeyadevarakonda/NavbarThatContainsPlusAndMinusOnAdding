
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from '../App';
import { useContext } from 'react';


const Cart = ({count,setCount}) => {
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
        <>
       
        <h1 className="text-2xl font-bold">Your Cart</h1>
    <div className="Container flex flex-wrap gap-10 justify-center">
      

      {data.filter(obj => obj.count > 0).length === 0 ? (
        <p className="text-lg text-gray-500">No items in the cart</p>
      ) : (
        data.filter(obj => obj.count > 0).map((obj) => (
          <div
            key={obj.id}
            className="card relative flex flex-col shadow-lg gap-4 w-[250px] h-[300px] md:w-1/5 rounded-md bg-slate-200 p-3"
          >
            <img src={obj.img} alt={obj.name} className="w-full h-[150px] object-cover rounded-md" />
            <p className="text-xl font-bold">{obj.name}</p>

            <div className="countsAddAndSub bg-green-700 flex w-18 rounded-md justify-between text-lg font-bold p-2">
              <button className="text-white w-1/3 text-center" onClick={() => sub(obj.id)}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <p className="text-white w-1/5">{obj.count}</p>
              {obj.count < obj.quantity && (
                <button className="text-center text-white w-1/3" onClick={() => add(obj.id)}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              )}
            </div>

            <button className="bg-red-500 text-white font-bold rounded-md h-8" onClick={() => clear(obj.id)}>
              REMOVE
            </button>
          </div>
        ))
      )}
    </div>
    </>
       )}

 

export default Cart
