"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoApp = () => {
  const [task, setTask] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    const newTask: Todo = {
      id: Date.now(),
      title: newTodo,
      completed: false,
    };
    setTask([...task, newTask]);
    setNewTodo("");
  };

  const handleDelete = (id: number) => {
    setTask(task.filter((t) => t.id !== id));
    setOpenMenuId(null);
  };

  const handleUpdate = (id: number) => {
    const updated = task.map((t) =>
      t.id === id ? { ...t, title: editText.trim() } : t
    );
    setTask(updated);
    setEditTaskId(null);
    setOpenMenuId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4 flex flex-col items-center font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 my-6 drop-shadow">
        ✨ To-Do App
      </h1>

      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md">
        {/* Input and Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 w-full">
          <input
            type="text"
            placeholder="Enter the task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <Button
            onClick={handleAddTodo}
            className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg transition"
          >
            Add
          </Button>
        </div>

        {/* Task List */}
        {task.length === 0 ? (
          <p className="text-center text-gray-400">No tasks found</p>
        ) : (
          <ul className="space-y-2 mt-4">
            {task.map((todo) => (
              <li
                key={todo.id}
                className="bg-indigo-50 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition text-gray-700 relative flex justify-between items-center"
              >
                {editTaskId === todo.id ? (
                  <div className="flex gap-2 w-full">
                    <input
                      type="text"
                      className="flex-1 px-3 py-1 border rounded"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <Button
                      onClick={() => handleUpdate(todo.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
                    >
                      Save
                    </Button>
                  </div>
                ) : (
                  <>
                    <span className="flex-1">{todo.title}</span>
                    <button
                      onClick={() =>
                        setOpenMenuId(openMenuId === todo.id ? null : todo.id)
                      }
                      className="p-1"
                    >
                      <Menu size={18} />
                    </button>
                  </>
                )}

                {/* Dropdown Menu */}
                {openMenuId === todo.id && (
                  <div className="absolute right-2 top-10 bg-white border rounded shadow-lg z-10">
                    <button
                      className="block w-full px-4 py-2 hover:bg-gray-100 text-left text-sm"
                      onClick={() => {
                        setEditTaskId(todo.id);
                        setEditText(todo.title);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="block w-full px-4 py-2 hover:bg-gray-100 text-left text-sm text-red-500"
                      onClick={() => handleDelete(todo.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="block w-full px-4 py-2 hover:bg-gray-100 text-left text-sm text-gray-500"
                      onClick={() => setOpenMenuId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
