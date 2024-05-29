import React, { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Homeproduct from './home_product'
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart} from "react-icons/ai";
import {BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube} from "react-icons/bi";

const Home = ({addtocart}) => {
  // Product category
  const [newProduct, setNewProduct] =  useState([])
  const [featuredProduct, setFeaturdProduct] =  useState([])
  const [topProduct, setTopProduct] =  useState([])
  //Tranding Product
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
  // Filter of tranding product
  const filtercate = (x) => 
  {
    const filterproduct = Homeproduct.filter((curElm) => 
    {
      return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }
  //All Trending Product
  const allTrendingProduct = () =>
  {
    setTrendingProduct(Homeproduct)
  }

  return (
    <>
    <div className='imageBox'>
        <img src='/image/flower.webp' alt='home'></img>
        <img src='/image/hands.jpg' alt='home'></img>
        <img src='/image/together.jpg' alt='home'></img>
    </div>
    <div className='home'>
        <div className='top_banner'>
            <div className='contant'>
                <h3>Fă o Diferență</h3>
                <h2>Donează și Transformă Vieți</h2>
                <p>Ajută-ne să aducem o schimbare în comunitate. Cu doar o mică contribuție, poți sprijini numeroase proiecte umanitare care ajută copii, familii defavorizate și persoane în nevoie.</p>
                <Link to='/proiecte' className='link'>Donează Acum</Link>
            </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <h2 onClick={() => allTrendingProduct ()}>Contribuie Acum și Fă un Bine!</h2>
                </div>
                <div className='cate'>
                  <h3 onClick={() => filtercate ()}>Toate cauzele la care poti dona</h3>
                </div>
              </div>
              <div className='products'>
                <div className='container'>
                  {
                    trendingProduct.map((curElm) => 
                    {
                      return(
                        <>
                        <div className='box'>
                          <div className='img_box'>
                            <img src={curElm.Image} alt=''></img>
                            <div className='icon'>                            
                            </div>
                          </div>
                          <div className='info'>
                            <h3>{curElm.Name}</h3>
                            <p># {curElm.County}</p>
                            <button className='btn' onClick={() => addtocart (curElm)}>Doneaza</button>
                          </div>
                        </div>
                        </>
                      )
                    })
                  }
                </div>
                <button>Vezi mai mult</button>
              </div>
            </div>
            <div className='right_box'>
              <div className='right_container'>
                <div className='testimonial'>
                  <div className='head'>
                    <h3>Mărturii de la Donatorii Noștri</h3>
                  </div>
                  <div className='detail'>
                    <div className='info'>
                      <h3>Mărturie</h3>
                      <h4>Donator și Voluntar</h4>
                      <p>"Am fost mereu impresionat de impactul pozitiv pe care aceste proiecte îl au asupra comunității. Fiecare contribuție face o diferență reală și sunt mândru să fac parte din această schimbare. Am văzut cum donațiile mele au ajutat copii să meargă la școală și familii să aibă un adăpost sigur."</p>
                    </div>
                  </div>
                </div>
                <div className='newsletter'>
                  <div className='head'>
                    <h3>Rămâi Conectat</h3>
                  </div>
                  <div className='form'>
                    <p>Alătură-te Listei Noastre de Mail</p>
                    <input type='email' placeholder='Email' autoComplete='off'></input>
                    <button>Fii la curent cu ultimele noastre proiecte și inițiative.</button>
                    <div className='icon_box'>
                      <div className='icon'>
                        <BiLogoFacebook />
                      </div>
                      <div className='icon'>
                        <BiLogoTwitter />
                      </div>
                      <div className='icon'>
                        <BiLogoInstagram />
                      </div>
                      <div className='icon'>
                        <BiLogoYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home