import { CryptoBlock } from '../types';

const SET_CRYPTOS = 'SET_CRYPTOS';

interface TrackerBlockActionTypes {
  type: string;
  payload: CryptoBlock;
}

const initialState: CryptoBlock = [];

export default function reducer(
  state = initialState,
  action: TrackerBlockActionTypes
): CryptoBlock {
  switch (action.type) {
    case SET_CRYPTOS: {
      return [...action.payload];
    }
    default:
      return state;
  }
}

export function setCryptos(cryptos: CryptoBlock) {
  return {
    type: SET_CRYPTOS,
    payload: cryptos,
  };
}
