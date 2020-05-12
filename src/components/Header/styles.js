import styled from 'styled-components';

export const Container = styled.header`
  background: #3d6464;
  justify-content: space-between;
  display: flex;
  height: 40px;
  top: 0px;
  overflow: auto;

  div {
    justify-content: space-between;
    display: flex;
    /* margin: 10px 15px; */

    img {
      height: 30px;
      margin: 5px 5px;
      vertical-align: center;
    }
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
