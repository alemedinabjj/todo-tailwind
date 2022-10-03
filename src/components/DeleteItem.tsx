import { useTodo } from "../hooks/TodoProvider";
import { BsFillTrashFill } from "react-icons/bs";

export const DeleteItem = () => {
  const { removeTodo } = useTodo();
  return (
    <button type="button" onClick={() => removeTodo()} className="text-2xl hover:text-red-500 transition">
      <BsFillTrashFill />
    </button>
  );
};
