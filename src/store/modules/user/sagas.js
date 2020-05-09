import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../service/api';
import { updateProfileSuccess } from './actions';

export function* updateUser({ payload }) {
  try {
    const { name, email } = payload;

    const response = yield call(api.put, 'users', {
      name,
      email,
    });

    const { user } = response.data;

    console.tron.log(user);

    yield put(updateProfileSuccess(user));

    // const redirectTo = user.admin ? '/admin/pedidos' : '/produtos';
    // history.push(redirectTo);
  } catch (err) {}
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateUser)]);
