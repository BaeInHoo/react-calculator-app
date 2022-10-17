import './App.scss';
import { Backspace } from 'tabler-icons-react';
import { useReducer } from 'react';
import { reducer } from './reducers/reducer';
import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';

function App() {
  const [{ currentOperand }, dispatch] = useReducer(reducer, {currentOperand: 0});

  return (
    <div className='cal-app'>
      <div className='output'>{ currentOperand }</div>
      <button style={{ opacity: 0 }}></button>
      <button className='operation' onClick={() => dispatch({ type: 'clear' })}>C</button>
      <button className='operation' onClick={() => dispatch({ type: 'result' })}>=</button>
      <button className='operation' onClick={() => dispatch({ type: 'remove' })}>
        <Backspace size={42} strokeWidth={2} color={'white'} />
      </button>
      <DigitButton digit="1" dispatch={dispatch}/>
      <DigitButton digit="2" dispatch={dispatch}/>
      <DigitButton digit="3" dispatch={dispatch}/>
      <OperationButton operation="%" dispatch={dispatch}/>
      <DigitButton digit="4" dispatch={dispatch}/>
      <DigitButton digit="5" dispatch={dispatch}/>
      <DigitButton digit="6" dispatch={dispatch}/>
      <OperationButton operation="/" dispatch={dispatch}/>
      <DigitButton digit="7" dispatch={dispatch}/>
      <DigitButton digit="8" dispatch={dispatch}/>
      <DigitButton digit="9" dispatch={dispatch}/>
      <OperationButton operation="x" dispatch={dispatch}/>
      <DigitButton digit="0" dispatch={dispatch}/>
      <DigitButton digit="." dispatch={dispatch}/>
      <OperationButton operation="-" dispatch={dispatch}/>
      <OperationButton operation="+" dispatch={dispatch}/>
    </div>
  );
}

export default App;
