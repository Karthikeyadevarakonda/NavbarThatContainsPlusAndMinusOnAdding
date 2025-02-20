
import Home from './Home.jsx'
import Items from './Items.jsx'
import Cart from './Cart.jsx'

const Container = ({tab,count,setCount}) => {
  
  return (
    <div>
      {tab === 1 && <Home/>}
      {tab === 2 && <Items count={count} setCount={setCount}/>}
      {tab === 3 && <Cart count={count} setCount={setCount}/>}
    </div>
  )
}

export default Container
