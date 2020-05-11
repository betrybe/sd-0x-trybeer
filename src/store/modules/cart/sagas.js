import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { store } from '../../../store';
import {
  updateAmountSuccess,
  checkoutSuccess,
  checkoutFailure,
} from './actions';

export function* updateAmount({ id, amount }) {
  try {
    const response = yield call(api.get, `products/${id}`);

    const { product } = response.data;

    if (product) {
      yield put(updateAmountSuccess(product, amount));
    } else {
    }
  } catch (err) {
    toast.error('Erro ao atualizar quantidade!');
  }
}

async function checkoutApi(order) {
  return await api
    .post('finish-order', order)
    .then((response) => ({ response }))
    .catch((error) => ({ error: error.response }));
}

export function* checkoutRequest({ address_street, address_number }) {
  const { cart } = store.getState();

  if (cart.length === 0) {
    toast.error('Seu carrinho está vazio!');

    yield put(checkoutFailure());
  }

  const order = {
    address_street,
    address_number,
    items: cart.map((product) => ({
      product_id: product.id,
      amount: product.amount,
    })),
  };

  const { response, error } = yield call(checkoutApi, order);

  if (response) {
    toast.success('Pedido feito com sucesso!');

    yield put(checkoutSuccess());

    history.push('/meus-pedidos');
  } else {
    const { error: message } = error.data;

    toast.error(message);

    yield put(checkoutFailure());
  }
}

export default all([
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
  takeLatest('@cart/CHECKOUT_REQUEST', checkoutRequest),
]);
