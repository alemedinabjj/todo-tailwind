import { FaRocket } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-start py-14  bg-slate-900">
      <div className="text-3xl font-bold text-white flex gap-2 items-center">
        <span>
          <FaRocket />
        </span>
        <h1>
          <span className="text-blue-600">My</span> TodoList
        </h1>
      </div>
    </div>
  );
};
