import React, { useEffect } from "react";
import useMetaMaskConnect from "../hooks/useMetamaskConnect";
import { useWalletAddress } from "../hooks/useWalletAddress";
import { ethers } from "ethers";

const UserProfile = () => {
  const { defaultAddress, changeAddress } = useWalletAddress();
  const { connectWallet } = useMetaMaskConnect();

  useEffect(() => {
    async function readAddress() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.listAccounts();

      return accounts[0];
    }
    const setAddress = async () => {
      const selectedAddress = await readAddress();
      changeAddress(selectedAddress);
    };

    setAddress();
  }, []);

  return (
    <div className="UserProfile">
      {defaultAddress ? (
        <div className="walletContainer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1024px-MetaMask_Fox.svg.png?20220831120339"
            alt="metamask logo"
            className="metamaskLogo"
          />
          <p className="walletAddress m-0">
            {defaultAddress?.substring(0, 6)}...
            {defaultAddress?.substring(defaultAddress.length - 5)}
          </p>
        </div>
      ) : (
        <div className="connectWallet" onClick={connectWallet}>
          Connect Wallet
        </div>
      )}
    </div>
  );
};

export default UserProfile;
