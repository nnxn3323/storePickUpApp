import {View, Text, Image} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
interface IProfileImage {
  src: string;
  size: number | 16;
}
const SProfileImage = ({src, size}: IProfileImage) => {
  return (
    <Image
      style={{
        width: size,
        height: size,
        borderRadius: Math.round(size / 2),
      }}
      source={{uri: src}}
    />
  );
};
interface SProfileImageProps {
  size: number;
}
const ProfileImage = styled.Image<SProfileImageProps>`
  width: ${props => props.size.toString + 'px'};
  height: ${props => props.size.toString + 'px'};
  border-radius: ${props => Math.round(props.size / 2).toString + 'px'};
`;
export default SProfileImage;
