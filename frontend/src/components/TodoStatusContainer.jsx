/*TodostatusContainer Components  */

import React from 'react';
import PropTypes from "prop-types";

import { FaRegCircleCheck } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

const TodoStatusContainer = ({
  title,
  todos,
  icon,
  onDelete,
  onChecked,
  onEdit,
}) => {
  return (
    <div className="shadow-2xl rounded-3xl bg-gradient-to-br from-purple-50 to-blue-50 px-8 py-8 w-1/2 h-fit">
      <div className="flex space-x-3 items-center mb-8">
        <div className="text-2xl text-purple-600">{icon}</div>
        <div className="text-2xl font-bold text-purple-800 tracking-wide">
          {title}
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        {todos.map(({ id, title, status, description }) => {
          return (
            <div
              key={id}
              className={`${
                status === "ongoing" ? "bg-white" : "bg-green-50"
              } rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    {title}
                  </div>
                  <div className="text-sm text-gray-600">{description}</div>
                </div>
                <div className="flex space-x-4 text-gray-500">
                  <GrEdit
                    className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
                    onClick={() => onEdit(id)}
                  />
                  <RiDeleteBinLine
                    className="cursor-pointer hover:text-red-600 transition-colors duration-200"
                    onClick={() => onDelete(id)}
                  />
                  <FaRegCircleCheck
                    className="cursor-pointer hover:text-green-600 transition-colors duration-200"
                    onClick={() => onChecked(id)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    status === "ongoing"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {status === "ongoing" ? "Ongoing" : "Completed"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

TodoStatusContainer.propTypes = {
  title: PropTypes.string,
  todos: PropTypes.array,
  icon: PropTypes.element,
  onDelete: PropTypes.func,
  onChecked: PropTypes.func,
  onEdit: PropTypes.func,
};

export default TodoStatusContainer;