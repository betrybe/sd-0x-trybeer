import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import {
  updateProfileSuccess,
  updateProfileFailure,
  updateProfileRequest,
} from './actions';

async function updateUserApi({ name, email }) {
  return await api
    .put('users', {
      name,
      email,
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error: error.response }));
}

export function* updateUser({ payload }) {
  const { response, error } = yield call(updateUserApi, payload);

  if (response) {
    const { user } = response.data;

    yield put(updateProfileSuccess(user));

    toast.success('Perfil atualizado com sucesso');
  } else {
    const { error: message } = error.data;

    yield put(updateProfileFailure());

    toast.error(message);
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateUser)]);
