import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, ItemList, Total, BackButton } from './styles';
import { Form, Input } from '@rocketseat/unform';

import { checkoutRequest } from '../../../store/modules/cart/actions';
import { formatPrice } from '../../../util/format';

export default function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart).map((item) => ({
    ...item,
    subtotal: formatPrice(item.price * item.amount),
  }));

  const totalCart = formatPrice(
    cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  );

  function handleSubmit({ address_street, address_number }) {
    dispatch(checkoutRequest(address_street, address_number));
  }

  return (
    <Container>
      <h2>Produtos</h2>

      <ItemList>
        {cart.map((item) => (
          <li key={item.id}>
            <strong>
              {item.amount} - {item.title}
            </strong>
            <span>{item.subtotal}</span>
          </li>
        ))}
      </ItemList>

      <Total>
        <span>Total</span>
        <strong>{totalCart}</strong>
      </Total>

      <Form onSubmit={handleSubmit}>
        <Input name="address_street" />
        <Input name="address_number" />

        <button type="submit">Fazer pedido</button>
      </Form>

      <BackButton to="/produtos">Voltar</BackButton>
    </Container>
  );
}
