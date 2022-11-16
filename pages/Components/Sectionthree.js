import React, { useState } from 'react'
import { Slider } from './Slider_array.js'
import Image from 'next/image';
import Script from 'next/script'
import { useRef } from 'react';
function Sectionthree() {
    const val = useRef();
    const [data, setData] = useState(Slider);
   function iconclick(e){
            e.target.parentElement.scrollLeft = val.current.clientWidth + 20;
   }
    return (
        <>
        <div className='ot'>
        <i class="fa fa-angle-left" id="ico" onClick={(e)=>iconclick(e)}></i>
        <i class="fa fa-angle-right" ></i>

        <div className='outer' id="out">
                <div className='grid_container_slider' id='ten'>

                    {
                        data.map((items) => {
                            const { holiday, id, place, img, title } = items;
                            return (
                                <div className="slider_item" ref={val} id='one' key={id}>
                                    <Image src={img} height={365} width={365} className="image" alt="name"/>
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
               
            </div>
        </div>
           
<Script src='sr.js' />
           
        </>

    )
}



export default Sectionthree

