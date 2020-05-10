import { produce } from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, (draft) => {
        const { amount } = action;

        const productIndex = draft.findIndex((p) => p.id === action.product.id);

        if (amount < 0) {
          return;
        }

        if (amount === 0) {
          draft.splice(productIndex, 1);

          return;
        }

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(amount);
        } else {
          const { product } = action;
          draft.push({
            ...product,
            amount: 1,
          });
        }
      });
    }
    case '@cart/CHECKOUT_SUCCESS': {
      return INITIAL_STATE;
    }
    case '@auth/SIGN_OUT_REQUEST': {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
}
