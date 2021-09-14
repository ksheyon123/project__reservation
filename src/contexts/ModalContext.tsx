import React, { ReactNode } from "react";
import { ModalButtonProps } from "../components/modal/ModalButtonProps";
import { Modal } from "../components/modal/Modal";

const ModalContext = React.createContext<any>({});
const { Provider } = ModalContext;

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpened, toggleModal] = React.useState<boolean>(false);
  const [modalContent, setModalContent] = React.useState<ReactNode>({
    title: "",
    buttons: [],
    disableOutsideClick: false,
  });

  const handleModal = (
    props: {
      title: string;
      buttons: ModalButtonProps[];
      disableOutsideClick?: boolean;
    } | null = null
  ) => {
    toggleModal(!!props ? true : false);
    document.body.style.overflow = "auto";
    if (props) {
      document.body.style.overflow = "hidden";
      setModalContent(props);
    }
  };
  return (
    <Provider value={{ isModalOpened, modalContent, handleModal }}>
      <Modal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };