import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../service/api';
import { updateAmountSuccess } from './actions';

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

export default all([takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount)]);
