import React from 'react'
import Calculation from './calculation'

export default function UI() {
  return (
    <div className='flex justify-center items-center content-center min-h-screen'>

      {/* Calculator body */}
      <div className='p-3 w-auto min-w-[310px] max-h-[85vh] h-auto bg-amber-400 rounded-3xl font-semibold text-xl'>

        {/* Solar cell */}
        <div className='flex flex-row flex-nowrap bg-neutral-600 w-fit overflow-hidden rounded-2xl gap-[1px]'>
          <div className='p-1 h-[30px] w-[20px] bg-stone-800' />
          <div className='p-1 h-[30px] w-[20px] bg-stone-800' />
          <div className='p-1 h-[30px] w-[20px] bg-stone-800' />
          <div className='p-1 h-[30px] w-[20px] bg-stone-800' />
          <div className='p-1 h-[30px] w-[20px] bg-stone-800' />
        </div>

        {/* Output display */}
        <div className='my-1 h-[10vh] w-full bg-amber-900 rounded-2xl' id='output'>
        </div>

        {/* Buttons container */}
        <div className='flex rounded-2xl pb-[10px] px-[10px] bg-amber-100'>
          {/* Utility buttons */}
        <div className='flex flex-row flex-wrap justify-between w-[300px]'>
          <div className='flex h-auto w-full justify-between my-3'>
            <button className='w-[65px] h-[30px] rounded-full shadow-md bg-amber-300'>CE</button>
            <button className='w-[65px] h-[30px] rounded-full shadow-md bg-amber-300'>AC</button>
            <button className='w-[65px] h-[30px] rounded-full shadow-md bg-amber-300'>÷</button>
            <button className='w-[65px] h-[30px] rounded-full shadow-md bg-amber-300'>X</button>
          </div>

          {/* Number buttons */}

          <div className='grid grid-cols-4 gap-2'>
            <button className='aspect-square rounded-full shadow-md bg-amber-200'>7</button>
            <button className='aspect-square rounded-full shadow-md bg-amber-200'>8</button>
            <button className='aspect-square rounded-full shadow-md bg-amber-200'>9</button>

            <button className='aspect-square rounded-full shadow-md bg-amber-300'>-</button>

            <button className='aspect-square rounded-full shadow-md bg-amber-200'>4</button>
            <button className='aspect-square rounded-full shadow-md bg-amber-200'>5</button>
            <button className='aspect-square rounded-full shadow-md bg-amber-200'>6</button>

            <button className='aspect-square rounded-full shadow-md bg-amber-300'>+</button>

            <button className='aspect-square rounded-full shadow-md bg-amber-200'>1</button>
            <button className='aspect-square rounded-full shadow-md bg-amber-200'>2</button>
            <button className='aspect-square rounded-full shadow-md bg-amber-200'>3</button>

            <button className='w-[65px] row-span-2 rounded-full shadow-md bg-amber-300'>=</button>

            <button className='aspect-[2/1] rounded-full shadow-md bg-amber-200 col-span-2'>0</button>
            <button className='aspect-square rounded-full shadow-md bg-amber-400'>.</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
