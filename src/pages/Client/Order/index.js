import React, { useEffect, useState } from 'react';

import api from '../../../service/api';
import { formatPrice } from '../../../util/format';

import { Container, Total, OrderContainer, BackButton } from './styles';

export default function OrderDetail(props) {
  const id = props.match.params.id;
  const [order, setOrder] = useState({});
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function loadOrder() {
      const response = await api.get(`/orders/${id}`);

      const { data } = response;

      setOrder(data);

      const items = data.order_items.map((item) => ({
        ...item,
        subtotal: formatPrice(item.product.price * item.amount),
      }));

      setItems(items);

      const total = data.order_items.reduce((total, item) => {
        return total + item.product.price * item.amount;
      }, 0);

      setTotal(formatPrice(total));
    }

    loadOrder();
  }, [id]);

  return (
    <Container>
      <h1>
        Pedido {order.id} - {order.delivered ? 'Entregue' : 'Pendente'}
      </h1>

      <OrderContainer>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <span>
                {item.amount} - {item.product.title}
              </span>
              <span>{item.subtotal}</span>
            </li>
          ))}
        </ul>

        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </OrderContainer>

      <BackButton to="/meus-pedidos">Voltar</BackButton>
    </Container>
  );
}
