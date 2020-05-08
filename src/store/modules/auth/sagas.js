import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../service/api';
import history from '../../../service/history';
import { signInSuccess, signInFailure } from './actions';

export function* signUp({ payload }) {
  console.tron.log('ENTROU NO SAGA signUp');
  try {
    const { name, email, password, admin } = payload;

    const response = yield call(api.post, 'register', {
      name,
      email,
      password,
      admin,
    });

    const { user, token } = response.data;

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (err) {
    yield put(signInFailure());
  }
}

export default all([takeLatest('@auth/SIGN_UP_REQUEST', signUp)]);
