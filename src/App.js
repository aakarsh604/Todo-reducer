import "./App.css";
import TodoApp from "./Components/TodoApp";
import { TodoProvider } from "./Context/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </div>
  );
}

export default App;
