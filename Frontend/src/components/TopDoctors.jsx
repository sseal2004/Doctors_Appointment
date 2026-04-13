import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)


  return (
    <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm text-gray-500'>
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 pt-5 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
            className='bg-white border border-[#E8EEF9] rounded-2xl overflow-hidden cursor-pointer
                       hover:-translate-y-2 hover:shadow-md hover:border-[#B8C8F0]
                       transition-all duration-300 group'
          >
            <div className='bg-[#EAF0FF] h-48 flex items-end justify-center overflow-hidden'>
              <img
                className='w-full h-full object-cover object-top'
                src={item.image}
                alt={item.name}
              />
            </div>

            <div className='p-4'>
              <div className={`flex items-center gap-2 text-xs mb-1 ${item.available ? 'text-green-600' : 'text-gray-400'}`}>
                <span className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                {item.available ? 'Available' : 'Not Available'}
              </div>
              <p className='text-[#1a1a1a] text-sm font-medium leading-tight truncate'>{item.name}</p>
              <p className='text-[#7a8ab0] text-xs mt-0.5'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}
        className='bg-[#EAEFFF] hover:bg-[#D8E2FF] text-[#4B6BFF] font-medium
                   px-12 py-3 rounded-full mt-10 transition-colors duration-200'
      >
        more
      </button>
    </div>
  )
}

export default TopDoctors