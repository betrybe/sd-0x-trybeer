import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: #fff;
  border-radius: 4px;
`;

export const OrderList = styled.ul`
  vertical-align: middle;
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
    width: 300px;
    text-align: left;
    justify-content: space-between;

    > strong {
      font-size: 21px;
      font-weight: bold;
    }

    > span {
      font-size: 18px;
    }
  }
`;

export const Total = styled.ul`
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
`;
