import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox!!!</h1>
//       <h2>Start **** editing to see some magic happen!</h2>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

const rootElement = document.getElementById('root');
// step 02
const props = {
  className: 'App',
  children: <div id="step2" />
};
const element = <div {...props} />;
ReactDOM.render(element, rootElement);

// step 03
const step2Element = document.getElementById('step2');
const Message = props => <div>{props.msg}</div>;
const element2 = (
  <div className="container">
    <Message msg="Hello 2" />
    <Message msg="Goodbye!" />
    <div id="step4" />
  </div>
);
ReactDOM.render(element2, step2Element);

// step 04 - lesson 7, rerender a React app
const step4 = document.getElementById('step4');

function tick() {
  const time = new Date().toLocaleTimeString();
  const element4 = (
    <div>
      It is
      <input value={time} />
      <input value={time} />
    </div>
  );

  ReactDOM.render(element4, step4);
}

setInterval(tick, 1000);
