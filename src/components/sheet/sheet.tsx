import { useEffect, useState } from "react";
import { cn } from "../../lib/utlis";

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sheet = ({ isOpen, onClose }: SheetProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 flex justify-end h-full">
      <div
        onClick={onClose}
        className={`inset-0 absolute bg-black/40 transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        // className="relative w-[30%] bg-white justify-center"
        className={cn(
          isActive ? "translate-x-0" : "translate-x-full",
          "relative w-[30%] bg-white justify-between transition-transform duration-300 ease-in-out"
        )}
      >
        <h1>I am Prami</h1>
      </div>
    </div>
  );
};

export default Sheet;
