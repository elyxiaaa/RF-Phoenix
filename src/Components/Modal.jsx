import React from 'react';

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="relative bg-emerald-500 p-4 rounded-md">
        <button 
          className="absolute top-2 right-2 text-black text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <img src={imageSrc} alt="Larger view" className="max-w-[1600px] max-h-[900px]" />
      </div>
    </div>
  );
};

export default Modal; 