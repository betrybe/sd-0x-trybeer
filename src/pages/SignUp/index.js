import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Check } from '@rocketseat/unform';

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
    .matches(/^[0-9]*$/, { message: 'A senha deve conter apenas números' })
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
  admin: Yup.bool(),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password, admin }) {
    dispatch(signUpRequest(name, email, password, admin));
  }

  return (
    <div>
      <>
        <img src={logo} alt="TryBeer" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" type="name" placeholder="Seu nome" />
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />
          <div class="checkbox-container">
            <Check name="admin" label="Quero vender" />
          </div>

          <button type="submit">Cadastrar</button>
          <Link to="/">Entrar</Link>
        </Form>
      </>
    </div>
  );
}
