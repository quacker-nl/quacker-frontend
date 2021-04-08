import axios from '@/axios';

const ENDPOINT = '/quacks';

class QuackService {
  async getQuacks() {
    return await axios.get(ENDPOINT);
  }

  async getQuack(quackId) {
    return await axios.get(`${ENDPOINT}/${quackId}`);
  }

  async postQuack(quack) {
    return await axios.post(ENDPOINT, quack);
  }
}

export default new QuackService();
