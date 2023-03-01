import { useRef, useState } from 'react'
import './input.css'



const ApiKey = '3a12998b5f071b3069b0754795eb401c'

const App = () => {
  const inputRef = useRef(null)
  const [ApiData, setApiData] = useState(null)

  const WeatherTypes = [
    {
      type: "Clear",
      img: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
    },
    {
      type: "Rain",
      img: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
    },
    {
      type: "Snow",
      img: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    },
    {
      type: "Clouds",
      img: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    },
    {
      type: "Haze",
      img: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    },
    {
      type: "Smoke",
      img: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
    },
    {
      type: "Mist",
      img: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    },
    {
      type: "Drizzle",
      img: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
    },
  ];
  
  const fetchWeather = async () => { 
    console.log(inputRef.current.value)
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${ApiKey}`
    

    fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data, '--data')
      setApiData(null)
      setApiData(data)
    })
    .then((data) => {

    })
    .catch((err) => { console.log(err)})
  
  }
  
    
    
    

  return (
    <div className='bg-gray-800 h-screen grid place-content-center'>

      <div className='bg-white w-96 p-4 rounded-md'>
        <div className='flex items-center justify-between'>
          <div>
            
          </div>
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
        <div>
          <div className='text-center flex flex-col gap-6 mt-10'>
            <p className='text-xl font-semibold'>Mumbai, IN</p>
            <img src={WeatherTypes[0].img} alt='Weather' className='w-52 mx-auto' />
            <h3 className='text-2xl font-bold text-zinc-800'> {WeatherTypes[0].type}</h3>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
