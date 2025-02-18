import { useState } from 'react'
import Container from './Container.jsx'

const Navbar = () => {
    const [tab,setTab] = useState(1)
  return (
    <>
    <div className='navbar'>
       <ul className='links'>
        <li onClick={()=>setTab(1)}>Home</li>
        <li onClick={()=>setTab(2)}>items</li>
        <li onClick={()=>setTab(3)}>Cart <sup>{0}</sup></li>
       </ul>
    </div>
   <Container tab={tab}/>
    </>
  )
}

export default Navbar
