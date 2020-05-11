import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg #10ea76, #3d6464);
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 600px;
  text-align: center;

  img {
    max-width: 351px;
    align-self: center;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      border: 1px solid;
      border-radius: 6px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;

      &:disabled {
        background: #eee;
      }
    }

    span {
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    label {
      padding: 20px 10px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3d6464;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:disabled {
        background: #ccc;
        &:hover {
          background: ${darken(0.03, '#ccc')};
        }
      }
      &:hover {
        background: ${darken(0.05, '#3d6464')};
      }
    }

    a {
      color: #000;
      background: #fff;
      border: 0;
      border-radius: 4px;
      margin-top: 15px;
      width: 70%;
      height: 30px;
      font-size: 16px;
      opacity: 0.88;
      align-self: center;
      padding: 6px 10px;
      &:hover {
        opacity: 1;
      }
    }

    div.checkbox-container {
      display: inline-flex;
      flex-direction: row;
      vertical-align: center;
      height: 40px;
      margin-bottom: 5px;

      label {
        margin-top: -6px;
        color: #fff;
      }
    }
  }
`;
