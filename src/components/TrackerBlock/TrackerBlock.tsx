import React from 'react';
import { connect } from 'react-redux';
import instance, { key } from '../../api';
import { setCryptos } from '../../ducks/trackerBlock';
import { CryptoBlock, CryptoCoin } from '../../types';
import CoinRow from './CoinRow';
import './TrackerBlock.scss';

const TrackerBlock: React.FC = ({ trackerBlock, setCryptos }: any) => {
  const [currentCurrency, setCurrentCurrency] = React.useState('USD');
  const fetchtCryptos = () => {
    instance
      .get(
        `currencies/ticker?key=${key}&ids=BTC,ETH,XRP,LTC,EOS,BCH&interval=1d&convert=${currentCurrency}`
      )
      .then((response) => {
        const currencies: CryptoBlock = response.data.map((currency: any) => {
          return {
            name: currency.name,
            photoURL: currency.logo_url,
            price: parseInt(currency.price),
            rank: parseInt(currency.rank),
            favorite: false,
          };
        });
        setCryptos(currencies);
      });
  };
  React.useEffect(() => {
    fetchtCryptos();
    const interval = setInterval(fetchtCryptos, 1000 * 60 * 5);
    return () => clearInterval(interval);
  }, []);

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

export default connect(mapStateToProps, { setCryptos })(TrackerBlock);
