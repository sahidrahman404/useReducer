import { useReducer } from "react";

function Counter({ initialCount = 0, step = 1 }) {
  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const countReducer = (state: number, newState: number) => newState;
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [count, setCount] = useReducer(countReducer, initialCount);

  const increment = () => setCount(count + step);
  return <button onClick={increment}>{count}</button>;
}

function App() {
  return <Counter />;
}

export default App;
