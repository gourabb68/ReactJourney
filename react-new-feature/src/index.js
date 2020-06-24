import React,{useState} from 'react';//useState hook
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = () =>{
const [count,setCount]=useState(0);

const increment = ()=>{
  setCount(count+1);
}
const decrement = ()=>{
  setCount(count-1);
}
const reset = ()=>{
  setCount(0);
}
  return (
    <div>
      <p> The current count is {count}</p>
      <button onClick={increment}> +1</button>
      <button onClick={decrement}> -1</button>
      <button onClick={reset}> reset</button>

    </div>
  )
}


ReactDOM.render(
 <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
