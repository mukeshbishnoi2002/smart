import React, { useState } from 'react'
import  Slider  from './Slider.js'
import Image from 'next/image';
function Sectionthree() {
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
            <div className='outer'>
                <i className="fa fa-angle-left" id="left" onClick={(e) => iconclick(e)}></i>
                <div className='grid_container_slider'>
                    {
                        data.map((items) => {
                            const { holiday, id, place, img, title } = items;
                            return (
                                <div className="slider_item" key={id}>
                                    <Image src={img} height={365} width={365} className="sliderimg" alt="name" />
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
        </>
    )
}



export default Sectionthree

