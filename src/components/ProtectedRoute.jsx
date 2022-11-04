import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useWalletAddress } from "../hooks/useWalletAddress";
import DripNftModal from "./DripNftModal";
import DripSDK from "dripverse";

const drip = new DripSDK("1ec15db2d6ff86ddee885d201006ff26da5931af");

const ProtectedRoute = ({ children }) => {
  const { defaultAddress, handleWalletModal } = useWalletAddress();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // const fetchAccess = async () => {
    //   let res;

    //   const key = location.pathname.split("/")[2];

    //   if (key.toString() === "94997") {
    //     try {
    //       res = await axios.get(
    //         "https://api.dripverse.org/v1/nft/2/" +
    //           defaultAddress?.toLowerCase()
    //       );
    //     } catch {
    //       setIsModalOpen(true);
    //     }
    //   } else {
    //     try {
    //       res = await axios.get(
    //         "https://api.dripverse.org/v1/nft/1/" +
    //           defaultAddress?.toLowerCase()
    //       );
    //     } catch {
    //       setIsModalOpen(true);
    //     }
    //   }
    // };

    // fetchAccess();

    const verifyAccess = async () => {
      try {
        const res = await drip.hasAccess(defaultAddress?.toLowerCase(), 3);
      } catch {
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
