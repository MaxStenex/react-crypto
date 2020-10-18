export type CryptoCoin = {
  name: string;
  photoURL: string;
  price: number;
  rank: number;
  favorite: boolean;
};

export type CryptoBlock = Array<CryptoCoin>;
