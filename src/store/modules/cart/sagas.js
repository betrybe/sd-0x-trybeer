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
    console.tron.warn(err);
  }
}

export function* checkoutRequest({ address_street, address_number }) {
  const { cart } = store.getState();

  if (cart.length === 0) {
    toast.error('Seu carrinho está vazio!');

    yield put(checkoutFailure());
  }

  const items = cart.map((product) => ({
    product_id: product.id,
    amount: product.amount,
  }));

  try {
    yield call(api.post, `finish-order`, {
      address_street,
      address_number,
      items,
    });

    yield put(checkoutSuccess());

    toast.success('Pedido feito com sucesso!');

    history.push('/meus-pedidos');
  } catch (err) {
    yield put(checkoutFailure());
  }
}

export default all([
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
  takeLatest('@cart/CHECKOUT_REQUEST', checkoutRequest),
]);
