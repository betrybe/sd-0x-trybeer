import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  background: #3d6464;
  justify-content: space-between;
  display: flex;
  height: 40px;
  top: 0px;
  overflow: auto;

  img {
    margin: 10px 15px;
    height: 20px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
