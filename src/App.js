import './App.scss';
import { Backspace } from 'tabler-icons-react';
import { useReducer } from 'react';
import { reducer } from './reducers/reducer';

function App() {
  const [{ currentOperand }, dispatch] = useReducer(reducer, {currentOperand: 0});

  return (
    <div className='cal-app'>
      <div className='output'>30233</div>
      <button style={{ opacity: 0 }}></button>
      <button className='operation'>C</button>
      <button className='operation'>=</button>
      <button className='operation'>
        <Backspace size={42} strokeWidth={2} color={'white'} />
      </button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className='operation'>%</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className='operation'>/</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className='operation'>x</button>
      <button>0</button>
      <button>.</button>
      <button className='operation'>-</button>
      <button className='operation'>+</button>
    </div>
  );
}

export default App;
