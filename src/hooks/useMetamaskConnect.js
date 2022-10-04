// Custom hook for managing MetaMask wallet connection

import { useCallback, useEffect } from "react";
import { ethers } from "ethers";
import { useWalletAddress } from "./useWalletAddress";

const useMetaMaskConnect = () => {
  const { changeAddress, handleWalletModal } = useWalletAddress();

  const onAddressChange = useCallback((address) => {
    changeAddress(address);
    handleWalletModal(false);
  }, []);

  useEffect(() => {
    const eventName = `accountsChanged`;

    if (!isMetaMaskInstalled()) {
      return;
    }

    const listener = ([selectedAddress]) => {
      onAddressChange(selectedAddress);
    };

    window.ethereum.on(eventName, listener);

    return () => {
      window.ethereum.removeListener(eventName, listener);
    };
  }, [onAddressChange]);

  const isMetaMaskInstalled = () => {
    return Boolean(window.ethereum);
  };

  async function readAddress() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const method = "eth_requestAccounts";

    const accounts = await provider.send(method, []);

    return accounts[0];
  }

  const connectWallet = async () => {
    const selectedAddress = await readAddress();
    onAddressChange(selectedAddress);
  };

  return { connectWallet };
};

export default useMetaMaskConnect;
