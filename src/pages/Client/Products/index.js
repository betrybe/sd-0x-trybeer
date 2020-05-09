import React, { useEffect, useState } from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

import { ProductList, Cart } from './styles';
import api from '../../../service/api';
import { formatPrice } from '../../../util/format';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.products.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <>
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.priceFormatted}</span>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <div>
              <button type="button">
                <MdRemoveCircleOutline size={20} color="#3d6464" />
              </button>
              <input type="number" readOnly value={product.amount} />
              <button type="button">
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
