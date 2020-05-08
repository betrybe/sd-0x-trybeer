export function signUpRequest(name, email, password, admin) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password, admin },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}
