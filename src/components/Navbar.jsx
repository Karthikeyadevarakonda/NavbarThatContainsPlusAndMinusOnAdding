
import Container from './Container.jsx'

import { useEffect } from 'react';


// eslint-disable-next-line react/prop-types
const Navbar = ({setTab,count,setCount}) => {
  
  useEffect(()=>{
          let savedCount = localStorage.getItem('totalcount')
          if(savedCount){
            setCount(JSON.parse(savedCount))
          }
        },[])

        useEffect(()=>{
          if(count){
          localStorage.setItem('totalcount',JSON.stringify(count))
          }
        },[count])
        
   
  return (
    <>
    <div className='navbar'>
       <ul className='links inline'>
        <li onClick={()=>setTab(1)}> Home</li>
        <li onClick={()=>setTab(2)}> items</li>
        <li id='cart' onClick={()=>setTab(3)}> Cart <sup id='superCount' className=' text-white '>{count}</sup></li>
       </ul>                         
                                        
    </div>
   <Container/>
    </>
  )
}

export default Navbar
