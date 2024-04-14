import React from 'react'
import './contribuieaici.css'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai';

const Contribuieaici = ({cart, setCart}) => {
  const incqty = (product) => 
  {
    const exist = cart.find((x) => 
    {
      return x.id === product.id
    })
    setCart(cart.map((curElm) => 
    {
      return curElm.id === product.id ? { ...exist, qty: exist.qty + 1} : curElm
    }))
  }

  const decqty = (product) => 
  {
    const exist = cart.find((x) => 
    {
      return x.id === product.id
    })
    setCart(cart.map((curElm) => 
    {
      return curElm.id === product.id ? {...exist ,qty: exist.qty - 1}: curElm
    }))
  }

  const removeproduct = (product) => 
  {
    const exist = cart.find((x) => 
    {
      return x.id === product.id
    })
    if(exist.qty > 0)
    {
      setCart(cart.filter((curElm) => 
      {
        return curElm.id !== product.id
      }))
    }
  }

  const total = cart.reduce((price, item) => price + item.qty * 1, 0)

  return (
    <>
    <div className='cart'>
        <h3>#proiectele alese de tine</h3>
        <p>Selecteaza suma de bani pe care doresti sa o donezi la fiecare cauza aleasa</p>
        {
            cart.length === 0 && 
            <>
            <div className='empty_cart'>
                <h2>Inca nu ai ales niciun proiect pentru a oferi o donatie!</h2>
                <Link to='/proiecte'><button>Vezi proiectele disponibile</button></Link>
            </div>
            </>
        }
        <div className='container'>
          {
            cart.map((curElm) => 
            {
              return(
                <>
                <div className='box'>
                  <div className='img_box'>
                    <img src={curElm.Image} alt=''></img>
                  </div>
                  <div className='detail'>
                    <div className='info'>
                    <h4>{curElm.County}</h4>
                    <h3>{curElm.Name}</h3>
                    </div>
                    <div className='quantity'>
                      <button onClick={() => incqty (curElm)}>+</button>
                      <input type='number' value={curElm.qty}></input>
                      <button onClick={() => decqty (curElm)}>-</button>
                      <p>EUR</p>
                    </div>
                    <div className='icon'>
                      <li onClick={() => removeproduct(curElm)}><AiOutlineClose /></li>
                    </div>
                  </div>
                </div>
                </>
              )
            })
          }
        </div>
        <div className='bottom'>
          {
            cart.length > 0 && 
            <>
            <div className='Total'>
              <h4>Totalul donatiilor tale: {total} EUR</h4>
            </div>
            <Link to='/plata' className='plata'>Spre procesarea platii</Link>
            </>
          }
        </div>
    </div>
    </>
  )
}

export default Contribuieaici