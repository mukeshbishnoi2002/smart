import React, { useState } from 'react'
import { Slider } from './Slider_array.js'
import Image from 'next/image';
import Script from 'next/script'
import { useRef } from 'react';
function Sectionthree() {
    const val = useRef();
    const [data, setData] = useState(Slider);
    function iconclick(e) {
        
        if(e.target.id == "left"){
            e.target.nextElementSibling.scrollLeft -= e.target.nextElementSibling.firstElementChild.clientWidth + 22;
        }
        else{
            e.target.previousElementSibling.scrollLeft += e.target.previousElementSibling.firstElementChild.clientWidth + 22;
        }

    }
    return (
        <>


            <div className='outer' id="out">
                <i className="fa fa-angle-left" id="left" onClick={(e) => iconclick(e)}></i>
                <div className='grid_container_slider' id='ten'>

                    {
                        data.map((items) => {
                            const { holiday, id, place, img, title } = items;
                            return (
                                <div className="slider_item" ref={val} id='one' key={id}>
                                    <Image src={img} height={365} width={365} className="image" alt="name" />
                                    <div className='slide_item_content'>
                                        <p>{title}</p>
                                        <p>{holiday}</p>
                                    </div>
                                    <h5 className='holiday'>{place}</h5>
                                </div>
                            )
                        })
                    }

                </div>

                <i className="fa fa-angle-right" onClick={(e) => iconclick(e)} id="right"></i>

            </div>


            <Script src='sr.js' />

        </>

    )
}



export default Sectionthree

