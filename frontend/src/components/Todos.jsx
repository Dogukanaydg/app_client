/*Todos component */
import React, { useState, useEffect } from 'react';
import axios from "axios";

import TodoStatusContainer from "./TodoStatusContainer";

import { FaCheck } from "react-icons/fa";
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";

import DeleteConfirmation from "./Deleteconfirmation";
import TaskDescription from './TaskDescription';

const SERVER_URL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_SERVER_URL
    : "http://localhost:5000";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/api/v1/todos`);
        
        // Ensure response.data is an array
        setTodos(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching todos:", error);
        setTodos([]); // Ensure todos is always an array
      }
    };

    fetchTodos();
  }, []);

  const [newTodoFormData, setNewTodoFormData] = useState({
    title: "",
    description: "",
  });

  const [editTodoFormData, setEditTodoFormData] = useState({
    id: "",
    title: "",
    description: "",
    status: "",
  });

  const [isCreateTodoActive, setIsCreateTodoActive] = useState(false);
  const [editTodoID, setEditTodoID] = useState(null);
  const [isEditTodoActive, setIsEditTodoActive] = useState(false);
  const [deleteTodoID, setDeleteTodoID] = useState(null);
  const [deleteTaskConfirmation, setDeleteTaskConfirmation] = useState(false);

  // Function to filter todos based on status
  const filterTodos = (status) => {
    return Array.isArray(todos) ? todos.filter((todo) => todo.status === status) : [];
  };

  const handleCreateTodo = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${SERVER_URL}/api/v1/todos`, newTodoFormData);
      const newTodo = response.data;

      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (error) {
      console.error("Error creating todo:", error);
    }

    setNewTodoFormData({ title: "", description: "" });
    setIsCreateTodoActive(false);
  };

  const handleEditTodo = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(`${SERVER_URL}/api/v1/todos/${editTodoID}`, editTodoFormData);
      const updatedTodo = response.data;

      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === editTodoID ? updatedTodo : todo))
      );
    } catch (error) {
      console.error("Error editing todo:", error);
    }

    setEditTodoID(null);
    setIsEditTodoActive(false);
  };

  const handleCheckedTodo = async (id) => {
    try {
      const response = await axios.patch(`${SERVER_URL}/api/v1/todos/${id}`, {
        status: "completed",
      });

      const updatedTodo = response.data;

      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
    } catch (error) {
      console.error("Error marking todo as completed:", error);
    }
  };

  const handleDeleteTodo = async () => {
    try {
      await axios.delete(`${SERVER_URL}/api/v1/todos/${deleteTodoID}`);

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === deleteTodoID ? { ...todo, status: "deleted" } : todo
        )
      );
    } catch (error) {
      console.error("Error deleting todo:", error);
    }

    setDeleteTodoID(null);
    setDeleteTaskConfirmation(false);
  };

  const showDeleteConfirmation = (id) => {
    setDeleteTodoID(id);
    setDeleteTaskConfirmation(true);
  };

  const showEditTodo = (id) => {
    const selectedTodo = todos.find((todo) => todo.id === id) || {
      id: "",
      title: "",
      description: "",
      status: "",
    };
    setEditTodoID(id);
    setEditTodoFormData(selectedTodo);
    setIsEditTodoActive(true);
  };

   return (
    <>
      {/* Right-aligned Title */}
      <div className="ml-48 my-16 mx-32">
        <h1 className="text-5xl font-black text-blue-300">
          Manage your <span className="text-black">To-Dos</span>
        </h1>
        <p className="text-lg text-stone-500 mt-4">
          Stay productive and keep track of your tasks.
        </p>
      </div>

      {/* Wrapper for Todo Containers and Add Button */}
      <div className="flex flex-col items-start ml-48">
        <div className="flex flex-col space-y-16 w-full">
          <TodoStatusContainer
            title="Ongoing"
            todos={filterTodos("ongoing")}
            icon={
              <FaArrowRotateRight
                className="bg-yellow-400 text-white p-2 rounded-md shadow-lg"
                size={30}
              />
            }
            onDelete={showDeleteConfirmation}
            onChecked={handleCheckedTodo}
            onEdit={showEditTodo}
          />
          <TodoStatusContainer
            title="Completed"
            todos={filterTodos("completed")}
            icon={
              <FaCheck
                className="bg-green-500 text-white p-2 rounded-md shadow-lg"
                size={30}
              />
            }
            onDelete={showDeleteConfirmation}
            onChecked={handleCheckedTodo}
            onEdit={showEditTodo}
          />
        </div>

        {/* Add Task Button Below Completed Container */}
        <div className="mt-8">
          <button
            className="bg-purple-500 text-white text-xl rounded-full px-8 py-4 font-semibold tracking-wide flex items-center gap-2 cursor-pointer shadow-lg hover:bg-purple-600 hover:shadow-xl transition-all duration-300"
            onClick={() => setIsCreateTodoActive(true)}
          >
            Add a Task
            <IoIosAddCircle size={30} />
          </button>
        </div>
      </div>

      {/* TaskDescription */}
      {isCreateTodoActive && (
        <TaskDescription
          title="Enter Task Details"
          onSubmit={handleCreateTodo}
          formData={newTodoFormData}
          setFormData={setNewTodoFormData}
          onClose={() => setIsCreateTodoActive(false)}
        />
      )}

      {isEditTodoActive && (
        <TaskDescription
          title="Edit Task Details"
          onSubmit={handleEditTodo}
          formData={editTodoFormData}
          setFormData={setEditTodoFormData}
          onClose={() => setIsEditTodoActive(false)}
        />
      )}

      {deleteTaskConfirmation && (
        <DeleteConfirmation
          onConfirm={handleDeleteTodo}
          onCancel={() => setDeleteTaskConfirmation(false)}
        />
      )}
    </>
  );
};

export default Todos;