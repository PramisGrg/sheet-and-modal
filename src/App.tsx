import { useState } from "react";
import CardItem from "./components/cards/card-item";
import ScrollItems from "./components/scroll-items/scroll-items";
import "./index.css";
import { Modal } from "./components/modal/modal";
import Sheet from "./components/sheet/sheet";
import { Button } from "./components/ui/button";
import SelectExample from "./components/modal/select-item";
import { Input } from "./components/ui/input";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const openSheet = () => setSheetOpen(true);
  const closeSheet = () => setSheetOpen(false);

  return (
    <div>
      <CardItem />
      <ScrollItems />

      <div className="flex justify-center items-center py-40">
        <button
          onClick={openModal}
          className="py-2 px-6 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200"
        >
          Open Modal
        </button>

        <Modal isOpen={modalOpen} onClose={closeModal} />
      </div>

      <div className="flex justify-center items-center py-40">
        <button
          onClick={openSheet}
          className="py-2 px-6 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200"
        >
          Open Sheet
        </button>

        <Sheet isOpen={sheetOpen} onClose={closeSheet} />
      </div>
      <Button disabled>Click me</Button>
      <SelectExample />
      <div className="py-10">
        <Input placeholder="Enter your name" />
      </div>
    </div>
  );
}

export default App;
