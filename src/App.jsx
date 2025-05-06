import './App.css'
import Name from './components/useContext/Name'
import LearnHooks from './pages/Learn/LearnHooks'
import MiniApps from './pages/Learn/MiniApps'

function App() {
  return (
    <>
      <Name />

      <h1>React Test/Learning Application</h1>
      <h2>This is an application for practicing react topics</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          columnGap: '300px',
        }}
      >
        <LearnHooks />
        <MiniApps />
      </div>
    </>
  )
}

export default App
