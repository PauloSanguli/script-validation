import './App.css';
import Response from './components/Response'
import Container from './components/Container'
import { FaArrowRight } from 'react-icons/fa'
import { useRef, useState } from 'react';

function App() {
  const [textResponsed,setTextResponsed] = useState("Text inserted")
  const textInsertedRef = useRef(null)

  return (
    <div className="App">
      <Container textInsertedRef={textInsertedRef} textResponsed={setTextResponsed}/>
      <div className='containerIconArrowRight'>
        <p>
          <FaArrowRight />
        </p>
      </div>
      <Response textInsertedRef={textInsertedRef} textResponsed={textResponsed}/>
    </div>
  );
}

export default App;