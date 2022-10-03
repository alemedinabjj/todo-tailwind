import { createContext, useContext, useState } from "react";

interface Todo {
  text: string;
  complete: boolean;
  createdAt: any;
}

export const TodoContext = createContext({} as any);

export const TodoProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<Todo[]>(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos") as string) : []);

  const [todo, setTodo] = useState<string>("");

  const addTodo = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (todo.trim() === "") {
      return alert("Please enter a todo");
    }

    setTodos([...todos, { text: todo, complete: false, createdAt: new Date().toLocaleString() }]);
    setTodo("");
    localStorage.setItem("todos", JSON.stringify([...todos, { text: todo, complete: false }]));
  };

  const completeTodo = (index: number) => {
    const newTodos: Todo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const removeTodo = (index: number) => {
    if (confirm("Are you sure you want to delete this todo?")) {
      setTodos(todos.filter((_, i) => i !== index));
      localStorage.setItem("todos", JSON.stringify(todos.filter((_, i) => i !== index)));
    } else {
      return;
    }

    const newTodos: Todo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const removeAllTodos = () => {
    if (confirm("Are you sure you want to delete all todos?")) {
      setTodos([]);
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      return;
    }
  };

  return <TodoContext.Provider value={{ todos, todo, setTodo, addTodo, completeTodo, removeTodo, removeAllTodos }}>{children}</TodoContext.Provider>;
};

export const useTodo = () => useContext(TodoContext);
