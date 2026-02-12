import { useState } from 'react'
import PhotoPage from './PhotoPage'
import Modal from './Modal'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'

function App() {
  const [noSize, setNoSize] = useState(1)
  const [yesPosition, setYesPosition] = useState({ top: '0px', left: '0px' })
  const [showPhotos, setShowPhotos] = useState(false)
  const [modalStep, setModalStep] = useState(0)

  const modalMessages = [
    '¿Estás segura?',
    '¿Estás muy muy muuuy segura?',
    '¿Me juras que estás muuuuuuuuy segura?',
    'ESTAS MUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUY SEGURA?'
  ]

  const handleYesClick = () => {
    const newTop = (Math.random() - 0.5) * 100
    const newLeft = (Math.random() - 0.5) * 100
    setYesPosition({ top: `${newTop}px`, left: `${newLeft}px` })
    setNoSize(prev => prev + 0.3)
  }

  const handleNoClick = () => {
    setModalStep(1)
  }

  const handleModalConfirm = () => {
    if (modalStep < modalMessages.length) {
      setModalStep(modalStep + 1)
    } else {
      setShowPhotos(true)
    }
  }

  if (showPhotos) {
    return <PhotoPage />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-rose-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Bokeh effect background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-rose-400 rounded-full blur-3xl opacity-25 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-purple-500 rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-400 rounded-full blur-3xl opacity-30 animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-44 h-44 bg-rose-500 rounded-full blur-3xl opacity-15 animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl text-pink-300 animate-heartbeat">💗</div>
        <div className="absolute top-20 right-20 text-5xl text-rose-300 animate-heartbeat" style={{animationDelay: '0.5s'}}>💖</div>
        <div className="absolute bottom-20 left-20 text-5xl text-pink-400 animate-heartbeat" style={{animationDelay: '1s'}}>💕</div>
        <div className="absolute bottom-10 right-10 text-6xl text-rose-400 animate-heartbeat" style={{animationDelay: '1.5s'}}>💝</div>
      </div>
      
      <div className="text-center max-w-xl mx-4 relative z-10 bg-gradient-to-br from-amber-50/95 to-rose-50/95 backdrop-blur-md rounded-3xl p-6 md:p-12 shadow-2xl border-4 md:border-8 border-rose-200/50">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rose-800 mb-8 md:mb-12 px-2 font-script leading-tight">
          Katy de mi corazón,<br/>
          <span className="text-4xl sm:text-5xl md:text-6xl">¿quieres ser mi San Valentín?</span>
        </h1>
        
        <div className="flex flex-col items-center justify-center gap-6 mt-8">
          <button
            onClick={handleNoClick}
            className="bg-gradient-to-br from-rose-500 via-red-500 to-pink-600 hover:from-rose-600 hover:via-red-600 hover:to-pink-700 text-white font-bold py-4 px-8 md:py-6 md:px-12 rounded-full shadow-2xl border-2 md:border-4 border-white/50 font-serif tracking-wider hover:shadow-rose-500/50 transition-all flex items-center gap-2"
            style={{ 
              fontSize: `${noSize}rem`,
              transform: `scale(${noSize})`,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            NO <HeartBrokenIcon />
          </button>
          
          <button
            onClick={handleYesClick}
            className="bg-gradient-to-br from-amber-100 via-rose-100 to-pink-100 hover:from-amber-200 hover:via-rose-200 hover:to-pink-200 text-rose-700 font-bold py-3 px-8 md:py-4 md:px-10 rounded-full text-lg md:text-xl shadow-xl border-2 md:border-4 border-rose-300/70 font-serif tracking-wide hover:shadow-pink-300/50 transition-all relative z-10 flex items-center gap-2"
            style={{
              transform: `translate(${yesPosition.left}, ${yesPosition.top})`,
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            SÍ <FavoriteIcon />
          </button>
        </div>
      </div>

      {modalStep > 0 && (
        <Modal 
          message={modalMessages[modalStep - 1]} 
          onConfirm={handleModalConfirm}
        />
      )}
    </div>
  )
}

export default App
