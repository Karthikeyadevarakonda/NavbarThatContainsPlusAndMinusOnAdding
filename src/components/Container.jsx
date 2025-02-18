
import Home from './Home.jsx'
import Items from './Items.jsx'
import Cart from './Cart.jsx'

const Container = ({tab}) => {
  
  return (
    <div>
      {tab === 1 && <Home/>}
      {tab === 2 && <Items/>}
      {tab === 3 && <Cart />}
    </div>
  )
}

export default Container
