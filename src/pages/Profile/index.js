import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateProfileRequest } from '../../store/modules/user/actions';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(12, 'deve ter no mínimo 12 caracteres')
    .required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
});

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.user.profile);

  function handleSubmit({ name, email }) {
    dispatch(updateProfileRequest(name, email));
  }

  return (
    <div>
      <Form initialData={profile} schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="name" placeholder="Seu nome" />
        <Input name="email" type="email" placeholder="Seu e-mail" />

        <button type="submit">Salvar</button>
      </Form>
    </div>
  );
}
