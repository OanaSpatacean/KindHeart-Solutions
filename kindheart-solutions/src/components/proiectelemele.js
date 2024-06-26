import React, { useState } from 'react'
import './proiecte.css'
import { AiFillEye, AiOutlineClose} from 'react-icons/ai';
import { BiSolidDonateHeart } from "react-icons/bi";
import {Link} from 'react-router-dom';


const Proiectelemele = ({shop, email}) => {
    const [showDetail, setShowDetail] = useState(false)
    const [detail, setDetail] = useState([])

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
                </div>
            </div>
        </div>
        </>
        : null
    }
    <div className='shop'>
        <h2># PROIECTELE MELE</h2>
        <p>ACASA . PROIECTE</p>
        <div className='container'>
            <div className='left_box'>
                <div className='category'>

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
                    <h2>Alege o cauză</h2>
                    <div className='product_container'>
                        {
                            shop.filter((el)=>el.owner==email).map((curElm) => 
                            {

                                return(
                                    <>
                                    <div className='box'>
                                        <div className='img_box'>
                                            <img src={curElm.Image} alt=''></img>
                                            <div className='icon'>
                                               <li onClick={() => detailpage (curElm)}><AiFillEye /></li> 
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <button onClick={()=>detailpage (curElm)}>Detalii</button>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>

                    <div className='add'>
                        <button><Link to='/adaugare-proiect' className='link'>Adaugă proiect</Link></button>
                    </div>
                            
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Proiectelemele