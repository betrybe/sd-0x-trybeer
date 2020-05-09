export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(product, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    product,
    amount,
  };
}
