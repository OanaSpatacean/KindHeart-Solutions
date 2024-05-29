import React from 'react' 
import Nav from './components/nav'
import {BrowserRouter} from 'react-router-dom'
import { EmailProvider } from './components/EmailContext';
import { AuthProvider } from './components/AuthContext';
import { useState } from 'react'
import Rout from './components/rout';
import Proiectelemele from './components/proiectelemele'
import Homeproduct from './components/home_product'
import Footer from './components/footer'

const App = () =>{
  const [email, setEmail] = useState(''); 
  const [cart, setCart] = useState([])
  const [shop, setShop] = useState(Homeproduct)
  const [search, setSearch] = useState('')

  const Filter = (x) =>
  {
    const catefilter = Homeproduct.filter((product) => 
    {
      return product.County === x 
    })
    setShop(catefilter)
  }
  const allcatefilter = () =>
  {
    setShop(Homeproduct)
  }

  const searchlength = (search || []).length === 0
  const searchproduct = () =>
  {
  if(searchlength)
  {
    alert("Please Search Something !")
    setShop(Homeproduct)
  }
  else
  {
    
      const searchfilter = Homeproduct.filter((x) => 
      {
        if(search == undefined)
          return true;
        return x.County.toLowerCase().includes(search.toLowerCase())
      })
      setShop(searchfilter)
  }
}

 const addtocart = (product) =>
 {
    const existIndex = cart.findIndex((x) => x.Name === product.Name);

    if (existIndex !== -1) 
    {
      const updatedCart = [...cart];
      updatedCart[existIndex].qty += 1;
      setCart(updatedCart);
      alert("Ai mai selectat inca o data aceasta cauza pentru a dona!");
    } 
    else 
    {
      setCart([...cart, {...product, qty:1}])
      alert("Ai ales o cauza pentru care sa donezi!");
    }
  };
   console.log(cart)

  return (
    <>
     <AuthProvider>
        <EmailProvider value={{ email, setEmail }}>
          <BrowserRouter>
            <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
            <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} email={email}/>
            <Footer/>
          </BrowserRouter>
        </EmailProvider>
      </AuthProvider>
    </>
  )
}

export default App;


