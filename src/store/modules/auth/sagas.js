import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../service/api';
import history from '../../../service/history';
import { signInSuccess, signInFailure } from './actions';

export function* signUp({ payload }) {
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

    const redirectTo = user.admin ? '/admin/pedidos' : '/produtos';
    history.push(redirectTo);
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');

    yield put(signInFailure());
  }
}

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'login', {
      email,
      password,
    });

    const { user, token } = response.data;

    yield put(signInSuccess(token, user));

    const redirectTo = user.admin ? '/admin/pedidos' : '/produtos';
    history.push(redirectTo);
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados!');

    yield put(signInFailure());
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT_REQUEST', signOut),
]);
