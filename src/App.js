import './App.scss';
import { Backspace } from 'tabler-icons-react';

function App() {
  return (
    <div className='cal-app'>
      <div className='output'>
        <button>C</button>
        <button></button>
        <button>=</button>
        <button>
          <Backspace size={48} strokeWidth={2} color={'black'} />
        </button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>x</button>
        <button>0</button>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
}

export default App;
