import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
export default function Card({ id, imgdisp, name, type, lan, genres, rating, summary }) {
    const location = useNavigate();
    const data ={
        id,
        imgdisp,
        name,
        type,
        rating,
        summary
    }
   function handleclick (){
    location(`/details/:${id}`, {state:data});
    // console.log(id,lan,name)
   }



    return (
        <div className='flex flex-col my-4 mx-3 '>
            <div className='w-[185px] h-[330px]  rounded-[12.5px]'>
                <img src={imgdisp || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYS7KEXYFAwqdRCW81e4DSR_nSLYSFStx1Q&usqp=CAU'}
                    alt={name} className=' h-[250px] w-[100%] rounded-t-[12px] ' />
                <div className=' bg-[#1A1D1A] block rounded-b-[13px] '>
                    <div className='justify-center flex'>
                        <h1 className=' font-sans text-[#F1F0EA] font-bold'>{name}</h1>
                    </div>
                    <div className=' flex justify-evenly '>
                        <h1 className=' text-left font-sans text-[#F1F0EA] font-bold'>{type}</h1>
                        <h1 className=' text-left font-sans text-[#F1F0EA] font-bold mb-1'>({lan})</h1>
                    </div>
                    {/* <Link to={{

                        pathname: `/details/${id}`,
                        state: {
                            name,
                            language: lan,
                        },
                        
                    }} 
                    
                    className='bg-[#F1F0EA] w-[100%] rounded-b-[12px] h-[28px]'>
                        Learn more
                    </Link> */}
                    
                    <button className='bg-[#F1F0EA] w-[100%] rounded-b-[12px] h-[28px]' onClick={()=>handleclick()} >Learn more</button>
                    
                </div>
            </div>
        </div>
    );
}
