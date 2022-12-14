import { useReducer } from "react";

type ActionType = "INCREMENT" | "DECREMENT";
type Action = { type: ActionType; step: number };
const countReducer = (state: { count: number }, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.step };
    case "DECREMENT":
      return { count: state.count - action.step };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

function Counter({ initialCount = 0, step = 1 }) {
  const [state, dispatch] = useReducer(countReducer, {
    count: initialCount,
  });
  const { count } = state;
  const increment = () => dispatch({ type: "INCREMENT", step });
  return <button onClick={increment}>{count}</button>;
}

function App() {
  return <Counter />;
}

export default App;
