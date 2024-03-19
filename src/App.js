import "./style/style.css";
import Header from "./component/Header";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import { TaskProvider } from "./TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="background">
        <div className="App">
          <Header />
          <TodoList />
          <AddTodo />
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
