import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;


import cx from 'classnames';
import { Component, useState } from 'react';

function TodoList()  {
        const [todoInput, setTodoInput] = useState("")
 
    
        return (
            <>
                <div>
                    <h2>
                        Todo List
                    </h2>
                    <input type="text" name="todo"/>
                </div>
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
            </>
        );
    }

// export default TodoList


// starting point
// import cx from 'classnames';
// import { Component } from 'react';

// export default class TodoList extends Component {
//     render() {
//         return (
//             <>
//                 <div>
//                     <h2>
//                         Todo List
//                     </h2>
//                 </div>
//                 <style>{`
//                     .is-done {
//                         text-decoration: line-through;
//                     }
//                 `}</style>
//             </>
//         );
//     }
// }
