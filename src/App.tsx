import { useReducer } from "react";

type Action = (currentState: { count: number }) => { count: number };
const countReducer = (
  state: { count: number },
  action: Action | { count: number }
) => ({
  ...state,
  ...(typeof action === "function" ? action(state) : action),
});

function Counter({ initialCount = 0, step = 1 }) {
  const [state, setState] = useReducer(countReducer, {
    count: initialCount,
  });

  const { count } = state;
  const increment = () =>
    setState((currentState) => ({ count: currentState.count + step }));
  return <button onClick={increment}>{count}</button>;
}

function App() {
  return <Counter />;
}

export default App;
