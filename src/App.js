import './App.css';
import Header from './components/Header.js';

import FunctionalComp from './components/functionalComp';
import {ClassComp, ClassComp1} from './components/classComp';
import Click from './components/Click';
import Counter from './components/Counter';
import ParentComp from './components/ParentComp';
import ClassProps from './components/ClassProps';
import Functionalprops from './components/FunctionalProps';

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
        <ParentComp />
        <ClassProps name="Vipin Yadav" place="Bharssr Khas" /> {/* Passing name as props from Parent
                                            i.e App.js to child i.e ClassProps and rendering in HTML using {this.props.name} */}
      <Functionalprops name="Learner 4" place="Bangalore"/>

      </div>

    </div>
  );
}

export default App;
