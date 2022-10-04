import useMetaMaskConnect from "../hooks/useMetamaskConnect";

const WalletCard = ({ imageUrl }) => {
  const { connectWallet } = useMetaMaskConnect();

  const handleWalletConnect = () => {
    connectWallet();
  };

  return (
    <div
      className="cursor-pointer m-4 bg-glass-light h-48 w-48"
      onClick={handleWalletConnect}
    >
      <img
        alt="wallet logo"
        src={imageUrl}
        className="h-full w-full object-contain"
      />
    </div>
  );
};

export default WalletCard;
