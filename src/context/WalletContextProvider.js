// Context to store the wallet address

import { createContext, useState } from "react";

export const WalletContext = createContext();

function WalletContextProvider(props) {
  const [defaultAddress, setDefaultAddress] = useState("");
  const [isWalletConnectModalOpen, setIsWalletConnectModalOpen] =
    useState(false);

  const changeAddress = (val) => {
    setDefaultAddress(val);
  };

  const handleWalletModal = (val) => {
    setIsWalletConnectModalOpen(val);
  };

  return (
    <WalletContext.Provider
      value={{
        defaultAddress,
        changeAddress,
        isWalletConnectModalOpen,
        handleWalletModal,
      }}
    >
      {props.children}
    </WalletContext.Provider>
  );
}

export default WalletContextProvider;
