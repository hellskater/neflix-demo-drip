import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useWalletAddress } from "../hooks/useWalletAddress";
import DripNftModal from "./DripNftModal";
import { DripSDK } from "dripverse";

const drip = new DripSDK("59dca3a6d5855c66f4c6c032ff99dd51d3dcf220", "alpha");
const UTILITY_ID = 2;

const ProtectedRoute = ({ children }) => {
  const { defaultAddress, handleWalletModal } = useWalletAddress();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const verifyAccess = async () => {
      let allowed;

      try {
        allowed = await drip.hasAccess(
          defaultAddress?.toLowerCase(),
          UTILITY_ID
        );
        if (allowed !== true) {
          setIsModalOpen(true);
        }
      } catch (error) {
        console.error(error);
        setIsModalOpen(true);
      }
    };

    verifyAccess();

    return () => setIsModalOpen(false);
  }, [defaultAddress]);

  if (!defaultAddress) {
    handleWalletModal(true);
    return <Navigate to="/" replace />;
  }
  return (
    <>
      {children}
      <DripNftModal isOpen={isModalOpen} onClose={() => {}} />
    </>
  );
};
export default ProtectedRoute;
