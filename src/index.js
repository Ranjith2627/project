import ReactDOM from 'react-dom/client'
import App from './app.js'


const GgshMain = () => {
  return(
  <div>
    <App />
  </div>
  
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GgshMain />);