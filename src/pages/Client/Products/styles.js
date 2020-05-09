import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    border: 1px solid;

    img {
      align-self: center;
      max-width: 250px;
      /* height: 60px; */
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      text-align: left;
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #666;
        padding: 6px;
        width: 50px;
      }
    }

    button {
      background: none;
      border: 0;
      padding: 6px;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  background: #3d6464;
  color: #fff;
  font-weight: bold;
  width: 630px;
  padding: 15px;
`;
