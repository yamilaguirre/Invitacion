import { useEffect, useState } from 'react'

const RoseRain = () => {
  const [roses, setRoses] = useState([])

  useEffect(() => {
    const newRoses = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 7,
      size: 20 + Math.random() * 30,
    }))
    setRoses(newRoses)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {roses.map((rose) => (
        <div
          key={rose.id}
          className="absolute animate-fall opacity-70"
          style={{
            left: `${rose.left}%`,
            animationDelay: `${rose.delay}s`,
            animationDuration: `${rose.duration}s`,
            fontSize: `${rose.size}px`,
          }}
        >
          🌹
        </div>
      ))}
    </div>
  )
}

export default RoseRain
