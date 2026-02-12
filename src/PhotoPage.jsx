import { useState, useEffect } from 'react'
import RoseRain from './RoseRain'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

const PhotoPage = () => {
  const [timeToValentine, setTimeToValentine] = useState('')
  const [timeTogether, setTimeTogether] = useState('')

  const photos = [
    '/images/046E76F5-1338-4A6B-8AFD-90B7879F836A.jpg',
    '/images/1a4870fb-c857-4ccf-8888-576cc162434e.jpg',
    '/images/IMG_0082.JPG',
    '/images/IMG_0096.JPG',
    '/images/IMG_0121.JPG',
  ]

  useEffect(() => {
    const updateCounters = () => {
      // Contador para San Valentín
      const valentine = new Date('2026-02-14T00:00:00')
      const now = new Date()
      const diffValentine = valentine - now
      
      const daysV = Math.floor(diffValentine / (1000 * 60 * 60 * 24))
      const hoursV = Math.floor((diffValentine % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutesV = Math.floor((diffValentine % (1000 * 60 * 60)) / (1000 * 60))
      const secondsV = Math.floor((diffValentine % (1000 * 60)) / 1000)
      
      setTimeToValentine(`${daysV}d ${hoursV}h ${minutesV}m ${secondsV}s`)

      // Contador desde que estamos juntos (31 julio 2025, 20:00)
      const together = new Date('2025-07-31T20:00:00')
      const diffTogether = now - together
      
      const daysT = Math.floor(diffTogether / (1000 * 60 * 60 * 24))
      const hoursT = Math.floor((diffTogether % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutesT = Math.floor((diffTogether % (1000 * 60 * 60)) / (1000 * 60))
      const secondsT = Math.floor((diffTogether % (1000 * 60)) / 1000)
      
      setTimeTogether(`${daysT}d ${hoursT}h ${minutesT}m ${secondsT}s`)
    }

    updateCounters()
    const interval = setInterval(updateCounters, 1000)
    return () => clearInterval(interval)
  }, [])

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-rose-900 relative overflow-hidden">
      <RoseRain />
      
      <div className="relative z-20 container mx-auto px-4 py-8 md:py-12">
        {/* Título principal */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-200 to-red-200 mb-4 font-script">
            Para ti, Katy <FavoriteIcon className="text-rose-300" fontSize="large" />
          </h1>
        </div>

        {/* Contadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-50/95 to-rose-50/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border-4 border-rose-200/50 text-center">
            <CalendarMonthIcon className="text-rose-600 mb-2" fontSize="large" />
            <h3 className="text-xl md:text-2xl font-bold text-rose-800 mb-2 font-script">Tiempo juntos</h3>
            <p className="text-2xl md:text-3xl font-bold text-rose-600 font-serif">{timeTogether}</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50/95 to-rose-50/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border-4 border-rose-200/50 text-center">
            <FavoriteIcon className="text-rose-600 mb-2" fontSize="large" />
            <h3 className="text-xl md:text-2xl font-bold text-rose-800 mb-2 font-script">Falta para San Valentín</h3>
            <p className="text-2xl md:text-3xl font-bold text-rose-600 font-serif">{timeToValentine}</p>
          </div>
        </div>

        {/* Carrusel 1 */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-gradient-to-br from-amber-50/95 to-rose-50/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border-4 border-rose-200/50">
            <Slider {...sliderSettings}>
              {photos.map((photo, index) => (
                <div key={index} className="px-2">
                  <img
                    src={photo}
                    alt={`Recuerdo ${index + 1}`}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Dedicatoria */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-gradient-to-br from-amber-50/95 to-rose-50/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-rose-200/50 text-center">
            <p className="text-xl md:text-2xl text-rose-800 font-serif leading-relaxed">
              Cada momento contigo es un regalo. Gracias por llenar mi vida de amor, risas y felicidad. 
              Eres mi persona favorita y no puedo esperar para crear más recuerdos juntos. 
              <span className="block mt-4 text-2xl md:text-3xl font-bold text-rose-900 font-script">
                Te amo con todo mi corazón ❤️
              </span>
            </p>
          </div>
        </div>

        {/* Carrusel 2 */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-amber-50/95 to-rose-50/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border-4 border-rose-200/50">
            <Slider {...sliderSettings}>
              {photos.reverse().map((photo, index) => (
                <div key={index} className="px-2">
                  <img
                    src={photo}
                    alt={`Recuerdo ${index + 1}`}
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoPage
