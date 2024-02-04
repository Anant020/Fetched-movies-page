import React from 'react'
import { useState, useEffect } from 'react';
import Card from './assets/Components/Card';


export default function Landing() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            
            const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
            if (response.ok) {
              const fetchedData = await response.json();
              setShows(fetchedData); 
              
            }
          } catch (error) {
            window.console.log(error);
          }
        }
        fetchData();
      }, []);

  return (

      <div>
        <div className='flex justify-center'>
          <h1 className=' text-[70px] font-bold bg-gradient-to-r text-center from-[#C6D8D3] to-[#7D8491] bg-clip-text text-transparent  w-[40%] my-2 mt-8 hover:text-[#b4ee62] '>TV SHOWS</h1>
        </div>
        <div className='flex flex-wrap justify-center mb-14 '>
          {shows.map((item) => (
            <div key={item.show.id}>
              <Card imgdisp={item.show.image && item.show.image.original} id={item.show.id} name={item.show.name} type={item.show.type} lan={item.show.language} summary={item.show.summary} genres={item.show.genres} rating={item.show.rating} />
            </div>
          ))}
        </div>
     
    </div>
  )
}
