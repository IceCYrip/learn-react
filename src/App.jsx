import './App.css'
import Name from './components/useContext/Name'
import LearnDifferences from './pages/Learn/LearnDifferences'
import LearnHooks from './pages/Learn/LearnHooks'
import MiniApps from './pages/Learn/MiniApps'
import Playgrounds from './pages/Learn/Playgrounds'

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
          columnGap: '100px',
          padding: '20px 40px',
          borderRadius: 15,
          marginTop: '75px',
          flexWrap: 'wrap',
        }}
      >
        <LearnHooks />
        <LearnDifferences />
        <Playgrounds />
        <MiniApps />
      </div>
    </>
  )
}

export default App
