import { useRef, useState } from 'react'

const UseStatevsUseRef = () => {
  const refCounter = useRef(0)
  const [stateCounter, setStateCounter] = useState(0)

  const handleRefCounterClick = () => {
    refCounter.current = refCounter.current + 1
    console.log('Actual ref count:', refCounter.current)
  }
  const handleStateCounterClick = () => {
    setStateCounter((prev) => prev + 1)
  }

  console.log(
    'This log is due to component rendering. By default state updation triggers re-render'
  )

  return (
    <>
      <title>Learn Differnce - useState vs useRef</title>

      <h1 style={{ margin: 0 }}>useState vs useRef</h1>
      <h3>This is an example for understanding useState hook in react</h3>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          columnGap: '100px',
        }}
      >
        <div>
          <h2
            style={{
              backgroundColor: 'whitesmoke',
              borderRadius: 12,
              padding: '10px 25px',
            }}
          >
            Counter with useRef <br /> {refCounter.current}
          </h2>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              columnGap: '15px',
            }}
          >
            <button style={{ width: '175px' }} onClick={handleRefCounterClick}>
              Add
            </button>
          </div>
        </div>
        <div>
          <h2
            style={{
              backgroundColor: 'whitesmoke',
              borderRadius: 12,
              padding: '10px 25px',
            }}
          >
            Counter with useState <br /> {stateCounter}
          </h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              columnGap: '15px',
            }}
          >
            <button
              style={{ width: '175px' }}
              onClick={handleStateCounterClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'justify', marginTop: '50px' }}>
        <h3>You may notice that:</h3>
        <ol>
          <li>
            Clicking on button in <i> counter with useRef </i>{' '}
            <strong>doesn't update </strong>it's{' '}
            <strong style={{ textDecoration: 'underline' }}> displayed</strong>{' '}
            counter.
          </li>
          <li>
            Whereas, clicking on button in <i>counter with useState </i>{' '}
            <strong>updates and displays</strong> it's counter's value as
            expected
          </li>
        </ol>
      </div>
      <div style={{ textAlign: 'justify', width: '57vw' }}>
        <h3>This happens because:</h3>
        <ul>
          <li>
            State updation triggers re-render whereas ref updation doesn't
          </li>
          <li>
            This doesn't mean that ref updation doesn't happen. For that, you
            can trigger a re-render of the component by updating the state
            counter with useState (or see console log to see actual ref count
            logged during button click).
          </li>
          <li>
            <strong>We learn that:</strong> When we need to use a mutable value
            but don't want to trigger a re-render, useRef is a good choice
          </li>
        </ul>
      </div>
    </>
  )
}

export default UseStatevsUseRef
