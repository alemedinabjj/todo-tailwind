import { Header } from "./components/Header";
import { Todo } from "./components/Todo";
import { TodoProvider } from "./hooks/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <Header />
      <Todo />
    </TodoProvider>
  );
}
export default App;
