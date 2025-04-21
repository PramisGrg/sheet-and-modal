import { useEffect, useState } from "react";
import { cn } from "../../lib/utlis";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className={`inset-0 absolute bg-black/40 transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div
        className={cn(
          "relative z-10 w-[30%] bg-white p-4 rounded-lg shadow-xl transition-opacity duration-300",
          active ? "opacity-100" : "opacity-0"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-xl font-bold mb-4">I am Modal</h1>
        <button
          className="mt-4 py-2 px-4 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
