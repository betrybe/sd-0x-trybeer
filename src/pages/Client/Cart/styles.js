import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    button {
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
    }
  }
`;

export const ItemList = styled.ul`
  li {
    border: 1px solid #000;
    height: 44px;
    padding: 5px 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Total = styled.div`
  width: 100%;
  align-items: baseline;
  text-align: right;
  right: 0;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const BackButton = styled(Link)`
  margin: 10px 0;

  background: #ccc;
  color: #fff;
  font-weight: bold;
  padding: 15px;
`;
