import './App.css';
import Header from './components/Header.js';

import FunctionalComp from './components/functionalComp';
import {ClassComp, ClassComp1} from './components/classComp';
import Click from './components/Click';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
    <Header />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <h1 className='body'>
          Learning React
        </h1>
        <FunctionalComp />
        <ClassComp />
        <ClassComp1 />
        <ClassComp1 />
        <Click />
        <Counter />

      </div>
    </div>
  );
}

export default App;
