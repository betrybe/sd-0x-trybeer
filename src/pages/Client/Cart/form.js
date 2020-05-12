import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { checkoutRequest } from '../../../store/modules/cart/actions';

const schema = Yup.object().shape({
  address_street: Yup.string().required('A rua é obrigatória'),
  address_number: Yup.string().required('O número é obrigatório'),
});

export default function OrderForm({ disabled }) {
  const dispatch = useDispatch();

  function handleSubmit({ address_street, address_number }) {
    dispatch(checkoutRequest(address_street, address_number));
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="address_street" disabled={disabled} />
      <Input name="address_number" disabled={disabled} />

      <button disabled={disabled} type="submit">
        Fazer pedido
      </button>
    </Form>
  );
}
