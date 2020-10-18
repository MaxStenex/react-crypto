import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://api.nomics.com/v1/',
});

export const key: string = 'd788e4ad9c24b88e5fc08551990c2eb3';

export default instance;
