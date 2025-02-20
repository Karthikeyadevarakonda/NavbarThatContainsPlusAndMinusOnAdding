import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from '../App';
import { useContext } from 'react';



// let data = [
//   {
//    id:uuidv4(),
//    name:"iphone",
//    img:"https://picsum.photos/300/200",
//    count : 0,
//    quantity:2
//   },
//   {
//     id:uuidv4(),
//     name:"ipad",
//     img:"https://picsum.photos/301/200",
//     count : 0,
//    quantity:4
//    },
//    {
//     id:uuidv4(),
//     name:"airpods",
//     img:"https://picsum.photos/302/200",
//     count : 0,
//    quantity:6
//    },
//    {
//     id:uuidv4(),
//     name:"laptops",
//     img:"https://picsum.photos/310/200",
//     count : 0,
//    quantity:1
//    },
//    {
//     id:uuidv4(),
//     name:"phones",
//     img:"https://picsum.photos/303/200",
//     count : 0,
//     quantity:7
//    }
// ]



const Items = ({count,setCount}) => {
    // const [list,setList]= useState(data)
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
  //  setList(NewL)
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
  // setList(NewL)

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
// setList(NewL)
setData(NewL)
}

  return (
    <div className='Container flex flex-wrap gap-10 justify-center'>
       {data.map((obj)=>{
        return(
             <div key={obj.id} className='card relative flex flex-col shadow-lg gap-4 w-[250px] h-[300px] md:w-1/5 rounded-md bg-slate-200'>
                   <img src={obj.img} alt="" />
                   <p className='text-xl font-bold pl-3'>{obj.name}</p>
                   {obj.count > 0 &&
                   <>
                   <div className=' countsAddAndSub bg-green-700 flex w-18 rounded-md absolute right-3 bottom-31 justify-between text-lg font-bold  '>
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
                 {obj.count===0 ? <button className='bg-green-700 text-white font-bold rounded-md h-8' onClick={()=>add(obj.id)}>ADD</button>:
                  <button className='bg-red-500 text-white font-bold rounded-md h-8' onClick={()=>clear(obj.id)}>REMOVE</button>}
             </div>)
       })}
    </div>
  )
}

export default Items
