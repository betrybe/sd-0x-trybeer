'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'products',
      [
        {
          id: 1,
          image:
            'https://static.carrefour.com.br/medias/sys_master/images/images/hb9/ha1/h00/h00/11461091885086.jpg',
          title: 'Stella Artois',
          price: 3.5,
        },
        {
          id: 2,
          image:
            'https://static.carrefour.com.br/medias/sys_master/images/images/h57/h1b/h00/h00/13247489048606.jpg',
          title: 'Heineken',
          price: 4.4,
        },
        {
          id: 3,
          image:
            'https://emporiodacerveja.vteximg.com.br/arquivos/ids/172683-1000-1000/bud550ml.jpg?v=636794614289070000',
          title: 'Budweiser',
          price: 3.0,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Product', null, {});
  },
};
