
import Container from './Container.jsx'

// eslint-disable-next-line react/prop-types
const Navbar = ({setTab,count}) => {
   
  return (
    <>
    <div className='navbar'>
       <ul className='links'>
        <li onClick={()=>setTab(1)}>Home</li>
        <li onClick={()=>setTab(2)}>items</li>
        <li onClick={()=>setTab(3)}>Cart <sup>{count}</sup></li>
       </ul>                         
                                        
    </div>
   <Container/>
    </>
  )
}

export default Navbar
