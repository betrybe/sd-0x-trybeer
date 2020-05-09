import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

import { ProductList, Cart } from './styles';

export default function Products() {
  const products = [
    {
      id: 1,
      image:
        'https://static.carrefour.com.br/medias/sys_master/images/images/hb9/ha1/h00/h00/11461091885086.jpg',
      title: 'Stella Artois',
      priceFormatted: 'R$ 3,50',
    },
    {
      id: 2,
      image:
        'https://static.carrefour.com.br/medias/sys_master/images/images/h57/h1b/h00/h00/13247489048606.jpg',
      title: 'Heineken',
      priceFormatted: 'R$ 4,40',
    },
    {
      id: 3,
      image:
        'https://emporiodacerveja.vteximg.com.br/arquivos/ids/172683-1000-1000/bud550ml.jpg?v=636794614289070000',
      title: 'Budweiser',
      priceFormatted: 'R$ 3,00',
    },
  ];

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
