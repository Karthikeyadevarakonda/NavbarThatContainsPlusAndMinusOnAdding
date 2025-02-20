
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
   quantity:2,
   originalPrice:2000,
   discountPrice:1600,
   rating:4.5,
   viewCount:90
  },
  {
    id:uuidv4(),
    name:"ipad",
    img:"https://picsum.photos/301/200",
    count : 0,
   quantity:4,
   originalPrice:3000,
   discountPrice:1200,
   rating:4.5,
   viewCount:90
   },
   {
    id:uuidv4(),
    name:"airpods",
    img:"https://picsum.photos/302/200",
    count : 0,
   quantity:6,
   originalPrice:3000,
   discountPrice:2600,
   rating:4.5,
   viewCount:90
   },
   {
    id:uuidv4(),
    name:"laptops",
    img:"https://picsum.photos/310/200",
    count : 0,
   quantity:1,
   originalPrice:8000,
   discountPrice:4300,
   rating:4.5,
   viewCount:90
   },
   {
    id:uuidv4(),
    name:"phones",
    img:"https://picsum.photos/303/200",
    count : 0,
    quantity:7,
    originalPrice:9000,
    discountPrice:4600,
    rating:4.5,
   viewCount:90
   },
   {
    id:uuidv4(),
    name:"mobiles",
    img:"https://picsum.photos/307/200",
    count : 0,
    quantity:20,
    originalPrice:3400,
    discountPrice:2640,
    rating:4.5,
    viewCount:90
   }
]



const App = () => {
   const [count,setCount] = useState(0);
   const [tab,setTab] = useState(1)
   const [data, setData] = useState(intialdata);
  return (
    <>
    <Navbar count={count} setCount={setCount} setTab={setTab}/>
    <DataContext.Provider value={{ data, setData }}>
    <Container tab={tab} count={count} setCount={setCount}/>
    </DataContext.Provider>
    </>
  )
}

export default App
