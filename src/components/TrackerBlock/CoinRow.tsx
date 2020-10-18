import React from 'react';
import { CryptoCoin } from '../../types';

const CoinRow: React.FC<CryptoCoin> = ({
  name,
  price,
  rank,
  photoURL,
  favorite,
}) => {
  return (
    <div className='crypto-tracking__row crypto-tracking__row--main'>
      <div className='crypto-tracking__column crypto-tracking__column--name'>
        <img src={photoURL} alt='crypt' />
        <span>{name}</span>
      </div>
      <div className='crypto-tracking__column'>
        <span>{price}</span>
      </div>
      <div className='crypto-tracking__column'>
        <span>{rank}</span>
      </div>
      <div className='crypto-tracking__column'>
        <span>{favorite ? 'yes' : 'no'}</span>
      </div>
    </div>
  );
};

export default CoinRow;
