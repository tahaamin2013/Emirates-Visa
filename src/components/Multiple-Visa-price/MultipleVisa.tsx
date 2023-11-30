import React from 'react'
import SingleVisa from '../Single-Visa-price/SingleVisaPrice'

const MultipleVisa = () => {
  return (
    <div className='flex gap-5 p-10 flex-wrap justify-center'>
       <SingleVisa Days='30 Days' Single='Multiple Visa Entry' Price='245' BestPrice={false} description='Processing time 48 hours.'  />
        <SingleVisa Days='30 Days' Single='Multiple Visa Entry' Price='800' BestPrice={true} description='Processing time 48 hours.'  />
    </div>
  )
}   

export default MultipleVisa