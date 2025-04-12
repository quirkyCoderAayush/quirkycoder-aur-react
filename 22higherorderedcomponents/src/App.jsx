import './App.css'
import WithLogging from './components/WithLogging'
import Hello from './components/Hello'


const EnhancedHello = WithLogging(Hello)

function App() {

  return (
    <>
      <EnhancedHello name = "quirkyCoder" />
    </>
  )
}

export default App
