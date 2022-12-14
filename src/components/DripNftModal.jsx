import Modal from "../CustomUi/CustomModal";

const DripNftModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="w-[80%] h-fit" centered>
      <main className="w-full flex items-center justify-center text-5xl py-14 px-7 text-gray-300 text-center 2xl:text-6xl overflow-hidden">
        Access granted to only DripNFT holders
      </main>
    </Modal>
  );
};

export default DripNftModal;
