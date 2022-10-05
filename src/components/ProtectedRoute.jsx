import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useWalletAddress } from "../hooks/useWalletAddress";
import DripNftModal from "./DripNftModal";

const ProtectedRoute = ({ children }) => {
  const { defaultAddress, handleWalletModal } = useWalletAddress();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAccess = async () => {
      let res;

      try {
        res = await axios.get(
          "https://api.dripverse.org/v1/nft/1/" + defaultAddress?.toLowerCase()
        );
      } catch {
        setIsModalOpen(true);
      }
    };

    fetchAccess();

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
