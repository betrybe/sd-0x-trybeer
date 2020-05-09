export function updateProfileRequest(name, email) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { name, email },
  };
}

export function updateProfileSuccess(user) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: user,
  };
}
