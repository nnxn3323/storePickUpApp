import styled from 'styled-components/native';

interface TextProps {
  textSize: string;
  textWeight: string;
  textColor: string | 'black';
}
export const SText = styled.Text<TextProps>`
  font-size: ${props => props.textSize + 'px'};
  font-weight: ${props => props.textWeight};
  color: ${props => props.textColor};
`;
