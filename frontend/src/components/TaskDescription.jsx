/*TaskDescription */
import React from "react";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const TaskDescription = ({ title, onSubmit, formData, setFormData, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000088] backdrop-blur-sm">
    <div className="bg-white rounded-3xl shadow-2xl w-11/12 max-w-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8">
        <h2 className="text-3xl font-bold text-white tracking-wide">
          {title}
        </h2>
      </div>

      {/* Form */}
      <form onSubmit={onSubmit} className="p-8">
        
        {/* Title Input */}
        <div className="mb-8">
          <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Title"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>

        {/* Description Input */}
        <div className="mb-8">
          <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Enter Description"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            rows="5"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-3 text-lg font-semibold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
          >
            {title.includes("Enter") ? "Add Task" : "Save Changes"}
            <FaArrowRight />
          </button>
        </div>
      </form>
    </div>
  </div>
);

TaskDescription.propTypes = {
  title: PropTypes.string,
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default TaskDescription;