import React from 'react'
import SingleVisa from './SingleVisaPrice'

const SingleVisaPrice = () => {
  return (
    <>
    <div className='flex gap-5 p-10 flex-wrap justify-center'>
        <SingleVisa Days='14 Days' Single='Single Visa Entry' Price='165' BestPrice={false} description='Processing time 48 hours.'  />
        <SingleVisa Days='30 Days' Single='Single Visa Entry' Price='180' BestPrice={true} description='Processing time 48 hours.'  />
        <SingleVisa Days='90 Days' Single='Single Visa Entry' Price='475' BestPrice={false} description='Processing time 48 hours.'  />
        <SingleVisa Days='90 Days job Seeker' Single='Single Visa Entry' Price='575' BestPrice={false} description='This visa is suitable only for people looking for a job in UAE.'  />
    </div>
    </> 
  )
}

export default SingleVisaPrice