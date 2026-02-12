import FavoriteIcon from '@mui/icons-material/Favorite'

const Modal = ({ message, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-md">
      <div className="bg-gradient-to-br from-amber-50 via-rose-50 to-pink-100 rounded-3xl p-6 md:p-10 max-w-sm md:max-w-lg w-full text-center shadow-2xl border-4 md:border-8 border-rose-300/60 relative">
        {/* Decorative hearts */}
        <div className="absolute -top-4 -left-4 text-3xl md:text-5xl animate-heartbeat">💖</div>
        <div className="absolute -top-4 -right-4 text-3xl md:text-5xl animate-heartbeat" style={{animationDelay: '0.5s'}}>💕</div>
        <div className="absolute -bottom-4 -left-4 text-3xl md:text-5xl animate-heartbeat" style={{animationDelay: '1s'}}>💗</div>
        <div className="absolute -bottom-4 -right-4 text-3xl md:text-5xl animate-heartbeat" style={{animationDelay: '1.5s'}}>💝</div>
        
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-800 mb-6 md:mb-10 leading-relaxed font-script px-2">{message}</p>
        <div className="flex justify-center">
          <button
            onClick={onConfirm}
            className="bg-gradient-to-br from-rose-500 via-red-500 to-pink-600 hover:from-rose-600 hover:via-red-600 hover:to-pink-700 text-white font-bold py-4 px-10 md:py-5 md:px-16 rounded-full text-xl md:text-2xl shadow-2xl transform hover:scale-105 transition-all border-2 md:border-4 border-white/50 font-serif tracking-wider hover:shadow-rose-500/50 flex items-center gap-2"
            style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}
          >
            SÍ <FavoriteIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
