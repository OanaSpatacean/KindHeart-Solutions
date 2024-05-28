import React, { useState } from 'react'
import './proiecte.css'
import { AiFillEye, AiOutlineClose} from 'react-icons/ai';
import { BiSolidDonateHeart } from "react-icons/bi";

const Proiecte = ({shop, Filter, allcatefilter, addtocart}) => {
    const [showDetail, setShowDetail] = useState(false)
    const [detail, setDetail] = useState([])
    
    console.log(shop)

    const detailpage = (product) => 
    {
        const detaildata = ([{product}])
        const productdetail = detaildata[0]['product']
        // console.log(productdetail)
        setDetail(productdetail)
        setShowDetail(true)
    }

    const closedetail = () => 
    {
        setShowDetail(false)
    }

  return (
    <>
    {
        showDetail ? 
        <>
        <div className='product_detail'>
            <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
            <div className='container'>
                <div className='img_box'>
                    <img src={detail.Image} alt=''></img>
                </div>
                <div className='info'>
                    <h4># {detail.County}</h4>
                    <h2>{detail.Name}</h2>
                    <p>{detail.Description}</p>
                    <button onClick={() => addtocart (detail)}>Doneaza acestei cauze</button>
                </div>
            </div>
        </div>
        </>
        : null
    }
    <div className='shop'>
        <h2># PROIECTELE DISPONIBILE</h2>
        <p>ACASA . PROIECTE</p>
        <div className='container'>
            <div className='left_box'>
                <div className='category'>
                    <div className='header'>
                        <h3>Judetele partenere</h3>
                    </div>
                    <div className='box'>
                        <ul>
                            <li onClick={() => allcatefilter ()}># Toate</li>
                            <li onClick={() => Filter ("Alba")}># Alba</li>
                            <li onClick={() => Filter ("Timis")}># Timis</li>
                            <li onClick={() => Filter ("Cluj")}># Cluj</li>
                            <li onClick={() => Filter ("Brasov")}># Brasov</li>
                            <li onClick={() => Filter ("Sibiu")}># Sibiu</li>
                            <li onClick={() => Filter ("Hunedoara")}># Hunedoara</li>
                            <li onClick={() => Filter ("Hunedoara")}># Hunedoara</li>
                            <li onClick={() => Filter ("Hunedoara")}># Hunedoara</li>
                            <li onClick={() => Filter ("Valcea")}># Valcea</li>
                            <li onClick={() => Filter ("Galati")}># Galati</li>
                            <li onClick={() => Filter ("Dolj")}># Dolj</li>
                            <li onClick={() => Filter ("Gorj")}># Gorj</li>
                            <li onClick={() => Filter ("Olt")}># Olt</li>
                            <li onClick={() => Filter ("Mehedinti")}># Mehedinti</li>
                            <li onClick={() => Filter ("Braila")}># Braila</li>
                        </ul>
                    </div>
                </div>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='image/hearts.webp' alt=''></img>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='image/Donate.jpg' alt=''></img>
                    </div>
                </div>
                <div className='product_box'>
                    <h2>Alege cauza care te-a impresionat cel mai mult</h2>
                    <div className='product_container'>
                        {
                            shop.map((curElm) => 
                            {
                                return(
                                    <>
                                    <div className='box'>
                                        <div className='img_box'>
                                            <img src={curElm.Image} alt=''></img>
                                            <div className='icon'>
                                               <li onClick={() => addtocart (detail)}><BiSolidDonateHeart /></li> 
                                               <li onClick={() => detailpage (curElm)}><AiFillEye /></li> 
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <button onClick={() => addtocart (curElm)}>Doneaza</button>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Proiecte