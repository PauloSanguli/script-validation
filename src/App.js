import './App.css';
import Response from './components/Response'
import Container from './components/Container'
import { FaArrowRight } from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <Container />
      <div className='containerIconArrowRight'>
        <p>
          <FaArrowRight />
        </p>
      </div>
      <Response />
    </div>
  );
}

export default App;