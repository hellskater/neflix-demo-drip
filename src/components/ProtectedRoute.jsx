import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useWalletAddress } from "../hooks/useWalletAddress";
import DripNftModal from "./DripNftModal";
import { DripSDK } from "dripverse";

const drip = new DripSDK("a8b9945ad27e458423cea96b80483ea6414cbe43");
const UTILITY_ID = 1;

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
