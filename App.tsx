import * as React from 'react';
import ReactDOM = require('react-dom');
import './style.css';

function Hello2() {
  return React.createElement('div', null, 'Hello React 2 !');
}

function Button(props) {
  const handleClick = ()=> {props.onClickFunction(props.increment)};
  return <button onClick={handleClick}>+{props.increment}</button>;
}

function Display(props) {
  return <div>{props.message}</div>;
}

export default function App() {
  const [counter, setCounter] = React.useState(10);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);

  return (
    <React.Fragment>
      <Hello2 />
      <Button onClickFunction={incrementCounter} increment={1}/>
      <Button onClickFunction={incrementCounter} increment={5}/>
      <Button onClickFunction={incrementCounter} increment={10}/>
      <Button onClickFunction={incrementCounter} increment={100}/>

      <Display message={counter} />
    </React.Fragment>
  );
}
