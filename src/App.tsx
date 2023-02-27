import { useRef, useState } from 'react'
import './input.css'



const ApiKey = '3a12998b5f071b3069b0754795eb401c'

const App = () => {
  const inputRef = useRef(null)
  
  const fetchWeather = async () => { 
    console.log(inputRef.current.value)
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${ApiKey}`
    

    fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data, '--data')
    })
    .catch((err) => { console.log(err)})
  
  }
  
    
    
    

  return (
    <div className='bg-gray-800 h-screen grid place-content-center'>

      <div className='bg-white w-96 p-4 rounded-md'>
        <div className='flex items-center justify-between'>

          <input type='text'
          ref={inputRef}
          placeholder='Enter your location...'
          className='text-xl border-b p-1 border-gray-200 font-semibold uppercase flex-1' 
          />

          <button onClick={fetchWeather}>

            <img 
            src="https://cdn-icons-png.flaticon.com/512/758/758651.png"
            alt="..."
            className="w-8"
            />

          </button>
        </div>
      </div>

    </div>
  )
}

export default App
