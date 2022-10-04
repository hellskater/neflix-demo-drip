import { Modal } from "@mantine/core";

const CustomModal = ({
  children,
  className,
  isOpen,
  onClose,
  centered,
  size,
}) => {
  const modalClassNames = {
    modal: `bg-glass-light to-purple-500 ${size} rounded-2xl p-0 overflow-scroll z-[99999]`,
    header: "hidden",
    body: "h-full w-full overflow-hidden",
  };

  return (
    <Modal
      className={className || ""}
      opened={isOpen}
      onClose={onClose}
      centered={centered || false}
      classNames={modalClassNames}
      overlayOpacity={0.25}
      overlayBlur={6}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
