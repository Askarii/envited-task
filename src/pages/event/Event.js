import React from 'react'
import Image from '../../assets/Event image.png'
import Icon1 from '../../assets/Icon.png'
import Icon2 from '../../assets/Icon (1).png'

import "./event.css"

const Event = () => {
  return (
    <div>
    <div className='container desktop-screen py-20 mx-auto hidden'>
      <div className='flex justify-center'>
        <div className='flex-1 items-center justify-center pl-40'>
          <div className='text-4xl text-primary1 font-bold'>Birthday Bash</div>
          <div>Hosted by Elysia</div>
          <div className='flex flex-row mt-4'>
            <div>
              <img src={Icon1} />
            </div>
            <div className=''>
              <div className='text-primary1 font-bold'>18 Auguest 6:00PM</div>
              <div>to 19 August 1:00PM UTC+10</div>
            </div>
          </div>

          <div className='flex flex-row'>
            <img src={Icon2} />
            <div>
              <div className='text-primary1 font-bold'>Street name</div>
              <div>Suburb, State, Postcode</div>
            </div>
          </div>
        </div>

        <div className='flex-1'>
          <img src={Image} />
        </div>
      </div>
    </div>


      <div className='container mobile-screen mx-auto py-10 xs:py-0'>
        <div className='flex flex-col'>
          <div className='flex justify-center'>
            <img src={Image} />
          </div>


        <div className='flex justify-center items-center mx-10p'>
          <div className='flex-1'>
          <div className='text-4xl text-primary1 font-bold'>Birthday Bash</div>
          <div>Hosted by Elysia</div>
          <div className='flex flex-row mt-4'>
            <div>
              <img src={Icon1} />
            </div>
            <div>
              <div className='text-primary1 font-bold'>18 Auguest 6:00PM</div>
              <div>to 19 August 1:00PM UTC+10</div>
            </div>
          </div>

          <div className='flex flex-row'>
            <img src={Icon2} />
            <div>
              <div className='text-primary1 font-bold'>Street name</div>
              <div>Suburb, State, Postcode</div>
            </div>
          </div>
        </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Event