import React from 'react'
import ImageOne from '../../assets/image 1.png'
import CreateButton from '../../components/buttons/CreateButton'
import './landing.css'

const Landing = () => {
  return (
    <div className='bg-secondary3'>
    <div className='container max-w-screen-2xl  desktop-screen bg-secondary1 p-20'>
      <div className='flex gap-4 items-center'>
        <div className='flex-auto mx-auto'>
            <img src={ImageOne} className="justify-center"/>
        </div>

        <div className='flex-auto text-end'>
          <div className=''>
            <div className='text-4xl font-bold text-primary1'>Imagine if</div>
            <div className='text-4xl font-bold snapchat' style={{color:"#8456EC"}}> Snapchat</div>
            <div className='text-4xl font-bold text-primary1'>had event</div>
            <div>Easily hosted and shared events with your friends accross any social media</div>
            <CreateButton />
          </div>
        </div>
      </div>
      </div>

    <div className='container mobile-screen pb-10 mx-auto lg:hidden'>
        <div className='flex flex-col'>
          <div className='text-center'>
            <div className='text-4xl font-bold text-primary1'>Imagine if</div>
            <div className='text-4xl font-bold' style={{color:"#8456EC"}}> Snapchat</div>
            <div className='text-4xl font-bold text-primary1'>had event</div>
            <div>Easily hosted and shared events with your friends accross any social media</div>
          </div>

          <div className='flex justify-center items-center'>
          <img src={ImageOne} width="311px" height="548px" />
        </div>
        <div className='flex justify-center'>
          <CreateButton />
        </div>
        </div>
    </div>

    </div>
  )
}

export default Landing