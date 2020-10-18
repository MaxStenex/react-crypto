import React from 'react';
import { connect } from 'react-redux';
import { CryptoCoin } from '../../types';
import CoinRow from './CoinRow';
import './TrackerBlock.scss';

const TrackerBlock: React.FC = ({ trackerBlock }: any) => {
  return (
    <section className='crypto-tracking'>
      <div className='container'>
        <div className='crypto-tracking__wrapper'>
          <h2 className='crypto-tracking__title'>Cryptocurrency rate</h2>
          <div className='crypto-tracking__header crypto-tracking__row'>
            <div className='crypto-tracking__column'>Currency</div>
            <div className='crypto-tracking__column'>Price</div>
            <div className='crypto-tracking__column'>Rank</div>
            <div className='crypto-tracking__column'>Favorite</div>
          </div>
          {trackerBlock.map((coin: CryptoCoin) => {
            return <CoinRow {...coin} key={coin.rank} />;
          })}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ trackerBlock }: any) => {
  return {
    trackerBlock,
  };
};

export default connect(mapStateToProps, null)(TrackerBlock);
