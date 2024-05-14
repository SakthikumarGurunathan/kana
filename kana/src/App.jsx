import { kanaDictionary } from './kana'
import KanaRenderer from './components/KanaRenderer'
import './App.css'
import './css/global.css'

function App() {
  return (
    <>
    <div className='w-80 mx-auto'>
    <KanaRenderer kanaDictionary={kanaDictionary}/>
    </div>
    </>
  )
}

export default App
