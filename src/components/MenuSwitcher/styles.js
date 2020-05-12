import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  margin: 5px;
  background: ${darken(0.05, '#3d6464')};
  color: white;
  height: 30px;
`;
