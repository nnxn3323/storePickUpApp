import {View, Text, Modal} from 'react-native';
import React from 'react';
import {IProduct} from '../products/ProductCard';
interface ModalProps {
  children: React.ReactNode;
}
const SModal = ({children}: ModalProps) => {
  return <Modal>{children}</Modal>;
};

export default SModal;
