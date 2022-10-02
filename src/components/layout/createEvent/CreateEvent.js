import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateEvent = () => {
    const [eventName, setEventName] = useState('')
    const [hostName, setHostName] = useState('')
    const [location, setLocation] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const data = {eventName, hostName, location, startDate, endDate}
        navigate('/event')
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='bg-secondary1 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='text-3xl mb-4 text-center'>Create Event</div>
            <div className='mb-2'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Event Name</label>
                <input 
                className="shadow appearance-none border rounded w-full py-2 px-3" id="event-name"
                type="text"
                value={eventName}
                onChange={e => setEventName(e.target.value)}
                />

            </div>
            <div className='mb-2'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Host Name</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3" 
                    id="event-name" 
                    type="text" 
                    value={hostName}
                    onChange={e => hostName(e.target.value)}
                    />
            </div>
            <div className='mb-2'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Start Time/Date</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3" 
                    id="event-name" 
                    datepicke 
                    type="text"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                    />
            </div>
            <div className='mb-2'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>End Time/Date</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3" 
                    id="event-name" 
                    type="text" 
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                    />
            </div>
            <div className='mb-2'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Location</label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3" 
                    id="event-name" 
                    type="text"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    />
            </div>
            
            <div className='mb-2'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Event Photo</label>
                <input 
                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                    id="file_input" 
                    type="file"
                    />
            </div>
            
            <div className='flex justify-center'>
            <button className='rounded-sm bg-secondary3 caret-primary1 px-12'>Next</button>
            </div>
        </form>
    </div>
  )
}

export default CreateEvent