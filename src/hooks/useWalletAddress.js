// Hook to consume the wallet address

import { useContext } from "react";

import { WalletContext } from "../context/WalletContextProvider";

export const useWalletAddress = () => useContext(WalletContext);
