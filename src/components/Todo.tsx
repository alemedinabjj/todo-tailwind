import { useState } from "react";
import { useTodo } from "../hooks/TodoProvider";
import { DeleteItem } from "./DeleteItem";

interface Todo {
  text: string;
  complete: boolean;
  createdAt: any;
}

export const Todo = () => {
  const { todos, todo, setTodo, addTodo, completeTodo, removeAllTodos, removeTodo } = useTodo();
  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-2 bg-slate-200">
      <form className="flex items-center justify-start w-full max-w-xl mt-4">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          required
          placeholder="Adicione uma Tarefa"
          className="
            flex-1
            w-full
            px-4
            py-2
            text-gray-700
            bg-white
            border
            border-gray-300
            rounded
            shadow
            focus:outline-none
            focus:ring-2
            focus:ring-blue-600
            focus:border-transparent
        "
        />
        <button
          type="submit"
          onClick={addTodo}
          className="
                px-4
                py-2
                ml-2
                text-white
                bg-blue-600
                border
                border-transparent
                rounded
                shadow
                hover:bg-blue-700
                focus:outline-none
                focus:ring-2
                focus:ring-blue-600
                focus:border-transparent
            "
        >
          Criar
        </button>
      </form>
      <div className="flex items-center justify-between w-full max-w-xl mt-4">
        <span>
          Tarefas criadas: <span className="font-bold bg-slate-600 text-white px-2 rounded-full">{todos.length} </span>
        </span>
        <span className="">
          Tarefas completas:{" "}
          <span
            className="
                px-2
                py-1
                text-white
                bg-green-600
                border
                border-transparent
                rounded
                shadow
            "
          >
            {todos.filter((todo: Todo) => todo.complete).length} de {todos.length}{" "}
          </span>
        </span>
      </div>

      <section
        className="
            flex
            flex-col
            items-center
            justify-center
            w-full
            max-w-xl
            mt-4
        "
      >
        <div className="flex max-w-xl mt-4 self-end">
          {todos.length > 1 && (
            <button type="button" onClick={removeAllTodos} className="text-sm px-2 rounded text-red-500 shadow transition mr-auto">
              {" "}
              Remover todas as tarefas{" "}
            </button>
          )}
        </div>
        {todos.map((todo: Todo, index: number) => (
          <>
            <span className="text-xs self-start bg-green-200 px-2 py-1 mt-2 transform translate-y-1 z-[1] rounded-t-2xl">
              Criado em: {todo.createdAt}
            </span>
            <div
              key={index}
              className={` flex
              z-[2]
            flex-col
            gap-1
            items-center
            justify-between
            w-full
            px-4
            py-2

            text-gray-700
            bg-white
            hover:bg-slate-200
            border
            border-gray-300
            rounded
            shadow
            ${todo.complete ? "hover:bg-green-200" : ""}
            ${todo.complete ? "bg-green-100" : ""}
            `}
            >
              <div className="flex w-full justify-between items-center">
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => completeTodo(index)}
                  className="
                form-checkbox
                h-5
                w-5
                text-blue-600
                border-gray-300
                rounded
                focus:ring-blue-500
                cursor-pointer
            "
                />

                <span
                  style={{ textDecoration: todo.complete ? "line-through" : "", color: todo.complete ? "gray" : "" }}
                  className="
                flex-1
                ml-2
            "
                >
                  {todo.text}
                </span>
                <button type="button" onClick={() => completeTodo(index)}></button>
                <DeleteItem />
              </div>
            </div>
          </>
        ))}
      </section>
    </div>
  );
};
