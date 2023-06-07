import Blocks from './components/Blocks/Blocks'
import Header from './components/Header/Header'
import Text from './components/Text/Text'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url("./img/bg.png")` }}>
      <div className="container">
        <Header />
        <div className="middle">
          <Text />
          <Blocks />
        </div>
      </div>
    </div>
  )
}

export default App
