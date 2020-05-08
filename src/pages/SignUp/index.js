import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Check } from '@rocketseat/unform';
import { MixedCheckbox, useMixedCheckbox } from '@reach/checkbox';

import * as Yup from 'yup';

import logo from '../../assets/logo.png';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(8, 'deve ter no mínimo 8 caracteres')
    .required('A senha é obrigatória'),
  isSeller: Yup.bool(),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
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
            <Check name="isSeller" label="Quero vender" />
          </div>

          <button type="submit">Cadastrar</button>
          <Link to="/">Entrar</Link>
        </Form>
      </>
    </div>
  );
}
