import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useWalletAddress } from "../hooks/useWalletAddress";
import DripNftModal from "./DripNftModal";

const ProtectedRoute = ({ children }) => {
  const { defaultAddress, handleWalletModal } = useWalletAddress();
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    // const fetchAccess = async () => {
    //   const res = await axios.get(
    //     "https://api.dripverse.org/nft/18/" + defaultAddress?.toLowerCase()
    //   );

    //   console.log(res);
    // };

    // fetchAccess();
    setIsModalOpen(true);

    return () => setIsModalOpen(false);
  }, []);

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
