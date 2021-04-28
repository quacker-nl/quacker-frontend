import axios from '@/axios';
import authHeader from './auth-header';

const ENDPOINT = '/accounts';

class AccountService {
  async getAccounts() {
    return await axios.get(ENDPOINT, { headers: authHeader() });
  }
}

export default new AccountService();
