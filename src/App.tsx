import { useReducer } from "react";

function Counter({ initialCount = 0, step = 1 }) {
  const countReducer = (
    state: { count: number },
    action: { count: number }
  ) => ({
    ...state,
    ...action,
  });
  const [state, setState] = useReducer(countReducer, { count: initialCount });

  const { count } = state;
  const increment = () => setState({ count: count + step });
  return <button onClick={increment}>{count}</button>;
}

function App() {
  return <Counter />;
}

export default App;
