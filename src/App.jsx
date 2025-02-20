
import Navbar from './components/Navbar.jsx'
import Container from './components/Container.jsx'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { createContext } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext();

let intialdata = [
  {
   id:uuidv4(),
   name:"iphone",
   img:"https://picsum.photos/300/200",
   count : 0,
   quantity:2
  },
  {
    id:uuidv4(),
    name:"ipad",
    img:"https://picsum.photos/301/200",
    count : 0,
   quantity:4
   },
   {
    id:uuidv4(),
    name:"airpods",
    img:"https://picsum.photos/302/200",
    count : 0,
   quantity:6
   },
   {
    id:uuidv4(),
    name:"laptops",
    img:"https://picsum.photos/310/200",
    count : 0,
   quantity:1
   },
   {
    id:uuidv4(),
    name:"phones",
    img:"https://picsum.photos/303/200",
    count : 0,
    quantity:7
   }
]



const App = () => {
   const [count,setCount] = useState(0);
   const [tab,setTab] = useState(1)
   const [data, setData] = useState(intialdata);
  return (
    <>
    <Navbar count={count} setTab={setTab}/>
    <DataContext.Provider value={{ data, setData }}>
    <Container tab={tab} count={count} setCount={setCount}/>
    </DataContext.Provider>
    </>
  )
}

export default App
