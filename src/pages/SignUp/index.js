import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import logo from '../../assets/logo.png';
import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(12, 'deve ter no mínimo 12 caracteres')
    .required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    // .matches(/^[0-9]*$/, { message: 'A senha deve conter apenas números' })
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
  admin: Yup.bool(),
});

export default function SignUp() {
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

  function handleSubmit({ name, email, password, admin }) {
    dispatch(signUpRequest(name, email, password, admin));
  }

  function handleChange(e) {
    const { name, value } = e.target;

    const attrs = () => {
      switch (name) {
        case 'name':
          return { ...values, name: value };
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
    <div>
      <>
        <img src={logo} alt="TryBeer" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input
            name="name"
            data-testid="signup-name"
            type="name"
            placeholder="Seu nome"
            onChange={handleChange}
          />
          <Input
            name="email"
            data-testid="signup-email"
            placeholder="Seu e-mail"
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            data-testid="signup-password"
            placeholder="Sua senha"
            onChange={handleChange}
          />
          <div class="checkbox-container">
            <input
              data-testid="signup-seller"
              id="admin"
              name="admin"
              type="checkbox"
              aria-label="admin"
            />

            <label for="admin">Quero vender</label>
          </div>

          <button type="submit" data-testid="signup-btn" disabled={!valid}>
            Cadastrar
          </button>
          <Link to="/">Entrar</Link>
        </Form>
      </>
    </div>
  );
}
