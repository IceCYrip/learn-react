import { useEffect, useRef, useState } from 'react'

const ChangeButtonColors = () => {
  const buttonRef = useRef()

  const colors = ['red', 'cyan', 'skyblue', 'aquamarine', 'deeppink']
  const [currentColorIndex, setCurrentColorIndex] = useState(2)

  useEffect(() => {
    changeColor(currentColorIndex)
  }, [currentColorIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      changeColor(currentColorIndex)
      handleButtonClick()
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const handleButtonClick = () => {
    setCurrentColorIndex((prev) => (prev == colors.length - 1 ? 0 : prev + 1))
  }

  const changeColor = (index) => {
    buttonRef.current.style.backgroundColor = colors[index]
    if (colors[index] === 'red') buttonRef.current.style.color = 'white'
    else buttonRef.current.style.color = 'black'
  }
  return (
    <>
      <title>Playground - Change button colors</title>

      <h1>Change Button Colors</h1>
      <h3>This is an example for changing button colors using useRef</h3>
      <h4>
        You can either change colors on button click or the interval set for
        every 2 seconds will do it
      </h4>

      <button
        ref={buttonRef}
        style={{ outline: 'none', margin: '25px 0px' }}
        onClick={handleButtonClick}
      >
        Click me to change my color
      </button>

      <h3 style={{ textAlign: 'start' }}>
        <span style={{ fontWeight: 'normal' }}> Current Color: </span>
        {colors[currentColorIndex]}
        <span style={{ fontWeight: 'normal', marginLeft: '100px' }}>
          {' '}
          Next Color:{' '}
        </span>
        {colors[currentColorIndex + 1] ?? colors[0]}{' '}
        {(colors[currentColorIndex + 1] ?? colors[0]) === 'red' && (
          <span>(This will have white text)</span>
        )}
      </h3>
    </>
  )
}

export default ChangeButtonColors
