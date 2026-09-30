import './components/MrLudrik/Denys Panasiuk/MrLudrik.css'
import Image from './components/MrLudrik/Denys Panasiuk/img/rudiak.jpg'

/*MrLudrik */
function InfoBoard({children}) {
  
  return (
    <div className = "boardInfo" >
      {children}
    </div>
  )
}

function App() {
  return (
    <InfoBoard>
      <img src={Image} alt="" />
      <p>Tester Rudiakowicz</p>
      <h3>testit roblox</h3>
    </InfoBoard>
  )
}

export default App
