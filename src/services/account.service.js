import axios from '@/axios';

const ENDPOINT = '/accounts';

class AccountService {
  async getAccounts() {
    return await axios.get(ENDPOINT);
  }
}

export default new AccountService();
