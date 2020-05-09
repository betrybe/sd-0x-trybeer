import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

import { ProductList, Cart } from './styles';
import api from '../../../service/api';
import { updateAmountRequest } from '../../../store/modules/cart/actions';
import { formatPrice } from '../../../util/format';

export default function Products() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart);
  const amount = cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {});

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
    <>
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

      <Cart to="">
        <span>Ver carrinho</span>

        <span>R$ 0,00</span>
      </Cart>
    </>
  );
}
