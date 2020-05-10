import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderContainer = styled.div`
  margin-top: 10px;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 600px; */

  ul {
    margin-top: 10px;

    li {
      display: flex;
      justify-content: space-between;
      height: 300px;
    }
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

export const Button = styled.button`
  background: #3d6464;
  color: #fff;
  font-weight: bold;
  margin: 20px 0;
  padding: 15px;
  width: auto;
  text-align: center;
`;
