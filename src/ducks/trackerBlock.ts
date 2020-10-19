import { CryptoCoin } from './../types/index';
import { CryptoBlock } from '../types';

const SET_CRYPTOS = 'SET_CRYPTOS';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

const initialState: CryptoBlock = [];

export default function reducer(
  state = initialState,
  action: any
): CryptoBlock {
  switch (action.type) {
    case SET_CRYPTOS: {
      return [
        ...action.payload.sort(
          (a: CryptoCoin, b: CryptoCoin) => +b.favorite - +a.favorite
        ),
      ];
    }
    case TOGGLE_FAVORITE: {
      return state
        .map((cryptoCoin) => {
          if (cryptoCoin.name === action.payload) {
            return { ...cryptoCoin, favorite: !cryptoCoin.favorite };
          } else {
            return cryptoCoin;
          }
        })
        .sort((a: CryptoCoin, b: CryptoCoin) => +b.favorite - +a.favorite);
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

export function toggleFavorite(name: string) {
  return {
    type: TOGGLE_FAVORITE,
    payload: name,
  };
}
