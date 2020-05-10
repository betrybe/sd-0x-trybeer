import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../service/api';
import history from '../../../service/history';
import { store } from '../../../store';
import { updateAmountSuccess, checkoutSuccess } from './actions';

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
  const items = store.getState().cart.map((product) => ({
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

    history.push('/meus-pedidos');
  } catch (err) {}
}

export default all([
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
  takeLatest('@cart/CHECKOUT_REQUEST', checkoutRequest),
]);
