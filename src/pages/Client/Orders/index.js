import React, { useEffect, useState } from 'react';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import { Container, OrderList, OrderLink, Total } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('/my-orders');

      const data = response.data.map((order) => {
        const total = order.order_items.reduce((total, item) => {
          return total + item.product.price * item.amount;
        }, 0);

        return {
          ...order,
          total: formatPrice(total),
        };
      });

      setOrders(data);
    }

    loadOrders();
  }, []);

  return (
    <Container>
      <OrderList>
        {orders.map((order) => (
          <OrderLink to={`pedido/${order.id}`} key={order.id}>
            <strong>Pedido {order.id}</strong>
            <span>
              {order.address_street} {order.address_number}
            </span>
            <Total>{order.total}</Total>
          </OrderLink>
        ))}
      </OrderList>
    </Container>
  );
}
