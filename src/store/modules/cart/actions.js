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

export function checkoutRequest(address_street, address_number) {
  return {
    type: '@cart/CHECKOUT_REQUEST',
    address_street,
    address_number,
  };
}

export function checkoutSuccess() {
  return {
    type: '@cart/CHECKOUT_SUCCESS',
  };
}
