import { useEffect, useState, useRef } from 'react'
import './stopwatch.css'
import BackButton from '../../../components/BackButton'
import Name from '../../../components/useContext/Name'

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [started, setStarted] = useState(false)

  const intervalRef = useRef(null)

  useEffect(() => {
    if (started) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev === 59) {
            setMinutes((min) => {
              if (min === 59) {
                setHours((hr) => hr + 1)
                return 0
              }
              return min + 1
            })
            return 0
          }
          return prev + 1
        })
      }, 1000)
    } else {
      clearInterval(intervalRef.current)
    }

    return () => clearInterval(intervalRef.current)
  }, [started])

  return (
    <div className='Stopwatch'>
      <BackButton />
      <Name />
      {/* <div className='corner-text'>Developed by Karan Sable</div> */}
      <div className='stopwatch-container'>
        <span>Stopwatch</span>
        <div className='timer-container'>
          <span>{String(hours).padStart(2, '0')}</span>:
          <span>{String(minutes).padStart(2, '0')}</span>:
          <span>{String(seconds).padStart(2, '0')}</span>
        </div>
        <button className='start-bttn' onClick={() => setStarted(!started)}>
          {started ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  )
}
