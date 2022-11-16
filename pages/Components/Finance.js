import React from 'react'
import Image from 'next/image';

 const Finance = () => {
  const arr = [
    {
      id:0,
      img: require('../../public/icon127.png'),
      finance_heading:"Fully Personalised",
      finance_text:"Get hour-by-hour itinerary based on your interests & budget",
    },
    {
      id:1,
      img: require('../../public/icon128.png'),
      finance_heading:"Fast & Free",
      finance_text:"No more google searches to find the best deals,plan it for free",
    },
    {
      id:2,
      img: require('../../public/icon129.png'),
      finance_heading:"Save Extra",
      finance_text:"Choose from the most affordable stays,activities and transport",
    },
    {
      id:3,
      img: require('../../public/icon130.png'),
      finance_heading:"Easy to Customise",
      finance_text:"Choose from the most affordable stays,activities and transport",
    },
  ];
  return (
    <>
      {
        arr.map((item)=>{
          return(
           <div key={item.id}>
             <Image src={item.img} className="finance_img" width={48} height={48} alt="finace"></Image>
            <p className='finance_heading'>{item.finance_heading}</p>
            <p className='finance_text'>{item.finance_text}</p>
           </div>
          )
        })
      }
    </>
    
   
  )
}

export default Finance