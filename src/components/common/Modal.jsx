import React from "react";

const Modal = ({ title = "Title", isOpen, setIsOpen, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-40 z-50 transition duration-700 ease-in-out">
      <div className="bg-gray-200 border border-gray-300 rounded-2xl shadow-lg w-full max-w-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center"
          >
            X
          </button>
        </div>

        {/* Dynamic Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
