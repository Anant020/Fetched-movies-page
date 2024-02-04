import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

export default function DetailsPage() {
const {state}= useLocation();
const {id,imgdisp,name,rating,type,summary} = state || {};
const clearsummary = summary?.replace(/<\/?b>/g, '');
const cleanedSummary = clearsummary?.replace(/<\/?p>/g, '');
const navigate = useNavigate();
    return (
        <div>
            <button className=' text-[20px] bg-stone-400 px-6 py-1 font-bold text-[#2B303A] absolute right-14 top-10 rounded-[18px]' onClick={()=>navigate('/')}>Back</button>
            <div className='flex p-40 '>
            <img src={imgdisp} className=' w-44  shadow-lg '></img>
            <div id='1' className='block p-5'>
            <div className='flex w-[320px] justify-between my-2'>
            <h1 className='text-[30px] font-bold bg-gradient-to-r  from-[#C6D8D3] to-[#7D8491] bg-clip-text text-transparent '>{name}</h1>
            <h1 className='text-[20px] mt-2 items-center flex font-bold bg-gradient-to-r  from-[#7D8491] to-[#cfd6d4] bg-clip-text text-transparent '>Rating : </h1>
            </div>
            <div className='text-[18px] font-bold bg-gradient-to-r  from-[#b7c3bf] to-[#cbcfd7] bg-clip-text text-transparent'>
            <h1 className='my-4 text-justify'>{cleanedSummary}</h1>
            </div>
            </div>
            </div>

        </div>
    );
}
