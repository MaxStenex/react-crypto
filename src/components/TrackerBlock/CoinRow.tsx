import React from 'react';
import { connect } from 'react-redux';
import { toggleFavoriteInSet } from '../../ducks/favoriteCoins';
import { toggleFavorite } from '../../ducks/trackerBlock';
import { CryptoCoin } from '../../types';

const CoinRow: React.FC<CryptoCoin & any> = ({
  name,
  price,
  rank,
  photoURL,
  favorite,
  toggleFavorite,
  toggleFavoriteInSet,
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
        <svg
          onClick={() => {
            toggleFavorite(name);
            toggleFavoriteInSet(name);
          }}
          className={favorite ? 'star star--favorite' : 'star'}
          version='1.1'
          x='0px'
          y='0px'
          width='612px'
          height='612px'
          viewBox='0 0 612 612'
        >
          <g>
            <path
              d='M387.674,238.179L305.583,0l-84.428,236.26L0,238.179l181.82,150.942L116.475,612l189.108-135.308L494.69,612
		l-65.372-221.433L612,238.179H387.674z M452.964,556.058L305.583,434.659l-147.38,121.398l55.664-173.475L69.545,265.664
		l172.139-2.142l63.898-180.401l62.007,182.543h174.864L395.24,382.556L452.964,556.058z'
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default connect(null, { toggleFavorite, toggleFavoriteInSet })(CoinRow);
