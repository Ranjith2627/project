//import react from 'react'
import ReactDOM from 'react-dom'
import Content from './content.js'
import InterContent from './intercontent.js'
import './index.css'

const TestFunction = () => {
  return(
  <div>
    <h1 className='head'>FUTURE GGSH</h1>
    <div>
      <Content num='1'><InterContent /></Content>
      <Content num='2'><InterContent /></Content>
    </div>
  </div>
  
  )
}

ReactDOM.render(<TestFunction />,document.getElementById("root"))