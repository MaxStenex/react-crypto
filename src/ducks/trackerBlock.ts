import { CryptoBlock } from '../types';

interface TrackerBlockActionTypes {
  type: string;
}

const initialState: CryptoBlock = [
  {
    name: 'Bitcoin',
    photoURL:
      'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg',
    price: 1000,
    rank: 1,
    favorite: true,
  },
];

export default function reducer(
  state = initialState,
  action: TrackerBlockActionTypes
): CryptoBlock {
  switch (action.type) {
    default:
      return state;
  }
}
