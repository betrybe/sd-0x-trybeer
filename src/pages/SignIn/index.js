import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.png';

import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  const [values, setValues] = useState({});
  const [valid, setValid] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    async function validateValues() {
      const validForm = await schema.isValid(values);

      setValid(validForm);
    }

    validateValues();
  }, [values]);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  function handleChange(e) {
    const { name, value } = e.target;

    const attrs = () => {
      switch (name) {
        case 'email':
          return { ...values, email: value };
        case 'password':
          return { ...values, password: value };
        default: {
        }
      }
    };

    setValues(attrs);
  }

  return (
    <>
      <img src={logo} alt="TryBeer" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="email"
          data-testid="email-input"
          placeholder="Seu e-mail"
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          data-testid="password-input"
          placeholder="Sua senha"
          onChange={handleChange}
        />

        <button type="submit" data-testid="login-submit-btn" disabled={!valid}>
          Acessar
        </button>
        <Link to="/register" data-testid="no-account-btn">
          Ainda não tenho conta
        </Link>
      </Form>
    </>
  );
}
