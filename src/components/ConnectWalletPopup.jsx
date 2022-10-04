import Modal from "../CustomUi/CustomModal";
import WalletCard from "./WalletCard";

const ConnectWalletPopup = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="w-[40%] h-fit" centered>
      <header className="w-full text-center text-white p-4 font-semibold text-2xl">
        Login with your wallet
      </header>
      <main className="w-full flex items-center flex-col h-full p-8">
        <WalletCard imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1024px-MetaMask_Fox.svg.png?20220831120339" />
      </main>
    </Modal>
  );
};

export default ConnectWalletPopup;
