import './App.css'
import Calendar from './components/Calendar'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center min-h-[calc(100vh-80px)]'>
        <Calendar />
      </div>
    </>
  )
}

export default App