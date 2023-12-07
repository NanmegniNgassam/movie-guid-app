import { Loader } from "../../utils/style/Atoms";
import SearchBar from "../SearchBar/SearchBar";
import { ModalWrapper } from "./Modal.styles";
import { IModalProps } from "./Modal.types";

const Modal = (props: IModalProps) => {
  const isDataLoading: boolean = true;
  return (
    <ModalWrapper>
      <SearchBar></SearchBar>
      {isDataLoading && <Loader></Loader>}
    </ModalWrapper>
  );
};

export default Modal;
