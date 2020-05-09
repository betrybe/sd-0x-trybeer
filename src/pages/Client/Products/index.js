import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

import { Container, ProductList, Cart } from './styles';
import api from '../../../service/api';
import { updateAmountRequest } from '../../../store/modules/cart/actions';
import { formatPrice } from '../../../util/format';

export default function Products() {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const amount = cart.reduce((amount, product) => {
      amount[product.id] = product.amount;

      return amount;
    }, {});

    setAmount(amount);

    const totalCart = cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0);

    setTotalCart(formatPrice(totalCart));
  }, [cart]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.products.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
        amount: amount[product.id] ? amount[product.id] : 0,
      }));

      setProducts(data);
    }

    loadProducts();
  }, [amount]);

  function increment(product) {
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.priceFormatted}</span>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <div>
              <button type="button" onClick={() => decrement(product)}>
                <MdRemoveCircleOutline size={20} color="#3d6464" />
              </button>
              <input type="number" readOnly value={product.amount} />
              <button type="button" onClick={() => increment(product)}>
                <MdAddCircleOutline size={20} color="#3d6464" />
              </button>
            </div>
          </li>
        ))}
      </ProductList>

      <Cart to="/carrinho">
        <span>Ver carrinho</span>

        <span>{totalCart}</span>
      </Cart>
    </Container>
  );
}
