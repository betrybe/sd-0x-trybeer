import React from 'react';
import { useSelector } from 'react-redux';

import { Container, ItemList, Total, BackButton } from './styles';
import { formatPrice } from '../../../util/format';

export default function Cart() {
  const cart = useSelector((state) => state.cart).map((item) => ({
    ...item,
    subtotal: formatPrice(item.price * item.amount),
  }));

  const totalCart = formatPrice(
    cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  );

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

      <BackButton to="/produtos">Voltar</BackButton>
    </Container>
  );
}
